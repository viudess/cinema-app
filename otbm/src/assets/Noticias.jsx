import Footer from "../components/Footer"

function exemploNoticias(imagem, titulo, noticia) {
    return(
        <>
        <main className="mb-5">
            <div className="flex justify-center">
                <img className="w-11/12" src="../../public/divisor.png" alt="" />
            </div>
            <div className="flex mt-5 space-x-6">
                <div className="flex justify-center">
                    <img className="w-7/12" src={imagem} alt="" />
                </div>
                <div className="text-white size-5/12 mt-12">
                    <h1 className="text-4xl mb-9 font-bold">{titulo}</h1>

                    <p className="text-xl">{noticia}</p>
                </div>
            </div>
        </main>
        </>
    )
}

export default function Noticias() {

    const separacao = [
        {
            imagem: "../../public/imgexemp.png",
            titulo: "Divertidamente 2, agora no dia 20 de junho",
            noticia: "Divertida Mente 2, da Disney e Pixar, volta a entrar na mente da agora adolescente Riley, no momento em que a Sala de Comando passa por uma repentina demolição para dar lugar a algo totalmente inesperado: novas Emoções."
        },
        {
            imagem: "../../public/imgexemp.png",
            titulo: "Divertidamente 2, agora no dia 20 de junho",
            noticia: "Divertida Mente 2, da Disney e Pixar, volta a entrar na mente da agora adolescente Riley, no momento em que a Sala de Comando passa por uma repentina demolição para dar lugar a algo totalmente inesperado: novas Emoções."
        }

    ]
    return(
        <>
        <div>
            {separacao.map(parametros => 
                exemploNoticias(parametros.imagem, parametros.titulo, parametros.noticia)
            )}
        </div>
        <Footer />
        </>
    )
}