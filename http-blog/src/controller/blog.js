const { exec, escape } = require('../db/mysql')

// /api/blog/list
const getList = (author, keyword) => {
  // console.log('author', author, 'keyword', keyword);
  // // sql
  // let sql = `select * from blogs where 1=1 `

  // if(author){
  //   sql += `and author='${author}' `
  // }
  // if(keyword){
  //   sql += `and title like '%${keyword}%' `
  // }

  // sql += `order by createtime desc;`

  // return exec(escape(sql))

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
  const title = xss(blogData.title)
  const content = xss(blogData.content)
  const author = xss(blogData.author)
  const createTime = xss(blogData.createTime)

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
