import Link from "next/link";

export async function getStaticProps(){
    const data = await fetch('https://api.github.com/users/atomotavio/repos');
    const repos = await data.json();

    return{
        props: { repos },
    }
}

export default function Projects( { repos }) {
    return(
        <>
        <h1 className="font-bold tracking-wide text-yellow-500">Projetos</h1>
        <p className='text-justify'>Todos os principais projetos presentes no meu github.</p>
        <ul className="mt-4 md:grid md:grid-cols-4 list-disc">
        {repos.filter(function(repos) {return repos.description !== null;}).filter(function(repos) {return !repos.fork;}).map((repo) => (
            <li className="mb-4 mx-4">
                <h2 className="font-bold tracking-wide text-yellow-500">{repo.name}</h2>
                <p>{repo.language}</p>
                <p>{repo.description}</p>
                <Link href="{repo.url}" legacyBehavior><a className='mt-3 rounded-full px-2 mr-2 hover:bg-yellow-500 bg-yellow-300 text-slate-900' target="_blank">Acesse o repositório</a></Link>  
            </li>
        ))}
        </ul>
        </>
    )
}