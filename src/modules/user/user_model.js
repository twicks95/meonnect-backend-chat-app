const db = require('../../config/mysql')

module.exports = {
  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE user_id = ?', id, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },

  updateUserData: (id, data) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE users SET ? WHERE user_id = ?',
        [data, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id,
              ...data
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
