function firstAssembly(callback){
    console.log("Ensamblando la primera parte...")
    setTimeout(()=>{
        const isError = Math.random() < 0.3;
        if (isError) 
        {
            console.error('Error en el ensamble de la primera parte')
            return;
        } 
        console.log("Ensamble de la primera parte finalizado");
        callback();
    }, 4000);
}

function secondAssembly(callback){
    console.log("Ensamblando la segunda parte...")
    setTimeout(()=>{
        const isError = Math.random() < 0.2;
        if (isError) 
        {
            console.error('Error en el ensamble de la segunda parte')
            return;
        } 
        console.log("Ensamble de la primera parte finalizado");
        callback();
    }, 2000);
}

function thirdAssembly(callback){
    console.log("Ensamblando la tercera parte...")
    setTimeout(()=>{
        const isError = Math.random() < 0.1;
        if (isError) 
        {
            console.error('Error en el ensamble de la tercera parte')
            return;
        } 
        console.log("Ensamble de la tercera parte finalizado");
        callback();
    }, 6000);
}

function assembleDevice(){
    downloadManual(() => {
        requestInformation(() => {
            readManual(() => {
                firstAssembly(() => {
                    requestInformation(()=> {
                        readManual(() => {
                            secondAssembly(() => {
                                requestInformation(()=> {
                                    readManual(() => {
                                        thirdAssembly(() => {
                                            console.log("Ensamblaje finalizado");
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

assembleDevice();

function requestInformation(callback){
    console.log("Cargando Información");
    setTimeout(()=>{
        console.log("Información descargada");
        callback(info);
    }, 2500);
}

function downloadManual (callback){
    console.log("Iniciando descarga del manual...");
    setTimeout(() => {
        console.log("Manual Descargado");
        callback();
    }, 6000);
}

function readManual (callback){
    console.log("Leyendo Manual");
    setTimeout(() => {
        console.log("Manual leído");
        callback();
    }, 4500);
}