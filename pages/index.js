import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { FaRecycle } from 'react-icons/fa';
import Layout from '../components/Layout'

// import image
const ImBin2 = dynamic(() => import('react-icons/im').then((module) => module.ImBin2), { ssr: false });
const FaQrcode = dynamic(() => import('react-icons/fa').then((module) => module.FaQrcode), { ssr: false });
const FaGift = dynamic(() => import('react-icons/fa').then((module) => module.FaGift), { ssr: false });
const IoLeaf = dynamic(() => import('react-icons/io5').then((module) => module.IoLeaf), { ssr: false });

export default function Home() {
    return (
      <Layout isWhiteBackground={false}>
        <div className="md:px-5 w-full max-w-5xl mx-auto pt-20 pb-10 ">
            <Head>
            <title>EcoHarvest</title>
            </Head>            
            <div className="mx-5">
                <h1 className="text-slate-900 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Scan, Dispose, and Benefit</h1>
                <p className="mt-6 text-base md:text-lg text-slate-600 text-center max-w-xl mx-auto">The Smart Food Waste Bin that turns your recycling efforts into rewards!"</p>
            </div>               
            <Link href='/auth/Login' legacyBehavior>
                <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                    <FaRecycle className="fill-current w-5 h-5" />    
                    <p>Get Started</p>          
                </button>            
            </Link>   
            <Link href='/Profile/index' legacyBehavior>
                <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                    <FaRecycle className="fill-current w-5 h-5" />    
                    <p>Location</p>          
                </button>            
            </Link> 

            <div className="mx-1">
            <div className="mx-auto grid justify-center gap-4 md:grid-cols-2 pt-20">
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><ImBin2 /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Smart Sensing Bins</h3>
                    <p className="text-sm text-gray-500">Cutting-edge waste bins with ultrasonic sensors for precise food waste measurements, ensuring accurate data on disposal.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><FaQrcode /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">QR EcoTrace</h3>
                    <p className="text-sm text-gray-500">Scan-and-dispose system using QR codes, uniquely linking each stall owner to their waste, fostering accountability and streamlined tracking.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><FaGift /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Green Rewards</h3>
                    <p className="text-sm text-gray-500">Incentive programs offering discounts on contract fees, turning eco-conscious waste management into a rewarding endeavor for hawker stall owners.</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><IoLeaf /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Eco Partnerships</h3>
                    <p className="text-sm text-gray-500">Collaborations with eco-friendly startups and local recycling companies amplify the impact, creating a network committed to sustainable food waste solutions in Singapore.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Layout>        
    );
}