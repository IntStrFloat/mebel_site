'use client';
import Link from 'next/link';
import Head from 'next/head';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

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
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });
  const [opened, { open, close }] = useDisclosure(false);
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
        >
          <Text size={30} weight={700}>
            Мебельщик 69
          </Text>
          <Group
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text mb={-15} weight={500}>
              7 (915) 722 00 75
            </Text>
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
            <a href="#">
              <img src="mail2.svg" alt="" />
            </a>
          </Group>
        </Group>
      </Box>
      <Box
        sx={{
          height: '190px',
          backgroundColor: '#FFF200',
          paddingTop: '30px',
          paddingBottom: '25px',
        }}
      >
        <Group
          mx="auto"
          sx={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <img src={'envelope.svg'} style={{ width: '147px', height: '107px' }}></img>
          <Group sx={{ width: '40%' }}>
            <Text lineClamp={2} size={28} weight={600}>
              Оставьте заявку на консультацию по телефону
            </Text>
            <Text lineClamp={4} color="gray" size={17} weight={450}>
              Рассказываем, как купить выгоднее: каждую неделю присылаем акционные предложения,
              скидки и советы профессионалов. Выбрать мебель мечты, которая прослужит долго и не
              ударит по карману — реально.
            </Text>
          </Group>
          <Group
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              width: '30%',
            }}
          >
            <TextInput
              sx={{ width: '30%' }}
              color="white"
              label="Почта"
              variant="unstyled"
              placeholder="Ваша почта"
              {...form.getInputProps('email')}
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
                связанных с деятельностью Компании; создания информационных систем персональных
                данных Компании; обеспечения интересов Компании и моих интересов; в любых других
                целях, прямо или косвенно связанных с обслуживанием и предложением продуктов
                Компании. Указанное согласие дано на срок 15 лет. В случае его отзыва обработка моих
                персональных данных должна быть прекращена Компанией и/или третьими лицами, а данные
                уничтожены. Я даю согласие на получение рекламы и информационных рассылок (в том
                числе по сети Интернет и телефонной сети), от Компании, ее контрагентов и
                аффилированных лиц. Правила использования персональных данных Собираемые
                персональные данные позволяют направлять Пользователям уведомления о новых
                продуктах, специальных предложениях и различных событиях. Они также помогают
                Компании совершенствовать услуги, контент и коммуникации. В случае нежелания быть
                включенным в список рассылки, Пользователь может в любое время отказаться от нее
                путём информирования Компании в письменной форме на электронный адрес
                support@dyatkovo.ru, а также внесения изменений в настройки своего профиля на сайте.
                Компания может использовать персональные данные Пользователей для отправки важных
                уведомлений, содержащих информацию об изменениях положений, условий и политик, а
                также подтверждающих размещенные пользователями заказы и совершенные покупки.
                Поскольку такая информация важна для взаимоотношений с Компанией, Пользователь не
                можете отказаться от получения таких сообщений. Компания также может использовать
                персональную информацию для внутренних целей, например, при проведении аудита,
                анализа данных и различных исследований в целях улучшения продуктов и услуг, а также
                для взаимодействия с потребителями.
              </Text>
            </Modal>
            <Group sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
              <Button size="xl" color="dark" onClick={() => {}}>
                Подписаться
              </Button>
              <Text variant="p" style={{ fontSize: '12px', textAlign: 'center' }}>
                Нажимая кнопку вы принимаете{' '}
                <a style={{ cursor: 'pointer' }} onClick={open}>
                  пользовательской соглашение
                </a>
              </Text>
            </Group>
          </Group>
        </Group>
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
        >
          <Group>
            <Text size={20} component="h2">
              Главная
            </Text>
          </Group>

          <Group sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text sx={{ textAlign: 'left' }} size={20} component="h2">
              Мебель
            </Text>
            <Space h="md" />
            <Text color="#a3a3a3" size={15} component="p">
              Кухни
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              Шкафы-купе
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              Офисная мебель
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              Торговое оборудование
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              Детская мебель
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
              Михаил Отчество:
            </Text>
            <Text color="#a3a3a3" size={15} component="p">
              7 (915) 722 00 75
            </Text>
          </Group>
          <Group sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
