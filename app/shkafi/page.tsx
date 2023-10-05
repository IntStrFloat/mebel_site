'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Shkafi() {
  const q = ['./shkafi/1/3.jpg', './shkafi/1/2.jpg', './shkafi/1/1.jpg'];

  const e = ['./shkafi/3/1.jpg', './shkafi/3/2.jpg'];
  const r = ['./shkafi/4/1.jpg', './shkafi/4/2.jpg'];
  const t = ['./shkafi/5/2.jpg', './shkafi/5/1.jpg'];
  const y = ['./shkafi/6/1.jpg', './shkafi/6/2.jpg'];

  const o = ['./shkafi/9/1.jpg', './shkafi/9/2.jpg'];

  const a = ['./shkafi/11/3.jpg', './shkafi/11/1.jpg', './shkafi/11/2.jpg'];
  const s = ['./shkafi/12/1.jpg', './shkafi/12/2.jpg'];

  const g = ['./shkafi/15/1.jpg', './shkafi/15/2.jpg', './shkafi/15/3.jpg'];
  const h = ['./shkafi/16/1.jpg', './shkafi/16/2.jpg'];
  const k = ['./shkafi/18/1.jpg', './shkafi/18/2.jpg'];

  const x = ['./shkafi/21/1.jpg', './shkafi/21/2.jpg'];
  const с = ['./shkafi/22/1.jpg', './shkafi/22/2.jpg'];
  const v = ['./shkafi/23/1.jpg', './shkafi/23/2.jpg'];
  const b = ['./shkafi/24/1.jpg'];
  const n = ['./shkafi/25/1.jpg', './shkafi/25/2.jpg'];
  const qq = ['./shkafi/26/1.jpg', './shkafi/26/2.jpg'];
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
            <CardKitchen
              alt="Индивидуальные шкафы-купе Мебельщика в Твери: стиль и удобство от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №21'}
              description={'ЛДСП'}
              images={с}
            />
            <CardKitchen
              alt="Современные решения для организации пространства: шкафы-купе в Тверской области от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №22'}
              description={'ЛДСП'}
              images={y}
            />
            <CardKitchen
              alt="Шкафы-купе для максимальной функциональности и визуального воздействия от Мебельщика"
              style={{ marginTop: '-100px' }}
              name={'Проект №23'}
              description={'ЛДСП'}
              images={g}
            />
            <CardKitchen
              alt="Модульные шкафы-купе, созданные для вашего комфорта от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №24'}
              description={'ЛДСП'}
              images={x}
            />
            <CardKitchen
              alt="Соберите свой идеальный шкаф-купе вместе с Мебельщиком в Твери от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №25'}
              description={'ЛДСП'}
              images={q}
            />
            <CardKitchen
              alt="Шкафы-купе, сочетающие стиль и практичность, от мебельной фабрики от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №26'}
              description={'ЛДСП'}
              images={v}
            />
            <CardKitchen
              alt="Индивидуальные шкафы-купе Мебельщика в Твери и Тверской области: стиль и удобство от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №27'}
              description={'ЛДСП'}
              images={b}
            />
            <CardKitchen
              alt="Современные решения для организации пространства в Твери и Тверской области: шкафы-купе от Мебельщика"
              style={{ marginTop: '-100px' }}
              name={'Проект №28'}
              description={'ЛДСП'}
              images={n}
            />
            <CardKitchen
              alt="Шкафы-купе для максимальной функциональности и визуального воздействия в Твери от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №29'}
              description={'ЛДСП'}
              images={e}
            />
            <CardKitchen
              alt="Шкафы-купе, сочетающие стиль и практичность, от мебельной фабрики в Твери и Тверской области от Мебельщика"
              style={{ marginTop: '-100px' }}
              name={'Проект №210'}
              description={'ЛДСП'}
              images={r}
            />
            <CardKitchen
              alt="Шкафы-купе по индивидуальным заказам в Твери и Тверской области от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №211'}
              description={'ЛДСП'}
              images={t}
            />

            <CardKitchen
              alt="Мебель для хранения с характером: шкафы-купе от Мебельщика в Твери от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №212'}
              description={'ЛДСП'}
              images={o}
            />
            <CardKitchen
              alt="Кастомные шкафы-купе, созданные для вашего дома в Твери от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №213'}
              description={'ЛДСП'}
              images={qq}
            />
            <CardKitchen
              alt="Шкафы-купе, отражающие уют и функциональность Тверской области от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №214'}
              description={'ЛДСП'}
              images={a}
            />
            <CardKitchen
              alt="Шкафы-купе, придающие стиль вашему интерьеру в Твери и Тверской области от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №215'}
              description={'ЛДСП'}
              images={s}
            />

            <CardKitchen
              alt="Шкафы-купе по индивидуальным заказам в Твери и Тверской области  от Мебельщика"
              style={{ marginTop: '-100px' }}
              name={'Проект №216'}
              description={'ЛДСП'}
              images={h}
            />
            <CardKitchen
              alt="Шкафы-купе по индивидуальным заказам в Твери и Тверской области от Мебельщика"
              style={{ marginTop: '-300px' }}
              name={'Проект №217'}
              description={'ЛДСП'}
              images={k}
            />
          </Box>
        </Box>
      </main>
    </>
  );
}
