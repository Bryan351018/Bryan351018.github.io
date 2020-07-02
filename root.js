'use strict';

function lang_init(lang)
{
    switch (lang)
    {
        case "english":
            x_set("lang", "en_US");
            break;

        case "chinese":
            x_set("lang", "zh_CN");
            break;

        default:
            console.error("Unrecognized language");
            break;
    }

    window.open("./main/test.html", "_self", "", true);
}
