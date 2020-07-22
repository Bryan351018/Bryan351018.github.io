'use strict';

const xhr = new XMLHttpRequest();

function request(method, path, basefunc)
{
    /*
    Regulations for "basefunc":
    takes 2 parameters (for example, 'a' and 'b')
    'a' is the XHR readystate
    'b' is the HTTP response code
    */

    if (method == "GET")
    {
        xhr.open("GET", path, true);
        xhr.send();
    } 
    else if (method == "POST")
    {
        xhr.open("POST", path, true);
        xhr.send();
    }
    else
    {
        throw new TypeError("Invalid HTTP request method");
    }

    xhr.onreadystatechange = function()
    {
        basefunc(xhr.readyState, xhr.status);
    }
}

