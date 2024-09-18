const fs = require('node:fs').promises;
// Read file with promises
async function readFile(): Promise<string>{
    try {
        const data: string = await fs.readFile('./input.txt', 'utf8');
        return data;
    } catch (err) {
        console.error(err);
        return "";
    }
}

async function day1() {
    const text: string = await readFile();
    const lines: string[] = text.split('\n');
    let summed: number[] = [];
    let currentSum: string[] = [];
    for (let index = 0; index < lines.length; index++) {
        let line: string = lines[index];
        if(line !== ''){
            currentSum.push(line);   
        }
        else{
            let total: number = currentSum.reduce((a,currVal) =>{
                return a + parseInt(currVal, 10);
            }, 0);
            summed.push(total);
            currentSum = [];
        }
    }
    console.log(Math.max(...summed)); // return 72718
}

day1();
