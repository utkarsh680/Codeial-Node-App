const Post = require("../models/post");

module.exports.home = async function (req, res) {
  try {
    // Populate the "user" field to get associated user information
    const posts = await Post.find({}).populate('user').exec();
    return res.render("home", {
      title: "Codeial | Home",
      posts: posts
    });
  } catch (err) {
    console.error("Error fetching posts:", err);
    return res.status(500).send("Internal Server Error");
  }
};

//module.exports.action = function(req, res){}
