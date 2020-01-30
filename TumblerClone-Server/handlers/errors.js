function errorHandler(error, req, res, next){
    return res.status(error.status || 500).json({
        message: error.message || "Something went wrong"
    });
}

module.exports = errorHandler;