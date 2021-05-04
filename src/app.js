const User = require('../models/Users')

//@GET
//GetAll users
// Pratham82 made changes on this line
const getAllUsers3 = async (_, res) => {
  let data = 'fdfdfdfdf'
  try {
    const allUsers = await User.find()
    res.json({
      status: 'Successful',
      data: allUsers,
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = getAllUsers3
