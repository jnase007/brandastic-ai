import { motion } from 'framer-motion';

const photos = [
  'https://brandastic.com/wp-content/uploads/2026/05/C_DSC03021_Edited.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02924.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02928.jpg',
  'https://brandastic.com/wp-content/uploads/2026/05/DSC02965.jpg',
];

export default function Team() {
  return (
    <section className="bg-navy py-24 text-cream">
      <div className="container-luxe">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream mb-4"
          >
            The Team Behind Your AI Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-cream/60 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Orange County based. 15+ years in digital marketing. Now bringing AI to established
            businesses.
          </motion.p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={src}
                alt={`Brandastic team member ${i + 1}`}
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
