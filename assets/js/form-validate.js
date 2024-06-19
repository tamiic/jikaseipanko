function valid_datas( f ){
	
	if( f.name.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Ingresá tu nombre!</span>');
		notice( f.name );
	}else if( f.email.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Ingresá un correo electrónico válido</span>');
		notice( f.email );
	//}else if( f.phone.value == '' ){
		//jQuery('#form_status').html('<span class="wrong">Ingrsá un número de contacto válido</span>');
		//notice( f.phone );
	}else if( f.subject.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Ingresá el motivo de consulta</span>');
		notice( f.subject );
	}else if( f.message.value == '' ){
		jQuery('#form_status').html('<span class="wrong">Ingresá un mensaje</span>');
		notice( f.message );
	}else{
		 jQuery.ajax({
			url: 'mail.php',
			type: 'post',
			data: jQuery('form#fruitkha-contact').serialize(),
			complete: function(data) {
				jQuery('#form_status').html(data.responseText);
				jQuery('#fruitkha-contact').find('input,textarea').attr({value:''});
				jQuery('#fruitkha-contact').css({opacity:1});
				jQuery('#fruitkha-contact').remove();
			}
		});
		jQuery('#form_status').html('<span class="loading">Enviando mensaje...</span>');
		jQuery('#fruitkha-contact').animate({opacity:0.3});
		jQuery('#fruitkha-contact').find('input,textarea,button').css('border','none').attr({'disabled':''});
	}
	
	return false;
}

function notice( f ){
	jQuery('#fruitkha-contact').find('input,textarea').css('border','none');
	f.style.border = '1px solid red';
	f.focus();
}