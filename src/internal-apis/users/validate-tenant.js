module.exports = function makeValidateLink({ axios, userService }) {
    return async function validateLink({
        linkname,
        userId,
    }) {
        console.log("validateLink through User Service", { linkname });

        const userServiceClient = axios.create({
            baseURL: userService,
            timeout: 5000,
            headers: {
                "Content-Type": "application/json",
            },
        });

        try {
            const response = await userServiceClient.get(`/internal/v1/validate-link/${linkname}`);
            return response.data;
        } catch (e) {
            console.log(`Error in validateLink Internal api`, e);
        }
    };
};