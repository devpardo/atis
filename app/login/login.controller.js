const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkUsername } = require('../users/user.service');

module.exports = {
    login: async (req, res) => {
        const body = req.body;
        const results = await checkUsername(body.username);
        
        try {
            
            if (!results) {
                return res.json({
                    success : 0,
                    message : "Invalid username or password"
                });
            }

            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({ result: results }, process.env.SALT, {
                    expiresIn : "1h"
                });
                return res.json({
                    success : 1,
                    message : "login successfully",
                    token : jsontoken
                });
            } else {
                return res.json({
                    success : 0,
                    message : "Invalid username or password"
                });
            }

        } catch (error) {
            console.log(err);
        }
    }
}