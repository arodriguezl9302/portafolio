import Image from "next/legacy/image";
import Link from "next/link";
import EmptyState from "../shared/EmptyState";
import { BiTime } from "react-icons/bi";
import { formatDate } from "../../utils/date";
import { HiCalendar } from "react-icons/hi";

const fallbackImage: string =
  "https://res.cloudinary.com/victoreke/image/upload/v1692608339/victoreke/blog.png";

export default async function Posts() {
  return (
    <section>
      <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
        <article>
          <Link
            href={`/blog/asas`}
            className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
          >
            <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-clip">
              <Image
                src="https://victoreke.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8cca8355.png&w=48&q=75"
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover group-hover:scale-125 duration-300"
                alt={`asasas`}
                layout="fill"
                blurDataURL={""}
              />
            </div>
            <div className="max-w-lg">
              <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                post title
              </h2>
              <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
                description
              </p>
              <div className="flex items-center gap-x-4 mt-3 text-sm">
                <div className="flex items-center gap-x-2">
                  <HiCalendar />
                  {/* <time dateTime={}>2020-12-34</time> */}
                  2023-11-28
                </div>
                {/* <div className="flex items-center gap-x-2">
                        <BiTime />
                        <p className="">5 min</p>
                      </div> */}
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
