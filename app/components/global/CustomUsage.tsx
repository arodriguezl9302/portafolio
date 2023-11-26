import Favicon from "@/app/utils/favicon";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

type data = {
  link: string;
  text: string;
  description: string;
};

type Props = {
  libraries: data[];
};

const CustomUsage: React.FC<Props> = ({ libraries }) => {
  return (
    <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
      {libraries.map((library) => (
        <li key={library.link}>
          <a
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
            href={library.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            {library.link ? (
              <Favicon domain={library.link} alt={library.link} />
            ) : (
              <BiLinkExternal />
            )}
            {library.text}
          </a>
          {library.description}
        </li>
      ))}
    </ul>
  );
};

export default CustomUsage;
