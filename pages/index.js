import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conheça meu trabalho</title>
        <meta name="description" content="Portfolio do @atomotavio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='mb-4'>
        <h1 className='font-bold tracking-wide text-yellow-500'>Otávio Trindade</h1>
        <h2 className=''>Fullstack Javascript Júnior Developer</h2>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Skills</h2>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">PHP</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">MySQL</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Java</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Javascript</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Typescript</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">HTML5</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">CSS</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">C#</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Python</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">React.JS</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Next.JS</button>
        <button className="rounded-full px-2 mr-2 mt-2 bg-yellow-300 text-slate-900 cursor-default">Git/Github</button>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Experiência</h2>
        <ul>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Estágio em desenvolvimento web na Mosyle</h3>
            <p className='italic'>Fev 2022 - Dez 2022</p>
            <p className='ml-3 text-justify indent-8'>Utilizamos como linguagem principal o PHP e um framework próprio da empresa. Além disso,
              também trabalhamos com banco de dados MySQL e HTML, CSS e Javascript no Frontend. Faço parte
              do time de suporte nível 2 em que prestamos suporte a eventuais problemas encontrados no software
              pelos clientes assim como realizamos a manutenção do software corrigindo eventuais bugs e
              melhorando a performance do produto.</p>
          </li>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Operador de atendimento ao cliente</h3>
            <p className='italic'>Dez 2020 - Jul 2021</p>
          </li>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Auxiliar de desenvolvimento</h3>
            <p className='italic'>Abr 2016 - Ago 2018</p>
            <p className='ml-3 text-justify indent-8'>Iniciei como Jovem aprendiz em uma empresa de chicotes eletrônicos . Auxiliava nos projetos
              para diversos clientes , trabalhava principalmente utilizando a ferramenta excel.</p>
          </li>
        </ul>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Comunidade</h2>
        <p className='ml-3 text-justify indent-8'>
          Gosto bastante de contribuir para a comunidade e já contribuí para alguns projetos open-source como: tradução da documentação do PHP para pt-BR. Criação e revisão de repositórios para o <a href='https://github.com/he4rt/4noobs' className='text-yellow-500' target="_blank">4Noobs</a>, uma iniciativa que visa levar conhecimento para quem está começando na área.
          Também gosto de escrever artigos e criar projetos para ajudar novas pessoas a ingressarem na área, faço vídeos para o youtube sobre programação e minha experiência programando.
          Também possuo um projeto em desenvolvimento chamado Área Indie que visa criar uma plataforma para centralizar jogos independentes brasileiros em um só lugar, tanto para aumentar a visibilidade da indústria brasileira, quanto para ajudar principalmente pequenos projetos e novos desenvolvedores a investirem na área de games pois sou um grande fã de jogos.
        </p>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Formação</h2>
        <ul>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Curso Superior de Tecnologia (CST) de Gestão de Tecnologia da
              Informação</h3>
            <p className='italic'>Jan 2023 - Dez 2023</p>
            <p className='ml-3 text-justify indent-8'>O curso aborda disciplinas das áreas de informática e gestão, que têm como base a
              matemática. Dentro de computação, o estudante aprende linguagem de programação,
              desenvolvimento de softwares e implementação de sistema de banco de dados, entre outros
              conteúdos. Já no campo gerencial, estuda administração, contabilidade, finanças, economia, negócios,
              marketing, gestão de pessoas e gestão da produção, por exemplo.</p>
          </li>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Curso Superior de Tecnologia (CST) de Análise e desenvolvimento de
              sistemas</h3>
            <p className='italic'>Jan 2021 - Dez 2022</p>
            <p className='ml-3 text-justify indent-8'>Tem como especialidade o desenvolvimento de sistemas informatizados para diversos setores,
              visando um melhor aproveitamento das máquinas com uma maior capacidade de armazenamento e
              velocidade no processamento dos dados.</p>
          </li>
        </ul>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Cursos e qualificações extras</h2>
        <ul>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>INTRODUÇÃO À PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)</h3>
            <p className='italic'>Fundação Bradesco</p>
          </li>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Formação Completa em Scrum - Planejamento e Gestão Ágil de Projetos</h3>
            <p className='italic'>Unieducar</p>
          </li>
          <li className='list-disc ml-6'>
            <h3 className='text-yellow-300 mt-2'>Fundamentos de Javascript Funcional</h3>
            <p className='italic'>Cod3r</p>
          </li>
          <li className='list-disc ml-6'>
            <Link href="https://www.cod3r.com.br/certificates/41nrx7xrgm" legacyBehavior><h3 className='hover:text-yellow-500 text-yellow-300 mt-2 cursor-pointer'>Curso Intensivo de Next.js & React</h3></Link>
            <p className='italic'>Cod3r</p>
          </li>
          <li className='list-disc ml-6'>
            <Link href="https://www.udemy.com/certificate/UC-81a957e4-23d3-4fe9-aefa-f3cc1c0ddcf2/" legacyBehavior><h3 className='hover:text-yellow-500 text-yellow-300 mt-2 cursor-pointer'>PHP 7 Completo - Curso do Desenvolvedor Web + Projetos</h3></Link>
            <p className='italic'>Cod3r</p>
          </li>
        </ul>
      </section>
      <section className='mb-4'>
        <h2 className='font-bold tracking-wide text-yellow-500'>Idiomas</h2>
        <div className='grid grid-cols-2'>
          <h3 className='text-yellow-300 mt-2'>Português</h3>
          <h3 className='text-yellow-300 mt-2'>Inglês</h3>
          <p className='italic'>Nativo</p>
          <p className='italic'>Avançado</p>
        </div>
      </section>
      <Link legacyBehavior href="https://drive.google.com/file/d/1VmWwNNKDZdJ89DL4DTykWn35KZg2PDi6/view?usp=share_link"><button className='mt-3 rounded-full px-2 mr-2 hover:bg-yellow-500 bg-yellow-300 text-slate-900'>Baixar cúrriculo</button></Link>
    </>
  )
}
