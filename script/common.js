function decode(base64string) {
    return decodeURIComponent(atob(base64string).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


function getValue(a) {
    var gettarget = document.getElementById(a).value();
    return gettarget;
}


function setValue(a, b) {
    document.getElementById(a).innerHTML = b;
    return;
}
