import { Suspense } from 'react';
import { fetchTravelList } from '../api/TravelListApi';
import { TravelList } from '../components/TravelList';

export function TravelListPage() {
  const listFetcher = fetchTravelList();

  return (
    <Suspense fallback={<Skeleton />}>
      <TravelList listFetcher={listFetcher} />
    </Suspense>
  );
}

function Skeleton() {
  return <p>TravelList is loading...</p>;
}
