import React, { useState } from 'react';
import {
  Grid, Card, Text, Title, Button, Center,
  Badge, List, Switch, useMantineTheme,
  Container, Group, ActionIcon, createStyles,
} from '@mantine/core';
import {
  Leaf, Star, Bolt, Check,
} from 'tabler-icons-react';
import { PricingHero } from '../components/pricing/PricingHero';

const useStyles = createStyles((theme) => ({
  cardFooter: {
    height: '60px',
    backgroundColor: theme.colors.gray[3],
    borderRadius: '0px 0px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.brand[1],
  },
  cardFooterPremium: {
    height: '60px',
    backgroundColor: theme.colors.brand[6],
    borderRadius: '0px 0px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  badge: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  premiumButton: {
    backgroundColor: theme.colors.brand[2],
    color: theme.colors.brand[1],
    '&:hover': {
      backgroundColor: theme.colors.brand[7],
    },
  },
  leftRightTier: {
    color: theme.colors.brand[1],
  },
}));

const Pricing = () => {
  // Mantine
  const theme = useMantineTheme();
  const { classes } = useStyles();

  // State
  const [prices] = useState([0, 10, 20]);
  const [annual, setAnnual] = useState(true);
  return (
    <Container size="xl">
      <PricingHero />

      <Group position="center">
        <Text>Monthly</Text>
        <Switch checked={annual} onClick={() => setAnnual(!annual)} />
        <Text weight={500}>Yearly</Text>
      </Group>

      <Grid grow justify="center" align="center" pt={30}>

        {/* Lite Plan */}
        <Grid.Col span={4}>
          <Card
            className={classes.leftRightTier}
            style={{
              padding: '50px',
              paddingTop: '50px',
              paddingBottom: '70px',
              backgroundColor: theme.colors.gray[1],
              height: '550px',
            }}
          >
            <Card.Section>
              <div>
                <Group spacing="xs" position="center">
                  <ActionIcon sx={(appTheme) => ({ color: appTheme.colors.brand[0] })}>
                    <Leaf />
                  </ActionIcon>
                  <Title order={2} sx={(appTheme) => ({ color: appTheme.colors.brand[1] })}>Lite</Title>
                </Group>
                <Center>
                  <Text size="xs">
                    Perfect to get started
                  </Text>
                </Center>
              </div>
            </Card.Section>

            <Card.Section>

              <Group mt={20} spacing="xs" position="center">
                <Title sx={{ fontSize: '3.5rem', color: theme.colors.brand[1] }}>
                  <span>$</span>
                  {annual ? prices[0] : prices[0] * 2}
                </Title>
                <Text mt={20}> per user / month</Text>
              </Group>
            </Card.Section>

            <Card.Section>
              <Center>
                <Button fullWidth radius="sm" mt={10}>
                  Get Started
                </Button>
              </Center>
            </Card.Section>

            <Card.Section>
              <Text size="sm" weight="500" mt={20}>Lite includes:</Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={(
                  <Check
                    size={22}
                    color={
                      theme.colorScheme === 'dark'
                        ? theme.colors.brand[2]
                        : theme.colors.brand[2]
                    }
                  />
                )}
                mt={10}
                className={classes.leftRightTier}
              >
                <List.Item>Performance Monitor Dashboard </List.Item>
                <List.Item>Risk Management</List.Item>
                <List.Item>Summary Stats</List.Item>
                <List.Item>Bot Planner</List.Item>
                <List.Item>Windows / Mac / Linux Native App</List.Item>
              </List>
            </Card.Section>
          </Card>
          <div className={classes.cardFooter}>
            <Text size="md" weight="500">See all features</Text>
          </div>
        </Grid.Col>

        {/* Premium Plan */}
        <Grid.Col span={4}>
          <Card style={{
            padding: '50px',
            paddingTop: '30px',
            paddingBottom: '70px',
            backgroundColor: theme.colors.brand[1],
            height: '550px',
          }}
          >

            <Badge
              className={classes.badge}
              sx={{
                color: theme.colors.brand[3],
                backgroundColor: theme.colors.brand[0],
              }}
            >
              Most Popular
            </Badge>
            <Card.Section>
              <div>
                <Group spacing="xs" position="center">
                  <ActionIcon sx={(appTheme) => ({ color: appTheme.colors.brand[4] })}>
                    <Star />
                  </ActionIcon>
                  <Title order={2} sx={(appTheme) => ({ color: appTheme.colors.brand[4] })}>Premium</Title>
                </Group>
                <Center>
                  <Text
                    size="xs"
                    color="dimmed"
                    sx={{ color: theme.colors.brand[4] }}
                  >
                    Best for experienced traders
                  </Text>
                </Center>
              </div>
            </Card.Section>

            <Card.Section>

              <Group mt={20} spacing="xs" position="center">
                <Title sx={{ fontSize: '3.5rem', color: theme.colors.brand[4] }}>
                  <span>$</span>
                  {annual ? prices[1] : prices[1] * 2}
                </Title>
                <Text mt={20} sx={{ color: theme.colors.brand[4] }}> per user / month</Text>
              </Group>
            </Card.Section>

            <Card.Section>
              <Center>
                <Button fullWidth radius="sm" mt={10} className={classes.premiumButton}>
                  Try 30 Day Free Trial
                </Button>
              </Center>
            </Card.Section>

            <Card.Section>
              <Text
                size="sm"
                weight="500"
                mt={20}
                sx={{ color: theme.colors.brand[4] }}
              >
                Everything in Lite, plus:

              </Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={(
                  <Check
                    size={22}
                    color={theme.colorScheme === 'dark' ? theme.colors.brand[2] : theme.colors.brand[2]}
                  />
                )}
                mt={10}
                sx={{ color: theme.colors.brand[4] }}
              >
                <List.Item>DCA Strategy Backtester</List.Item>
                <List.Item>Access anywhere with our Web App</List.Item>
                <List.Item>Premium Discord Access</List.Item>
              </List>
            </Card.Section>
          </Card>
          <div className={classes.cardFooterPremium}>
            <Text size="md" weight="500">See all features</Text>
          </div>
        </Grid.Col>

        {/* Professional Plan */}
        <Grid.Col span={4}>
          <Card
            style={{
              padding: '50px',
              paddingTop: '50px',
              paddingBottom: '70px',
              backgroundColor: theme.colors.gray[1],
              height: '550px',
            }}
            className={classes.leftRightTier}
          >
            {/* <Card.Section>
                    <Center>
                    <Badge color="red" sx={{marginBottom: '10px'}}>Advanced Users/Traders</Badge>
                    </Center>
                </Card.Section> */}
            <Card.Section>
              <div>
                <Group spacing="xs" position="center">
                  <ActionIcon sx={(appTheme) => ({ color: appTheme.colors.brand[0] })}>
                    <Bolt />
                  </ActionIcon>
                  <Title order={2} sx={(appTheme) => ({ color: appTheme.colors.brand[1] })}>Professional</Title>
                </Group>
                <Center>
                  <Text size="xs">
                    Full toolkit for professionals
                  </Text>
                </Center>
              </div>
            </Card.Section>

            <Card.Section>

              <Group mt={20} spacing="xs" position="center">
                <Title sx={{ fontSize: '3.5rem', color: theme.colors.brand[1] }}>
                  $
                  {annual ? prices[2] : prices[2] * 2}
                </Title>
                <Text mt={20}> per user / month</Text>
              </Group>
            </Card.Section>

            <Card.Section>
              <Center>
                <Button fullWidth radius="sm" mt={10} sx={{ backgroundColor: theme.colors.brand[0] }}>
                  Try 30 Day Free Trial
                </Button>
              </Center>
            </Card.Section>

            <Card.Section>
              <Text size="sm" weight="500" mt={20}>Everything in Premium, plus:</Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={(
                  <Check
                    size={22}
                    color={theme.colorScheme === 'dark' ? theme.colors.brand[2] : theme.colors.brand[2]}
                  />
                )}
                mt={10}
                className={classes.leftRightTier}
              >
                <List.Item>Backtester Best Performers DB</List.Item>
                <List.Item>Virtools Signals</List.Item>
                <List.Item>Experimental Features</List.Item>
              </List>
            </Card.Section>
          </Card>
          <div className={classes.cardFooter}>
            <Text size="md" weight="500">See all features</Text>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export { Pricing };
