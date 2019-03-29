function getToken() {
    return localStorage.getItem('token');
}

function getESHost() {
    if(window.location.href.indexOf('https') == 0) {
        return 'https://exploreat-esearch2.acdh-dev.oeaw.ac.at';
    } else {
        return 'http://exploreat-esearch2.acdh-dev.oeaw.ac.at'
    }
}

