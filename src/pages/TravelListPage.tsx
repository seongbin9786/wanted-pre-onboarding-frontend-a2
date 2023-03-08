import {
  Box,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { Suspense } from 'react';
import { fetchTravelList } from '../api/TravelListApi';
import { TravelList } from '../components/TravelList';

export function TravelListPage() {
  const listFetcher = fetchTravelList();

  return (
    <Suspense fallback={<SkeletonPage />}>
      <TravelList listFetcher={listFetcher} />
    </Suspense>
  );
}

function SkeletonPage() {
  const arr = new Array(10).fill(null);

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        xl: 2,
        '3xl': 3,
      }}
      spacingX={16}
      spacingY={8}
      padding={32}
    >
      {arr.map((_, idx) => (
        <Box key={idx} width={500} padding="6" boxShadow="lg" bg="white">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={10} spacing="4" skeletonHeight="2" />
        </Box>
      ))}
    </SimpleGrid>
  );
}
