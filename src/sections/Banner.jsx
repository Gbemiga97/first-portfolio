import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import { images, variants } from '../utils'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <section id="/" className="min-h-[85vh]  lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-y-8 items-center lg:gap-x-12 '>

          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            variants={variants.fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              BEN <span>AIDEN</span>
            </motion.h1>
            <motion.h2 
             variants={variants.fadeIn('up', 0.4)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[2.4rem] lg:text-[60px]
             font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>
                I am a</span>
              <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.h2>
            <motion.p 
             variants={variants.fadeIn('up', 0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facilis, facere non laudantium architecto ea magnam distinctio saepe vitae debitis ullam praesentium sunt 
            </motion.p>
            <motion.div
             variants={variants.fadeIn('up', 0.6)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>
                Contact me</button>
              <a 
              className='text-gradient btn-link'
              href="#">
                My Portfolio</a>
            </motion.div>
            <motion.div 
             variants={variants.fadeIn('up', 0.7)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div 
           variants={variants.fadeIn('down', 0.5)}
           initial='hidden'
           whileInView={'show'}
          className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
            <img src={images.Avatar} alt="ben" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner