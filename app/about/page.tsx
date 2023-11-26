import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { CustomPortableText } from "../components/shared/CustomPortableText";
import Heroes from "../components/pages/Heroes";
import Usage from "../components/pages/Usage";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "About | Alejandro Rodríguez López",
  metadataBase: new URL("https://arodriguezl.me/about"),
  description:
    "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Alejandro Rodríguez López",
    url: "https://arodriguezl.me/about",
    description:
      "Learn more about my skills, experience and technical background",
    // images:
    //   "https://res.cloudinary.com/victoreke/image/upload/v1692635746/victoreke/og.png",
  },
};

export default async function About() {
  const example = [
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "normal",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: `Hello! My name is Alejandro and I enjoy creating things that live on the Internet. My interest in web development began in 2012, when I decided to learn php and use Codeigniter. It turns out that working with Codeigniter taught me a lot about Php and the world of programming!`,
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "normal",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "Fast forward to today and I have had the privilege of working at valuable companies using php and other languages. My main goal these days is to create accessible and inclusive digital products and experiences for a variety of customers.",
          marks: [],
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "blockquote",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "If you ever spot me in the wild, don't hesitate to say hello! Let's grab a drink and geek-out over the latest advancements in tecnology development or discuss our favorite programming language. ⚡",
          marks: [],
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "h2",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          style: "h4",
          text: "Soft Skills",
          marks: [],
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "normal",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          style: "h4",
          text: "Certain skills I've picked along the way that deserves mentioning:",
          marks: [],
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "list",
      listItem: "bullet",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "Attention to detail:",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: " I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.",
          marks: [],
        },
      ],
    },
    {
      // Rich text block (paragraph/header/list/quote)
      _type: "block",
      _key: "2ca469a56edd",
      // Block type: "paragraph"
      style: "list",
      listItem: "bullet",
      // Marks enrich text with custom data or formatting, defined here
      children: [
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: "Ability to work with little supervision:",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "59e1710cc3f8",
          text: " I understand people are busy and would love to get things done timely, so I do my best in delivering assignments and projects with little supervision, sparing you the need to closely manage/oversee my work.",
          marks: [],
        },
      ],
    },
  ];

  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m Alejandro Rodríguez López. I live in Cuba, where I
                build the future.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                <PortableText value={example} components={CustomPortableText} />
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                {/* <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src="https://victoreke.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fux9nag6z%2Fproduction%2Fff532fde0bf9705d47ef2e7d41145f66fa937694-873x1141.jpg&w=640&q=100"
                  width={400}
                  height={400}
                  quality={100}
                  alt="lolo"
                  // placeholder="blur"
                  // blurDataURL={data.profileImage.lqip}
                  priority
                /> */}

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <a
                      href="http://localhost:3000/CV_arodriguezl.pdf"
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      Download Resumen <BiSolidDownload className="text-base" />
                    </a>
                  </div>

                  <a
                    href={`mailto:ale@lolo.com`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    arodriguezl9302@gmail.com
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
        <Slide delay={0.14}>
          <Usage />
        </Slide>
        {/* <Heroes /> */}
      </div>
    </main>
  );
}
