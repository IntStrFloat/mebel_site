'use client';
import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { Card, Image, Text, Box, Modal, Paper, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import './style.css';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  description: string;
  images: string[];
  alt: string;
}

export const CardKitchen: React.FC<Props> = ({ alt, name, description, images, style }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selected, setSelected] = useState('');
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  const openHangler = (url: string) => {
    setSelected(url);
    open();
  };

  const slides = images.map((url, index) => (
    <Carousel.Slide
      style={{ cursor: 'pointer', height: '100% !important' }}
      key={url}
      onClick={() => {}}
    >
      <Box
        sx={{
          height: '100vh !important',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center !important',
          width: '100%',
        }}
      >
        <Image
          alt={alt}
          src={url}
          style={{
            alignSelf: 'center',
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh !important',
            ...style,
          }}
          onClick={() => openHangler(url)}
        />
      </Box>
    </Carousel.Slide>
  ));
  const matchesPhone = useMediaQuery('(max-width: 863px)', true, {
    getInitialValueInEffect: false,
  });
  return (
    <Card
      className="one"
      withBorder
      sx={{
        margin: '10px',
        width: '820px',
        height: matchesPhone ? '350px' : '600px',
        backgroundColor: '#f2f2f2',
        overflow: 'hidden !important',
      }}
      shadow="sm"
      padding="xl"
      mb={50}
    >
      <Card.Section>
        <Carousel
          sx={{ margin: '0px', overflow: 'hidden !important' }}
          height={matchesPhone ? 200 : 450}
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
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '90vh !important',
          overflow: 'hidden',
        }}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* <Box sx={{ width: '100%', display: 'flex' }}>
          <img
            src={selected}
            alt={`Image ${modalImageIndex}`}
            style={{ margin: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }}
          />
        </Box> */}
        <Carousel
          sx={{
            margin: '0px',
            width: '100%',
            overflow: 'hidden',
            height: '100vh !important',
          }}
          height={matchesPhone ? 200 : 450}
          withIndicators
          onSlideChange={(newSlide) => setActiveSlide(newSlide)}
          controlSize={50}
        >
          {slides}
        </Carousel>
      </Modal>
    </Card>
  );
};
