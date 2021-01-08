$(document).ready(function () {

    // Valid user credential
    const USER = {
        'user_id': 'paradise2021',
        'password': 'paradise',
    };

    // Login form validation rules
    $('#login_form').submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            'user_id': {
                required: true,
                alphanumeric: true,
                normalizer: function (value) {
                    return $.trim(value);
                },
            },
            'password': {
                required: true,
                normalizer: function (value) {
                    return $.trim(value);
                },
            },
        },
        messages: {
            'user_id': {
                required: 'Required',
                alphanumeric: 'Numbers & letters only',
            },
            'password': {
                required: 'Required',
            },
        },
        errorClass: 'form-error',
        errorElement: 'div',
        submitHandler: function (loginForm) {

            const userId = $(loginForm).find('input[name="user_id"]').val();
            const password = $(loginForm).find('input[name="password"]').val();

            if (userId === USER.user_id && password === USER.password) {
                $('.login-alert').html('<div class="alert alert-success" role="alert">Access granted</div>');
            } else {
                $('.login-alert').html('<div class="alert alert-danger" role="alert">Access denied</div>');
            }
        },
    });
});