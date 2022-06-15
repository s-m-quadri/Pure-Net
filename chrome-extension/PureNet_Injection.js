
console.log("Running myscript.js");

// 1. Remove specified Tags
var tagsToRemove = ["script", "head", "footer", "style", "link", "iframe"];
remove(tagsToRemove);
function remove(tag_name){
    for (let n = 0 ; n < tag_name.length ; n++){
        let temp = document.getElementsByTagName(tag_name[n]);
        for (let index = 0; index < temp.length; index++) {
            temp[index].outerHTML = "";
        }
    }
}

// 2. Clean_up specified Tags
var tagsToClean = ["body", "div", "span", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h1"];
clean_up(tagsToClean);
function clean_up(tag_name){
    for (let n = 0 ; n < tag_name.length ; n++){
        let temp = document.getElementsByTagName(tag_name[n]);
        for (let index = 0; index < temp.length; index++) {
            temp[index].outerHTML = "<" + tag_name[n] + " class='pure-net-" + tag_name[n] + "'>" + temp[index].innerHTML + "</" + tag_name[n]+ ">";
        }
    }
}


// 3. Decorate the links 
var all_links = document.getElementsByTagName("a");
for (let index = 0; index < all_links.length; index++) {
    all_links[index].outerHTML = 
        '<br/>'
        +'<div class="pure-net-link">' 
            + all_links[index].innerHTML
            // +'<br/>'
            + '<p>'
            + '<a onclick="alert_link(\'' + all_links[index].getAttribute("href") + '\')">'
            + '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>'
            + ' Link Here ' 
            + '</a>'
            // +'<br/>'
                + all_links[index].getAttribute("href") + ' (edit, as per need!).' 
            + '</p>'
        + '</div>';
}

// Alert
function alert_link(URL){
    confirm("You are about to proceed to " + URL);
}

// 4. Decorate the images 
var all_images = document.getElementsByTagName("img");
for (let index = 0; index < all_images.length; index++) {
    all_images[index].outerHTML = 
        "<img class='pure-net-image' src='" 
        + all_images[index].getAttribute("src") 
        + "' />";
}