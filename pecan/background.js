chrome.runtime.onInstalled.addListener(() => {
  console.log('PECAN Ad Attracter Installed');
});

// This function could be used to track if PECAN is active.
function attractAds() {
  console.log("PECAN is attracting ads... 🍁");
  // You can add more logic here to attract ads later
}

// Simulate the action every 5 seconds for demo
setInterval(attractAds, 5000);
