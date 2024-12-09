import React from 'react'
import { CardBlog } from './canvas';
import { blogs } from '../constants';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Person = () => {
  const carouselBlogs = [...blogs, ...blogs];

  return (
    <div className='flex flex-col '>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Personal</p>
        <h2 className={styles.sectionHeadText}>More about me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-12'
      >
        Besides programming, I'm also interested in multiple things, I like to to a little bit of
        everything, from peacefull things like playing piano to take risks like when I skydive from
        a plane with a parachute or when I jumped from a 8 metre cascade in huentitan.

      </motion.p>

      <div className='relative w-full overflow-hidden'>
        <div className='flex whitespace-nowrap animate-scroll'>
          {carouselBlogs.map((blog, index) => (
            <CardBlog blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Person, "more");