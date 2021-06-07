const Users = require('../models/Users');
const bcrypt = require('bcryptjs')

exports.getUser = async (req, res) => {

    const user = await Users.find();

    try {
        res.json({
            user
        })
    } catch(err) {
        console.log(err)
    }


}


exports.postUser = async (req, res) => {

    const {name, email, password} = req.body


    const user = await new Users({
        name,
        email,
        password
    });

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    

await user.save()

res.json({
    user
})
  
}

exports.putUser = async (req, res) => {

    const {id} = req.params;
   const {password, ...resto} = req.body;
  
    const user = await Users.findByIdAndUpdate(id, resto);

    if(password) {
        const salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);
    }


    res.json({
        message: "Editando...",
        user
    })
}