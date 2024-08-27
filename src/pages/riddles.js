import { useQuery } from '@tanstack/react-query';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { useRefetch } from '@/contexts/RefetchContext';
import { fetchNinjaAPI } from '@/libs/api';
import StatusHandler from '@/components/StatusHandler';
import { useEffect, useState } from 'react';

const fetchRiddles = async () => {
  const response = await fetchNinjaAPI({ endpoint: 'riddles' });
  return response;
};

export default function RiddlePage() {
  const { refetchFlag } = useRefetch();
  const [showAnswer, setShowAnswer] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['riddles', refetchFlag],
    queryFn: fetchRiddles,
    refetchOnWindowFocus: false,
  });

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    setShowAnswer(false)
  }, [refetchFlag])

  return (
    <div className="rounded-lg text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Today’s Riddle</h1>
      <StatusHandler isLoading={isLoading} isError={isError} />
      {!isLoading && !isError && data && (
        <>
          <p className="text-lg text-subtext font-medium mb-4">
            {data[0].question}
          </p>
          <button
            onClick={toggleAnswer}
            className="btn mb-4 w-full flex items-center justify-center space-x-2"
          >
            <i className={`fad ${showAnswer ? 'fa-eye-slash' : 'fa-eye'}`} />
            <span>{showAnswer ? 'Hide Answer' : 'Show Answer'}</span>
          </button>
          {showAnswer && (
            <p
              className="text-lg font-medium transition-opacity duration-500 ease-in-out opacity-100"
            >
              {data[0].answer}
            </p>
          )}
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
