/*!
 *  Bolt Socle
 *  @author: Erwan Chedaleux
 *  @version: 0.0.11
 *  
*/

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* global jQuery, document */
( function() {

    var mainInit;

    mainInit                                = require( './scripts/init/main.js' );


    function init() {
        mainInit();

    }


    jQuery( document ).ready( function() {
        init();
    } );

} ).call( this );

},{"./scripts/init/main.js":4}],2:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( /*$*/ ) {

    function Form( $form ) {
        var $select;

        $select                         = $form.find( '.boltforms-row select' );

        /**
         * Initialize sumo select plugin
         * @return {void}
         */
        ( function InitSumoSelect() {
            $select.SumoSelect();

        } )();

    }

    return Form;

}( jQuery ) );

},{}],3:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function Header( $body, $header ) {
        var $btnNavMobile,
            prevTop, headerHeight,
            OPENED_NAV_CLS, STICKY_NAV_CLS;

        $btnNavMobile                   = $header.find( '.snm-btn' );

        prevTop                         = 0;
        headerHeight                    = parseInt( $header.height(), 10 );

        OPENED_NAV_CLS                  = 'js-nav-mobile-opened';
        STICKY_NAV_CLS                  = 'sticky-nav';

        /**
         * Receive window scroll user and animate site header instead body css class
         * @return {void}
         */
        function scrollHandler() {
            var currentTop;

            currentTop                  = $( this ).scrollTop();

            if( prevTop !== currentTop ) {
                prevTop                 = currentTop;

                if ( currentTop <= headerHeight && $body.hasClass( STICKY_NAV_CLS ) ) {
                    $body.removeClass( STICKY_NAV_CLS );
                } else if ( currentTop > headerHeight && !$body.hasClass( STICKY_NAV_CLS ) ) {
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

            if ( Modernizr.mq( '(min-width: 640px)' ) ) {
                return;
            }

            e.preventDefault();

            currentLnkHref              = $( this ).attr( 'href' );

            $body.removeClass( OPENED_NAV_CLS );

            window.setTimeout( function() {
                $( location ).attr( 'href', currentLnkHref );
            }, 300 );

        }

        $( document ).scroll( scrollHandler );
        $btnNavMobile.on( 'click', toggleMobileNav );
        $header.on( 'click', '.sn-lnk', navigationHandler );

    }

    return Header;

}( jQuery ) );

},{}],4:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( $ ) {

    function init() {
        var Sample, Header, Form,
            $body, $header, $forms;

        Sample                                  = require( '../sample.js' );
        Header                                  = require( '../header.js' );
        Form                                    = require( '../form.js' );

        $body                                   = $( document.body );
        $header                                 = $( '.site-header' );
        $forms                                  = $( '.boltform form' );


        if ( $body ) {
            new Sample( $body );

        }

        if ( $header ) {
            new Header( $body, $header );

        }

        if ( $forms ) {
            $forms.each( function( index, form ) {
                new Form( $( form ) );
            } );

        }

    }


    return init;

} )( jQuery );

},{"../form.js":2,"../header.js":3,"../sample.js":5}],5:[function(require,module,exports){
/* global jQuery */
module.exports = ( function ( /*$*/ ) {

    function Sample() {

        console.log( 'Site started' );

    }

    return Sample;

}( jQuery ) );

},{}]},{},[1])