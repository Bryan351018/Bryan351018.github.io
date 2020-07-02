'use strict';

function setCookie(key, value, exp_sec, path=location.pathname)
{
    /**
     * @description Sets the value and expire time of a cookie.
     * 
     * @param key The key of the cookie
     * @param value The value to be set
     * @param exp_sec The time in seconds which this cookie expires
     * @param path The path in which the changes apply
     */

    var date = new Date();
    date.setTime(date.getTime() + (exp_sec * 1000));
    const expires = "expires=" + date.toUTCString() + "; ";
    const a_path = "path=" + path;
    document.cookie = key + "=" + value + "; " + expires + a_path;
}

function removeCookie(key)
{
    /**
     * @description Expires a cookie.
     * 
     * @param key The key of the cookie
     */

    setCookie(key, "", -1);
}

function getCookie(key)
{
    /**
     * @description Get the value of a cookie.
     * 
     * @param key The key of the cookie
     */

    const l_key = key + "=";
    const c_arr = document.cookie.split(';');
    var c;

    for (var i = 0; i < c_arr.length; i++) 
    {
        c = c_arr[i].trim();
        if (c.indexOf(l_key) == 0) return c.substring(l_key.length,c.length);
    }

    return undefined;
}
