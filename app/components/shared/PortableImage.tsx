import Image from "next/image";
// import { urlFor } from "@/lib/sanity.image";

type imageProp = {
  value: {
    alt: string;
    caption: string;
  };
};

export default function SampleImageComponent({ value }: imageProp) {
  return (
    <figure className="my-10 relative">
      <Image
        className="rounded-sm object-contain object-left-top aspect-auto"
        src="https://victoreke.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fux9nag6z%2Fproduction%2Fff532fde0bf9705d47ef2e7d41145f66fa937694-873x1141.jpg&w=640&q=100"
        alt={value.alt || ""}
        loading="lazy"
        width={900}
        height={900}
        placeholder="blur"
        quality={100}
        // blurDataURL={urlFor(value).blur(10).quality(100).url()}
      />
      {value.caption && (
        <figcaption className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
}
