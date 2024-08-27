import { useQuery } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRefetch } from '@/contexts/RefetchContext';
import { fetchNinjaAPI } from '@/libs/api';
import StatusHandler from '@/components/StatusHandler';
import { NextSeo } from 'next-seo';

const fetchJokes = async () => {
  const response = await fetchNinjaAPI({ endpoint: 'jokes' });
  return response;
};

export default function JokePage() {
  const { refetchFlag } = useRefetch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['jokes', refetchFlag],
    queryFn: fetchJokes,
    refetchOnWindowFocus: false, 
  });

  return (
    <>
      <NextSeo title="Joke - Daily Snippets" />
      <div className="rounded-lg text-center ">
      <h1 className="text-2xl font-bold mb-4 ">Today’s Joke</h1>
      <StatusHandler isLoading={isLoading} isError={isError} />
      {!isLoading && !isError && data && (
        <>
          <p className="text-lg font-medium">
            {data[0].joke}
          </p>
        </>
      )}
    </div>
      </>

  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['jokes'], fetchJokes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
