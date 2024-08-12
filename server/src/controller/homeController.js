const homeActions = {

    ping: (req, res, next)=>{
        res.status(200).json({
            status:"success"
        })
    }
};

module.exports = homeActions;