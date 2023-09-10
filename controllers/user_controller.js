module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title:'profile'
    })
}

//render the 
module.exports.signUp = function(req, res) {
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
 }
 
 //render the sign in page
 module.exports.signIn = function(req, res) {
    return res.render ('user_sign_in', {
       title: 'Codeial | sign In'
    })
 }
//module.exports.action = function(req, res){}