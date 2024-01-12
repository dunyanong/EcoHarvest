// Import necessary modules and styles
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import Tick from '../img/greentick.jpg';

export default function Paid() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/binpercentages')
  };

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>Fertilisers $50.99 - Your Bank App</title>
      </Head>

      {/* Main content */}
      <div className="flex items-center justify-center h-screen">
        <div className="p-8 rounded-md text-center">
          <div className='flex justify-center'>
            <Image src={Tick} width={60} />
          </div>
          <h1 className="text-2xl font-semibold my-4">Redemption Successful!</h1>
          <p className="text-sm text-gray-700">
            A confirmation email will be sent to you shortly.
          </p>
          <p className="text-sm text-gray-700">
            For any enquiries or further assistance, please contact ecoharvest@gmail.com
          </p>
          <button
            onClick={handleBack}
            className="mt-4 bg-black hover:bg-gray-700 text-white font-bold py-2 px-10 rounded"
          >
            Home
          </button>
        </div>
      </div>
    </Layout>
  );
}
