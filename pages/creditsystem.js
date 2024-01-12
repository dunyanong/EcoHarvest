import Head from "next/head";
import Link from "next/link";
import dynamic from 'next/dynamic';
import Layout from '../components/Layout'
import { IoIosCash } from "react-icons/io";
import { RiGovernmentFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";

export default function CreditSystem() {
    return (
      <Layout isWhiteBackground={true}>
        <div className="md:px-5 w-full max-w-5xl mx-auto pt-20 pb-10 ">
            <Head>
            <title>EcoHarvest</title>
            </Head>            
            <div>
                <h1 className="text-slate-900 font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">Your Balance:</h1>
            </div>  

            <div>
                <h2 className="text-4xl mt-6 md:text-lg text-slate-600 text-center max-w-3xl mx-auto">1620 PTS</h2>
            </div>               
            {/* <Link href='/auth/Login' legacyBehavior>
                <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                    <FaTractor className="fill-current w-5 h-5" />    
                    <p>Get Started</p>          
                </button>            
            </Link> */}
        

            <div className="mx-1">
            <div className="mx-auto grid justify-center gap-4 md:grid-cols-2 pt-20">
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><IoIosCash /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">NTUC Vouchers</h3>
                    <p className="text-sm text-gray-500">A $10 NTUC voucher that you can use for various purchases. This reward allows for unlimited redemptions.</p>
                    <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                        <a href="/paid"><p>100 PTS</p></a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><RiGovernmentFill /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">5% Tax Reduction</h3>
                    <p className="text-sm text-gray-500">Enjoy a 5% reduction in your tax liability, providing you with financial relief.</p>
                    <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                        <a href="/paid"><p>1000 PTS</p></a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-white p-2 shadow mx-7">
                <div className="flex flex-col justify-between rounded-md p-6">
                  <span className="text-2xl md:text-4xl lg:text-6xl mb-2"><MdBusinessCenter /></span>
                  <div className="space-y-2">
                    <h3 className="font-bold">Government Business Support</h3>
                    <p className="text-sm text-gray-500">The government will support your business by purchasing a batch of vouchers from you and distributing them to citizens, providing exposure and potential new customers for your business.</p>
                    <button className="group mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black gap-1">
                        <a href="/paid"><p>5000 PTS</p></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Layout>        
    );
}