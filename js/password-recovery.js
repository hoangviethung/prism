$(document).ready(function() {
    $('.password-recovery-form form .form-control').on('keyup', function(e) {
        var inputEmail = $(this).val();
        var invalidText = $('.invalid-feedback');
        if (validateEmail(inputEmail) && $) {
            invalidText.removeClass('is-invalid');
        } else {
            invalidText.addClass('is-invalid');
        }
    });
});

function sendEmailRecovery() {
    $('.password-recovery-form form #send-email').on('click', function(e) {
        e.preventDefault();
        var inputEmail = $('.password-recovery-form input[name=email]').val();
        if (validateEmail(inputEmail)) {
            $('.password-recovery-form').addClass('d-none');
            $('.password-recovery-verify').removeClass('d-none');
        } else {
            $('.invalid-feedback').addClass('is-invalid');
        }
    });
};

function verifyEmailRecovery() {
    $('#verify-link').on('click', function(e) {
        e.preventDefault();
        $('.password-recovery-verify').addClass('d-none');
        $('.password-confirm-form').removeClass('d-none');
    });
};

function confirmPasswordRecovery() {
    $('#confirm-password').on('click', function(e) {
        // verify password with BE and auto log in

        // demo
    });
};

function validateEmail(email) {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(emailRegex)) {
        return true
    } else {
        return false;
    };
};

$(function() {
    sendEmailRecovery();
    verifyEmailRecovery();
    confirmPasswordRecovery();
});