function checkAuthentication() {
    if (window.localStorage.getItem('authentication') === 'false') {
        window.location.replace('/index.html');
    } else {
        return;
    }
};

checkAuthentication();