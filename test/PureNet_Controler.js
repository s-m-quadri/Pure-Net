function open_nav_bar(action) {
    if (Boolean(action) == true)
        document.getElementById("filters-fullscreen-bar").style.height = "100%";
    else
        document.getElementById("filters-fullscreen-bar").style.height = "0%";
}

document.getElementById("menu").addEventListener('click', (_event) => {
    document.getElementById("filters-fullscreen-bar").style.height = "100%";
});