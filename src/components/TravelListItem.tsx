import {
  Badge,
  Button,
  Card,
  CardBody,
  Heading,
  HStack as Flex,
  HStack,
  Image,
  VStack,
} from '@chakra-ui/react';
import { TravelItemType } from '../api/TravelListApi';
import { TravelReserveBox } from './TravelReserveBox';

interface TravelListItemProps {
  item: TravelItemType;
}

/*
  idx, name, mainImage, price, spaceCategory
*/
export function TravelListItem({ item }: TravelListItemProps) {
  const { idx, spaceCategory, name, mainImage, price } = item;
  return (
    <Card width={500}>
      <CardBody>
        <VStack gap={2}>
          <Flex width="100%" justifyContent="space-between">
            <HStack>
              <Badge colorScheme="facebook" fontSize="0.8rem">
                #{idx}
              </Badge>
              <Badge
                backgroundColor="#343C38"
                color="white"
                variant="subtle"
                fontSize="0.8rem"
              >
                {spaceCategory}
              </Badge>
            </HStack>
            <Heading fontSize="xl" color="#343C38">
              {name}
            </Heading>
          </Flex>
          <Image src={mainImage} width={500} height={312} objectFit="cover" />
          <TravelReserveBox idx={idx} price={price} />
          <Button width="100%" size="lg" colorScheme="green" variant="outline">
            자세히보기
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
}
