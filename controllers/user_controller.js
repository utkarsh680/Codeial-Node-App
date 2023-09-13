const User = require("../models/user");

module.exports.profile = async function (req, res) {
  if (req.cookies.user_id) {
    const UserId = await User.findById(req.cookies.user_id);
    try {
      if (UserId) {
        return res.render("user_profile", {
          title: "User Profile",
          user: UserId,
        });
      }
      return res.redirect("/users/sign-in");
    } catch (err) {
      console.log("error", err);
    }
  } else {
    return res.redirect("/users/sign-in");
  }
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
      const userCreate = User.create(req.body);
      if (userCreate) {
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
module.exports.createSession = async function (req, res) {
  //find the user
  const userSession = await User.findOne({ email: req.body.email });
  //handle user found
  try {
    if (userSession) {
      //if user found but password does't match

      if (userSession.password != req.body.password) {
        return res.redirect("back");
      }
      //handle session creation
      res.cookie("user_id", userSession.id);
      return res.redirect("/users/profile");
      //handle user not found
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log(err, "error");
  }
};
//module.exports.action = function(req, res){}
