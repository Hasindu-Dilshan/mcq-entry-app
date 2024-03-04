// Higher order function to catch asycn errors
module.exports = func => (req, res, next) => {
    Promise.resolve(func(req, res, next))
        .catch(next)
}