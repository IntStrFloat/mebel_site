'use client';
import { CardKitchen } from '../_src/components/Card';
import { Box, Image, Text, Title, Space, Divider } from '@mantine/core';
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Contacts() {
  return (
    <YMaps>
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
              КОНТАКТЫ
            </Title>
            <Space h="xl" />
          </Box>
          <Divider
            mx="auto"
            mb={60}
            mt={15}
            sx={{ width: '93%', boxShadow: '0px 0px 2px 0px' }}
            size="xs"
            color="gray"
          />
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>
              <h4 style={{ display: 'block', fontSize: '24px', fontWeight: 'bold' }}>
                Алексей Владимирович:
              </h4>
              <p>
                <a
                  style={{ textDecoration: 'none', color: 'rgb(163, 163, 163) ' }}
                  href="tel:89157220075"
                >
                  {' '}
                  7 (915) 722 00 75 - WhatsApp
                </a>{' '}
                <a
                  style={{ textDecoration: 'none', color: 'rgb(163, 163, 163) ', display: 'block' }}
                  href="tel:89036302909"
                >
                  {' '}
                  7 (903) 630 29 09 - Viber
                </a>
              </p>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold' }}>Михаил Викторович:</h4>
              <p>
                <a
                  style={{ textDecoration: 'none', color: 'rgb(163, 163, 163) ' }}
                  href="tel:89036306370"
                >
                  {' '}
                  7 (903) 630 63 70 - WhatsApp
                </a>
              </p>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold' }}>Почта:</h4>
              <p>
                <a
                  style={{ textDecoration: 'none', color: 'rgb(163, 163, 163) ' }}
                  href="mailto:mebelshik69@mail.ru"
                >
                  mebelshik69@mail.ru
                </a>
              </p>
            </div>
            <div>
              <div
                style={{
                  display: 'inline-block',
                  border: '2px solid rgb(128, 128, 128)',
                  borderRadius: '2px',
                }}
              >
                <Map defaultState={{ center: [56.833206, 35.875532], zoom: 17 }} />
              </div>
              <p>Россия, г. Терь, Авангардная ул., 25А</p>
            </div>
          </div>
        </Box>
      </main>
    </YMaps>
  );
}
