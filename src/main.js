// style guidelines: tabs not spaces, single quotes not doubles, semicolons after each statement

// The main.js should create windows and handle all the system events your application might encounter.

const {app, BrowserWindow} = require('electron');

function createWindow() {
    let win = new BrowserWindow({width: 1920, height: 1080});

    win.loadFile('./src/index.html');

    // when the window is closed, delete the reference
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);