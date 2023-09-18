'use client';
import React, { useState } from 'react';
import { Card, Image, Text, Box, Modal, Paper, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './style.css';

interface Props {
  name: string;
  description: string;
  images: string[];
}

export const CardKitchen: React.FC<Props> = ({ name, description, images }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selected, setSelected] = useState('');
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  const openHangler = (url: string) => {
    setSelected(url);
    open();
  };

  const slides = images.map((url, index) => (
    <Carousel.Slide style={{ cursor: 'pointer' }} key={url} onClick={() => {}}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={url}
          style={{
            alignSelf: 'center',
            width: 'auto',
            height: '100%',
            objectFit: 'cover',
            marginTop: '-20%',
          }}
          onClick={() => openHangler(url)}
        />
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Card
      className="one"
      withBorder
      sx={{ margin: '10px', width: '820px', height: '550px', backgroundColor: '#f2f2f2' }}
      shadow="sm"
      padding="xl"
      mb={50}
    >
      <Card.Section>
        <Carousel
          sx={{ margin: '0px' }}
          height={400}
          withIndicators
          onSlideChange={(newSlide) => setActiveSlide(newSlide)}
          controlSize={50}
        >
          {slides}
        </Carousel>
      </Card.Section>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <Text>{description}</Text>
          <Text weight={500} size={40}>
            {name}
          </Text>
        </Box>
        <Box>
          <img style={{ width: '50px' }} src="arrow.svg" alt="" />
        </Box>
      </Box>
      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        size="xl"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Box sx={{ width: '100%', display: 'flex' }}>
          <img
            src={selected}
            alt={`Image ${modalImageIndex}`}
            style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Modal>
    </Card>
  );
};
