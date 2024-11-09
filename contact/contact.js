$(document).ready(function() {

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        $('#contactForm input[required], #contactForm textarea[required]').each(function() {
            if (!this.value.trim()) {
                $(this).addClass('is-invalid');  
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');  
            }
        });

        let email = $('#email').val().trim();
        if (email && !validateEmail(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        if (isValid) {
            $('#confirmModal').modal({
                backdrop: false,  
                keyboard: false   
            }).modal('show');
        }
    });

    $('#confirmSubmit').click(function() {
        $('#confirmModal').modal('hide');
        $('#successModal').modal({
            backdrop: false,  
            keyboard: false  
        }).modal('show');
    });

    

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

});
