$(document).ready(function(){
	//Login form validation
		$('#loginForm').validate({
			rules:{
				email:{
					required:true,
					email:true
				},
				password:{
					required:true
				}
			},
			messages:{
				email:{
					required:"Please enter an email address.",
					email:"Please enter a valid email address."
				},
				password:{
					required:"Please enter a password."
				}
			},
			submitHandler:function(form){
				var formurl = $(form).attr('action');
				$.ajax({
		            url: formurl , 
		            type: "POST",             
		            data: new FormData(form),
		            cache: false,             
		            processData: false,
	  				contentType: false,      
		            success: function(data) {
		            	if(data.auth)
		            		window.location.href = SITE_URL+data.intended;
		            	else
		            		$('#loginForm #errorMsg').show().text('Some error occured, please try again!');
		            },
		            error:function(xhr){
		            	console.log(xhr.responseJSON.message);
		            	$('#loginForm #errorMsg').show().text(xhr.responseJSON.message);
		            }
		        });
			}
		})
	//Login form validation
});	