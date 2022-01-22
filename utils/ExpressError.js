class ExpressError extends Error{
    constructor(message, statusCode){
        super();//this will call constructor of Error class
        this.message= message;
        this.statusCode= statusCode;
    }
}
module.exports= ExpressError;
