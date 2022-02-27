import Link from "next/link";
import { navLinks } from "./navLinks";

const Nav = () => {
  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between p-4 bg-zinc-800">
        {navLinks &&
          navLinks.map((link, index) => {
            return (
              <ul key={index} className="text-emerald-500">
                <Link href={link.path} passHref>
                  <li key={index}>{link.name}</li>
                </Link>
              </ul>
            );
          })}
      </nav>
    </header>
  );
};

export default Nav;
