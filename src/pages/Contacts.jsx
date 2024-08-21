import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contacts() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_9997kut", "template_8isku0w", templateParams, "236LkqJ-Jzma4XSNe")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }), (erro) => {
            console.log("Erro", erro)
        }
    }

    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-white text-5xl w-11/12 text-center pt-10">Contate-nos</h1>
            </div>
                <div className="flex justify-center mt-12">
                    <form action="" onSubmit={sendEmail} className="flex flex-col w-7/12">

                        <input 
                        type="text" 
                        placeholder="Nome" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-[#090909] text-white placeholder:text-white/70 placeholder:text-3xl mb-5 border-b-8 border-[#6100FF] py-1 focus:outline-none text-3xl"/>

                        <input 
                        type="email" 
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-[#090909] text-white placeholder:text-white/70 placeholder:text-3xl mb-5 border-b-8 border-[#6100FF] py-1 focus:outline-none text-3xl"/>

                        <input
                        type="text" 
                        placeholder="Mensagem" 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="bg-[#090909] text-white placeholder:text-white/70 placeholder:text-3xl mb-5 border-b-8 border-[#6100FF] py-1 focus:outline-none text-3xl"/>

                        <div className="flex justify-center mt-3">
                            <button type='submit' value="enviar" className="px-7 py-4 bg-gradient-to-r from-[#6100FF] to-[#00BA61] dark:bg-dmnav text-white font-semibold rounded-full focus:outline-none text-3xl">Enviar</button>
                        </div>
                        
                        <p className='text-center text-white text-2xl mt-8'>Se precisar de ajuda, parceria ou tiver sugestões, envie sua mensagem aqui.</p>
                    </form>
                </div>
        </>
    )
}