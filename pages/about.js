import Image from "next/image"

export default function About() {
    return (
        <>
            <h1 className="mb-5 font-bold tracking-wide text-yellow-500">Sobre mim</h1>
            <div className="flex lg:flex-row flex-col">
                <Image className="mb-2" src="/original.gif" height={304} width={540} />
                <div className="ml-4">
                    <h2 className="mb-5 font-bold tracking-wide text-yellow-500">Quem sou eu</h2>
                    <p className='text-justify indent-8'> Sou um desenvolvedor web com vasta experiência em linguagens como PHP, SQL, HTML, CSS e Javascript, atuando tanto no desenvolvimento backend quanto no frontend. Possuo habilidades em desenvolvimento de software, manutenção de sistemas e suporte ao cliente, o que me permite solucionar problemas e melhorar o desempenho de produtos.</p>
                    <p className='text-justify indent-8'> Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas e atualmente estou cursando Gestão da Tecnologia da Informação pela Fatec tu. Contribuo para projetos de código aberto e gosto de criar iniciativas que auxiliem novos programadores a ingressarem na área. Minhas habilidades incluem o desenvolvimento de interfaces de usuário dinâmicas e interativas utilizando React.JS e Next.JS, e a integração de tecnologias de inteligência artificial, como ChatGPT, para auxiliar na produção de conteúdo para sites. Tenho experiência com metodologias ágeis, como Scrum, e estou sempre em busca de novos conhecimentos e tecnologias para aprimorar os processos de desenvolvimento de websites. Estou sempre buscando novos desafios e oportunidades para aplicar meu conhecimento e contribuir para projetos inovadores. Sinta-se à vontade para entrar em contato para discutir possíveis colaborações ou oportunidades profissionais.</p>
                </div>
            </div>
        </>
    )
}