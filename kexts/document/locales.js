'use strict';

// This file supports localization of strings.

const lang = x_get("lang");

const xhr = new XMLHttpRequest();

function load_locales(path)
{
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
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

        }
    }

    xhr.open("GET", path, true);
    xhr.send();
}