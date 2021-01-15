$(function (){
    var $registerForm = $("#form_id");
    if ($registerForm.length) {
        $registerForm.validate()
        $register.Form.validate({
            rules: {
                name: {
                    required: true
                }
            },
            messages: {
                name: {
                    reuired: 'name is mandatory!'
                }
            }
           

        })
    }
    

})