module.exports = function errorHandler(err, req, res, next) {
    console.log(err);

    if (err && err.code) {
        return res.status(err.code).json({ error: err.message });
    }

    if (err) {
        return res.status(400).json({ error: err.message });
    }

    return next();
}