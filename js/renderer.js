const {remote} = require('electron');

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