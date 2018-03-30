
$('#register-form').on('submit',function(){
    var isValid = true;
    //check name
    if( $('#name').val().trim()=='' ){
        // $('#name_error').text('Name must be filled');
        $('#name_error').html("<b style='color:red;'>Name must be filled</b>");
        isValid=false;
    }else{
        $('#name_error').html("");
    }

    //check date of birth
    if($('#date_of_birth').val().trim() =='' ){
        $('#date_of_birth_error').html("<b style='color:red;'>Date of birth must be filled</b>");
        isValid=false;
    }else{
        $('#date_of_birth_error').html("");
    }

    //check gender
    if($("input[name='gender']:checked").val()==undefined ){
        $('#gender_error').html("<b style='color:red;'>You must select gender</b>");
        isValid=false;
    }else{
        
        $('#gender_error').html("");
    }

    //check address
    if($("input[name='address']").val().trim()==''){
        $('#address_error').html("<b style='color:red;'>Address must be filled</b>");
        isValid = false;
    }else{
        $('#address_error').html("");
    }

    //check phone number
    if ($("input[name='phone']").val().length < 10 || $("input[name='phone']").val().length>11 ){
        $('#phone_error').html("<b style='color:red;'>Phone number is invalid</b>");
        isValid=false;
    }else{
        $('#phone_error').html("");
    }

    //check email
    if ($("input[name='email']").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
    $('#email_error').html("<b style='color:red;'>Email is invalid</b>");
    isValid = false;
    }else{
        $('#email_error').html("");
    }

    //check password
    if($("input[name='password']").val().trim().length < 6  ){
        $('#password_error').html("<b style='color:red;'>Password is at least 6 digists</b>");
        isValid=false;
    }else{
        $('#password_error').html("");
    }
    return isValid;
})