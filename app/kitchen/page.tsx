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
  const s = ['./kitchens/12/1.jpg', './kitchens/12/2.jpg', './kitchens/12/3.jpg'];
  const d = ['./kitchens/13/1.jpg'];
  const f = ['./kitchens/14/1.jpg'];
  const g = ['./kitchens/15/1.jpg'];
  const h = ['./kitchens/16/1.jpg'];

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
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={q} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={w} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={e} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={r} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={t} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={y} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={u} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={i} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={o} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={p} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={a} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={s} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={d} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={f} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={g} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={h} />
        </Box>
      </Box>
    </main>
  );
}
