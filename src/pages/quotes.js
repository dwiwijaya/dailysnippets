import { useQuery } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRefetch } from '@/contexts/RefetchContext';
import { fetchNinjaAPI } from '@/libs/api';
import ContentOfTheDay from '@/components/ContentOfTheDay';

const fetchQuotes = async () => {
  const response = await fetchNinjaAPI({ endpoint: 'quotes' });
  return response;
};

export default function QuotePage() {
  const { refetchFlag } = useRefetch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['quotes', refetchFlag],
    queryFn: fetchQuotes,
    refetchOnWindowFocus: false, 
  });

  return (
    <div className="rounded-lg text-center ">
      <h1 className="text-2xl font-bold mb-4 ">Today’s Quote</h1>
      <ContentOfTheDay data={data} isLoading={isLoading} isError={isError} />
    </div>

  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['quotes'], fetchQuotes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
