'use client';
import React, { useState } from 'react';
import { Card, Image, Text, Box, Modal, Paper, Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import './style.css';

interface Props {
  name: string;
  description: string;
}

export const CardKitchen: React.FC<Props> = ({ name, description }) => {
  const images = ['carousel_1.jpeg', 'carousel_2.jpg', 'carousel_3.jpg'];
  const [activeSlide, setActiveSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const slides = images.map((url, index) => (
    <Carousel.Slide style={{ cursor: 'pointer' }} key={url} onClick={() => {}}>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src={url}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
          }}
        />
        <Button
          variant="filled"
          style={{
            height: '40px',
            width: '60px',
            backgroundColor: 'white',
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1,
          }}
          onClick={(e) => {
            e.stopPropagation();
            openModal(index);
          }}
        >
          <img src="maximize.svg" alt="" />
        </Button>
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
      <Modal size="77rem" opened={modalOpen} onClose={closeModal}>
        <Paper p="md" shadow="xs" style={{ maxWidth: '80vw', maxHeight: '80vh' }}>
          <img
            src={images[modalImageIndex]}
            alt={`Image ${modalImageIndex}`}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </Paper>
      </Modal>
    </Card>
  );
};
