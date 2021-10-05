// function to toggle between light and dark theme
function changeMode() {
    document.body.classList.toggle("dark");

    var wraper = document.getElementsByClassName("webresume_tm_all_wrap")[0];
    var dataColorAttribute = 'data-color';
    if (wraper.getAttribute(dataColorAttribute) == "white") {
        wraper.setAttribute(dataColorAttribute, "dark");
    } else {
        wraper.setAttribute(dataColorAttribute, "white");
    }
}