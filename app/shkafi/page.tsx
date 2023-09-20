'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Shkafi() {
  const q = ['./shkafi/1/1.jpg', './shkafi/1/2.jpg', './shkafi/1/3.jpg'];
  const w = ['./shkafi/2/1.jpg', './shkafi/2/2.jpg'];
  const e = ['./shkafi/3/1.jpg', './shkafi/3/2.jpg'];
  const r = ['./shkafi/4/1.jpg', './shkafi/4/2.jpg'];
  const t = ['./shkafi/5/1.jpg', './shkafi/5/2.jpg'];
  const y = ['./shkafi/6/1.jpg', './shkafi/6/2.jpg'];
  const u = ['./shkafi/7/1.jpg'];
  const i = ['./shkafi/8/1.jpg'];
  const o = ['./shkafi/9/1.jpg', './shkafi/9/2.jpg'];
  const p = ['./shkafi/10/1.jpg', './shkafi/10/2.jpg'];
  const a = ['./shkafi/11/1.jpg', './shkafi/11/2.jpg', './shkafi/11/3.jpg'];
  const s = ['./shkafi/12/1.jpg', './shkafi/12/2.jpg'];
  const d = ['./shkafi/13/1.jpg'];
  const f = ['./shkafi/14/1.jpg'];
  const g = ['./shkafi/15/1.jpg'];
  const h = ['./shkafi/16/1.jpg'];
  const j = ['./shkafi/17/1.jpg'];
  const k = ['./shkafi/18/1.jpg', './shkafi/18/2.jpg'];
  const l = ['./shkafi/19/1.jpg'];
  const z = ['./shkafi/20/1.jpg', './shkafi/20/1.jpg'];
  return (
    <>
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
              ШКАФЫ КУПЕ
            </Title>
            <Space h="xl" />
            <Text sx={{ width: '70%' }}>
              Пространство и Стиль в Одном Изделии - Шкафы-купе от Мебельщика. Шкафы-купе - это не
              только функциональное решение для хранения, но и элемент дизайна, добавляющий уют и
              организованность в ваш дом. Мебельщик предлагает широкий выбор шкафов-купе, созданных
              с любовью и вниманием к каждой детали. Каждый шкаф-купе отражает индивидуальность его
              владельца.
              <br />
              <br />
              Наша мебель сочетает в себе высокое качество материалов и внимание к современным
              дизайнерским тенденциям. Вы сможете выбрать размер, отделение и отделку, чтобы шкаф
              идеально соответствовал вашим потребностям и интерьеру. Создайте организованное
              пространство с элементами стиля - выберите шкаф-купе от Мебельщика.
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
            sx={{
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
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
            <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={j} />
            <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={k} />
            <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={l} />
            <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} images={z} />
          </Box>
        </Box>
      </main>
    </>
  );
}
