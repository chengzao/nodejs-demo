const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModal, ErrorModal } = require('../module/resModel')

const handleBlogRouter = (req,res) => {
  const method = req.method

  const url = req.url
  const path = url.split('?')[0]

  // get blog list
  if(method === 'GET' && path === '/api/blog/list'){
    // get query
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''

    const listData = getList(author, keyword)

    return new SuccessModal(listData)
  }

  // get blog detail
  if(method === 'GET' && path === '/api/blog/detail'){
    // get query
    const id = req.query.id
    const listData = getDetail(id)
    return new SuccessModal(listData)
  }

  // create new blog
  if(method === 'POST' && path === '/api/blog/new'){
    // get post body
    const blogData = req.body
    // handle
    const listData = newBlog(blogData)
    // return details
    return new SuccessModal(listData)
  }

  // update a blog
  if(method === 'POST' && path === '/api/blog/update'){
    const res = updateBlog(req.query.id, req.body)
    if(res){
      return new SuccessModal()
    }else{
      return new ErrorModal('update blog error')
    }
  }

  // delte a blog
  if(method === 'POST' && path === '/api/blog/del'){
    const res = deleteBlog(req.query.id)
    if(res){
      return new SuccessModal()
    }else{
      return new ErrorModal('delete blog error')
    }
  }


}

module.exports = handleBlogRouter
