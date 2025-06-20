function soma(n1, n2){
    if(isNaN(n1) || isNaN(n2)){
        throw new Error ('apenas números')
    }
    return n1 + n2
}
function sub(n1, n2){
     if(isNaN(n1) || isNaN(n2)){
        throw new Error ('apenas números')
    }
    return n1 - n2
}

module.exports = {soma, sub}