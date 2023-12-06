import { PortableText } from "@portabletext/react";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import CustomUsage from "../global/CustomUsage";

export default async function Usage() {
  // const tecnologies = [
  //   {
  //     // Rich text block (paragraph/header/list/quote)
  //     _type: "block",
  //     _key: "2ca469a56edd",
  //     // Block type: "paragraph"
  //     style: "h3",
  //     // Marks enrich text with custom data or formatting, defined here
  //     children: [
  //       {
  //         _type: "span",
  //         _key: "59e1710cc3f8",
  //         text: "Tecnologies",
  //         marks: [],
  //       },
  //     ],
  //   },
  //   // {
  //   //   // Rich text block (paragraph/header/list/quote)
  //   //   _type: "block",
  //   //   _key: "2ca469a56edd",
  //   //   // Block type: "paragraph"
  //   //   style: "list",
  //   //   // Marks enrich text with custom data or formatting, defined here
  //   //   children: [
  //   //     {
  //   //       _type: "span",
  //   //       _key: "59e1710cc3f8",
  //   //       text: "ReactJs: ",
  //   //       value: { href: "http://reactjs.org" },
  //   //       marks: ["link"],
  //   //     },
  //   //     {
  //   //       _type: "span",
  //   //       _key: "59e1710cc3f8",
  //   //       text: "- UI Library",
  //   //       marks: [],
  //   //     },
  //   //   ],
  //   // },
  // ];

  // const tools = [
  //   {
  //     // Rich text block (paragraph/header/list/quote)
  //     _type: "block",
  //     _key: "2ca469a56edd",
  //     // Block type: "paragraph"
  //     style: "h3",
  //     // Marks enrich text with custom data or formatting, defined here
  //     children: [
  //       {
  //         _type: "span",
  //         _key: "59e1710cc3f8",
  //         text: "Tools",
  //         marks: [],
  //       },
  //     ],
  //   },
  // ];

  const libraries = [
    {
      link: "https://lenguajejs.com/",
      text: "JavaScript",
      description: " - Programing Language",
    },
    {
      link: "https://www.typescriptlang.org",
      text: "TypeScript",
      description: " - Typed Superset of JavaScript Library",
    },
    {
      link: "https://www.php.net",
      text: "PHP",
      description: " - Programing Language",
    },
    {
      link: "https://lenguajehtml.com/html/",
      text: "HTML",
      description: " - Programing Language",
    },
    {
      link: "https://lenguajecss.com/",
      text: "CSS",
      description: " - Styling Language",
    },
    {
      link: "https://expressjs.com/",
      text: "ExpressJS",
      description: " - NodeJs Framework",
    },
    {
      link: "https://nestjs.com/",
      text: "NestJs",
      description: " - NodeJs Framework",
    },
    {
      link: "https://laravel.com/",
      text: "Laravel",
      description: " - PHP Framework",
    },
    {
      link: "https://codeigniter.com",
      text: "Codeigniter",
      description: " - PHP Framework",
    },
    {
      link: "https://react.dev",
      text: "ReactJs",
      description: " - JavaScript UI Library",
    },
    {
      link: "https://vuejs.org/",
      text: "VueJs",
      description: " - JavaScript UI Library",
    },
    {
      link: "https://nextjs.org/",
      text: "NextJs",
      description: " - React Framework",
    },
    {
      link: "https://tailwindcss.com",
      text: "TailwindCss",
      description: " - Styling Library",
    },
    {
      link: "https://www.mysql.com/",
      text: "MysQl",
      description: " - Database",
    },
    {
      link: "https://docker.com/",
      text: "Docker",
      description: " - Operating System (or runtime) for containers",
    },
    {
      link: "https://git-scm.com/",
      text: "Git",
      description: " - Version Control System",
    },
    {
      link: "https://www.digitalocean.com/",
      text: "DigitalOcean",
      description: " - a SaaS app, an AI/ML business, and website store",
    },
    {
      link: "https://aws.amazon.com/",
      text: "Azure",
      description: " - Deployments",
    },
    {
      link: "https://www.prisma.io/",
      text: "PrismaIO",
      description: " - Next-generation Node.js and TypeScript ORM",
    },
  ];

  // const toolshow = [
  //   {
  //     link: "https://code.visualstudio.com",
  //     text: "VSCode",
  //     description: " - Text Editor",
  //   },
  //   {
  //     link: "https://www.google.com/chrome/",
  //     text: "Chrome",
  //     description: " - Web Browser",
  //   },
  //   {
  //     link: "https://www.mozilla.org/en-US/firefox/new/",
  //     text: "Firefox",
  //     description: " - Web Browser",
  //   },
  //   {
  //     link: "https://www.figma.com/",
  //     text: "Figma",
  //     description: " - Design Tool",
  //   },
  // ];

  return (
    <section className="max-w-2xl">
      <CustomUsage libraries={libraries} />
    </section>
  );
}
