import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { FaTractor } from 'react-icons/fa';
import Layout from '../components/Layout'

// import image
const GiCash = dynamic(() => import('react-icons/gi').then((module) => module.GiCash), { ssr: false });
const GiCycle = dynamic(() => import('react-icons/gi').then((module) => module.GiCycle), { ssr: false });
const FaBrain = dynamic(() => import('react-icons/fa').then((module) => module.FaBrain), { ssr: false });
const FaRegLightbulb = dynamic(() => import('react-icons/fa').then((module) => module.FaRegLightbulb), { ssr: false });

export default function Home() {
    return (
      <Layout isWhiteBackground={true}>
        <div className="md:px-5 w-full max-w-5xl mx-auto pt-20 pb-10 ">
            <Head>
            <title>EcoHarvest</title>
            </Head>            
            <div>
                <h1 className="text-slate-900 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">This page is in construction....</h1>
            </div> 
            <section className="flex flex-row items-center justify-between py-10">
              <Link href="/binpercentages" legacyBehavior>
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto">
                  Dashboard
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </Link>
            </section>            
        </div>
      </Layout>        
    );
}