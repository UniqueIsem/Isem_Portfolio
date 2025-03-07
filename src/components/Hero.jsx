import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import { section, style } from 'framer-motion/client';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className='flex flex-col justify-center items-start'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#915eff]'>Isaac</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I'm interested in UX/UI design<br/>and Java development</p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute xs:bottom-8 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[64px] h-[35px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'>
            <motion.div 
              animate={{
                x: [-12, 12, -12]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-[#915eff] mb-1'
            />

          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero