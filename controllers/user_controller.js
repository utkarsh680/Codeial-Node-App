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

 //get the sign up data

 module.exports.create = function(req, res){
    //todo
 }

 //sign in and create session for user             
 module.exports.createSession = function(req, res){
    //todo
 }
//module.exports.action = function(req, res){}