import Link from "next/link";
import Image from "next/legacy/image";

export default async function FeaturedPosts({ params }: { params?: string }) {
  return (
    <>
      <article className={`mb-4 flex lg:flex-row flex-col`}>
        <Link
          href={`/blog/asas`}
          className="flex flex-col gap-4 dark:bg-primary-bg bg-secondary-bg p-5 rounded-lg border dark:border-zinc-800 border-zinc-200"
        >
          {/* <Image
                src={post.coverImage?.image}
                className="dark:bg-zinc-800 bg-zinc-100 rounded-md object-cover"
                alt={post.coverImage?.alt || post.title}
                width={400}
                height={230}
                placeholder={post.coverImage ? "blur" : "empty"}
                blurDataURL={post.coverImage?.lqip || ""}
                quality={100}
                loading="lazy"
              /> */}
          <div className="max-w-lg">
            <h2 className="max-w-sm text-lg tracking-tight mb-4">saludos</h2>
            <p className="dark:text-zinc-400 text-zinc-600 text-sm">
              description
            </p>
          </div>
        </Link>
      </article>
    </>
  );
}
