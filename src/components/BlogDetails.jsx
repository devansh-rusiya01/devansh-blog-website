import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] overflow-visible '>
      <NavLink to={`/blog/${post.id}`} >
        <span className="text-2xl font-bold text-gray-800">{post.title}</span>
      </NavLink>
      <p className="italic">
        By {" "}
        <span  >{post.author}</span>
        {" "}
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="font-normal opacity-80"> Posted on {post.date} </p>
      <p className='mb-2'> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="bg-blue-100 text-blue-600 font-medium py-1 px-3 rounded-full mx-2">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
