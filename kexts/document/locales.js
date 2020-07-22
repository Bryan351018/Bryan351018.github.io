'use strict';

// This file supports localization of strings.

const lang = x_get("lang");

function apply_l_styles()
{
    var dict = xhr.responseText;
    dict = JSON.parse(dict);

    const language = x_get("lang");
    dict = dict[language];

    
    const collection = select("[l_key]");
    
    for (var i = 0; i < collection.length; i++)
    {
        applyStyle(collection[i], dict);
    }

}


function show_progress_2(readyState, status)
{
    console.log("XHR: readyState = " + readyState + ", status = " + status);

    if (xhr.readyState == 4 && xhr.status == 200)
        apply_l_styles();
    
}

function apply_locales()
{
    var dict = xhr.responseText;
    dict = JSON.parse(dict);

    const language = x_get("lang");
    dict = dict[language];

    const collection = Object.keys(dict);
    var cur_element;

    for (var i = 0; i < collection.length; i++)
    {
        cur_element = select("[l_key=" + collection[i] + "]")[0];
        cur_element.innerText = dict[collection[i]];
    }

    request("GET", "/subsources/inline_styles/locale.json", show_progress_2);
}

function show_progress_1(readyState, status)
{
    console.log("XHR: readyState = " + readyState + ", status = " + status);

    if (xhr.readyState == 4 && xhr.status == 200)
        apply_locales();
    
}

function load_locales(path)
{
    request("GET", path, show_progress_1);
}
