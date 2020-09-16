const user = require('../managers/User');

module.exports = {
    get: async (req,res) => {
        let result = await user.get();
        console.log(result);
        res.send(result);
    }
}