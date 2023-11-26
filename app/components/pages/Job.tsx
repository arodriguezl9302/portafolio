import React from "react";
import Image, { StaticImageData } from "next/image";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";

type work = {
  job_name: string;
  job_title: string;
  link: string;
  description: string;
  image: StaticImageData;
  init_date: string;
  end_date?: string;
};

type Props = {
  works?: work[];
};

const Job: React.FC<Props> = ({ works }) => {
  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Work Experience
          </h2>
        </div>
      </Slide>

      <Slide delay={0.18}>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10">
          {works &&
            works.map((work) => (
              <div
                key={work.link}
                className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <a
                  href={work.link}
                  rel="noreferrer noopener"
                  target={work.link != "#" ? "_blank" : "_self"}
                  className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
                >
                  <Image
                    src={work.image}
                    className="object-cover duration-300"
                    alt={` logo`}
                    width={50}
                    height={50}
                  />
                </a>
                <div className="flex flex-col items-start">
                  <h3 className="text-xl font-bold">{work.job_name}</h3>
                  <p>{work.job_title}</p>
                  <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {formatDate(work.init_date)} -{" "}
                    {work.end_date ? (
                      formatDate(work.end_date)
                    ) : (
                      <span className="dark:text-primary-color text-tertiary-color">
                        Present
                      </span>
                    )}
                  </time>
                  <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Slide>
    </section>
  );
};

export default Job;
