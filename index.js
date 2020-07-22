// Jump to the proper page
switch (x_get("conf_progress"))
{
    case "lang":
        window.open("/pref_pages/general/settings.html", "_self", "", true);
        break;

    default:
        window.open("/pref_pages/lang/index.html", "_self", "", true);
        break;
}
