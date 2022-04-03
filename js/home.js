function checkAuthentication() {
    if (window.localStorage.getItem('authentication') === 'false' || (typeof window.localStorage.getItem('authentication') === 'object')) {
        window.location.replace('/index.html');
    } else {
        return;
    }
};

checkAuthentication();