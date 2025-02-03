const jwt = require("jsonwebtoken")


const userauth = (req, res, next) => {


    console.log(req.headers) // sending via authorization ,bearer token but it will reside in the header anyways 

    const authorizationHeader = req.headers.authorization



    try {
        const token = authorizationHeader.split("Bearer ")[1] // splitting the authorization header where  bearer  will be on index 0 and and the token will be in 1 
        if (!authorizationHeader) throw "authoization failed"

        else {


            const checktoken = jwt.verify(token, process.env.verification_salt)// verifies the data and receives the data of that token
            // throws error  of its own   if data is not found     } // 
            if (checktoken) {

                req.userr = checktoken // manipulating (appending a extra keypair to payload) the req sent front the user end , the same request will be sent to the protected routes with  , here userr is just a random key we appended the data (chechktoken) we received 
            }
            console.log(checktoken, "token")
        }
    }
    catch (e) {
        res.status(401).json({
            status: "failed",
            message: "authoization failed",
            ok: e

        })

        return //since it is returned the flopw of code wont move down as error is thrown
    }




    next()// the code below this middleware in the router file will be executed 
}

module.exports = userauth
