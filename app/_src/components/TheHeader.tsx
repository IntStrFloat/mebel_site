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
import { useDisclosure } from '@mantine/hooks';
export const TheHeader = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    // <Header height='100px' color='#0000'>
    //     <Link href='#'>Главная</Link>
    //     <Link href='#'>Кухни</Link>
    //     <Link href='#'>Тумбочки</Link>
    //     <Link href='#'>О нас</Link>
    // </Header>
    <header>
      <Group sx={{ height: '50px', backgroundColor: 'gray' }}>
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
        >
          <Group>
            <Text mr={25} weight={500} color="white" size="md">
              {' '}
              Есть вопросы?
            </Text>
            <img src="mail.svg" alt="" />
            <Text sx={{ margin: '0px' }} weight={500} color="white" size="md">
              mebelshik69@gmail.com
            </Text>
          </Group>

          <Group>
            <img src="phone.svg" alt="" />
            <Text weight={500} color="white" size="md">
              {' '}
              +7 (915) 739 75 70
            </Text>
          </Group>
        </Group>
      </Group>
      <Navbar
        className={opened ? 'nav open' : ''}
        sx={{
          textAlign: 'center',
          height: '6rem',
          boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, .4)',
          display: 'flex',
          alignItems: 'center',
        }}
        fixed={false}
        position={{ top: 0, left: 0 }}
        bg="white"
      >
        <Group
          className={opened ? 'nav' : ''}
          mx="auto"
          sx={{
            display: 'flex',
            height: '100%',
            width: '78%',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/"
          >
            Главная
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/kitchen"
          >
            Кухни
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/shkafi"
          >
            Шкафы-купе
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/office"
          >
            Офисная мебель
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/oborydovanie"
          >
            Торговое оборудование
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/detskaya"
          >
            Детская мебель
          </Text>
          <Text
            className={opened ? 'nav_item' : 'nav_item close'}
            color="dark"
            weight={700}
            size="lg"
            component={Link}
            href="/contacts"
          >
            Контакты
          </Text>
        </Group>
        <Burger size="lg" className="burg" opened={opened} onClick={toggle} />
      </Navbar>
    </header>
  );
};
