const fs = require('fs');
const {remote} = require('electron');

var appSettingsRaw = fs.readFileSync('./config.json');
var appSettings = JSON.parse(appSettingsRaw);
sessionStorage.setItem('APP_SETTINGS', JSON.stringify(appSettings));

document.getElementById('minimize-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    win.minimize();
});

document.getElementById('maximize-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    if(win.isMaximized()){
        win.unmaximize();
    }else{
        win.maximize();
    }
});

document.getElementById('close-icon').addEventListener('click', () => {
    let win = remote.getCurrentWindow();
    win.close();
});