'use client';
import React from 'react';
import { Text, Divider, Space } from '@mantine/core';
import './style.css';
import { useState } from 'react';

interface CardProps {
  name: string;
  alt: string;
  src: string;
}

export const CardHome: React.FC<CardProps> = ({ name, src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={src} alt={alt} className="card-image" />
      <div className="card-content">
        <Text size="sm" color="white">
          КАТАЛОГ
        </Text>
        <Space h="xs" />
        <Divider color="white" size="xs" />
        <Text size={28} color="white">
          {name}
        </Text>
      </div>
    </div>
  );
};
