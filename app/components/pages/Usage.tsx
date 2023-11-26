import { PortableText } from "@portabletext/react";
import { CustomPortableTextFavicon } from "../shared/CustomPortableTextFavicon";
import CustomUsage from "../global/CustomUsage";

export default async function Usage() {
  const tecnologies = [
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "h3",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "Tecnologies",
          marks: [],
        },
      ],
    },
    // {
    //   // Rich text block (paragraph/header/list/quote)
    //   _type: "block",
    //   _key: "2ca469a56edd",
    //   // Block type: "paragraph"
    //   style: "list",
    //   // Marks enrich text with custom data or formatting, defined here
    //   children: [
    //     {
    //       _type: "span",
    //       _key: "59e1710cc3f8",
    //       text: "ReactJs: ",
    //       value: { href: "http://reactjs.org" },
    //       marks: ["link"],
    //     },
    //     {
    //       _type: "span",
    //       _key: "59e1710cc3f8",
    //       text: "- UI Library",
    //       marks: [],
    //     },
    //   ],
    // },
  ];

  const tools = [
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "h3",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "Tools",
          marks: [],
        },
      ],
    },
  ];

  const libraries = [
    {
      link: "https://react.dev",
      text: "ReactJs",
      description: " - UI Library",
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
      link: "https://www.typescriptlang.org",
      text: "TypeScript",
      description: " - Typed Superset of JavaScript Library",
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
  ];

  const toolshow = [
    {
      link: "https://code.visualstudio.com",
      text: "VSCode",
      description: " - Text Editor",
    },
    {
      link: "https://www.google.com/chrome/",
      text: "Chrome",
      description: " - Web Browser",
    },
    {
      link: "https://www.mozilla.org/en-US/firefox/new/",
      text: "Firefox",
      description: " - Web Browser",
    },
    {
      link: "https://www.figma.com/",
      text: "Figma",
      description: " - Design Tool",
    },
  ];

  return (
    <section className="max-w-2xl">
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Usage</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Tools, technologies and gadgets I use on a daily basis but not limited
          to.
        </p>
      </div>
      <PortableText
        value={tecnologies}
        components={CustomPortableTextFavicon}
      />
      <CustomUsage libraries={libraries} />
      <PortableText value={tools} components={CustomPortableTextFavicon} />
      <CustomUsage libraries={toolshow} />
    </section>
  );
}
