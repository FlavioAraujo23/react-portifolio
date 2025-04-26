import { HiBriefcase, HiCalendar } from "react-icons/hi2";

export function Experience() {
  const experiences = [
    {
      title: "Assistente de Desenvolvimento de Software",
      company: "Kaptiva Soluções Educacionais",
      companyLink: "https://kaptiva.com.br/",
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
      companyLink: "https://kaptiva.com.br/",
      period: "Agosto 2023 - Setembro 2024",
      description: [
        "Configuração de dashboards e gamificação no Moodle.",
        "Desenvolvimento de páginas personalizadas no Moodle com HTML, CSS, Bootstrap e JavaScript.",
      ],
    },
  ];

  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <h2 className="mb-2 font-bold text-blue-900">
          <span className="mr-2 font-headline text-3xl">Experiência</span>
          <span className="font-handwriting text-4xl">Profissional</span>
        </h2>
        <p className="text-sm text-gray-600">
          Conheça minha experiência e evolução na área de desenvolvimento.
        </p>
      </div>

      <div className="relative ml-4 mt-8 border-l-2 border-blue-600 pb-8 pl-8">
        {experiences.map((exp, index) => (
          <div
            key={`experience-${index}`}
            className={`relative mb-10 ${
              index === experiences.length - 1 ? "mb-0" : ""
            }`}
          >
            <div className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              <HiBriefcase />
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5 shadow-md sm:flex-row">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <a
                  className="font-medium text-blue-600"
                  href={exp.companyLink}
                  target="_blank"
                >
                  {exp.company}
                </a>
                <div className="mb-4 mt-1 flex items-center text-sm text-gray-500">
                  <HiCalendar className="mr-1" />
                  {exp.period}
                </div>

                <ul className="ml-4 list-disc space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
