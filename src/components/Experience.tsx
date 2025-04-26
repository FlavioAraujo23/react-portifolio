import { HiBriefcase, HiCalendar } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Experience() {
  const sectionRef = useRef(null);
  const { isInView } = useScrollAnimation(sectionRef, 0.1);

  const experiences = [
    {
      title: "Assistente de Desenvolvimento de Software",
      company: "Kaptiva Soluções Educacionais",
      period: "Setembro 2024 - Atual",
      description: [
        "Configuração de dashboards interativos, áreas de alunos e gamificação no Moodle.",
        "Criação de páginas personalizadas com HTML, CSS, Bootstrap e JavaScript dentro do Moodle.",
        "Desenvolvimento e otimização de plataformas para grandes empresas como Senac, Globo, Sicoob e outras.",
        "Criação de relatórios analíticos personalizados no Zoho Analytics, integrando dados do Moodle via PHP e SQL.",
        "Customização de WordPress com Elementor, garantindo design responsivo e otimizado.",
        "Implementação e personalização de Moodle Workplace com HTML, CSS e JavaScript.",
        "Integração de autenticação OAuth2 no Moodle para maior segurança e compatibilidade.",
      ],
    },
    {
      title: "Estagiário de Desenvolvimento Web",
      company: "Kaptiva Soluções Educacionais",
      period: "Agosto 2023 - Setembro 2024",
      description: [
        "Configuração de dashboards e gamificação no Moodle.",
        "Desenvolvimento de páginas personalizadas no Moodle com HTML, CSS, Bootstrap e JavaScript.",
      ],
    },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section ref={sectionRef} className="container mx-auto my-12 max-w-4xl p-4">
      <motion.div
        className="p-4 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <motion.p
          className="text-sm font-semibold uppercase text-blue-600"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.4 },
            },
          }}
        >
          Minha trajetória profissional
        </motion.p>

        <motion.h2
          className="mb-2 font-bold text-blue-900"
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.4 },
            },
          }}
        >
          <span className="mr-2 font-headline text-3xl">Experiência</span>
          <span className="font-handwriting text-4xl">Profissional</span>
        </motion.h2>

        <motion.p
          className="text-sm text-gray-600"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.4 },
            },
          }}
        >
          Conheça minha experiência e evolução na área de desenvolvimento.
        </motion.p>
      </motion.div>

      <div className="relative ml-4 mt-8 border-l-2 border-transparent pb-8 pl-8">
        {/* Animated timeline line */}
        <motion.div
          className="absolute bottom-0 left-0 top-0 w-0.5 bg-blue-600"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={lineVariants}
          style={{ originY: 0 }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={`experience-${index}`}
            className={`relative mb-10 ${
              index === experiences.length - 1 ? "mb-0" : ""
            }`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              delay: 0.5 + index * 0.2,
              duration: 0.6,
              type: "spring",
            }}
          >
            <motion.div
              className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                delay: 0.7 + index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
            >
              <HiBriefcase />
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-md sm:flex-row"
              whileHover={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex-1">
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                >
                  {exp.title}
                </motion.h3>

                <motion.p
                  className="font-medium text-blue-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.4 }}
                >
                  {exp.company}
                </motion.p>

                <motion.div
                  className="mb-4 mt-1 flex items-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.0 + index * 0.2, duration: 0.4 }}
                >
                  <HiCalendar className="mr-1" />
                  {exp.period}
                </motion.div>

                <motion.ul
                  className="ml-4 list-disc space-y-2 text-gray-600"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
