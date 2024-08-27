import { useQuery } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRefetch } from '@/contexts/RefetchContext';
import { fetchNinjaAPI } from '@/libs/api';
import StatusHandler from '@/components/StatusHandler';

const fetchRiddles = async () => {
  const response = await fetchNinjaAPI({ endpoint: 'riddles' });
  return response;
};

export default function RiddlePage() {
  const { refetchFlag } = useRefetch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['riddles', refetchFlag],
    queryFn: fetchRiddles,
    refetchOnWindowFocus: false, 
  });

  return (
    <div className="rounded-lg text-center ">
      <h1 className="text-2xl font-bold mb-4 ">Today’s Riddle</h1>
      <StatusHandler isLoading={isLoading} isError={isError} />
      {!isLoading && !isError && data && (
        <>
          <p className="text-lg text-subtext font-medium">
            {data[0].question}
          </p>
          <p className="text-lg font-medium">
            ~ {data[0].answer}
          </p>
        </>
      )}
    </div>

  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['riddles'], fetchRiddles);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
