import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function About() {
  const sectionRef = useRef(null);
  const { isInView } = useScrollAnimation(sectionRef, 0.1);

  return (
    <section className="container mx-auto my-4 max-w-5xl p-4">
      <motion.div
        className="relative p-4 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="relative z-10 font-bold text-blue-900"
          initial={{ y: -20 }}
          animate={isInView ? { y: 0 } : { y: -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="mr-2 font-headline text-3xl sm:text-2xl">Sobre</span>
          <span className="font-handwriting text-4xl sm:text-3xl">Mim</span>
        </motion.h2>

        <motion.p
          className="relative text-sm text-gray-600 sm:text-xs"
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : { y: 20 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Desenvolvedor Front-end com experiência na criação de interfaces
          modernas e escaláveis.
        </motion.p>

        <motion.div
          className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </motion.div>

      <div ref={sectionRef} className="relative mx-auto mt-20 max-w-lg">
        <motion.div
          className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className="relative h-full w-full rounded-lg bg-gray-50 p-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.p
              className="font-handwriting text-lg font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Olá,
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="mr-1">Meu nome é</span>
              <span className="font-headline font-bold uppercase text-blue-900">
                Flávio Araújo
              </span>
            </motion.p>

            <motion.table
              className="mt-4 w-full text-xs"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.0,
                  },
                },
              }}
            >
              <tbody>
                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>22</td>
                </motion.tr>

                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <motion.a
                      href="mailto:flaviolopes1027@gmail.com"
                      className="underline hover:text-blue-800"
                      whileHover={{ scale: 1.05, color: "#1e40af" }}
                    >
                      flaviolopes1027@gmail.com
                    </motion.a>
                  </td>
                </motion.tr>

                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Localização:
                  </td>
                  <td>
                    <motion.a
                      href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/"
                      target="_blank"
                      className="underline hover:text-blue-800"
                      whileHover={{ scale: 1.05, color: "#1e40af" }}
                    >
                      São Paulo - SP
                    </motion.a>
                  </td>
                </motion.tr>

                <motion.tr
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                    </span>
                  </td>
                </motion.tr>
              </tbody>
            </motion.table>
          </motion.div>

          <motion.div
            className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url('https://cdn.dribbble.com/userupload/8932548/file/original-f92ffb8df782ef9392a1e48b1b955527.jpg?resize=1024x1280')] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            animate={
              isInView
                ? { opacity: 1, x: 0, rotate: 0 }
                : { opacity: 0, x: -50, rotate: -10 }
            }
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { duration: 0.2 },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
