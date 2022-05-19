
function loading(){
  document.getElementById("main-placeholder").innerHTML = "<h1> Loading ... </h1>";
}

function fetch_home(){
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "active";
  document.getElementById("ic-search").className = "";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "";

  var page = document.getElementById("home-template-1").innerHTML;
  document.getElementById("main-placeholder").innerHTML = page;
  document.getElementById("body").className = "leaf_background";
  //document.getElementsByTagName("body").className = "leaf_background";
}

function fetch_search(){
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "";
  document.getElementById("ic-search").className = "active";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "";
  document.getElementById("body").className = "";

  // Get the value from search bar
  var search_text = document.getElementById("search-text").value;
  // Grab from template and put to main section
  var page = document.getElementById("search-template-1").innerHTML;
  document.getElementById("main-placeholder").innerHTML = page;
  // Update(if any?) with search bar text
  document.getElementById("google-search").src = "https://www.google.com/search?igu=1&q=" + search_text;

}

function fetch_filter(action){
  if (Boolean(action) == true)
    document.getElementById("filters-fullscreen-bar").style.height = "100%";
  else
    document.getElementById("filters-fullscreen-bar").style.height = "0%";
}

function fetch_settings(action){
  if (Boolean(action) == true)
    document.getElementById("settings-fullscreen-bar").style.height = "100%";
  else
    document.getElementById("settings-fullscreen-bar").style.height = "0%";
}

function fetch_devtool(){
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "";
  document.getElementById("ic-search").className = "";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "active";
  document.getElementById("body").className = "";

  // Grab from template and put to main section
  var page = document.getElementById("devtool-template-1").innerHTML;
  document.getElementById("main-placeholder").innerHTML = page;

}
