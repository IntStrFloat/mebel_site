'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Oborydovanie() {
  return (
    <main style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100vw' }}>
        <Box
          mx="auto"
          sx={{
            width: '93%',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Title mb={20} size="500%">
            ТОРГОВОЕ ОБОРУДОВАНИЕ
          </Title>
          <Space h="xl" />
          <Text sx={{ width: '70%' }}>
            Удачно спроектированное торговое пространство может повысить привлекательность вашего
            бизнеса и оптимизировать поток клиентов. Мебельщик предоставляет торговое оборудование,
            которое сочетает в себе эстетику и функциональность.
            <br />
            <br />
            Независимо от типа вашего магазина, мы предлагаем разнообразные решения: витрины,
            стеллажи, прилавки и многое другое. Мы знаем, что дизайн важен, и наше оборудование
            поможет выделить ваш бренд среди конкурентов.
            <br />
          </Text>
        </Box>
        <Divider
          mx="auto"
          mb={60}
          mt={15}
          sx={{ width: '93%', boxShadow: '0px 0px 2px 0px' }}
          size="xs"
          color="gray"
        />
        <Box
          sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly' }}
        >
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
        </Box>
      </Box>
    </main>
  );
}
