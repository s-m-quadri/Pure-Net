

document.getElementById("Activate").addEventListener("click", async () => {
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

document.getElementById("Options").addEventListener("click", function () {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('./options/options.html'));
  }
});