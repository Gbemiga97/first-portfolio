import { motion } from "framer-motion"
import { variants } from "../utils"



const Contact = () => {
  return (
    <section id="contact" className="lg:section py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">

          <motion.div
           variants={variants.fadeIn('right', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className="flex-1">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!</h2>
            </div>
          </motion.div>

          <motion.form
          variants={variants.fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input 
            className="bg-transparent border-b py-3 placeholder:text-white focus:border-accent
            transition-all w-full outline-none"
            type="text"
            placeholder="Your name"
             />
               <input 
            className="bg-transparent border-b py-3 placeholder:text-white focus:border-accent
            transition-all w-full outline-none"
            type="text"
            placeholder="Your email"
             />
             <textarea
              className="bg-transparent border-b py-12 placeholder:text-white focus:border-accent
              transition-all w-full outline-none resize-none mb-12"
              placeholder="Your message"
             ></textarea>
             <button className="btn btn-lg">
              Send message
             </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact