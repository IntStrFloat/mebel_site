'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Shkafi() {
  const p = ['./shkafi/10/1.jpg', './shkafi/10/2.jpg'];
  const q = ['./vannie/1/1.jpg'];
  const r = ['./vannie/2/1.jpg'];
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
              МЕБЕЛЬ ДЛЯ ВАННОЙ
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
              alt="Мебель для ванной от Мебельщика в Твери и Тверской области: стиль и практичность"
              style={{ marginTop: '-100px' }}
              name={'Проект №1'}
              description={'Мебель для ванной'}
              images={p}
            />
            <CardKitchen
              alt="Роскошь и практичность в каждой детали мебели для ванной от Мебельщика в Твери и Тверской области"
              style={{ marginTop: '-400px' }}
              name={'Проект №2'}
              description={'Мебель для ванной'}
              images={r}
            />
            <CardKitchen
              alt="Качественная мебель для ванны, создающая уют и функциональность в Твери и Тверской области"
              style={{ marginTop: '-400px' }}
              name={'Проект №3'}
              description={'Мебель для ванной'}
              images={q}
            />
          </Box>
        </Box>
      </main>
    </>
  );
}
