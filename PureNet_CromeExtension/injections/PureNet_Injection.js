
console.log("Running PureNet_Injection.js");

var original_doc = document.querySelector("html").outerHTML;

// 1. Remove specified Tags
var tagsToRemove = ["script", "head", "footer", "style", "link", "iframe", "footer"];
remove(["script", "style", "noscript", "link", "footer"]);
async function remove(tag_name) {
    for (let n = 0; n < tag_name.length; n++) {
        while (document.querySelector(tag_name[n]) != null) {
            selector = document.querySelector(tag_name[n]);
            selector.outerHTML = " ";
        }
    }
}

// 2. Clean_up specified Tags
clean_up(["div", "span", "cite", "ul", "ol", "li"]);
async function clean_up(tag_name) {
    for (let n = 0; n < tag_name.length; n++) {
        while (document.querySelector(tag_name[n]) != null) {
            selector = document.querySelector(tag_name[n]);
            selector.outerHTML = selector.innerHTML;
        }
    }
}

// 3. Decorate the links
var all_links = document.querySelectorAll("a");
for (let index = 0; index < all_links.length; index++) {
    all_links[index].outerHTML =
        '<span class="pure-net-link"> '
        + all_links[index].innerHTML
        + '</span>'
        + '<a href="' + all_links[index].getAttribute("href") + '">'
        + ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg> '
        + '</a>';
}

// 4. Alert if clicked on link
var Anchors = document.querySelectorAll("a");
for (var i = 0; i < Anchors.length; i++) {
    Anchors[i].addEventListener("click",
        function (event) {
            event.preventDefault();
            if (confirm('\nWe are redirecting you to the following link:\n'
                + this.href
                + "\n______________________________\n"
                + "Press OK if comfortable and want to proceed with the same! Press CANCEL or ESC if don't want.")
            ) {
                window.location = this.href;
            }
        },
        false);
}

// 5. Decorate the images 
var all_images = document.querySelectorAll("img");
for (let index = 0; index < all_images.length; index++) {
    all_images[index].outerHTML =
        "<img class='pure-net-image' src='"
        + all_images[index].getAttribute("src")
        + "' />";
}

// 6. Decorate the Buttons 
var all_buttons = document.querySelectorAll("button");
for (let index = 0; index < all_buttons.length; index++) {
    let massage = all_buttons[index].innerText;
    all_buttons[index].innerHTML =
        ' <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg> ';
    all_buttons[index].outerHTML =
        '<span class="pure-net-button"> '
        + massage
        + '</span>'
        + all_buttons[index].outerHTML;
}


// Reformatting Document
document.querySelector("body").innerHTML = '<div id="pure-net-main">' + document.querySelector("body").innerHTML + '</div>';
document.querySelector("body").innerHTML = '<div id="pure-net-side-bar"></div>' + document.querySelector("body").innerHTML;
let sideBar = document.querySelector("#pure-net-side-bar");
let contents = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
sideBar.innerHTML += '<div id="pure-net-icon"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.18 122.88"><defs></defs><title>luck-lucky</title><path class="cls-1" d="M81.21,89c2.09,5.94,2.81,11.94,1.27,17.38C79.26,117.8,68,119.41,58,110.28c-11.24,10.78-23,5.71-25.23-6.21C30.82,93.63,36.53,81.74,44.47,71.8,34,79.83,21,85.87,10.05,82.89-1.4,79.76-3,68.54,6,58.39c-10.88-11.2-5.89-23,6-25.33,10.54-2,22.74,3.82,32.83,11.87C36.65,34.49,30.39,21.11,33.43,10,36.56-1.41,47.77-3,57.91,6c11.22-10.87,23-5.87,25.26,6C85.25,22.86,79,35.51,70.61,45.69c10.71-8.39,24.6-14.9,35.91-11.61s12.88,14.55,3.69,24.61c10.71,11.31,5.55,23.09-6.38,25.2-5.19.92-10.76-.07-16.27-2.28Q99.83,95.76,110,109.9c2.16,2.93,3.11,4.22,5.15,7.23,2.27,3.37-5.75,8.72-9.18,3.68-1.24-1.77-2.51-3.52-3.79-5.27q-9.56-13.26-21-26.55Z"/></svg></div>';
sideBar.innerHTML += '<h1>PureNet</h1>';
sideBar.innerHTML += '<h2>Contents</h2>';
let srNo = 1;
let arrow_symbol = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"/></svg> ';
for (let index = 0; index < contents.length; index++) {
    contents[index].id = "head-" + index;
    if (contents[index].nodeName === "H1") {
        sideBar.innerHTML += "<div class='pure-net-side-bar-h1'><a href='#head-" + index + "'>" + srNo + ". " + contents[index].innerText + "</a></div>"
        srNo++;
    }
    else if (contents[index].nodeName === "H2") {
        sideBar.innerHTML += "<div class='pure-net-side-bar-h2'>" + arrow_symbol + "<a href='#head-" + index + "'>" + contents[index].innerText + "</a></div>"
    }
    else {
        sideBar.innerHTML += "<div class='pure-net-side-bar-hx'><a href='#head-" + index + "'>" + contents[index].innerText + "</a></div>"
    }
}
sideBar.innerHTML += '<h2>Useful Links</h2>';
sideBar.innerHTML += "<div class='pure-net-side-bar-h2'><a id='print'>Print the document</a></div>"
sideBar.innerHTML += "<div class='pure-net-side-bar-h2'><a id='close'>Close pure-net view</a></div>"

document.querySelector("#print").addEventListener("click",
    function (event) {
        event.preventDefault();
        let doc = window.open('', '', '');
        doc.document.write(original_doc);
        doc.document.close();
        doc.print();
    },
    false);

document.querySelector("#close").addEventListener("click",
    function (event) {
        event.preventDefault();
        document.write(original_doc);
    },
    false);