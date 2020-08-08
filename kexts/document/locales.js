'use strict';

// This file supports localization of strings.

const lang = x_get("lang");


function show_progress_2(readyState, status, qi)
{
    console.log("XHR: readyState = " + readyState + ", status = " + status + ", qi = " + qi);

    if (readyState == 4 && status == 200)
    {
        var dict = xhr_queue[qi].responseText;
        // debugger;
        dict = JSON.parse(dict);

        const language = x_get("lang");
        dict = dict[language];

        
        const collection = select("[l_key]");
        
        for (var i = 0; i < collection.length; i++)
        {
            applyStyle(collection[i], dict);
        }

        flush(qi);
    }

}

function show_progress_1(readyState, status, qi)
{
    console.log("XHR: readyState = " + readyState + ", status = " + status + ", qi = " + qi);

    if (readyState == 4 && status == 200)
    {
        var dict = xhr_queue[qi].responseText;
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

        flush(qi);
    }
    
}

function load_locales(path)
{
    
    request("GET", path, show_progress_1);
    request("GET", "/subsources/inline_styles/locale.json", show_progress_2);
    
}
