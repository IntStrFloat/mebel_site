'use client';
import Image from 'next/image';
import { CardKitchen } from './_src/components/Card';
import { Box, Title, Text, Divider, Space } from '@mantine/core'; // Импортируем ColoredDivider
import RootLayout from '@/app/layout';
import { HomeCarousel } from './_src/components/Carousel';
import { CardHome } from './_src/components/CardHome';
import Head from 'next/head';
import { TheHeader } from './_src/components/TheHeader';
import { TheFooter } from './_src/components/TheFooter';

export default function Home() {
  return (
    <main>
      <HomeCarousel />
      <Box sx={{ backgroundColor: '#F4F4F4;' }}>
        <Box mx="auto" sx={{ width: '70%', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <Title>Мебельщик - Изготовливаем кухни на заказ в Твери и Тверской области</Title>
          <Space h="  xl" />
          <Text>
            Мебельщик предлагает услуги по изготовлению мебели на заказ в Твери и Москве по
            индивидуальным размерам заказчика. Мы изготавливаем любую корпусную мебель — кухни,
            шкафы-купе, гардеробные, детские, мебель для офиса, торговое оборудование, витрины,
            мебель для школ и детских садов, для лабораторий, клиник, производственных предприятий,
            фитнес клубов, баров, кафе и ресторанов, предприятий общественного питания. Работаем в
            Твери, Москве и области.
          </Text>
          <Space h="xl" />
          <Text>
            Выезжаем на замер, проектируем, рассчитываем стоимость заказа изготавливаем и производим
            установку на месте.
          </Text>
        </Box>
      </Box>
      <Box
        mt="5rem"
        mx="auto"
        sx={{ width: '73%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <Title weight={500}>КАТАЛОГ ТОВАРОВ</Title>
        <Box
          mt="5rem"
          sx={{
            display: 'flex',
            alignItems: '',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          {/* Картинка с текстом */}
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          <CardHome />
          {/* Остальные картинки аналогичны */}
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#F4F4F4;' }}>
        <Box mx="auto" sx={{ width: '70%', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <Title>Мебельщик - Ваш Путь к Уникальным Кухням на Заказ</Title>
          <Space h="xl" />
          <Text>
            Приветствуем вас в мире уникальной индивидуальной мебели от профессионалов - Мебельщик.
            С 2009 года мы творим неповторимые кухни, гардеробные, шкафы-купе и корпусную мебель
            высочайшего качества, прямо от производителей, и завоевали доверие даже самых
            требовательных клиентов.
          </Text>

          <Text>
            Мы гордимся своей репутацией мастеров индивидуальной мебели. Каждая кухня от Мебельщика
            - это не просто мебель, это произведение искусства, соответствующее высочайшим
            европейским стандартам и доступное по разумной цене.
          </Text>
          <Space h="xl" />
          <Title>Уникальные Решения для Вашего Пространства</Title>
          <Space h="xl" />
          <Text>
            Благодаря нашему собственному производству, мы предоставляем вам широкий спектр
            возможностей для воплощения вашей мечты. С Мебельщиком вы можете настроить каждую
            деталь: выбрать материалы, цвета и элементы мебели, исходя из ваших желаний и бюджета.
            Мы создадим для вас уникальный проект, в котором каждая функция и дизайн соединены в
            гармонии.
          </Text>
        </Box>
      </Box>
    </main>
  );
}
