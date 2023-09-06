'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';

export default function Shkafi() {
  return (
    <main style={{ marginTop: '50px' }}>
      <Box mx="auto" sx={{ width: '1700px' }}>
        <Box
          sx={{
            width: '1000px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Title mb={20} size={70}>
            ШКАФЫ КУПЕ
          </Title>
          <Space h="xl" />
          <Text>
            Пространство и Стиль в Одном Изделии - Шкафы-купе от Мебельщика. Шкафы-купе - это не
            только функциональное решение для хранения, но и элемент дизайна, добавляющий уют и
            организованность в ваш дом. Мебельщик предлагает широкий выбор шкафов-купе, созданных с
            любовью и вниманием к каждой детали. Каждый шкаф-купе отражает индивидуальность его
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
        <Divider mb={60} mt={15} sx={{ boxShadow: '0px 0px 2px 0px' }} size="xs" color="gray" />
        <Box sx={{ display: 'flex', width: '1700px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
          <CardKitchen name={'Кухня'} description={'Доставка в пос. Грядки'} />
        </Box>
      </Box>
    </main>
  );
}