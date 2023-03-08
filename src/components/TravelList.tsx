import { TravelItemType } from '../api/TravelListApi';
import { TravelListItem } from './TravelListItem';

interface TravelListProps {
  listFetcher: () => TravelItemType[];
}

export function TravelList({ listFetcher }: TravelListProps) {
  const list = listFetcher();

  return (
    <div>
      {list.map((item) => (
        <TravelListItem key={item.idx} item={item} />
      ))}
    </div>
  );
}
