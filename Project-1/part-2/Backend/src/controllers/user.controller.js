const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  // check if user is not requesting to follow itself
  if (followerUsername === followeeUsername) {
    return res.status(400).json({
      message: "You cannot follow yourself!",
    });
  }

  // checking if user exits
  const isFolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });
  if (!isFolloweeExists) {
    return res.status(404).json({
      message: "user you are trying to follow does not exits",
    });
  }

  // check if the user has not requested to follow the same user again
  const isAlreadyFollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });
  if (isAlreadyFollowing) {
    return res.status(200).json({
      message: `You are already following ${followeeUsername}`,
      follow: isAlreadyFollowing,
    });
  }

  // yaha agye mltb, user already follow nhi krta toh ek new record bna do
  const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(200).json({
    message: `You are now following ${followeeUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {

    //
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    // checking if user is already followed or not
    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername,
    })
    // if not followed already, then return directly
    if(!isUserFollowing) {
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`,
        })
    }

    // deleting record for unfollowing user
    await followModel.findByIdAndDelete(isUserFollowing._id);

    // sending response after unfollowing
    res.status(200).json({
        message: `You have successfully unfollowed ${followeeUsername}`,
    })

}

module.exports = {
  followUserController,
  unfollowUserController
};
