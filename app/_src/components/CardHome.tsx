'use client';
import React from 'react';
import { Text, Divider, Space } from '@mantine/core';
import './style.css';
import { useState } from 'react';

export const CardHome: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="homeCard.jpg" alt="" className="card-image" />
      <div className="card-content">
        <Text size="sm" color="white">
          КАТАЛОГ
        </Text>
        <Space h="xs" />
        <Divider color="white" size="xs" />
        <Text size={28} color="white">
          КУХНИ
        </Text>
      </div>
    </div>
  );
};