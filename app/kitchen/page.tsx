'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Kitchen() {
  const q = ['./kitchens/1/1.jpg', './kitchens/1/2.jpg', './kitchens/1/3.jpg'];
  const w = ['./kitchens/2/1.jpg', './kitchens/2/2.jpg'];
  const e = ['./kitchens/3/1.jpg', './kitchens/3/2.jpg', './kitchens/3/3.jpg'];
  const r = ['./kitchens/4/1.jpg', './kitchens/4/2.jpg'];
  const t = ['./kitchens/5/1.jpg', './kitchens/5/2.jpg'];
  const y = ['./kitchens/6/1.jpg', './kitchens/6/2.jpg'];
  const u = ['./kitchens/7/1.jpg', './kitchens/7/2.jpg'];
  const i = ['./kitchens/8/1.jpg', './kitchens/8/2.jpg'];
  const o = ['./kitchens/9/1.jpg', './kitchens/9/2.jpg'];
  const p = ['./kitchens/10/1.jpg', './kitchens/10/2.jpg'];
  const a = ['./kitchens/11/1.jpg', './kitchens/11/2.jpg'];
  const s = [
    './kitchens/12/1.jpg',
    './kitchens/12/2.jpg',
    './kitchens/12/3.jpg',
    './kitchens/12/4.jpg',
    './kitchens/12/5.jpg',
    './kitchens/12/6.jpg',
  ];
  const d = ['./kitchens/13/1.jpg'];
  const f = ['./kitchens/14/1.jpg'];
  const g = ['./kitchens/15/4.jpg', './kitchens/15/1.jpg'];
  const h = [
    './kitchens/16/1.jpg',
    './kitchens/16/2.jpg',
    './kitchens/16/3.jpg',
    './kitchens/16/4.jpg',
  ];
  const j = [
    './kitchens/17/1.jpg',
    './kitchens/17/2.jpg',
    './kitchens/17/3.jpg',
    './kitchens/17/4.jpg',
  ];
  const k = ['./kitchens/18/1.jpg', './kitchens/18/2.jpg', './kitchens/18/3.jpg'];
  const l = ['./kitchens/19/1.jpg'];
  const z = ['./kitchens/21/1.jpg', './kitchens/21/2.jpg', './kitchens/21/3.jpg'];
  const x = [
    './kitchens/22/1.jpg',
    './kitchens/22/2.jpg',
    './kitchens/22/3.jpg',
    './kitchens/22/4.jpg',
    './kitchens/22/5.jpg',
    './kitchens/22/6.jpg',
    './kitchens/22/7.jpg',
  ];
  const c = ['./kitchens/23/1.jpg', './kitchens/23/2.jpg'];

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
            КУХНИ
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
            alt="Индивидуальные кухни Мебельщика в Твери: качество и стиль"
            style={{ marginTop: '-200px' }}
            name={'Проект №11'}
            description={'МДФ крашенный'}
            images={j}
          />
          <CardKitchen
            alt="Современные кухонные интерьеры от мебельной фабрики в Твери и Тверской области"
            style={{ marginTop: '-100px' }}
            name={'Проект №12'}
            description={'МДФ плёнка'}
            images={q}
          />
          <CardKitchen
            alt="Кухни для комфортного готовки и семейных ужинов в Твери"
            style={{ marginTop: '-150px' }}
            name={'Проект №13'}
            description={'МДФ плёнка'}
            images={k}
          />
          <CardKitchen
            alt="Выбирайте качество и надежность с кухонной мебелью Мебельщика Тверь"
            style={{ marginTop: '-150px' }}
            name={'Проект №14'}
            description={'МДФ пластик'}
            images={h}
          />
          <CardKitchen
            alt="Кухонная мебель Мебельщика в Твери: искусство в каждой детали"
            style={{ marginTop: '-250px' }}
            name={'Проект №15'}
            description={'МДФ крашенный'}
            images={x}
          />
          <CardKitchen
            alt="Инновационные решения для кухонных интерьеров в Тверской области"
            style={{ marginTop: '-300px' }}
            name={'Проект №16'}
            description={'МДФ плёнка'}
            images={w}
          />
          <CardKitchen
            alt="Красота и функциональность в каждой кухне от мебельной фабрики - Мебельщик Тверь и Тверская область"
            style={{ marginTop: '-150px' }}
            name={'Проект №17'}
            description={'МДФ плёнка'}
            images={z}
          />
          <CardKitchen
            alt="Дизайнерские кухонные решения для вашего дома в Твери и Тверской области"
            style={{ marginTop: '-120px' }}
            name={'Проект №18'}
            description={'МДФ крашенный'}
            images={s}
          />
          <CardKitchen
            alt="Элегантные кухни с характером от Мебельщика в Твери"
            style={{ marginTop: '-200px' }}
            name={'Проект №19'}
            description={'МДФ крашенный'}
            images={c}
          />
          <CardKitchen
            alt="Тверская мебельная фабрика представляет: лучшие кухни "
            style={{ marginTop: '-210px' }}
            name={'Проект №110'}
            description={'МДФ плёнка'}
            images={e}
          />
          <CardKitchen
            alt="Кухонная мебель на заказ Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №111'}
            description={'ЛДСП эгерь'}
            images={r}
          />
          <CardKitchen
            alt="Кухни на заказ от мебельной фабрики Мебельщик Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №112'}
            description={'МДФ плёнка'}
            images={t}
          />
          <CardKitchen
            alt="Кухонные решения от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №113'}
            description={'ЛДСП эгерь'}
            images={y}
          />
          <CardKitchen
            alt="Индивидуальные кухни от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №114'}
            description={'МДФ пластик'}
            images={u}
          />
          <CardKitchen
            alt="Современные кухни от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №115'}
            description={'МДФ плёнка'}
            images={i}
          />
          <CardKitchen
            alt="Кухонные решения от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-410px' }}
            name={'Проект №116'}
            description={'МДФ плёнка'}
            images={o}
          />
          <CardKitchen
            alt="Мебель Тверь от мебельной фабрики Тверь и Тверская область"
            name={'Проект №117'}
            description={'Массив'}
            images={p}
          />
          <CardKitchen
            alt="Кухонная мебель от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-210px' }}
            name={'Проект №118'}
            description={'МДФ плёнка'}
            images={a}
          />

          <CardKitchen
            alt="Кухни на заказ от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-110px' }}
            name={'Проект №119'}
            description={'МДФ крашенный'}
            images={d}
          />
          <CardKitchen
            alt="Кухни Тверская область от мебельной фабрики Тверь и Тверская область"
            style={{ marginTop: '-310px' }}
            name={'Проект №120'}
            description={'МДФ пластик'}
            images={f}
          />
          <CardKitchen
            alt="Кухни Тверская область "
            style={{ marginTop: '-110px' }}
            name={'Проект №121'}
            description={'МДФ крашенный'}
            images={g}
          />

          <CardKitchen
            alt="Кухни Тверская область"
            style={{ marginTop: '-140px' }}
            name={'Проект №122'}
            description={'МДФ крашенный'}
            images={l}
          />
        </Box>
      </Box>
    </main>
  );
}
