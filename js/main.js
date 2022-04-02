function setItemLocal(item, value) {
    window.localStorage.setItem(item, value);
}

function getItemLocal(item) {
    window.localStorage.getItem(item);
}

function removeItemLocal(item) {
    window.localStorage.removeItem(item);
}

$(document).ready(function() {
    var email = "admin@prismwallet.com";
    var password = "demo@prism1";
    var newPassword = "demo@prism2";

    var emailInput = $('.form-container .form-control[type="email"]');
    var passInput = $('.form-container .form-control[type="password"]');

    $('#sign-in').on('click', function(e) {
        e.preventDefault();
        if (emailInput.val() === email && (passInput.val() === password || passInput.val() === newPassword) ) {
            setItemLocal('authentication', 'true');
            window.location.replace('/home.html');
        } else {
            alert('not authentication');
        }
    });

    $('#sign-out').on('click', function(e) {
        e.preventDefault();
        setItemLocal('authentication', false);
        window.location.replace('/index.html');
    })

    $('#claim-token').on('click', function(e) {
        e.preventDefault();
        setItemLocal('authentication', true);
        window.location.replace('/claim-token-with-gas.html');
    });
});