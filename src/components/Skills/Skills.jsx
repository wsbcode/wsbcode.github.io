import { motion } from 'framer-motion'
import skills from '../../data/skills'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Minhas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
               Habilidades
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-dark mx-auto rounded-full" />
        </motion.div>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="mb-12 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-bold text-center mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                {category}
              </span>
            </motion.h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-accent-light/50 hover:bg-accent/5 transition-all duration-300 cursor-default"
                >
                  <skill.icon
                    className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm text-gray-400 group-hover:text-accent-light transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
