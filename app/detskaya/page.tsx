'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

export default function Detskaya() {
  const q = ['./detskaya/1/1.jpg', './detskaya/1/2.jpg'];
  const w = ['./detskaya/2/1.jpg', './detskaya/2/2.jpg'];
  return (
    <main style={{ marginTop: '50px' }}>
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
          <Title mb={20} size={70}>
            ДЕТСКАЯ МЕБЕЛЬ
          </Title>
          <Space h="xl" />
          <Text sx={{ width: '70%' }}>
            Комната ребенка - это его уголок в мире взрослых. Мебельщик предлагает детскую мебель,
            которая объединяет радость игры с практичностью и безопасностью.
            <br />
            <br />
            Наши изделия сочетают в себе веселые дизайны, качественные материалы и удобство
            использования. От кроватей до столиков для творчества, мы поможем создать пространство,
            способствующее развитию и вдохновению ваших детей.
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
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={q} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={w} />
        </Box>
      </Box>
    </main>
  );
}
