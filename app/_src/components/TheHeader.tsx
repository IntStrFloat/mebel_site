'use client';
import Link from 'next/link';
import {
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  Box,
  Group,
  StarIcon,
  Image,
} from '@mantine/core';
import './style.css';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
export const TheHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    // <Header height='100px' color='#0000'>
    //     <Link href='#'>Главная</Link>
    //     <Link href='#'>Кухни</Link>
    //     <Link href='#'>Тумбочки</Link>
    //     <Link href='#'>О нас</Link>
    // </Header>
    <header>
      <Group sx={{ height: '50px', backgroundColor: 'gray' }} className="clasik1">
        <Group
          mx="auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50px',
            width: '70rem',
            backgroundColor: 'gray',
            display: 'flex',
          }}
          className="clasiik"
        >
          <Group>
            <Text mr={25} weight={500} color="white" size="md">
              {' '}
              Есть вопросы?
            </Text>
            <img src="mail.svg" alt="" />
            <Text sx={{ margin: '0px' }} weight={500} color="white" size="md">
              <a
                style={{ textDecoration: 'none', color: 'white' }}
                href="mailto:mebelshik69@mail.com"
              >
                mebelshik69@mail.com
              </a>
            </Text>
          </Group>

          <Group>
            <a style={{ display: 'flex', textDecoration: 'none' }} href="tel:89157220075">
              <img src="phone.svg" alt="" />
              <Text weight={500} color="white" size="md">
                {' '}
                +7 (915) 722 00 75
              </Text>
            </a>
          </Group>
        </Group>
      </Group>
      <Navbar
        className="navMain"
        sx={{ height: `${opened ? '100vh' : '120px'} !important` }}
        height={'120px'}
        mx={'auto'}
      >
        <Group className="headerWrapper">
          <Burger
            mb={0}
            size="lg"
            className="burgerItem"
            opened={opened}
            onClick={() => {
              setOpened((prev) => !prev);
            }}
          />
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/"
          >
            Главная
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/kitchen"
          >
            Кухни
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/shkafi"
          >
            Шкафы-купе
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/office"
          >
            Офисная мебель
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/oborydovanie"
          >
            Торговое оборудование
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/prihozaya"
          >
            Прихожие
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/vannie"
          >
            Ванные
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/detskaya"
          >
            Детская мебель
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component="a"
            href="/contacts"
          >
            Контакты
          </Text>
        </Group>
      </Navbar>
    </header>
  );
};
