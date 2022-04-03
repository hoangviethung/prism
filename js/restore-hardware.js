$(document).ready(function() {
    $(document).on('visibilitychange', function() {
        setTimeout(() => {
            window.localStorage.setItem('authentication', true);
            window.location.replace('/home.html');
        }, 5000);
    });
});