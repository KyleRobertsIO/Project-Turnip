const os = require('os');

if(appSettings.slippiPath != null && appSettings.slippiPath != ""){
    window.location.replace('./index.html');
}

function submitPath(){
    let input = document.getElementById('path-input');
    let path = input.value;

    if(fs.existsSync(path)){
        if(os.platform == "win32" && path[path.length - 1] != "\\"){ // Windows
            path = path + "\\";
        }else if(os.platform != "win32" && path[path.length - 1] != "/"){ // MACOS / Linux
            path = path + "/";
        }
        appSettings.slippiPath = path;
        let settings = JSON.stringify(appSettings);
        fs.writeFileSync(configPath, settings);
        window.location.replace('./index.html'); 
    }else{
        let errorElm = document.getElementById('error-log');
        errorElm.style.display = "block";
    }
}