const fs = require('fs');
const childProcess = require('child_process');

async function nodeifyInstallHack() {
    await childProcess.execSync("npx rn-nodeify --install 'crypto,process,stream,events' --hack");
}

async function removeConflictDirs() {
    const removingDirs = ['node_modules/@walletconnect/react-native-dapp/node_modules/react-native-svg'];

    removingDirs.forEach((dir) => {
        console.log('postinstall', 'remove dir', dir);

        if (fs.existsSync(dir)) {
            fs.rmdirSync(dir, { recursive: true, force: true });
            console.log('removed', dir);
        }
    });
}

async function main() {
    await nodeifyInstallHack();
    await removeConflictDirs();
}

main();
