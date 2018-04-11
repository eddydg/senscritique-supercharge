const wpmInput = document.querySelector('#wpm__input');
const saveOptionsButton = document.querySelector('#save_options');

chrome.storage.sync.get(['userWpm'], onCacheLoaded);
saveOptionsButton.addEventListener('click', saveOptions); 

function onCacheLoaded({ userWpm }) {
 if (userWpm) {
   wpmInput.value = userWpm;
 }
}

function saveOptions() {
  const userWpm = parseInt(wpmInput.value, 10);
  const defaultStore = {};
  const store = Object.assign({},
      userWpm ? { userWpm } : null
  );
  chrome.storage.sync.set({ userWpm });
}
