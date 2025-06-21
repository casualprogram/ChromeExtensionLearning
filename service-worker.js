// This is when the user click on the extension icon (listener for clicks on the extension icon)
chrome.action.onClicked.addListener((tab) => {
  // tab is the current tab opened
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // target the current tab open
    func: () => {
      // run this function
      alert("Hello from the service worker!");
    },
  });
});
