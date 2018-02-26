// Finds the cartesian coordinates of give int in the number spiral
function coordinates(int) {
    let n = int;
    let k = Math.ceil((Math.sqrt(n)-1)/2);
    let t = 2 * k + 1;
    let m = Math.pow(t, 2);       
    t -= 1;
    if (n >= m - t){
        if (k === 0) {
          return [k - (m - n), k];
        }
        return [k - (m - n), -k];
    } 
    m -= t;
    if (n >= m - t) {
         if (k === 0) {
          return [k, -k + (m - n)];
        }
        return [-k, -k + (m - n)]; 
    } 
    m -= t
    if (n >= m - t) {
      return [-k + (m - n), k];
    }
    return [k, k - (m - n - t)];    
}

// Finds the distance to the center of the number spiral based on cartesian coordinates
function distance(arr) {
    return arr.map(c => Math.abs(c)).reduce((a, b) => a + b, 0);  
} 


module.exports = {
    coordinates : coordinates,
    distance : distance
}