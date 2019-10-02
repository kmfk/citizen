const { Router } = require('express');
const isAuthenticated = require('../middleware/is-authenticated');

const router = Router();

// ref: https://www.terraform.io/docs/internals/remote-service-discovery.html
router.get('/.well-known/terraform.json', isAuthenticated, (req, res) => {
  // match with https://registry.terraform.io/.well-known/terraform.json
  res.json({
    'modules.v1': '/v1/modules/',
  });
});

module.exports = router;
