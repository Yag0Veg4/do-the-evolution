import Link from "next/link";
import { IconVinyl } from "@tabler/icons-react";

function Navbar() {
  return (
    <div className="bg-lime-800 text-white w-100 p-5">
      <header className="flex justify-between items-center">
        <div>
          <Link href={"/"} className="flex text-lime-400 hover:text-lime-600">
            <div className="flex justify-center border border-lime-400 hover:border-lime-600 hover:text-lime-600 rounded-full mr-2">
              <IconVinyl className="m-1"/>
            </div>
            <p className="text-2xl font-bold">UMM</p>
          </Link>
        </div>
        <ul className="flex gap-5">
          <li><Link href='/new'>Agregar</Link></li>
          <li><Link href='/profile'>Perfil</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
