function ensureLoggedIn (req, res, next) {
    if (!req.user) {
        res.status(401)
    }
}