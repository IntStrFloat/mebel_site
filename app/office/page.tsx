'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import RootLayout from '@/app/layout';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import Head from 'next/head';
{
  /* <Head>
        <title>
          Офисная мебель в Твери – Эргономичные решения для вашего рабочего пространства
        </title>
        <meta
          name="description"
          content="Повысьте эффективность работы с нашей офисной мебелью в Тверской области. Широкий выбор и быстрая доставка."
        />
      </Head> */
}
export default function Office() {
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
            ОФИСНАЯ МЕБЕЛЬ
          </Title>
          <Space h="xl" />
          <Text>
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
