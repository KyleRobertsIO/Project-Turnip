const fs = require('fs');
const { remote } = require('electron');

var configPath = `${__dirname}\\..\\config\\config.json`;

if(sessionStorage.getItem('APP_SETTINGS') == null){
    appSettingsRaw = fs.readFileSync(configPath);
    let appSettings = JSON.parse(appSettingsRaw);
    sessionStorage.setItem('APP_SETTINGS', JSON.stringify(appSettings));
}

document.getElementById('minimize-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    win.minimize();
});

document.getElementById('maximize-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
});

document.getElementById('close-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    win.close();
});

function updateSession(appSettings){
    sessionStorage.setItem("APP_SETTINGS", JSON.stringify(appSettings));
}