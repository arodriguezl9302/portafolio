import HeroSvg from "./icons/HeroSvg";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import Azordev from "@/public/azordev.png";
import Cedipad from "@/public/cedipad.png";
import LogoAle from "@/public/logoAle3.png";
import NexoLife from "@/public/nexolife.png";
import Usage from "./components/pages/Usage";

export default async function Home() {
  const works = [
    {
      job_name: "NEXOLIFE",
      job_title: "Software developer",
      link: "https://www.nexolife.com/",
      image: NexoLife,
      init_date: "2022-06-28",
      description: `SoftWare developer using the JavaScript language, specifically the NestJs framework as work tools along with other technologies such as Prisma, Mysql among others.`,
    },
    {
      job_name: "AZORDEV",
      job_title: "Software developer",
      link: "https://www.azordev.com/",
      image: Azordev,
      init_date: "2021-12-28",
      end_date: "2022-06-19",
      description: `SoftWare developer with the JavaScript language, using the
      ReactJs and React Native library as work tools, where inter-
      national level applications were created.`,
    },
    {
      job_name: "CEDIPAD",
      job_title: "Software developer",
      link: "https://www.gind.cu/?page_id=2282",
      image: Cedipad,
      init_date: "2020-06-10",
      end_date: "2021-02-19",
      description: `In this position I worked as a SoftWare developer in the PHP
      language with the Laravel Framework, where I had the
      opportunity to develop applications used nationally in Cuba.`,
    },
    {
      job_name: "AUTODIDACT",
      job_title: "Software developer",
      link: "#",
      image: LogoAle,
      init_date: "2012-03-10",
      end_date: "2013-06-19",
      description: `I develop a Software for student control, in the PHP language
      using the CodeIgniter Framework, reaching awards at the
      international event Pedagogía 2013`,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-black tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              FullStack software developer passionate about creating solutions
              and contributing to online communities
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I have more than 6 years of experience as part of national and
              international companies, where I have worked as a Software
              Developer, both as Web, Mobile, FrontEnd and Backend
              {/* , using modern
              technologies such as ReactJs, React Native, Vuejs, Html5, Css3,
              Laravel , NestJs, ExpressJs, InertiaJs, PostgreSQL, Mysql,
              MongoDB, Docker among many others */}
            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <Job works={works} />
    </main>
  );
}
