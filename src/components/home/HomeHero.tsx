/* eslint-disable max-len */
import React from 'react';
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,

    '@media (max-width: 400px)': {
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: 'Open Sans',
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.45)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '2px 10px',
  },
}));

interface HeroProps {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const HomeHero = ({ setActive }: HeroProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Data Driven
              Statistics
              {' '}
              <br />
              {' '}
              for
              {' '}
              <span className={classes.highlight}>Crypto Bots</span>
            </Title>
            <Text color="dimmed" mt="md">
              Get real-time analytics related to your crypto trading. Monitor active positions, assess risk levels, backtest strategies and so much more.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={(
                <ThemeIcon size={20} radius="xl" sx={{ backgroundColor: theme.colors.brand[1] }}>
                  <Check size={12} />
                </ThemeIcon>
              )}
            >
              <List.Item>
                <b>Monitor Performance</b>
                {' '}
                – maximize profits by monitoring active deals and improving losers.
              </List.Item>
              <List.Item>
                <b>Manage Risk</b>
                {' '}
                – Ensure your strategy is within your set risk level.
              </List.Item>
              <List.Item>
                <b>Premium Features</b>
                {' '}
                – Backtest DCA Strategies, Custom Signals,
                {' '}
                <br />
                {' '}
                DCA Bots + more
              </List.Item>
            </List>

            <Group mt={30}>
              <Link to="/features">
                <Button
                  radius="xl"
                  size="md"
                  sx={{ backgroundColor: theme.colors.brand[2], color: theme.colors.brand[1], '&:hover': { color: theme.colors.brand[2] } }}
                  className={classes.control}
                  onClick={() => setActive('/features')}
                >
                  More Features
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Try Demo
                </Button>
              </Link>
            </Group>
          </div>
          <Image src="./heroimage.svg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
};

export { HomeHero };
