import React from 'react';
import {
  createStyles, Image, Container, Title, Text, Button, SimpleGrid,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    marginTop: 30,
    marginBottom: 20,
    height: '500px',
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const NotFound = () => {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  return (
    <Container size="xl" className={classes.root}>

      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        <Image src="./404.svg" className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          <Button
            variant="outline"
            sx={{
              backgroundColor: theme.colors.brand[1],
              color: theme.colors.brand[4],
              border: 0,
            }}
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => navigate('/')}
          >
            Get back to home page
          </Button>
        </div>
        <Image src="./404.svg" className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export { NotFound };
