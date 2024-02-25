import { HiCodeBracket } from "react-icons/hi2";
import { HiLink } from "react-icons/hi2";

export function Projects() {
  const projects = [
    {
      title: "Bikcraft",
      description: "Site fictício de bicicletas elétricas, criado como projeto final do curso de HTML e CSS para Iniciantes - Origamid. Neste projeto trabalhei com CSS, HTML e JavaScript.",
      image:
        "/img/bikcraftCode.jpg",
      projectLink: 'https://flavioaraujo23.github.io/bikcraft/',
      link: "https://flavioaraujo23.github.io/bikcraft/",
      colSpan: "col-span-1 ",
    },
    {
      title: "To-do App",
      description: "Um projeto fullstack que oferece uma aplicação para gerenciamento de tarefas, onde os usuários podem criar, listar, editar, excluir e adicionar novas tarefas de forma intuitiva e eficiente.",
      image:
        "/img/imageForProject.jpg",
      projectLink: 'https://todoapp.devbyflavio.com.br/',
      link: "https://github.com/FlavioAraujo23/To-do",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Cofrinho Java",
      description: "Trabalho da faculdade para a matéria de orientação a objetos, onde busco praticar minhas habilidades aprendidas, com um projeto de cofrinho na linguagem Java, que é uma linguagem que utiliza o paradigma da programação orientação ao objeto",
      image:
        "/img/codeImage.jpg",
      projectLink: '',
      link: "https://github.com/FlavioAraujo23/Cofrinho-Java",
      colSpan: "col-span-1",
    },
    {
      title: "Animais Fantásticos",
      description: "Um projeto incrível desenvolvido através do curso da Origamid, totalmente construído em JavaScript.  Nele foi abordado todos os aspéctos do javaScript desde o básico até o mais avançado",
      image:
        "/img/animaisFantasticosImg.jpg",
      projectLink: 'https://animais-fantasticos-blush.vercel.app/',
      link: "https://github.com/FlavioAraujo23/animaisFantasticos",
      colSpan: "col-span-1",
    },
    {
      title: "Calculadora",
      description: "Desafio de programar uma calculadora em React proposto pelo Vai na Web",
      image:
        "/img/imageForProject.jpg",
      projectLink: 'https://desafio-calculadora-roan.vercel.app/',
      link: "https://github.com/FlavioAraujo23/desafio-calculadora",
      colSpan: "col-span-1",
    },
    {
      title: "Linklist",
      description: "O Linklist é uma plataforma que permite aos usuários criar páginas personalizadas com uma coleção de links para suas redes sociais, sites, portfólios e muito mais.",
      image:
        "/img/imageForProject.jpg",
      projectLink: 'https://linklist.devbyflavio.com.br/',
      link: "https://github.com/FlavioAraujo23/Linklist",
      colSpan: "col-span-1 md:col-span-2",
    },
    

  ]

  return (
    <>
       <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 ml-2 text-sm sm:text-xs">{project.description}</p>
                  <div className="flex gap-5 justify-center items-center">
                    <a href={project.link} target="_blank">
                      <HiCodeBracket className="h-6 w-6 hover:fill-cyan-200" />
                    </a>
                    <a href={project.projectLink} target="_blank">
                      <HiLink className="h-6 w-6 hover:fill-cyan-200" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}