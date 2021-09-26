const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { checkUsername } = require('../users/user.service');
const { create, retrieve, deleteToken } = require('./login.service')

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
                console.log(results);
                results.password = undefined;
                const jsontoken = sign({ result: results }, process.env.SALT, {
                    expiresIn : "1h"
                });
                return res.json({
                    success : 1,
                    message : "login successfully",
                    token : jsontoken,
                    user_id : results.id
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
    },

    retrieveToken : async (req, res) => {
        const body = req.body;
        let results = await retrieve(body);
        try {
          if (!results) {
            return res.status(200).json({
                success : 1,
                data : [],
                message : 'Success'
            });
          }
    
          return res.status(200).json({
            success : 1,
            data : results,
            message : 'Success'
          });
    
        } catch (error) { 
          return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
          });
        }
    },

    createToken : async (req, res) => {
        const body = req.body;
        let results = await create(body);
        try {
          if (!results) {
            return res.status(200).json({
                success : 1,
                data : [],
                message : 'Success'
            });
          }
    
          return res.status(200).json({
            success : 1,
            data : results,
            message : 'Success'
          });
    
        } catch (error) { 
          return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
          });
        }
    },

    deleteToken : async (req, res) => {
        const body = req.body;
        let results = await deleteToken(body);
        try {
          if (!results) {
            return res.status(200).json({
                success : 1,
                data : [],
                message : 'Success'
            });
          }
    
          return res.status(200).json({
            success : 1,
            data : results,
            message : 'Success'
          });
    
        } catch (error) { 
          return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
          });
        }
    } 
}