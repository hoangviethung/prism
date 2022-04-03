function checkAuthentication() {
    if (window.localStorage.getItem('authentication') === 'true' || (typeof window.localStorage.getItem('authentication') === 'object')) {
        window.location.replace('/index.html');
    } else {
        return;
    }
};

checkAuthentication();