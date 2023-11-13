import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { variants } from '../utils'


const services = [
  {
    name: 'UI/UX Design',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minus, ipsum optio architecto eligendi   ',
    link: 'Learn more'  
  },
  {
    name: 'Development',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minus, ipsum optio architecto eligendi   ',
    link: 'Learn more'  
  },
  {
    name: 'Digital Marketing',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minus, ipsum optio architecto eligendi   ',
    link: 'Learn more'  
  },
  {
    name: 'Product Branding',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi minus, ipsum optio architecto eligendi   ',
    link: 'Learn more'  
  },
]


const Services = () => {
  return (
   <section id="services" className="section">
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row '>

        <motion.div 
        variants={variants.fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bottom bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 '>
          <h2 className='text-accent mb-6'>
            What I Dp</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelance Front-end Developer with over 5years of experience.
            </h3>
            <button className='btn btn-sm'>
              See my work
            </button>
        </motion.div>

        <motion.div
            variants={variants.fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
          <div>
            {
              services.map(({name, desc, link}, i) => (
                <article
                className='border-b border-white/20 h-[146px] mb-[38px] flex'
                key={i }>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}</h4>
                    <p className='font-secondary leading-tight'>
                      {desc}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                    className='btn w-9 h-9 mb-[42px] flex items-center justify-center'
                    href="#">
                      <BsArrowUpRight />
                    </a>
                    <a
                    className='text-gradient text-sm'
                     href="#">{link}</a>
                  </div>
                </article>
              ))
            }
          </div>
        </motion.div>
      </div>
    </div>
   </section>
  )
}

export default Services