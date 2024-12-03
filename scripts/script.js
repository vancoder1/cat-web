$(document).ready(function() {
        $('#feedbackForm').on('submit', function(event) {
            event.preventDefault();

            const firstName = $('#firstName').val();
            const lastName = $('#lastName').val();
            const email = $('#email').val();
            const subject = $('#subject').val();
            const message = $('#message').val();

            const fullName = `${firstName} ${lastName}`;
            $('#submitterName').text(fullName);

            if (firstName.length < 2 || lastName.length < 2 ||
                email.length < 5 || message < 2) {
                $('#feedbackForm').show();
                $('#wrongInputMessage').show();
                $('#thankYouMessage').hide();
            }
            else {
                $('#feedbackForm').hide();
                $('#wrongInputMessage').hide();
                $('#thankYouMessage').show();
            }
            

            console.log('Form submitted', {
                name: fullName,
                email: email,
                subject: subject,
                message: message
            });
        });
    });