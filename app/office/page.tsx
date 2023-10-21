'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';
export default function Office() {
  const q = ['./office/1/1.jpg', './office/1/2.jpg', './office/1/3.jpg'];

  const r = ['./office/4/1.jpg', './office/4/2.jpg', './office/4/3.jpg'];
  const w = [
    './office/5/1.jpg',
    './office/5/2.jpg',
    './office/5/3.jpg',
    './office/5/4.jpg',
    './office/5/5.jpg',
    './office/5/6.jpg',
    './office/5/7.jpg',
    './office/5/8.jpg',
  ];
  const g = ['./office/8/1.jpg', './office/8/2.jpg', './office/8/3.jpg'];
  const e = ['./office/6/1.jpg'];
  const t = ['./office/7/1.jpg', './office/7/2.jpg'];
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
          <Title mb={20} size={40}>
            ОФИСНАЯ МЕБЕЛЬ
          </Title>
          <Space h="xl" />
          <Text sx={{ width: '70%' }}>
            Ваш офис - это место, где рождаются идеи и достигаются успехи. Мебельщик предлагает
            офисную мебель, сочетающую в себе функциональность, стиль и комфорт, чтобы помочь вам
            создать эффективное рабочее пространство.
            <br />
            <br />
            Наши изделия отражают современные тенденции бизнес-мебели и учитывают потребности
            различных видов работы. Вне зависимости от размера вашего офиса, у нас есть решение: от
            стильных столов до практичных хранилищ. Мебельщик поддерживает ваши бизнес-цели с
            изысканной офисной мебелью.
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
            alt="Современные офисные интерьеры от Мебельщика в Твери и Тверской области"
            name={'Проект №1'}
            description={'Металлокаркас'}
            images={w}
          />
          <CardKitchen
            alt="Офисная мебель для максимальной эффективности в Твери и Тверской области"
            name={'Проект №2'}
            description={'ЛДСП эгерь'}
            images={q}
          />

          <CardKitchen
            alt="Современные офисные интерьеры от Мебельщика в Твери и Тверской области"
            name={'Проект №3'}
            description={'ЛДСП'}
            images={g}
          />

          <CardKitchen
            alt="Современные офисные решения от мебельной фабрики Мебельщик в Твери и Тверской области"
            name={'Проект №4'}
            description={'ЛДСП'}
            images={r}
          />
        </Box>
      </Box>
    </main>
  );
}
