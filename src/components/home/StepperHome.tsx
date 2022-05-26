/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Stepper, Title, Container, Center, Paper,
} from '@mantine/core';
import { Platforms } from './Platforms';

const StepperHome = () => {
  const [active, setActive] = useState(0);

  return (
    <Container size="xl">
      <Paper sx={{ '@media (max-width: 450px)': { paddingTop: '40px' }, '@media (min-width: 450px)': { padding: '50px' } }}>
        <Center>
          <div>
            <Title mb={5} order={2}>Get Started in 3 Easy Steps</Title>
          </div>
        </Center>
        <Platforms />
        <Stepper active={active} onStepClick={setActive} breakpoint="sm" mt={20}>
          <Stepper.Step label="Sign Up" description="Get Started!">
            Register an account to get started!
            You will need to decide which platform you intend to access your data with.
            We recommend our web based solution!
          </Stepper.Step>
          <Stepper.Step label="API Keys" description="Connection">
            Create and link API keys from your 3Commas account to your 3CPM account.
            This is how we pull data related to your crypto trading. All data displayed is personalized to your trading.
          </Stepper.Step>
          <Stepper.Step label="Data Sync" description="Initial Launch">
            Once you have linked your API Keys, our system will begin the initial sync. This process can take a few minutes to complete.
            Once this sync has been complete, your personalized data dashboard will be generated.
          </Stepper.Step>
          <Stepper.Completed>
            You are ready to start using your personalized dashboard! Your data will automatically stay in sync and show you the latest performance information.
          </Stepper.Completed>
        </Stepper>

      </Paper>
    </Container>
  );
};

export { StepperHome };
