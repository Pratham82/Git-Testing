const User = require('../models/Users')

//@POST
//Create new user
//Created by pratham82
const createNewUser = async (req, res) => {
  // destructuring the values from req.body
  const { name, age, designation } = req.body
  const user = new User({
    name,
    age,
    designation,
  })
  try {
    const newUser = await user.save()
    res.json({
      status: 'Successful',
      message: 'New user created',
      data: {
        newUser,
      },
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = createNewUser
