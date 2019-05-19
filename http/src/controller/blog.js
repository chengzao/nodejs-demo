const getList = (author, keyword) => {
  console.log('author', author, 'keyword', keyword);
  return [
    {
      id: 1,
      title: 'A',
      content: 'A blog',
    },
    {
      id: 2,
      title: 'B',
      content: 'B blog',
    }
  ]
}

const newBlog = (blogData = {}) => {
  console.log('blogData', blogData)
  return {
    id: 3,
    title: 'C',
    content: 'C blog',
  }
}

const updateBlog = (id ,blogData = {}) => {
  console.log('id', id, 'blogData', blogData);
  return true
}

module.exports = {
  getList,
  newBlog,
  updateBlog
}
