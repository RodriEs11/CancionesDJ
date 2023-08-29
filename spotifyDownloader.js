const {execSync, exec } = require("child_process");
const fs = require("fs");


function install() {

    const repositoryUrl = "https://github.com/SwapnilSoni1999/spotify-dl";
    const command1 = `git clone ${repositoryUrl}`;
    const command2 = `cd spotify-dl`;
    const command3 = `npm install`;
    const command4 = `npm link`;

    try {
        const output1 = execSync(command1);
        console.log(`Output de command1:\n${output1.toString()}`);

        const output2 = execSync(command2);
        console.log(`Output de command2:\n${output1.toString()}`);

        const output3 = execSync(command3);
        console.log(`Output de command3:\n${output1.toString()}`);

        const output4 = execSync(command4);
        console.log(`Output de command4:\n${output1.toString()}`);


    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

}

function setup(){

    const path = "./spotify-dl";
    fs.access(path, fs.constants.F_OK, (error) => {

        if(error){
            install();
        }
    })

    return true;

}

function download(url, downloadPath) {

    const instalado = setup();

    if(!instalado) return;

    const command1 = `node ./spotify-dl/cli.js ${url} --o "${downloadPath}"`;

    try {
        const cmd = exec(command1);
        
        cmd.on('exit', (code) => {
            console.log("Archivo de Spotify descargado");
        })
        ;

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

}



module.exports = { install, download, setup};