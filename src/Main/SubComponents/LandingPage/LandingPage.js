import { Carousel } from '@mantine/carousel';
import { useEffect, useRef } from 'react';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './LandingPage.module.css';
import { data } from '../../../assets/LandingPageImagesData';
import Autoplay from 'embla-carousel-autoplay';

export function LandingPageCard ({ image, title, category }) {
    return (
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          style={{ backgroundImage: `url(${image})` }}
          className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Go To Project
      </Button>
    </Paper>
  );
};


export function LandingPageCardsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 6000 }));
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <LandingPageCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      slideSize={{ base: '100%' }}
      slideGap={0}
      emblaOptions={{ 
        align: 'start',
        slidesToScroll: 1,
        loop: true,
        duration:100,
      }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
    >
      {slides}
    </Carousel>
  );
}