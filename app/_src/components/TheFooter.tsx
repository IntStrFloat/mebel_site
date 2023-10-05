'use client';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import style from './footer.module.css';

import {
  Footer,
  Group,
  Box,
  Image,
  Text,
  Title,
  TextInput,
  Button,
  AspectRatio,
  Space,
  Modal,
} from '@mantine/core';
export const TheFooter = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [email, setEmail] = useState<string>('');
  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        alert('Письмо отправлено успешно');
      } else {
        alert('Произошла ошибка при отправке письма');
      }
    } catch (error) {
      console.error(error);
      alert('Произошла ошибка при отправке письма');
    }
  };

  return (
    <footer>
      <Box
        mb={100}
        mt={100}
        sx={{
          backgroundColor: 'white',
          height: '102px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Group
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          className={style.first_section}
        >
          <Text size={30} weight={700}>
            Мебельщик
          </Text>
          <Group
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <a href="tel:89036306370" style={{ textDecoration: 'none', color: 'black' }}>
              <Text mb={-15} weight={500}>
                7 (915) 722 00 75
              </Text>
            </a>

            <Text weight={300}>Позвоните мне</Text>
          </Group>
          <Group sx={{ display: 'flex', flexDirection: 'column' }}>
            <Text mb={-15} weight={200}>
              Режим работы
            </Text>
            <Text weight={200}>с 9:00 до 21:00</Text>
          </Group>
          <Group>
            <a href="#">
              <img src="brand_telegram.svg" alt="" />
            </a>
            <a href="#">
              <img src="brand_vk.svg" alt="" />
            </a>
            <a href="mailto:mebelshik69@mail.ru">
              <img src="mail2.svg" alt="" />
            </a>
          </Group>
        </Group>
      </Box>
      <Box
        sx={{
          height: '280px',
          backgroundColor: '#FFF200',
          paddingTop: '30px',
          paddingBottom: '25px',
        }}
        className={style.second_section}
      >
        <Box
          mx="auto"
          sx={{ display: 'flex', width: '90%', height: '90%', justifyContent: 'space-between' }}
          className={style.secont_section_content}
        >
          <img src={'envelope.svg'} style={{ width: '147px', height: '107px' }}></img>
          <Group sx={{ width: '40%' }} className={style.text_information}>
            <Text size={28} weight={600} mt={-3} className={style.text}>
              Оставьте заявку на консультацию по телефону
            </Text>
            <Text color="gray" size={17} weight={450} className={style.text}>
              Рассказываем, как купить выгоднее: каждую неделю присылаем акционные предложения,
              скидки и советы профессионалов. Выбрать мебель мечты, которая прослужит долго и не
              ударит по карману — реально.
            </Text>
          </Group>
          <TextInput
            color="white"
            label="Почта"
            type="email"
            variant="unstyled"
            placeholder="Ваша почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="xl"
          />

          <Modal
            size="xl"
            opened={opened}
            onClose={close}
            title="Согласие на обработку персональных данных"
          >
            <Text mx="auto" style={{ height: '80%', width: '80%', textAlign: 'left' }}>
              Согласие на обработку персональных данных Я даю согласие на использование всех
              указанных мной персональных данных, таких как: имя, фамилию и отчество; номер
              телефона; адрес электронной почты; адрес доставки и место положение; информацию об
              избранных контактах; в том числе любую другую информацию, передаваемую посредством
              cookies сайта. также иных данных, полученных в результате их обработки, любыми
              способами (в т. ч. воспроизведение, электронное копирование, обезличивание,
              блокирование, уничтожение). Обработка может осуществляться как Компанией, так и
              третьими лицами с целью: обеспечения информационной поддержки; оказания услуг,
              связанных с деятельностью Компании; создания информационных систем персональных данных
              Компании; обеспечения интересов Компании и моих интересов; в любых других целях, прямо
              или косвенно связанных с обслуживанием и предложением продуктов Компании. Указанное
              согласие дано на срок 15 лет. В случае его отзыва обработка моих персональных данных
              должна быть прекращена Компанией и/или третьими лицами, а данные уничтожены. Я даю
              согласие на получение рекламы и информационных рассылок (в том числе по сети Интернет
              и телефонной сети), от Компании, ее контрагентов и аффилированных лиц. Правила
              использования персональных данных Собираемые персональные данные позволяют направлять
              Пользователям уведомления о новых продуктах, специальных предложениях и различных
              событиях. Они также помогают Компании совершенствовать услуги, контент и коммуникации.
              В случае нежелания быть включенным в список рассылки, Пользователь может в любое время
              отказаться от нее путём информирования Компании в письменной форме на электронный
              адрес support@dyatkovo.ru, а также внесения изменений в настройки своего профиля на
              сайте. Компания может использовать персональные данные Пользователей для отправки
              важных уведомлений, содержащих информацию об изменениях положений, условий и политик,
              а также подтверждающих размещенные пользователями заказы и совершенные покупки.
              Поскольку такая информация важна для взаимоотношений с Компанией, Пользователь не
              можете отказаться от получения таких сообщений. Компания также может использовать
              персональную информацию для внутренних целей, например, при проведении аудита, анализа
              данных и различных исследований в целях улучшения продуктов и услуг, а также для
              взаимодействия с потребителями.
            </Text>
          </Modal>
          <Group
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
            }}
            className={style.button_section}
          >
            <Button size="xl" color="dark" onClick={handleSubmit} sx={{ width: '65%' }}>
              Подписаться
            </Button>
            <Text variant="p" style={{ fontSize: '12px', textAlign: 'center', width: '55%' }}>
              Нажимая кнопку вы принимаете{' '}
              <a style={{ cursor: 'pointer' }} onClick={open}>
                пользовательской соглашение
              </a>
            </Text>
          </Group>
        </Box>
      </Box>
      <Group
        mt={40}
        sx={{
          display: 'flex',
          height: '400px',
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
      >
        <Group
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
            alignItems: 'flex-start',
          }}
          className={style.footera}
        >
          <Group>
            <Text size={20} component="h2">
              <a style={{ textDecoration: 'none', color: 'black' }} href="/">
                Главная
              </a>
            </Text>
          </Group>

          <Group
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
            className={style.footer_item}
          >
            <Text sx={{ textAlign: 'center' }} size={20} component="h2">
              Мебель
            </Text>
            <Space h="md" />
            <Text color="#a3a3a3" size={15} component="p">
              <a style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }} href="/kitchen">
                Кухни
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }} href="/shkafi">
                Шкафы-купе
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }} href="/office">
                Офисная мебель
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a
                style={{ textDecoration: 'none', color: 'rgb(163, 163, 163) ' }}
                href="/oborydovanie"
              >
                Торговое оборудование
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }} href="/detskaya">
                Детская мебель
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a
                style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }}
                href="/prihozaya"
              >
                Прихожие
              </a>
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              <a style={{ textDecoration: 'none', color: 'rgb(163, 163, 163)  ' }} href="/vannie">
                Ванные
              </a>
            </Text>
          </Group>

          <Group sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text size={20} component="h2">
              Контакты
            </Text>
            <Space h="md" />
            <Text color="#a3a3a3" size={15} component="p">
              Алексей Владимирович:
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              7 (915) 722 00 75
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              Михаил Викторович:
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              7 (903) 630 63 70
            </Text>
          </Group>
          <Group
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'center',
            }}
            className={style.footer_item}
          >
            <Text size={20} component="h2">
              Часы работы
            </Text>
            <Space h="md" />
            <Text color="#a3a3a3" size={15} component="p">
              ПН: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              ВТ: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              СР: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              ЧТ: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              ПТ: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              СБ: 9:00 - 21:00
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              ВС: 9:00 - 21:00
            </Text>
          </Group>
        </Group>

        {/* <Link href='#'>Главная</Link>
                <Link href='#'>Кухни</Link>
                <Link href='#'>Тумбочки</Link>
                <Link href='#'>О нас</Link> */}
      </Group>
    </footer>
  );
};
