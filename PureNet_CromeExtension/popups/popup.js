// Initialize butotn with users's prefered color
let ActivateButton = document.getElementById("Activate");


// When the button is clicked, inject setPageBackgroundColor into current page
ActivateButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.insert
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["./injections/PureNet_Injection.js"],
  });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["./injections/PureNet_Injection.css"],
  });
});