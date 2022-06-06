// wait for window to load
window.addEventListener("load", (event) => {
    // get all custom 'included' elements
    const includes = document.getElementsByTagName("inc");
    // loop through included
    for (let i = 0; i < includes.length; i++) {
        // set include var
        var include = includes[i];
        // load include html using loadInclude function
        loadInclude(include.getAttribute("src"), function (text) {
            // add HTML content returned from loadInclude
            include.insertAdjacentHTML("afterend", text);
            // remove <included> element from DOM
            include.remove();
        });
    }
    // get HTML file contents from inc.src and return
    function loadInclude(filename, callback) {
        fetch(filename)
            .then((response) => response.text())
            .then((text) => callback(text));
    }
});
