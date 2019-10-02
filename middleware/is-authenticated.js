module.exports = (req, res, next) => {
  if (process.env.CITIZEN_USE_AUTH && req.token !== process.env.CITIZEN_AUTH_TOKEN) {
    return res.status(403).send();
  }

  return next();
};
