const axios = require('axios')

const chunkArray = (arr, len) => {
  // Init chunked arr
  const chunkedArr = []

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1]

    // Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  })

  return chunkedArr
}

module.exports = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  createUser: () => {
    const user = { firstName: 'Brad' };
    user['lastName'] = 'Traversy';
    return user;
  },
  fetchUser: () => (
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
  ),
  chunkArray
}
