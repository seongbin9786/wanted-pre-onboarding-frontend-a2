import { SimpleGrid } from '@chakra-ui/react';
import { TravelItemType } from '../api/TravelListApi';
import { TravelListItem } from './TravelListItem';

interface TravelListProps {
  listFetcher: () => TravelItemType[];
}

export function TravelList({ listFetcher }: TravelListProps) {
  const list = listFetcher();

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
      {list.map((item) => (
        <TravelListItem key={item.idx} item={item} />
      ))}
    </SimpleGrid>
  );
}
