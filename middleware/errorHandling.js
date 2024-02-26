function errorHandling(error, req, res, next) {
    if (error || res.errorCode >= 400) {
        res.json({
            status: error.status || res.errorCode || 500,
            message: 'An error occurred. Please try again later.'
        })
    } else {
        next()
    }
}

export {
    errorHandling
}