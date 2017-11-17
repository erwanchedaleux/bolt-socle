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
