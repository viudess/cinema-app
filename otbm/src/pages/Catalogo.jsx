import Navbar from "../components/Navbar"

export default function Catalogo() {
    return(
        <>
        <main>
            <div className="flex justify-around items-center">
                <img className="size-1/12" src="../../public/logo-otbm.png" alt="" />
                <div>
                    <Navbar />
                </div>
            </div>
        </main>
        
        </>
    )
}