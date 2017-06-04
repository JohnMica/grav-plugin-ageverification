

$( document ).ready( function() {

	var userDay = $( 'input[name="verify-day"]' );
	var userMOnth = $( 'input[name="verify-month"]' );
	var UserYear = $( 'input[name="verify-year"]' );
	var input = Array(document.querySelectorAll('#ageModal input'));


	if ( $.cookie( 'age' ) != 'varstalegala' ) {


		var body = $('body');
		$(body).addClass('addOverflow ');
		$( '#ageModal' ).css( 'visibility', 'visible' ).css( 'opacity', '1' ).hide().fadeIn( 'slow' );
		$( '#age-submit' ).on( 'click', function() {
			var enteredDOB = $( userDay ).val() + "/" + $( userMOnth ).val() + "/" + $( UserYear ).val();
			var age = moment( enteredDOB, 'DD/MM/YYYY', true ).format();

			if ( age === 'NaN' || age === '' ) {
				$( "#modal-error" ).css( 'visibility', 'visible' ).css( "opacity", "1" ).show().fadeIn( "slow" );
			}
			else {
				$( "#modal-error" ).css( 'visibility', 'hidden' ).css( "opacity", "0" ); //hide if visible
				if ( parseInt( age, 10 ) >= 18 ) {
					$( "#modal-error" ).css( 'visibility', 'hidden' ).css( "opacity", "0" ); //hide if visible

					if ( $( '#remember' ).is( ":checked" ) ) {
						$.cookie( 'age', 'varstalegala', {
							expires: 365,
							path: '/'
						} );
						$( '#ageModal' ).hide().fadeOut( 'fast' ).remove();

					} else {
						$.cookie( 'age', 'varstalegala', {
							expires: 1,
							path: '/'
						} );

					}
					$( '#ageModal' ).hide().fadeOut( 'fast' );
						$(body).removeClass('addOverflow ');
					$( '#ageModal' ).submit();


				} else {
					$( "#modal-error" ).css( 'visibility', 'visible' ).css( 'opacity', '1' ).show().fadeIn( "fast" );

				}
			}
		} );

		if ( null !== $.cookie( 'age' ) ) {
			return;
		}

	}
	$( '#ageModal' ).css( 'visibility', 'hidden' ).css( "opacity", "0" );

} );


