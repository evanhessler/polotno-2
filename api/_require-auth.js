undefined;

// Middleware for requiring authentication and getting user
const requireAuth = (fn) => async (req, res) => {
  // Respond with error if no authorization header
  if (!req.headers.authorization) {
    return res.status(401).send({
      status: "error",
      message: "You must be signed in to call this endpoint",
    });
  }

  // Get access token from authorization header ("Bearer: xxxxxxx")
  const accessToken = req.headers.authorization.split(" ")[1];
};

module.exports = requireAuth;
