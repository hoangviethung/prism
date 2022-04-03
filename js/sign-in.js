function checkAuthentication() {
    if (window.localStorage.getItem('authentication') === 'true') {
        window.location.replace('/home.html');
    } else {
        return;
    }
};

checkAuthentication();