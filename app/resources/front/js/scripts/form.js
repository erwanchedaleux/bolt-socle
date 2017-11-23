/* global jQuery */
module.exports = ( function ( $ ) {

    function Form( $form ) {
        var $select, $inputs;

        $select                         = $form.find( '.boltforms-row select' );
        $inputs                         = $form.find( '.boltforms-value input, .boltforms-value textarea, .boltforms-value select' );


        /**
         * Prevent default if if form submission is invalid
         * @param  {Event} e
         * @return {void}
         */
        function submitForm( e ) {
            var isFormValidate;

            isFormValidate              = $form[0].checkValidity();

            if ( !isFormValidate ) {
                e.preventDefault();

                $inputs.each( function( index, input ) {
                    var $input, $error, $row,
                        isInputValidate;

                    $input              = $( input );
                    $input.required     = $input.attr( 'required' ) === 'required';
                    $input.email        = $input.attr( 'type' ) === 'email';
                    $input.phone        = $input.attr( 'data-pattern' ) === 'phone';
                    $error              = $input.parent( '.boltforms-value' ).prev( '.boltforms-error' );
                    $row                = $error.parent( '.boltforms-row' );

                    isInputValidate     = $input[0].validity.valid;

                    if ( !isInputValidate ) {
                        $row.addClass( 'error' );

                        if ( $input.required && !$input.val() && !isInputValidate ) {
                            $error.html( 'Ce champ ne peut pas être vide.' );
                        } else if ( $input.email  && !isInputValidate ) {
                            $error.html( 'Veuillez renseigner une adresse email valide.' );
                        } else if ( $input.phone  && !isInputValidate ) {
                            $error.html( 'Veuillez renseigner un numéro de téléphone valide.' );
                        }
                    } else {
                        $row.removeClass( 'error' );
                        $error.html( '' );
                    }

                } );

            }

        }

        /**
         * Initialize sumo select plugin
         * @return {void}
         */
        ( function InitSumoSelect() {
            $select.SumoSelect();

        } )();


        $form.on( 'click', 'button[type="submit"]', submitForm );

    }

    return Form;

}( jQuery ) );
