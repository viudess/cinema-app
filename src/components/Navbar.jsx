import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <>
        <div>
            <ul className="flex justify-end flex-row text-white text-2xl font-normal p-6 space-x-5">
                <li className="hover:font-semibold">
                    <Link to ="/">Home</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link to ="/pesquisa">Pesquisa</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link to ="/blog">Blog</Link>
                </li>
                <li className="hover:font-semibold">
                    <Link to ="/contacts">Contatos</Link>
                </li>
            </ul>
        </div>
        </>
    )
}