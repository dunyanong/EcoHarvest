import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';
import Layout from '../components/Layout';
import CropChart from '../components/CropChart';

import { getDatabase, ref, child, get } from 'firebase/database';

const Dashboard = () => {
  const [topCardsData, setTopCardsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, '/'));

        if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const latestKey = keys.reduce((prevKey, currentKey) =>
            currentKey > prevKey ? currentKey : prevKey
          );

          setTopCardsData(data[latestKey]);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error(error);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>EcoHarvest</title>
      </Head>
      <main className="min-h-screen">
        <Header />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {topCardsData && <TopCards data={topCardsData} />}
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
        <CropChart />
      </main>
      <div className="flex flex-row items-center justify-between py-10">
        <a
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
          href="/incomestatement"
        >
          Income Statement
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
      </div>
    </Layout>
  );
};

export default Dashboard;