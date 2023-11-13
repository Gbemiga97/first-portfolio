import { images, variants } from "../utils"
import { motion } from "framer-motion"

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">

          <motion.div
           variants={variants.fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div className="min-h-[19.5rem]  flex flex-col " >
              <h2 className="h2 leading-tight text-accent">
                My Latest Work</h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Delectus sit ad repellendus voluptatem odio voluptate animi 
                 tenetur facilis voluptatibus eaque. 
              </p>
              <div className="mt-auto">
              <button className="btn btn-sm">
                View all projects</button>
              </div>
            </div>
             
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
              className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
               />
              <img 
              className="group-hover:scale-125 transition-all duration-500"
              src={images.PortfolioImg1} alt="portfolio" />

              <h5 className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
                </h5>

              <div 
              className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"> 
                  Project Title</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
          variants={variants.fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
              className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
               />
              <img 
              className="group-hover:scale-125 transition-all duration-500"
              src={images.PortfolioImg2} alt="portfolio" />

              <h5 className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
                </h5>

              <div 
              className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"> 
                  Project Title</span>
              </div>
            </div> 
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
              className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"
               />
              <img 
              className="group-hover:scale-125 transition-all duration-500"
              src={images.PortfolioImg3} alt="portfolio" />

              <h5 className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
               <span className="text-gradient"> UI/UX Design</span>
                </h5>

              <div 
              className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"> 
                  Project Title</span>
              </div>
            </div> 
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Work