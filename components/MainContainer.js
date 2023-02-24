import Image from 'next/image';
import Link from 'next/link';

import { Roboto } from '@next/font/google';

const font = Roboto({ weight: '400', subsets: ['latin'] });

export default function Maincontainer({ children }) {
    return (
        <main className={font.className}>
            <section className='items-center justify-center w-screen h-screen my-6'>
                <section className='grid md:grid-cols-5 m-10 bg-slate-800 py-6 shadow-xl rounded-lg'>
                    <nav className='px-3  m-auto'>
                        <Image className='rounded-full' src="/54.jpg" width={100} height={100} alt="Foto do rosto do otávio" title='O autor, Otávio' />
                        <ul className='mt-4 text-center'>
                            <li><Link href="/about">Sobre mim</Link></li>
                            <li><Link href="/">Cúrriculo</Link></li>
                            <li><Link href="/projects">Projetos</Link></li>
                            <li><Link href="/faq">F.A.Q.</Link></li>
                        </ul>
                        <ul className='mt-4 text-center'>
                            <li><Link href="https://www.linkedin.com/in/atomotavio/" legacyBehavior><a target="_blank">Linkedin</a></Link></li>
                            <li><Link href="https://github.com/atomotavio" legacyBehavior><a target="_blank">Github</a></Link></li>
                            <li><Link href="https://dev.to/atomotavio" legacyBehavior><a target="_blank">Artigos</a></Link></li>
                            <li><Link href="https://www.youtube.com/@atomotavio" legacyBehavior><a target="_blank">Youtube</a></Link></li>
                            <li><Link href="https://www.twitch.tv/atomotavio" legacyBehavior><a target="_blank">Twitch</a></Link></li>
                        </ul>
                    </nav>
                    <section className='md:col-span-4 m-auto p-6 md:border-l-2 md:border-l-slate-900'>
                        {children}
                    </section>
                </section>
            </section>
        </main>
    )
}