let tabCount = 1;
let currentTab = 1;
const tabData = {
    1: { url: "/static/index.html" }
};

function addTab() {
    tabCount++;
    const tabBar = document.querySelector('.tab-bar');
    const newTab = document.createElement('div');
    newTab.className = 'tab';
    newTab.style.opacity = '0';
    newTab.innerHTML = `
        Tab ${tabCount}
        <button class="close-btn" onclick="closeTab(event)"><i class="fas fa-times"></i></button>
    `;
    newTab.dataset.tab = tabCount;
    newTab.onclick = switchTab;
    tabBar.insertBefore(newTab, tabBar.querySelector('.new-tab'));

    requestAnimationFrame(() => {
        newTab.style.opacity = '1';
    });

    tabData[tabCount] = { url: "/static/index.html" };

    const newIframe = document.createElement('iframe');
    newIframe.className = 'iframe';
    newIframe.id = `iframe-${tabCount}`;
    newIframe.src = tabData[tabCount].url; 
    newIframe.sandbox = "allow-same-origin allow-scripts allow-forms";
    document.querySelector('.iframe-container').appendChild(newIframe); 

    switchTab({ currentTarget: newTab }); 
}

function switchTab(event) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const iframes = document.querySelectorAll('.iframe');
    iframes.forEach(iframe => iframe.classList.remove('active'));

    event.currentTarget.classList.add('active');
    currentTab = Number(event.currentTarget.dataset.tab);

    document.getElementById(`iframe-${currentTab}`).classList.add('active');
}

function closeTab(event) {
    event.stopPropagation();
    const tab = event.currentTarget.parentElement;

    if (tab.dataset.tab === "1") return; 

    const tabs = document.querySelectorAll('.tab');
    tab.remove();
    delete tabData[tab.dataset.tab];
    const iframeToRemove = document.getElementById(`iframe-${tab.dataset.tab}`);
    if (iframeToRemove) {
        iframeToRemove.remove(); 
    }

    if (tab.classList.contains('active')) {
        const nextTab = document.querySelector('.tab');
        nextTab.classList.add('active');
        currentTab = Number(nextTab.dataset.tab);
        document.getElementById(`iframe-${currentTab}`).classList.add('active'); 
    }
}

function goBack() {
    const activeIframe = document.getElementById(`iframe-${currentTab}`);
    activeIframe.contentWindow.history.back();
}

function goForward() {
    const activeIframe = document.getElementById(`iframe-${currentTab}`);
    activeIframe.contentWindow.history.forward();
}

function refreshPage() {
    const activeIframe = document.getElementById(`iframe-${currentTab}`);
    activeIframe.src = tabData[currentTab].url; 
}

function toggleFullscreen() {
    const activeIframe = document.getElementById(`iframe-${currentTab}`);
    if (activeIframe.requestFullscreen) {
        activeIframe.requestFullscreen();
    } else if (activeIframe.webkitRequestFullscreen) {
        activeIframe.webkitRequestFullscreen();
    } else if (activeIframe.msRequestFullscreen) {
        activeIframe.msRequestFullscreen();
    }
}

function toggleSettings() {
    document.getElementById('settings-box').classList.toggle('active');
}

function toggleGames() {
    document.getElementById('games-box').classList.toggle('active');
}

function loadGame(url) {
    tabData[currentTab].url = url;
    const activeIframe = document.getElementById(`iframe-${currentTab}`);
    activeIframe.src = url; 
    toggleGames(); 
}
