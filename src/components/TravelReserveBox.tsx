import {
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { TravelItemType } from '../api/TravelListApi';

type TravelReserveBoxProps = Pick<TravelItemType, 'idx' | 'price'>;

export function TravelReserveBox({ idx, price }: TravelReserveBoxProps) {
  const [count, setCount] = useState(1);
  const handleCounterChange = (_: string, value: number) => {
    setCount(value);
  };
  const handleClick = () => {
    alert(`${idx}번 아이템을 ${count}개 예약 - 총 ${price * count}원!`);
  };

  return (
    <>
      <HStack width="100%" justifyContent="flex-end">
        <Text fontSize="xl">총</Text>
        <NumberInput
          size="md"
          mr={2}
          width={100}
          defaultValue={1}
          min={1}
          max={100}
          value={count}
          onChange={handleCounterChange}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text color="#343C38" fontSize="xl">
          회 예약 시
        </Text>
        <Text color="#343C38" fontSize="xl" fontWeight="bold">
          {(price * count).toLocaleString()}원
        </Text>
      </HStack>
      <Button
        width="100%"
        size="lg"
        colorScheme="green"
        variant="solid"
        onClick={handleClick}
      >
        예약
      </Button>
    </>
  );
}
