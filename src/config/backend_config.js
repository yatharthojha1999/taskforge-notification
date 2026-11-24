const path = require("node:path");

function getAuthConfig() {
    const publicKeyPath = process.env.JWT_PUBLIC_KEY_PATH;
    const issuer = process.env.JWT_ISSUER;
    const audience = process.env.JWT_AUDIENCE;

    if (!publicKeyPath || !issuer || !audience) {
        throw new Error(
            "JWT_PUBLIC_KEY_PATH, JWT_ISSUER and JWT_AUDIENCE must be configured"
        );
    }

    return {
        publicKeyPath: path.resolve(publicKeyPath),
        issuer,
        audience,
    };
}



module.exports = Object.freeze({
    getAuthConfig,
    userService: "http://localhost:3000",
});