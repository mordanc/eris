// style guidelines: tabs not spaces, single quotes not doubles, semicolons after each statement

// The main.js should create windows and handle all the system events your application might encounter.

const {app, BrowserWindow} = require('electron');

function createWindow() {
    let win = new BrowserWindow({width: 800, height: 800});

    win.loadFile('./src/index.html');
}

app.on('ready', createWindow);