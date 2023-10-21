'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Oborydovanie() {
  const q = ['./oborydovanie/1/1.jpg', './oborydovanie/1/2.jpg'];
  const w = ['./oborydovanie/2/1.jpg'];
  const e = ['./oborydovanie/3/1.jpg', './oborydovanie/3/2.jpg', './oborydovanie/3/3.jpg'];
  const r = [
    './oborydovanie/5/1.jpg',
    './oborydovanie/5/2.jpg',
    './oborydovanie/5/3.jpg',
    './oborydovanie/5/4.jpg',
  ];
  const t = ['./office/2/1.jpg', './office/2/2.jpg'];
  const y = ['./office/3/1.jpg'];
  const u = ['./oborydovanie/6/1.jpg', './oborydovanie/6/2.jpg', './oborydovanie/6/3.jpg'];
  const i = [
    './oborydovanie/7/1.jpg',
    './oborydovanie/7/2.jpg',
    './oborydovanie/7/3.jpg',
    './oborydovanie/7/4.jpg',
  ];
  const o = ['./oborydovanie/8/1.jpg', './oborydovanie/8/2.jpg'];
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
          <Title mb={20} size={40}>
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
          <CardKitchen
            alt="Профессиональное торговое оборудование от Мебельщика в Твери и Тверской области"
            name={'Проект №1'}
            description={'ЛДСП'}
            images={r}
          />
          <CardKitchen
            alt="Оптимизация работы вашего магазина с торговым оборудованием от Мебельщика в Твери и Тверской области"
            name={'Проект №2'}
            description={'ЛДСП'}
            images={u}
          />
          <CardKitchen
            alt="Эффективные решения для бизнеса с мебелью торгового оборудования от Мебельщика"
            name={'Проект №3'}
            description={'ЛДСП'}
            images={i}
          />
          <CardKitchen
            alt="Индивидуальное торговое оборудование, подчеркивающее ваш бренд в Твери и Тверской области"
            name={'Проект №4'}
            description={'ЛДСП'}
            images={o}
          />
          <CardKitchen
            alt="Профессиональное торговое оборудование от Мебельщика в Твери и Тверской области"
            name={'Проект №5'}
            description={'ЛДСП'}
            images={t}
          />
          <CardKitchen
            alt="Профессиональное торговое оборудование от Мебельщика в Твери и Тверской области"
            name={'Проект №6'}
            description={'ЛДСП'}
            images={y}
          />

          <CardKitchen
            alt="Индивидуальное торговое оборудование, подчеркивающее ваш бренд в Твери и Тверской области"
            name={'Проект №7'}
            description={'ЛДСП'}
            images={q}
          />

          <CardKitchen
            alt=""
            style={{ marginTop: '-160px' }}
            name={'Проект №8'}
            description={'ЛДСП'}
            images={e}
          />
        </Box>
      </Box>
    </main>
  );
}
