import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowRight,
  HiOutlineExternalLink,
  HiOutlineCode,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineBriefcase,
  HiOutlineSparkles,
} from "react-icons/hi";

type ProjectCategory = "professional" | "personal";

interface Project {
  id: string;
  title: string;
  client?: string;
  description: string;
  longDescription: string;
  image: string;
  thumbImage: string;
  technologies: string[];
  category: ProjectCategory;
  githubLink?: string;
  projectLink?: string;
  featured: boolean;
  color: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: "orango-senac",
      title: "Orango - Senac",
      client: "Senac",
      description: "Integração Wordpress-Moodle com design responsivo e fluido",
      longDescription:
        "Desenvolvimento de uma plataforma WordPress com integração perfeita ao Moodle através do plugin Edwiser. A integração compartilha dados de usuários e status de inscrição em cursos de maneira fluida. Implementei responsividade completa para garantir compatibilidade com todos os dispositivos e navegadores. O layout fluido foi criado utilizando as mais recentes técnicas de CSS, complementado com HTML, JavaScript e PHP para scripts personalizados no servidor e integrações com plugins.",
      image:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745712429/image_4_-elementor-io-optimized_j3migz.webp",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745713276/orango_thumb.webp",
      technologies: [
        "WordPress",
        "Moodle",
        "Edwiser",
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
      ],
      category: "professional",
      projectLink: "https://orango.senac.br",
      featured: true,
      color: "#FF5722",
    },
    {
      id: "senac-empresas",
      title: "Senac Empresas",
      client: "Senac",
      description: "Moodle Workplace customizado - único no Brasil",
      longDescription:
        "Criação de um ambiente Moodle Workplace totalmente personalizado, considerado um dos mais customizados no Brasil. Desenvolvimento de layout responsivo e adaptável a qualquer dispositivo. Implementação da biblioteca Glide.js para criar carrosséis únicos e interativos. Utilizei HTML, CSS e JavaScript para construir o layout e adicionar funcionalidades avançadas, resultando em uma plataforma moderna e intuitiva para treinamentos corporativos.",
      image:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714106/senac_empresas-elementor-io-optimized_js1ze1.webp",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714177/senac_empresas_1_-elementor-io-optimized_rt37ry.webp",
      technologies: [
        "Moodle Workplace",
        "HTML",
        "CSS",
        "JavaScript",
        "Glide.js",
      ],
      category: "professional",
      projectLink: "https://empresas.senac.br",
      featured: true,
      color: "#2196F3",
    },
    {
      id: "masterglobo",
      title: "Masterglobo",
      client: "Globo",
      description: "Layout customizado com gamificação para a Globo",
      longDescription:
        "Desenvolvimento de um layout totalmente personalizado no Moodle para a Globo, com foco em cursos únicos e intuitivos. Implementação de elementos de gamificação para aumentar o engajamento dos usuários. A plataforma foi construída com design responsivo, adaptando-se perfeitamente a qualquer tipo de dispositivo, desde smartphones até desktops. O resultado final elevou significativamente a experiência de aprendizado digital da empresa.",
      image: "/img/projects/masterglobo.png",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745713271/masterglobo-thumb.webp",
      technologies: ["Moodle", "HTML", "CSS", "JavaScript", "Gamificação"],
      category: "professional",
      projectLink: "https://master.globo.com/",
      featured: true,
      color: "#4CAF50",
    },
    {
      id: "portal-sicoob",
      title: "Portal Sicoob",
      client: "Sicoob",
      description: "Moodle personalizado com gamificação para treinamentos",
      longDescription:
        "Customização completa de plataforma Moodle para o Sicoob, focada em treinamentos corporativos. Desenvolvimento de cursos intuitivos com elementos de gamificação para aumentar o engajamento e a retenção de conhecimento. Criação de um layout único, moderno e completamente responsivo, garantindo uma experiência consistente em qualquer dispositivo. A plataforma integra recursos de aprendizado interativo e sistema de progressão que estimula a conclusão dos cursos.",
      image:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1750430481/Screenshot_from_2025-06-20_11-41-10_rnjtkf.png",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1750430481/Screenshot_from_2025-06-20_11-41-10_rnjtkf.png",
      technologies: [
        "Moodle",
        "HTML",
        "CSS",
        "JavaScript",
        "Gamificação",
        "Design Responsivo",
      ],
      category: "professional",
      projectLink: "https://sicoob.kaptiva.com.br",
      featured: false,
      color: "#FFC107",
    },
    {
      id: "linklist",
      title: "Linklist",
      description: "Plataforma de links personalizados para redes sociais",
      longDescription:
        "O Linklist é uma plataforma que permite aos usuários criar páginas personalizadas com uma coleção de links para suas redes sociais, sites, portfólios e muito mais. Desenvolvida com Next.js, TypeScript e Tailwind CSS, a aplicação oferece uma interface intuitiva e moderna para gerenciar todos os seus links importantes em um único lugar. Implementei autenticação de usuários, personalização visual completa e análise de cliques em cada link.",
      image:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714610/linklist-elementor-io-optimized_irewqe.webp",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714656/linklist_1_-elementor-io-optimized_nejybm.webp",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Authentication",
        "Analytics",
      ],
      category: "personal",
      githubLink: "https://github.com/FlavioAraujo23/Linklist",
      projectLink: "https://linklist.devbyflavio.com.br",
      featured: true,
      color: "#9C27B0",
    },
    {
      id: "todo-app",
      title: "To-do App",
      description: "Aplicação fullstack com atualizações em tempo real",
      longDescription:
        "Um projeto fullstack que oferece uma aplicação para gerenciamento de tarefas, onde os usuários podem criar, listar, editar, excluir e adicionar novas tarefas de forma intuitiva e eficiente. Implementei WebSockets para atualizações em tempo real, garantindo que as mudanças sejam refletidas instantaneamente em todos os dispositivos conectados. O frontend foi desenvolvido com React e Tailwind CSS, enquanto o backend utiliza Node.js e PostgreSQL para armazenamento persistente de dados.",
      image:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714605/todo-elementor-io-optimized_nhc1ln.webp",
      thumbImage:
        "https://res.cloudinary.com/de4veghwo/image/upload/v1745714660/todo_1_-elementor-io-optimized_uhon6f.webp",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "WebSockets",
        "Tailwind CSS",
      ],
      category: "personal",
      githubLink: "https://github.com/FlavioAraujo23/To-do",
      projectLink: "https://todoapp.devbyflavio.com.br",
      featured: true,
      color: "#E91E63",
    },
  ];

  // Ensure we always get the correct filtered projects based on category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  // Handler for clicking outside modal to close it
  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  // Open project details modal
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-24 text-white">
      {/* Background elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-pink-500 opacity-20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="mb-2 block text-lg font-semibold text-blue-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            MEUS TRABALHOS
          </motion.span>
          <motion.h2
            className="mb-6 text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="font-headline">Projetos </span>
            <span className="font-handwriting text-blue-600">Recentes</span>
          </motion.h2>
          <motion.div
            className="mx-auto mb-8 h-1 w-24 bg-blue-600"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="mx-auto max-w-2xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Confira alguns dos projetos profissionais e pessoais que desenvolvi,
            demonstrando minha experiência em criação de interfaces e
            plataformas interativas.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.button
            className={`rounded-full px-6 py-2 transition-all ${
              activeCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveCategory("all")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Todos
          </motion.button>
          <motion.button
            className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all ${
              activeCategory === "professional"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => {
              // Resetar qualquer animação pendente e atualizar o estado
              setTimeout(() => {
                setActiveCategory("professional");
              }, 10);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineBriefcase /> Profissionais
          </motion.button>
          <motion.button
            className={`flex items-center gap-2 rounded-full px-6 py-2 transition-all ${
              activeCategory === "personal"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => {
              // Resetar qualquer animação pendente e atualizar o estado
              setTimeout(() => {
                setActiveCategory("personal");
              }, 10);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiOutlineSparkles /> Pessoais
          </motion.button>
        </motion.div>

        {/* Featured Projects Carousel (visible above md breakpoint) */}
        {activeCategory === "all" && (
          <motion.div
            className="mb-20 hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div className="flex">
                  {featuredProjects.map((project, index) => (
                    <div
                      key={project.id + index}
                      className="min-w-full"
                      style={{
                        display: index === currentSlide ? "block" : "none",
                      }}
                    >
                      <div className="group relative h-[500px]">
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900/90 to-gray-900/60" />
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${project.image})` }}
                        />
                        <div className="absolute inset-0 z-20 flex items-center p-12">
                          <div className="w-1/2">
                            <span
                              className="mb-4 inline-block rounded px-3 py-1 text-xs font-semibold"
                              style={{ backgroundColor: project.color }}
                            >
                              {project.client || "Projeto Pessoal"}
                            </span>
                            <h3 className="mb-4 text-4xl font-bold">
                              {project.title}
                            </h3>
                            <p className="mb-6 text-gray-300">
                              {project.longDescription}
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                              {project.technologies
                                .slice(0, 4)
                                .map((tech, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full bg-gray-800 px-3 py-1 text-xs"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 4 && (
                                <span className="rounded-full bg-gray-800 px-3 py-1 text-xs">
                                  +{project.technologies.length - 4}
                                </span>
                              )}
                            </div>
                            <motion.button
                              onClick={() => openProjectDetails(project)}
                              className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 font-medium text-white transition-all"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: "#3b82f6",
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Ver detalhes <HiArrowRight />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute left-2 top-1/2 z-30 -translate-y-1/2 transform">
                <button
                  className="rounded-full bg-gray-900/80 p-2 text-white transition-colors hover:bg-gray-900"
                  onClick={prevSlide}
                >
                  <HiChevronLeft className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute right-2 top-1/2 z-30 -translate-y-1/2 transform">
                <button
                  className="rounded-full bg-gray-900/80 p-2 text-white transition-colors hover:bg-gray-900"
                  onClick={nextSlide}
                >
                  <HiChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {featuredProjects.map((_, i) => (
                  <button
                    key={i}
                    className={`h-3 w-3 rounded-full ${
                      i === currentSlide ? "bg-blue-600" : "bg-gray-600"
                    }`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            key={activeCategory} // Adiciona uma key com a categoria atual para forçar uma remontagem do componente
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible" // Alterando de whileInView para animate
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="h-full overflow-hidden rounded-xl bg-gray-800 shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 transform bg-cover bg-left transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.thumbImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

                  <div className="absolute left-4 top-4 z-10">
                    <span
                      className="inline-block rounded px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.client || "Projeto Pessoal"}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 line-clamp-2 h-12 text-sm text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="rounded bg-gray-700 px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded bg-gray-700 px-2 py-1 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.button
                      onClick={() => openProjectDetails(project)}
                      className="flex items-center gap-1 text-sm font-medium text-blue-400"
                      whileHover={{ x: 5, color: "#60a5fa" }}
                    >
                      Ver detalhes <HiArrowRight />
                    </motion.button>

                    <div className="flex gap-2">
                      {project.projectLink && (
                        <motion.a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-gray-700 p-2 text-gray-300 hover:bg-gray-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <HiOutlineExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}

                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-gray-700 p-2 text-gray-300 hover:bg-gray-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <HiOutlineCode className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="py-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-block rounded-full bg-gray-800 p-4">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold">
              Nenhum projeto encontrado
            </h3>
            <p className="mb-6 text-gray-400">
              Não encontramos projetos na categoria selecionada.
            </p>
            <motion.button
              onClick={() => setActiveCategory("all")}
              className="rounded-full bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos os projetos
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickOutside}
          >
            <motion.div
              ref={modalRef}
              className="max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-xl bg-gray-800"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative h-72 w-full sm:h-96">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20" />

                <div className="absolute right-4 top-4">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span
                    className="mb-2 inline-block rounded px-3 py-1 text-xs font-semibold"
                    style={{ backgroundColor: selectedProject.color }}
                  >
                    {selectedProject.client || "Projeto Pessoal"}
                  </span>
                  <h2 className="mb-2 text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="mb-3 text-xl font-bold text-blue-400">
                    Sobre o projeto
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="mb-3 text-xl font-bold text-blue-400">
                    Tecnologias utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-700 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.projectLink && (
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                    >
                      Ver projeto online{" "}
                      <HiOutlineExternalLink className="h-5 w-5" />
                    </a>
                  )}

                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-600"
                    >
                      Código no GitHub <HiOutlineCode className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
