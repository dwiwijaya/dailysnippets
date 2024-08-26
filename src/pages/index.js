import { useQuery } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRefetch } from '@/contexts/RefetchContext';
import { fetchNinjaAPI } from '@/libs/api';
import ContentOfTheDay from '@/components/ContentOfTheDay';

const fetchFacts = async () => {
  const response = await fetchNinjaAPI({ endpoint: 'facts' });
  return response;
};

export default function Home() {
  const { refetchFlag } = useRefetch();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['facts', refetchFlag],
    queryFn: fetchFacts,
    refetchOnWindowFocus: false, 
  });

  return (
    <div className="rounded-lg text-center ">
      <h1 className="text-2xl font-bold mb-4 ">Today’s Fun Fact</h1>
      <ContentOfTheDay data={data} isLoading={isLoading} isError={isError} />
    </div>

  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['facts'], fetchFacts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
