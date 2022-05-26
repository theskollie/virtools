import React from 'react';
import {
  createStyles, Image, Accordion, Grid, Col, Container, Title, Paper,
} from '@mantine/core';

import { data } from '../../utils/faqEntries';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    '@media (max-width: 450px)': {
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.sm,
    },
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
  svg: {
    filter: 'fill(black)',
  },
}));

const Faq = () => {
  const { classes } = useStyles();

  const faqData = data.map((item) => (
    <Accordion.Item
      key={item.question}
      label={item.question}
      className={classes.item}
    >
      {item.answer}
    </Accordion.Item>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl">
        <Paper sx={{ '@media (min-width: 450px)': { padding: '50px' } }}>
          <Grid id="faq-grid" gutter={20}>
            <Col span={12} md={6}>
              <Image src="./faq.svg" alt="Frequently Asked Questions" className={classes.svg} />
            </Col>
            <Col span={12} md={6}>
              <Title order={2} align="left" className={classes.title}>
                Frequently Asked Questions
              </Title>
              <Accordion iconPosition="right" initialItem={0}>
                {faqData}
              </Accordion>
            </Col>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export { Faq };
