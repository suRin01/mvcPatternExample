function createResult(result, data = undefined){
    if(result === true){
        return {
            code: 200,
            data: data
        };
    }
    else{
        return {
            code: 500,
            data: []
        };
    }
}


module.exports = createResult;