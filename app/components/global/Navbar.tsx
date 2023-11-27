import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logoAle3.png";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const data = [
    // {
    //   title: "About",
    //   href: "/about",
    // },
    {
      title: "Projects",
      href: "/projects",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    // },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <Image src={Logo} width={45} height={45} alt="logo" />
            </Link>
            <Link
              href="/"
              className="font-incognito dark:text-white text-zinc-600  hover:text-zinc-900 duration-300 text-base"
            >
              Arodriguezl
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <nav className="md:block hidden">
              <ul className="flex items-center gap-x-8">
                {data.map((link, id) => (
                  <li key={id}>
                    <Link
                      href={link.href}
                      className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-x-4">
              <Theme />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
