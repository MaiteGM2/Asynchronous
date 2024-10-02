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

async function totalAssembly (){
    try {
        await requestInformation(2500, "Part 1")
        await downloadAndReadManual(1200, "Part 1")
        await assembler(2800, "Part 1", 0.1)
        await requestInformation(2500, "Part 2")
        await downloadAndReadManual(1200, "Part 2")
        await assembler(3000, "Part 2", 0.2)
        await requestInformation(2500, "Part 3")
        await downloadAndReadManual(1200, "Part 3")
        await assembler(3500, "Part 3", 0.15)
        console.log("All the parts were Assembled")
    } catch {
        console.log("Restarting assembly..."); totalAssembly()
    }
}

totalAssembly();