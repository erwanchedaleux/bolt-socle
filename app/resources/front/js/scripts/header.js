/* global jQuery */
module.exports = ( function ( $ ) {

    function Header( $body, $header ) {
        var $btnNavMobile, $navigation, $siteContent,
            prevTop, headerHeight, navigationHeight,
            OPENED_NAV_CLS, STICKY_NAV_CLS;

        $btnNavMobile                   = $header.find( '.snm-btn' );
        $navigation                     = $header.find( '.site-navigation' );
        $siteContent                    = $( '.site-wrapper' ).children().not( '.site-header' );

        prevTop                         = 0;
        headerHeight                    = parseInt( $header.outerHeight(), 10 );
        navigationHeight                = parseInt( $navigation.height(), 10 );

        OPENED_NAV_CLS                  = 'js-nav-mobile-opened';
        STICKY_NAV_CLS                  = 'sticky-nav';

        if ( Modernizr.mq( '(max-width: 960px)' ) ) {
            $siteContent.animate( {
                'opacity':          1
            } );
        }

        /**
         * Receive window scroll user and animate site header instead body css class
         * @return {void}
         */
        function scrollHandler() {
            var currentTop;

            if( Modernizr.mq( '(max-width: 960px)' ) ) {
                $body.removeClass( STICKY_NAV_CLS );
                return;
            }

            currentTop                  = $( this ).scrollTop();

            if( prevTop !== currentTop ) {
                prevTop                 = currentTop;

                if ( currentTop <= ( headerHeight - navigationHeight ) && $body.hasClass( STICKY_NAV_CLS ) ) {
                    $body.removeClass( STICKY_NAV_CLS );
                } else if ( currentTop > ( headerHeight - navigationHeight ) && !$body.hasClass( STICKY_NAV_CLS ) ) {
                    $body.addClass( STICKY_NAV_CLS );
                }

            }

        }

        /**
         * Toggle mobile navigation instead body css class
         * @return {void}
         */
        function toggleMobileNav() {
            $body.toggleClass( OPENED_NAV_CLS );

        }

        /**
         * Prevent the normal behavior of the click on the navigation links to close the mobile menu
         * @return {void}
         */
        function navigationHandler( e ) {
            var currentLnkHref;

            if ( Modernizr.mq( '(min-width: 960px)' ) ) {
                return;
            }

            e.preventDefault();

            currentLnkHref              = $( this ).attr( 'href' );

            $body.removeClass( OPENED_NAV_CLS );

            window.setTimeout( function() {
                $siteContent.animate( {
                    'opacity':          0
                } );

                $( location ).attr( 'href', currentLnkHref );

            }, 100 );

        }

        /**
         * Allows to display site content on resize window
         * @return {void}
         */
        function resizehandler() {
            $siteContent.animate( {
                'opacity':          1
            } );

        }

        $( document ).scroll( scrollHandler );
        $( window ).resize( resizehandler );
        $btnNavMobile.on( 'click', toggleMobileNav );
        $header.on( 'click', '.sn-lnk[href!="#"]', navigationHandler );

    }

    return Header;

}( jQuery ) );
