const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "profile",
  });
};

//render the
module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

//render the sign in page
module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "Codeial | sign In",
  });
};

// get the sign up data
module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  const user = await User.findOne({ email: req.body.email });

  try {
    if (!user) {
      const createUser = await User.create(req.body);
      console.log(createUser)
      if (createUser) {
         console.log(createUser)
        return res.redirect("/users/sign-in");

      }
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log("error", err);
  }
};

//sign in and create session for user
module.exports.createSession = function (req, res) {
  //todo
};
//module.exports.action = function(req, res){}
