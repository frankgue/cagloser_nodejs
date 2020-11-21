module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please Log In to view this ressource');
        res.redirect('/users/login');
    }
}