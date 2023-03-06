module.exports = function errorHandler(err,req,res,next) {
    if(err){
        res.status(500).send(err.message);
    }else{
        next();
    }
}