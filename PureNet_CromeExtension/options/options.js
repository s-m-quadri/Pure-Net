var variables = [
  "remove_script",
  "remove_style",
  "remove_link",
  "remove_footer",
  "remove_iframe",
  "clean_div",
  "clean_nav",
  "clean_span",
  "clean_cite",
  "clean_ul",
  "clean_ol",
  "clean_li",
  "extract_a",
  "extract_img",
  "extract_button",
  "alert_on_link_click"
];

let toggle_check_all = true;

document.getElementById("submit").addEventListener("click", function () {
  // Update the values
  for (let key in variables) {
    let value = variables[key];
    chrome.storage.local.set({ value: document.getElementById(value).checked },
      function () {
        console.log(value + " is set to " + document.getElementById(value).checked);
      }
    );
  }
  window.close();
});

document.getElementById("check-all-none").addEventListener("click", function () {
  if (toggle_check_all) {
    for (let key in variables) {
      let value = variables[key];
      document.getElementById(value).checked = true;
    }
    document.getElementById("check-all-none").innerText = "Check None Of The Above";
    toggle_check_all = false;
  } else {
    for (let key in variables) {
      let value = variables[key];
      document.getElementById(value).checked = false;
    }
    document.getElementById("check-all-none").innerText = "Check Each Of The Above";
    toggle_check_all = true;
  }
});