'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { TheHeader } from './_src/components/TheHeader';
import Head from 'next/head';

export const useGluedEmotionCache = (key = 'emotion') => {
  const [cache] = useState(() => {
    const cache = createCache({ key });
    cache.compat = true;
    return cache;
  });
  useServerInsertedHTML(() => {
    const entries = Object.entries(cache.inserted);
    if (entries.length === 0) return null;
    const names = entries
      .map(([n]) => n)
      .filter((n) => typeof n === 'string')
      .join(' ');
    const styles = entries.map(([, s]) => s).join('\n');
    const emotionKey = `${key} ${names}`;
    return <style dangerouslySetInnerHTML={{ __html: styles }} data-emotion={emotionKey} />;
  });
  return cache;
};

interface ProvideProps {
  children: React.ReactNode;
}

export const Provider: React.FC<ProvideProps> = ({ children }) => {
  const cache = useGluedEmotionCache();
  return (
    <>
      <CacheProvider value={cache}>
        <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
          {children}
        </MantineProvider>
      </CacheProvider>
    </>
  );
};
