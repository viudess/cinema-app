import Navbar from "../Navbar"

export default function Header2() {
    return(
        <>
            <div className="flex justify-around items-center">
                    <img className="size-1/12" src="../../public/logo-otbm.png" alt="" />
                <div>
                    <Navbar />
                </div>
            </div>
        </>
    )
}