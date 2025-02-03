const jwt = require("jsonwebtoken")


const userauth = (req, res, next) => {


    console.log(req.headers) // sending via authorization ,bearer token but it will reside in the header anyways 

    const authorizationHeader = req.headers.authorization



    try {
        const token = authorizationHeader.split("Bearer ")[1]
        if (!authorizationHeader) throw "authoization failed"

        else {


            const checktoken = jwt.verify(token, process.env.verification_salt)// throws error  of its ow        }
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
