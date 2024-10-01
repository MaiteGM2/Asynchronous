const assembler = (time, part, error) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const isError = Math.random() < error;
            if(isError){
                reject(part);
                console.log(`${part} Assembly error`)
            } else {
                resolve (part);
                console.log(`${part} Correctly build`);
            }
        }, time);
    });
};

const requestInformation = (time, part) => {
    console.log(`Requesting information about the ${part}`)
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (part);
            console.log(`${part} Information received`);
        }, time);
    })
}

const downloadAndReadManual = (time, part) => {
    console.log(`${part} Starting manual download`);
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (part);
            console.log(`${part} manual downloaded and read`);
        }, time);
    })
}

function totalAssembly (){
    requestInformation(2500, "Part 1")
    .then(() => downloadAndReadManual(1200, "Part 1"))
    .then(() => assembler(1000, "Part 1", 0.1))
    .then(() => requestInformation(2500, "Part 2"))
    .then(() => downloadAndReadManual(1200, "Part 2"))
    .then(() => assembler(2000, "Part 2", 0.2))
    .then(() => requestInformation(2500, "Part 3"))
    .then(() => downloadAndReadManual(1200, "Part 3"))
    .then(() => assembler(1500, "Part 3", 0.15))
    .then(() => console.log("All the parts were Assembled"))
    .catch(() => {console.log("Restarting assembly..."); totalAssembly()})
}

totalAssembly();

