/**
* Return array all elements index
* @param {array} a Array do you need find.
* @param {object} v Value do you want to find in array.
**/
function find(a, v){
    var p = [];
    findValue(a, v, p);
    return p.reverse();
}

/**
* Return true if value was found(and add index into array p), else return false
* @param {array} a Array do you need find.
* @param {object} v Value do you want to find in array.
* @param {array} p result array output, all elements index to value v.
**/
function findValue(a, v, p){
    if(Array.isArray(a)){
        for(var i = 0; i < a.length; i++){
            if(findValue(a[i], v, p)){
                p.push(i);
                return true;
            }
        }
    }
    else if(a == v){
        return true;
    }
    return false;
}
