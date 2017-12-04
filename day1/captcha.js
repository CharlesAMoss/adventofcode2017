module.exports = {

    process: function(str) {
        const nums = [0];
        const splits = str.split('');
        
        for (i=0; i < splits.length; i++){
            if (splits[i] === splits[i+1]) {
                nums.push(parseInt(splits[i]))
            }
        }
        
        if (splits[0] === splits[splits.length-1]){
            nums.push(parseInt(splits[0]))
        }
        
        return nums.reduce((a, b) => a + b)
    },
    moreProcess: function(str) {
        const step = parseInt(str.length / 2);
        const nums = [0];
        const splits = str.split('');
        
        for (i=0; i < splits.length; i++){
            if (splits[i] === splits[i+step]) {
                nums.push(parseInt(splits[i]))
            } else if (splits[i] === splits[i - step]) {
                nums.push(parseInt(splits[i]))
            }
        }
    
        
        return nums.reduce((a, b) => a + b)

    }

};