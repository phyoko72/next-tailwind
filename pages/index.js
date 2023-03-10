import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import photo1 from '../public/images/curry.jpg';
import photo2 from '../public/images/noodles.jpg';
import photo3 from '../public/images/stew.jpg';
import Nav from '../components/nav';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

const img = [photo1,photo2,photo3]

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid lg:grid-cols-3">
        <Nav childClass={'col-span-1 m-5'}/>

        <section className='col-span-2 bg-gray-100 text-gray-900'>
            <div className='m-5'>
                <div className='text-center md:text-right mb-3'>
                    <Link className='btn' href={'#'}>Log In</Link>
                    <Link className='btn' href={'#'}>Sign Up</Link>
                </div>

                <div className='mb-24'>
                    <h1 className=' text-5xl font-bold'>Recipes</h1>
                    <h4 className='mt-4 mb-6'>For Ninjas</h4>     
                    <span className=' text-xl'>Last Recipes</span>       
                </div>

                <div>                
                    <div className='grid md:grid-cols-3 gap-4 md:gap-3'>
                        {img.map((x,y)=>(
                        <div className='relative card cursor-pointer hover:shadow-md hover:shadow-stone-200' key={y}>
                            <Image src={x} alt={x} className='w-full h-36 lg:h-48 object-cover'/>
                            <div className='m-2 md:m-3 lg:m-4'>
                                <span className='block font-bold'>5 Bean Chilli Stew</span>
                                <span className=' text-gray-500'>Recipe by Mario</span>
                            </div>
                            <span className='absolute top-3 left-2 text-sm bg-gray-300 text-gray-500 rounded-full px-2 py-1'>25 MINS</span>
                        </div>
                        ))}

                    </div>
                </div>
            </div>

        </section>
      </main>
    </>
  )
}
