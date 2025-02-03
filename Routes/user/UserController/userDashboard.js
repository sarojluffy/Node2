

const userDashboard = (req, res) => {
    // console.log(req.header)
    res.status(200).json({

        status: "this is dashboard",
        reqdata: req.userr


    })


}

module.exports = userDashboard
