'use client';
import { Carousel } from '@mantine/carousel';
import { Box, Image } from '@mantine/core';
import { useState } from 'react';
import './style.css';
const images = ['carousel_1.jpeg', 'carousel_8.jpg', 'carousel_9.jpg'];

export const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = images.map((url, index) => (
    <Carousel.Slide key={url}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          overflow: 'hidden',
          transition: 'transform 10s ease-in-out', // Плавный переход
          transform: index === activeSlide ? 'scale(1.1)' : 'scale(1)', // Масштаб для активного слайда
        }}
      >
        <Image
          src={url}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover', // Добавляем стиль objectFit
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '43%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
            opacity: index === activeSlide ? 1 : 0, // Показываем надпись только на активном слайде
            transition: 'opacity 1s ease-in-out', // Плавная анимация opacity
          }}
          className="mebelsLogo"
        >
          Мебельная фабрика &lt;&lt;Мебельщик&gt;&gt;
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.3)', // Полупрозрачный цвет затемнения
            opacity: index === activeSlide ? 1 : 0, // Показываем затемнение только на активном слайде
            transition: 'opacity 1s ease-in-out', // Плавная анимация opacity
          }}
        />
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '0px',
        height: '100vh',
        overflow: 'hidden',
      }}
      className="homecarousel"
    >
      <Carousel
        sx={{ margin: '0px' }}
        withIndicators
        onSlideChange={(newSlide) => setActiveSlide(newSlide)}
        controlSize={40}
      >
        {slides}
      </Carousel>
    </Box>
  );
};
