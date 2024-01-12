import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getDatabase, ref, child, get } from 'firebase/database';
import Layout from '../components/Layout';
import Percentages from '../components/capacityPercentage';

const binpercentages = () => {
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
  }, []);

  return (
    <Layout isWhiteBackground={true}>
      <Head>
        <title>EcoHarvest</title>
      </Head>
      <main className="min-h-screen">
        <div>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <div className='pt-10'>
            <h3 className="font-semibold tracking-tight text-base text-center">Bin Content</h3>
            <p className="text-sm text-muted-foreground text-center">Let's see how much more can you fit!</p>            
          </div>

          {topCardsData && <Percentages data={topCardsData} />}
        </div>
      </main>

      {/* Move this section to the bottom */}
      <section className="flex flex-row items-center justify-between pb-10">
        <Link href="/incomestatement" legacyBehavior>
          <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto">
            Credit
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
    </Layout>
  );
};

export default binpercentages;
