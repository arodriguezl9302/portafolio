import Image from "next/image";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { projects } from "@/app/data/projects";

type Props = {
  params: {
    project: string;
  };
};

const fallbackImage: string =
  "https://avatars.githubusercontent.com/u/24697827?v=4";

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project = projects.find((project) => project.slug === slug);

  return {
    title: `${project?.name} | Project`,
    metadataBase: new URL(`https://arodriguezl.me/projects/${project?.slug}`),
    description: project?.description,
    openGraph: {
      images: fallbackImage,
      url: `https://arodriguezl.me/projects/${project?.slug}`,
      title: project?.name,
      description: project?.description,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = projects.find((project) => project.slug === slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-sm">
              {project?.name}
            </h1>

            <a
              href={project?.link}
              rel="noreferrer noopener"
              target="_blank"
              className={`dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 ${
                !project?.link
                  ? "cursor-not-allowed opacity-80"
                  : "cursor-pointer hover:border-zinc-700"
              }`}
            >
              {project?.link ? "Explore" : "Coming Soon"}
            </a>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={project?.image || fallbackImage}
              alt={project?.name || "Project Image"}
              quality={100}
              // placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              // blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <PortableText
              value={project!.overview}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
