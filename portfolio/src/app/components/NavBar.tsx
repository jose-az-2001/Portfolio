import { itemsNavbar } from "../../../data";
import Link from "next/link";


export default function NavBar(){
    return(
        <div className="fixed z-40 flex flex-col items-center justify-center w-full h-max bottom-10 mt-8 md:mt-12">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <div key = {item.id} className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
                            <Link href={item.link}>{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}