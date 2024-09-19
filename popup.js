document.getElementById('getTitle').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const tabTitle = tabs[0].title;
        document.getElementById('titleDisplay').innerText = `Title: ${tabTitle}`;
    });
});
