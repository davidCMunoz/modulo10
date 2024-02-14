'use strict';

let deferredInstal1Prompt = null;
const installButton = document.getElementById('but_install')
installButton.addEventListener('click',installPWA);

window.addEventListener('beforeinstallprompt',saveBeforeInstallPromptEvent)

function saveBeforeInstallPromptEvent(evt){
    deferredInstal1Prompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt){
    deferredInstal1Prompt.prompt();
    evt.srcElement.setAttribute('hidden',true);
    deferredInstal1Prompt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted"){
            console.log("aceptado")
        }else{
            console.log("No aceptado")
        }
        deferredInstal1Prompt = null;
    })
}

window.addEventListener('appinstalled',logAppInstalled);

function logAppInstalled(evt){
    console.log("Funciona");
}