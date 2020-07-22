'use strict';

var x_storage = undefined;

// localstorage
if (window.localStorage)
{
    x_storage = "localStorage";
}

// cookies
else if (navigator.cookieEnabled)
{
    x_storage = "Cookie";
}

// sessionstorage
else if (window.sessionStorage)
{
    x_storage = "sessionStorage";
}

// none
else
{
    console.error("No methods exist to data storage.")
}

function x_set(key, value)
{
    switch (x_storage)
    {
        case "localStorage":
            localStorage.setItem(key, value);
            break;

        case "Cookie":
            var exp_date = new Date();
            exp_date.setFullYear(exp_date.getFullYear + 180);
            setCookie(key, value, exp_date);
            break;

        case "sessionStorage":
            sessionStorage.setItem(key, value);
            break;

        default:
            console.error("Cannot set with no interface")
            break;
    }
}

function x_get(key)
{
    var value;

    switch (x_storage)
    {
        case "localStorage":
            value = localStorage.getItem(key);
            break;

        case "Cookie":
            value = getCookie(key);
            break;

        case "sessionStorage":
            value = sessionStorage.getItem(key);
            break;

        default:
            console.error("Cannot get with no interface")
            break;
    }

    return value;
}

function x_remove(key)
{
    switch (x_storage)
    {
        case "localStorage":
            localStorage.removeItem(key);
            break;

        case "Cookie":
            removeCookie(key);
            break;

        case "sessionStorage":
            sessionStorage.removeItem(key);
            break;

        default:
            console.error("Cannot remove with no interface")
            break;
    }
}
