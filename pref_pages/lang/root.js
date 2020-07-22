'use strict';

function lang_init(lang)
{
    switch (lang)
    {
        case "en":
            x_set("lang", "en_US");
            break;

        case "cn":
            x_set("lang", "zh_CN");
            break;

        default:
            console.error("Unrecognized language");
            break;
    }

    window.open("./../general/settings.html", "_self", "", true);
}

// If the user had set the language, go there

if (x_get("lang") && x_get("lang") !== "")
{
    lang_init(x_get("lang"));
}