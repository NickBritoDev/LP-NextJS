import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Banner } from './components/Banner'
import fgts from '@/images/produtos/fgts.png'
import crefaz from '@/images/produtos/crefaz.png'

export default function Start() {
  const details = [
    {
      prod: 'FGTS',
      img: fgts,
      title: 'Antecipe até 10 parcelas do seu saque FGTS',
      sub1: 'Com a antecipação você garante até 10 parcelas do seu saldo FGTS com a menor taxa do mercado.',
      sub2: 'Dinheiro rápido na conta, sem burocracia e também disponível para negativados.',
      gradient: [
        '#4b6cb7',
        '-webkit-linear-gradient(to right, #4b6cb7, #182848)',
        'linear-gradient(to right, #4b6cb7, #182848)',
      ],
    },
    {
      prod: 'CREFAZ',
      img: crefaz,
      title: 'Contrate empréstimo com sua conta de luz',
      sub1: 'Contrate empréstimo na Crefaz com débito na sua conta de luz. Prático e rápido.',
      sub2: 'Temos uma solução para cada momento da sua vida.',
      gradient: [
        '#F09819',
        '-webkit-linear-gradient(to right, #F09819, #FF512F)',
        'linear-gradient(to right, #F09819, #FF512F)',
      ],
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const handleNextBanner = () => {
    setCurrentBanner((prevBanner) => (prevBanner + 1) % details.length);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextBanner, 9000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Flex
      color={'white'}
      h={'100vh'}
      w={'100%'}
      overflow={'hidden'}
      alignItems={'flex-start'}
      gap={10}
      justifyContent={'flex-start'}
      flexDir={'column'}
    >
      <Box w={'100%'} bg={details[currentBanner].gradient} h={'80vh'}>
        <Banner
          prod={details[currentBanner].prod}
          func={handleNextBanner}
          img={details[currentBanner].img}
          title={details[currentBanner].title}
          sub1={details[currentBanner].sub1}
          sub2={details[currentBanner].sub2}
        />
      </Box>
      <Box mt={-8} display={'flex'} flexDir={'column'} color={'black'} alignItems={'center'} justifyContent={'center'} w={'100%'} p={1}>
        <Heading size={'lg'} textTransform={'uppercase'} m={'0 auto'}>Descubra Muito Mais !!!</Heading>
        <Text fontWeight={'bold'}>Desça e descubra um mar de oportunidades...</Text>
      </Box>

    </Flex>
  );
}
