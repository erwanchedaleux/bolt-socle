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
