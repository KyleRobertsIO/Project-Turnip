const electron = require("electron");
const { app, BrowserWindow } = require('electron');

// Electron Reload
const path = require('path')
 
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
/*************************************************/

let win = null;

function createWindow () {

  win = new BrowserWindow({
    width: 800, 
    height: 600, 
    frame: false,
    center: true,
    title: "App",
    "webPreferences": {
      "nodeIntegration": true
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile('./pages/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);