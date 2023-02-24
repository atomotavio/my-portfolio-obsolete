import Image from "next/image"

export default function About() {
    return (
        <>
            <h1 className="mb-5 font-bold tracking-wide text-yellow-500">Sobre mim</h1>
            <div className="flex lg:flex-row flex-col">
                <Image className="mb-2" src="/original.gif" height={304} width={540} />
                <div className="ml-4">
                    <h2 className="mb-5 font-bold tracking-wide text-yellow-500">Quem sou eu</h2>
                    <p className='text-justify indent-8'>Moro em Itu-SP, tenho 25 anos, sou formado em Análise e desenvolvimento de sistemas pela Wyden e estou cursando Gestão de Tecnologia da Informação pela Fatec Dom Amaury Castanho.</p>
                    <p className='text-justify indent-8'> Estudo programação desde 2016, quando ingressei na faculdade de gestão de TI e
                        me apaixonei pela área, desde então foquei meus estudos em Frontend com HTML, CSS,
                        Javascript. Em 2022 passei por um ano de estágio na empresa Mosyle, onde pude trabalhar
                        com PHP no time de suporte ao cliente. Atualmente estou buscando ingressar no mercado
                        como um Fullstack Javascript Developer, focando na stack MERN, pois sou apaixonado
                        principalmente por Frontend e por todo o ecossistema do Javascript.</p>
                </div>
            </div>
        </>
    )
}