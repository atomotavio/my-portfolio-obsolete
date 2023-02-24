import Image from "next/image"

export default function Faq() {
    return (
        <>
            <h1 className="mb-5 font-bold tracking-wide text-yellow-500">F.A.Q.</h1>
            <div className="flex lg:flex-row flex-col">
                <Image className="mb-2" src="/original.gif" height={304} width={540} />
                <div className="ml-4">
                    <h2 className="mb-5 font-bold tracking-wide text-yellow-500">Configuração lives</h2>
                    <h3 className='text-yellow-300 mt-2'>PC</h3>
                    <ul className='list-disc ml-6'>
                        <li>
                            Processador: Intel(R) Core(TM) i5-3470 CPU @ 3.20GHz 3.60 GHz
                        </li>
                        <li>
                            RAM: 16GB
                        </li>
                        <li>
                            Placa de vídeo: AMD Radeon RX 570
                        </li>

                    </ul>
                    <h3 className='text-yellow-300 mt-2'>Perifericos</h3>
                    <ul className='list-disc ml-6'>
                        <li>
                            Mouse: Redragon Cobra M711
                        </li>
                        <li>
                            Teclado: Redragon Lakshmi
                        </li>
                        <li>
                            Microfone: Arcano AM-BLACK-1
                        </li>
                        <li>
                            Headphone: Pulse PH237
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}