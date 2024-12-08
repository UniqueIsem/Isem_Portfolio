import React from 'react'
import { CardBlog } from './canvas';
import { blogs } from '../constants';

const Person = () => {
  const carouselBlogs = [...blogs, ...blogs];

  return (
    <div className='flex whitespace-nowrap animate-scroll'>
      {carouselBlogs.map((blog, index) => (
        <CardBlog blog={blog} key={index} />
      ))}
    </div>
  )
}

export default Person;