import { TravelItemType } from '../api/TravelListApi';

interface TravelListItemProps {
  item: TravelItemType;
}

/*
  idx, name, mainImage, price, spaceCategory
*/
export function TravelListItem({ item }: TravelListItemProps) {
  return (
    <div>
      <div>{item.idx}</div>
      <div>{item.name}</div>
      <div>{item.mainImage}</div>
      <div>{item.price}</div>
      <div>{item.spaceCategory}</div>
    </div>
  );
}
