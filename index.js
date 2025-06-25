async function sayHello() {
  // grab the active tab and execute a script in it
  let [tab] = await chrome.tabs.query({ active: true });

  // use chrome.scripting to execute a script in the active tab
  chrome.scripting.executeScript({
    target: { tabId: tab.id }, // target the current tab open
    // the function to execute in the active tab
    func: () => {
      alert("Hello from the index.js!");
    },
  });
}

// Add an event listener to the button with id "myButton"
document.getElementById("myButton").addEventListener("click", sayHello);
