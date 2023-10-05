'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';
import { Metadata } from 'next';

export default function Detskaya() {
  const q = ['./detskaya/1/2.jpg', './detskaya/1/1.jpg'];
  const i = ['./shkafi/8/1.jpg', './shkafi/14/1.jpg'];
  const d = ['./shkafi/13/1.jpg'];
  const e = ['./detskaya/4/1.jpg'];
  const m = ['./detskaya/5/2.jpg', './detskaya/5/1.jpg'];
  const n = ['./detskaya/6/1.jpg', './detskaya/6/2.jpg'];
  const b = ['./detskaya/7/1.jpg'];
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
          <CardKitchen
            alt="Мебель для детей: радость и удобство от мебельной фабрики в Твери"
            style={{ marginTop: '-100px' }}
            name={'Проект №71'}
            description={'ЛДСП'}
            images={q}
          />
          <CardKitchen
            alt="Комфорт и качество: детская мебель от Мебельщика в Твери"
            style={{ marginTop: '-120px' }}
            name={'Проект №72'}
            description={'ЛДСП'}
            images={d}
          />
          <CardKitchen
            alt="Детские комнаты с яркой и функциональной мебелью в Тверской области"
            style={{ marginTop: '-150px' }}
            name={'Проект №73'}
            description={'ЛДСП'}
            images={i}
          />
          <CardKitchen
            alt="Современные и безопасные детские мебельные решения"
            style={{ marginTop: '-390px' }}
            name={'Проект №74'}
            description={'ЛДСП'}
            images={m}
          />
          <CardKitchen
            alt="Индивидуальная детская мебель от Мебельщика в Твери"
            style={{ marginTop: '-150px' }}
            name={'Проект №75'}
            description={'ЛДСП'}
            images={n}
          />
          <CardKitchen
            alt='alt="Мебель для детей: радость и удобство от мебельной фабрики в Твери"'
            style={{ marginTop: '-150px' }}
            name={'Проект №76'}
            description={'ЛДСП'}
            images={b}
          />
          <CardKitchen
            alt="Комфорт и качество: детская мебель от Мебельщика в Твери"
            style={{ marginTop: '-150px' }}
            name={'Проект №77'}
            description={'ЛДСП'}
            images={e}
          />
        </Box>
      </Box>
    </main>
  );
}
