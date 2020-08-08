'use strict';

var xhr_queue = [];

function request_space()
{
    var i = 0;
    while (xhr_queue[i])
    {
        i++;
    }
    return i;
}

function request(method, path, basefunc)
{
    const qi = request_space();

    while (qi > xhr_queue.length - 1)
    {
        xhr_queue.push(undefined);
    }

    xhr_queue[qi] = new XMLHttpRequest();

    /*
    Regulations for "basefunc":
    takes 3 parameters (for example, 'a', 'b' and 'c')
    'a' is the XHR readystate
    'b' is the HTTP response code
    'c' is the queue index
    */

    if (method == "GET")
    {
        xhr_queue[qi].open("GET", path, true);
        xhr_queue[qi].send();
    } 
    else if (method == "POST")
    {
        xhr_queue[qi].open("POST", path, true);
        xhr_queue[qi].send();
    }
    else
    {
        throw new TypeError("Invalid HTTP request method");
    }

    xhr_queue[qi].onreadystatechange = function()
    {
        // debugger;
        basefunc(xhr_queue[qi].readyState, xhr_queue[qi].status, qi);
    }
}

function flush(qi)
{
    xhr_queue[qi] = undefined;
}