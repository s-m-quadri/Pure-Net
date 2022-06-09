function loading() {
  document.getElementById("main-placeholder").innerHTML = "<h1> Loading ... </h1>";
}

function fetch_home() {
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "active";
  document.getElementById("ic-search").className = "";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "";

  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-placeholder").innerHTML =
        this.responseText;
    }
  };
  request.open("GET", "home.html", true);
  request.send();

  document.getElementById("body").className = "leaf_background";
  //document.getElementsByTagName("body").className = "leaf_background";
}

function fetch_search(input_url = 'https://www.google.com/search?q=', input_url_domain = 'https://www.google.com') {
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "";
  document.getElementById("ic-search").className = "active";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "";
  document.getElementById("body").className = "";

  // var request = new XMLHttpRequest();
  // request.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     document.getElementById("main-placeholder").innerHTML =
  //       this.responseText;
  //   }
  // };
  // request.open("GET", "google_search.html", true);
  // request.send();
  var search_text = document.getElementById("search-text").value;
  // document.getElementById("google-search").src = "https://www.google.com/search?igu=1&q=" + search_text;

  $.ajax({
    url: './scraper-server/scraper.php',
    type: "GET",
    data: {
      URL: encodeURIComponent(input_url + search_text.replaceAll(" ","%20")),
      URL_DOMAIN: input_url_domain
    }
  }).done(function (html_file) {
    // html_file = jQuery.parseHTML(html_file);
    // console.log(html_file);
    // html_file = $(html_file).filter("a");
    // document.getElementById("main-placeholder").innerHTML=html_file
    //html_file.replace('/(<[^>]+) style=".*?"/i', ' ');
    // html_file_v1 = jQuery.parseHTML(html_file);
    $("#main-placeholder").html(html_file);
  });

}

function fetch_url(input_url, input_url_domain = 'https://www.google.com') {
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "";
  document.getElementById("ic-search").className = "active";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "";
  document.getElementById("body").className = "";

  $.ajax({
    url: './scraper-server/scraper.php',
    type: "GET",
    data: {
      URL: input_url,
      URL_DOMAIN: input_url_domain
    }
  }).done(function (html_file) {
    $("#main-placeholder").html(html_file);
  });

}

function fetch_filter(action) {
  if (Boolean(action) == true)
    document.getElementById("filters-fullscreen-bar").style.height = "100%";
  else
    document.getElementById("filters-fullscreen-bar").style.height = "0%";
}

function fetch_settings(action) {
  if (Boolean(action) == true)
    document.getElementById("settings-fullscreen-bar").style.height = "100%";
  else
    document.getElementById("settings-fullscreen-bar").style.height = "0%";
}

function fetch_devtool() {
  loading();

  // Update icon bar selection
  document.getElementById("ic-home").className = "";
  document.getElementById("ic-search").className = "";
  document.getElementById("ic-filter").className = "";
  document.getElementById("ic-settings").className = "";
  document.getElementById("ic-devtool").className = "active";
  document.getElementById("body").className = "";

  // Grab from template and put to main section
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main-placeholder").innerHTML =
        this.responseText;
    }
  };
  request.open("GET", "dev-tools.html", true);
  request.send();

  // var page = document.getElementById("devtool-template-1").innerHTML;
  // document.getElementById("main-placeholder").innerHTML = page;

}


