import React from 'react';
import { Container } from '@mantine/core';

// Components
import { HomeHero } from '../components/home/HomeHero';
import { Faq } from '../components/home/Faq';
import { StepperHome } from '../components/home/StepperHome';

interface HomeProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ setActive }: HomeProps) => (
  <div>
    <HomeHero setActive={setActive} />
    <Container size="xl">
      <StepperHome />
      <Faq />
    </Container>
  </div>
);

export { Home };
