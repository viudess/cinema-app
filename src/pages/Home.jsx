import CardsLine from "../assets/CardsLine"
import Banner1 from "../../public/banner1.png";

export default function Home() {
    return(
        <>
            <main>
            <div className="flex-col">
                    <div className="flex justify-center">
                        <img className="size-10/12" src={Banner1} alt="" />
                    </div>
            </div>
                <CardsLine />
            </main>
        </>
    )
}