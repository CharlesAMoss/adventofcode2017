

const fs = require('fs');
const input = fs.readFileSync('input.txt', "utf8");

function process(str) {
    const splits = str.split('');
    const nums = [];

    for (i=0; i < splits.length; i++){
        if (splits[i] === splits[i+1]) {
            nums.push(parseInt(splits[i]))
        }
    }
    
    console.log(nums);
}

process(input)