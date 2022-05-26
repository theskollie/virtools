import React from 'react';
import {
  createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Paper,
} from '@mantine/core';
import {
  Flame, InfoCircle, Notebook, Businessplan,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px  ${theme.spacing.xl * 2}px`,
    marginBottom: '20px',
    '@media (max-width: 450px)': {
      padding: `${theme.spacing.lg}px  ${theme.spacing.lg}px`,
    },
  },

  title: {
    fontFamily: 'Open Sans',
    fontSize: 36,
    fontWeight: 400,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: Notebook,
    title: 'Bot Planner',
    // eslint-disable-next-line max-len
    description: 'Add and remove bots in a simulated dashboard to determine maximum risk and capital usage before deploying.',
  },
  {
    icon: Businessplan,
    title: 'Performance Monitor',
    // eslint-disable-next-line max-len
    description: 'Analyze performance of current deals. Compare profit of active bots to scale up your best performers and remove poor performers.',
  },
  {
    icon: InfoCircle,
    title: 'Summary Stats',
    description:
      'Monitor real-time data regarding your account, summarized in an easy to understand dashboard. ',
  },
  {
    icon: Flame,
    title: 'Risk Management',
    description:
      "Ensure your trading doesn't exceed desired risk levels. Monitor real-time risk and bankroll stats.",
  },
];

const FeaturesHero = () => {
  const { classes } = useStyles();
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        sx={(theme) => ({
          backgroundColor: theme.colors.brand[1],
        })}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Paper>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              A fully featured Crypto Bot performance monitor & optimizer
            </Title>
            <Text color="dimmed">
              {/* eslint-disable-next-line max-len */}
              Monitor performance of current bots, analyze your risk and downward coverage, compare bot settings to others using our backtester and much more.
            </Text>

            <Button
              size="lg"
              radius="md"
              mt="xl"
              sx={(theme) => ({
                backgroundColor: theme.colors.brand[2],
                color: theme.colors.brand[1],
                '&:hover': { color: theme.colors.brand[2] },
              })}
            >
              Demo Experience
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </Paper>
  );
};

export { FeaturesHero };
