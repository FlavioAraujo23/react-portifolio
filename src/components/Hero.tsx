import { HiDownload } from "react-icons/hi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      <section className="overflow-hidden rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col p-2 py-12 md:flex-row">
          <div className="basis-1/2">
            <motion.h1
              className="mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="block text-center font-handwriting text-3xl md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Olá, me chamo
              </motion.span>
              <motion.span
                className="font-headline text-5xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Flávio
              </motion.span>
              <motion.span
                className="ml-1 font-headline text-5xl font-light text-blue-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Araújo
              </motion.span>
            </motion.h1>

            <motion.h2
              className="flex items-center gap-2 text-center font-semibold md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                className="h-1 w-0 rounded-full bg-blue-800"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
              Desenvolvedor Front-end na Kaptiva
            </motion.h2>

            <motion.p
              className="my-6 text-center text-gray-400 md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Criando interfaces modernas e intuitivas com React, TypeScript e
              Next.js. Especialista em desenvolvimento web com experiência em
              projetos fullstack.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.a
                href="mailto:flaviolopes1027@gmail.com"
                className="button bg-blue-600 text-white hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale Comigo
              </motion.a>

              <motion.a
                href="/download/Cv_Flavio_Araujo.docx.pdf"
                download={"CV__Flavio__Araujo.pdf"}
                className="button flex items-center gap-2 border border-blue-600 bg-transparent text-blue-400 hover:bg-blue-600/10"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(37, 99, 235, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload />
                Baixe meu CV
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/flavio23/"
                target="_blank"
                rel="noopener noreferrer"
                className="button flex items-center gap-2 border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(75, 85, 99, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <HiArrowTopRightOnSquare />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <div className="flex basis-1/2 items-center justify-center">
            <motion.div
              className="relative mt-6 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
            >
              <motion.div
                className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="https://res.cloudinary.com/de4veghwo/image/upload/v1745705665/herosection.png"
                  alt="Flávio Araújo"
                  className="h-full w-full object-cover"
                />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-2"
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >
                  <div className="flex justify-center gap-2 pb-2">
                    <motion.div
                      className="h-2 w-2 rounded-full bg-blue-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0 }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-blue-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                    />
                    <motion.div
                      className="h-2 w-2 rounded-full bg-blue-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -right-2 -top-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
              >
                Disponível para contratação
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.div
        className="absolute left-0 -mt-2 h-3 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600"
        initial={{ width: 0 }}
        animate={{ width: "25%" }}
        transition={{ delay: 2, duration: 1 }}
      />
    </>
  );
}
