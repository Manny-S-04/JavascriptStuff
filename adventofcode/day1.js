const fs = require('node:fs').promises;

// Read file with promises
async function readFile() {
    try {
        const data = await fs.readFile('./input.txt', 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}

async function day1() {
    const text = await readFile();
    const lines = text.split('\n');
    var summed = [];
    var currentSum = [];
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        if(line !== ''){
            currentSum.push(line);   
        }
        else{
            var total = currentSum.reduce((a,currVal) =>{
                return a + parseInt(currVal, 10);
            }, 0);
            summed.push(total);
            currentSum = [];
        }
    }
    console.log(Math.max(...summed)); // return 72718
}

day1();
