function checkAuthentication() {
    if (window.localStorage.getItem('authentication') === 'false') {
        return;
    } else {
        window.location.replace('/home.html');
    }
};

checkAuthentication();