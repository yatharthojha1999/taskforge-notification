
const express = require("express");
const { healthCheck } = require("./controllers");
const middleware = require("../src/middleware/http-request");
const userService = require("../src/internal-apis/users");
const verifyAccessToken = require("../src/middleware/verify-access-token");

const router = express.Router();

router.get("/health", middleware({
    controller: healthCheck.checkServerHealtAction,
    byPassAuthCheck = false,
    byPassLinkValidation = false,
    validateLink: userService.validateLink,
    verifyAccessToken,
}));

module.exports = router;