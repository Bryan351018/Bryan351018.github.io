function select(selector)
{
    // Currently supports element, id, class
    const method = selector.charAt(0);
    var body = selector;

    var result;

    switch (method)
    {
        case '#': // id
            body = body.slice(1);
            result = document.getElementById(body);
            break;
        
        case '.': // class
            body = body.slice(1);
            result = document.getElementsByClassName(body);
            break;

        default:  // element
            result = document.getElementsByName(body);
            break;
    }

    return result;
}

function applyStyle(element, styles)
{
    const keys = Object.keys(styles);

    for (var i = 0; i < keys.length; i++)
    {
        element.style[keys[i]] = styles[keys[i]];
    }
}
