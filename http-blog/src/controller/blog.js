// /api/blog/list
const getList = (author, keyword) => {
  console.log('author', author, 'keyword', keyword);
  return [
    {
      id: 1,
      title: 'title 1',
      content: 'content 1',
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2',
    }
  ]
}
// /api/blog/detail
const getDetail = (id) => {
  console.log('id', id);
  return {
    title: 'title 1',
    content: 'content 1',
  }
}
// /api/blog/new
const newBlog = (blogData = {}) => {
  console.log('blogData', blogData)
  return {
    id: 3
  }
}
// /api/blog/update
const updateBlog = (id ,blogData = {}) => {
  console.log('id', id, 'blogData', blogData);
  return true
}

// /api/blog/del
const deleteBlog = (id) => {
  console.log('id', id);
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}
