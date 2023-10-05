'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Prihozaya() {
  const w = ['./shkafi/7/1.jpg', './shkafi/2/1.jpg', './shkafi/2/2.jpg'];
  const q = ['./prihozaya/1/1.jpg', './prihozaya/1/2.jpg'];
  const e = ['./prihozaya/2/1.jpg', './prihozaya/2/2.jpg'];
  const r = ['./prihozaya/3/1.jpg', './prihozaya/3/2.jpg'];
  const t = ['./prihozaya/4/1.jpg', './prihozaya/4/2.jpg', './prihozaya/4/3.jpg'];
  const y = ['./prihozaya/5/1.jpg', './prihozaya/5/2.jpg'];
  const u = ['./prihozaya/6/1.jpg', './prihozaya/6/2.jpg'];
  const l = ['./shkafi/19/1.jpg'];
  const z = [
    './shkafi/20/6.jpg',
    './shkafi/20/4.jpg',
    './shkafi/20/5.jpg',
    './shkafi/20/1.jpg',
    './shkafi/20/1.jpg',
  ];
  const с = ['./shkafi/22/1.jpg', './shkafi/22/2.jpg'];
  const v = ['./prihozaya/7/1.jpg'];
  const c = [
    './prihozaya/8/1.jpg',
    './prihozaya/8/2.jpg',
    './prihozaya/8/3.jpg',
    './prihozaya/8/4.jpg',
  ];
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
            ПРИХОЖИЕ
          </Title>
          <Space h="xl" />
          <Text sx={{ width: '70%' }}>
            Уютная красивая кухня с современной мебелью непременно станет местом отдыха для всей
            семьи, так как завтраки, обеды, ужины и доверительные беседы приятно проводить в
            спокойной и расслабляющей обстановке. Если гарнитур не только красив, но и удобен, то
            хозяйки с удовольствием проводят время на кухне, регулярно радуя членов семьи
            кулинарными изысками.
            <br />
            <br />
            Мебельная фабрика «Мебельщик» предлагает множество типов кухонь от производителя. Среди
            них каждый найдет вариант для себя.
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
            alt="Индивидуальные прихожие от Мебельщика в Твери и Тверской области: стиль и комфорт"
            style={{ marginTop: '-350px' }}
            name={'Проект №1'}
            description={'ЛДСП'}
            images={с}
          />
          <CardKitchen
            alt="Мебель для прихожей, придающая характер вашему интерьеру в Твери и Тверской области"
            style={{ marginTop: '-480px' }}
            name={'Проект №2'}
            description={'ЛДСП'}
            images={z}
          />
          <CardKitchen
            alt="Создайте гармоничное приглашающее впечатление с мебелью для прихожей Мебельщика в Твери и Тверской области"
            style={{ marginTop: '-380px' }}
            name={'Проект №3'}
            description={'ЛДСП'}
            images={e}
          />
          <CardKitchen
            alt="Уют и функциональность: мебель для прихожей от Мебельщика в Твери и Тверской области"
            style={{ marginTop: '-400px' }}
            name={'Проект №4'}
            description={'ЛДСП'}
            images={q}
          />
          <CardKitchen
            alt="Модные прихожие, созданные с любовью к деталям, в Твери и Тверской области"
            style={{ marginTop: '-400px' }}
            name={'Проект №5'}
            description={'ЛДСП'}
            images={c}
          />
          <CardKitchen
            alt="Современная мебель для прихожей, созданная с учетом ваших потребностей в Твери и Тверской области"
            style={{ marginTop: '-480px' }}
            name={'Проект №6'}
            description={'ЛДСП'}
            images={r}
          />
          <CardKitchen
            alt="Индивидуальные решения для прихожей, подчеркивающие вашу уникальность в Твери и Тверской области"
            style={{ marginTop: '-480px' }}
            name={'Проект №7'}
            description={'ЛДСП'}
            images={t}
          />
          <CardKitchen
            alt="Прихожие от Мебельщика в Твери и Тверской области: стиль и практичность"
            style={{ marginTop: '-480px' }}
            name={'Проект №8'}
            description={'ЛДСП'}
            images={y}
          />
          <CardKitchen
            alt="Индивидуальные решения для прихожей, подчеркивающие вашу уникальность в Твери и Тверской области"
            style={{ marginTop: '-480px' }}
            name={'Проект №9'}
            description={'ЛДСП'}
            images={v}
          />
          <CardKitchen
            alt="Прихожие от Мебельщика в Твери и Тверской области: стиль и практичность"
            style={{ marginTop: '-300px' }}
            name={'Проект №10'}
            description={'ЛДСП'}
            images={u}
          />
          <CardKitchen
            alt="Индивидуальные решения для прихожей, подчеркивающие вашу уникальность в Твери и Тверской области"
            style={{ marginTop: '-490px' }}
            name={'Проект №11'}
            description={'ЛДСП'}
            images={l}
          />
          <CardKitchen
            alt="Индивидуальные решения для прихожей, подчеркивающие вашу уникальность в Твери и Тверской области"
            name={'Проект №12'}
            description={'ЛДСП'}
            images={w}
          />
        </Box>
      </Box>
    </main>
  );
}
