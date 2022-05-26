// Core
import {
  Title, Grid, Image, Container, ThemeIcon, Center, Paper, createStyles,
} from '@mantine/core';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import React, { useEffect, useState } from 'react';

// Components
import { FeaturesHero } from '../components/features/FeaturesHero';
import { Reviews } from '../components/features/Reviews';

// Utils
import { reviews } from '../utils/reviews';
import { screenshots } from '../utils/screenshots';

const useStyles = createStyles(() => ({
  sideScreenshots: {
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
      transform: 'scale(2.1)',

    },
  },
  mainScreenshots: {
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
      transform: 'scale(1.6)',

    },
  },

}));

const Features = () => {
  const { classes } = useStyles();
  // const theme = useMantineTheme();
  const [pointer, setPointer] = useState(1);
  const [reviewData, setReviewData] = useState<any>('Loading');

  const screenWidth: number = window.screen.width;

  useEffect(() => {
    setReviewData(() => ([
      <Grid.Col span={screenWidth > 450 ? 5 : 8}>
        <Reviews
          postedAt={reviews[pointer - 1].postedAt}
          body={reviews[pointer - 1].body}
          author={reviews[pointer - 1].author}
        />
      </Grid.Col>,
      <Grid.Col span={screenWidth > 450 ? 5 : 8}>
        <Reviews
          postedAt={reviews[pointer].postedAt}
          body={reviews[pointer].body}
          author={reviews[pointer].author}
        />
      </Grid.Col>,
    ]

    ));
  }, [pointer]);

  return (
    <div>
      <Container size="xl">
        <Paper sx={{ paddingBottom: '20px', '@media (min-width: 450px)': { paddingTop: '20px' } }}>
          <FeaturesHero />
          <Title order={2} sx={{ textAlign: 'center', marginBottom: '30px' }}>Reviews</Title>
          <Grid grow justify="center" align="center" mb={50}>
            <Grid.Col span={1}>
              <Center>
                <ThemeIcon
                  radius="xl"
                  size="xl"
                  onClick={() => {
                    if ((pointer - 1) !== 0) {
                      setPointer((prev) => prev - 1);
                    }
                  }}
                >
                  <ArrowLeft />
                </ThemeIcon>
              </Center>
            </Grid.Col>

            {reviewData[0]}
            {screenWidth > 450 && reviewData[1]}

            <Grid.Col span={1}>
              <Center>
                <ThemeIcon
                  radius="xl"
                  size="xl"
                  onClick={() => {
                    if (pointer < reviews.length - 1) {
                      setPointer((prev) => prev + 1);
                    }
                  }}
                >
                  <ArrowRight />
                </ThemeIcon>
              </Center>
            </Grid.Col>
          </Grid>

          <Paper sx={{ paddingBottom: '10px' }}>
            <Title order={2} sx={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>Screenshots</Title>
            <Grid justify="center" align="center">
              <Grid.Col md={3} className={classes.sideScreenshots}>
                <Image src={screenshots[0].url} />
              </Grid.Col>
              <Grid.Col md={5} className={classes.mainScreenshots}>
                <Image src={screenshots[1].url} />
              </Grid.Col>
              <Grid.Col md={3} className={classes.sideScreenshots}>
                <Image src={screenshots[2].url} />
              </Grid.Col>
              <Grid.Col md={3} className={classes.sideScreenshots}>
                <Image src={screenshots[3].url} />
              </Grid.Col>
              <Grid.Col md={5} className={classes.mainScreenshots}>
                <Image src={screenshots[4].url} />
              </Grid.Col>
              <Grid.Col md={3} className={classes.sideScreenshots}>
                <Image src={screenshots[5].url} />
              </Grid.Col>
            </Grid>
          </Paper>

        </Paper>
      </Container>
    </div>
  );
};

export { Features };
