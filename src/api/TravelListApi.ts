import axios from 'axios';
import { wrapPromise } from '../utils/wrapPromise';

export interface TravelItemType {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: '서울' | '강원' | '부산' | '대구' | '제주';
  price: number;
  maximumPurchases: number;
  registrationDate: string;
}

const API_URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T043214Z&X-Amz-Expires=86400&X-Amz-Signature=f3b67248c8c84b34c20495b0c7cf20c9759d04628af19bc5c266f6ded7f3f0e5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject';

// async fn
async function fetchTravelListApi(): Promise<TravelItemType[]> {
  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 1000);
  });
  const response = await axios.get(API_URL);
  return response.data;
}

// USAGE: const resourceFetcher = travelList(); (이건 함수임)

export function fetchTravelList() {
  return wrapPromise<TravelItemType[]>(fetchTravelListApi()).read;
}
