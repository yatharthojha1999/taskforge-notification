const axios = require('axios');
const { userService } = require('../../config/backend_config');

const makeValidateLink = require('./validate-tenant');
const validateLink = makeValidateLink({
    axios,
    userService,
});

module.exports = {
    validateLink,
}