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

async function sumAllElves(){
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
    return summed;
}

async function day1() {
    var summed = await sumAllElves();
    console.log(Math.max(...summed)); // return 72718
}

async function day2(){
    var summed = await sumAllElves();
    summed = summed.sort((a,b) => a - b);
    var total = summed.slice(-3).reduce((a,currVal) => a + currVal, 0);
    console.log(total);
}

day1();
day2();
