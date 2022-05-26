import React from 'react';
import {
  createStyles, Text, Container, ActionIcon, Group, Title, Image, Paper,
} from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: '15px',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: theme.colorScheme === 'dark' ? '1px solid #2C2E33' : '1px solid #e9ecef',

  },

  logo: {
    maxWidth: 200,
    marginTop: 20,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
    marginTop: '20px',
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    paddingTop: 3,
    paddingBottom: 3,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const FooterMain = ({ data }: FooterLinksProps) => {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link) => {
      if (link.link.includes('http')) {
        return (
          <Text<'a'>
            key={link.link}
            className={classes.link}
            component="a"
            href={link.link}
            target="_blank"
          >
            {link.label}
          </Text>
        );
      }

      return (
        <Link to={link.link} className={classes.link} key={link.label}>
          <Text>
            {link.label}
          </Text>
        </Link>
      );
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Paper>
        <Container className={classes.inner}>

          <div className={classes.logo}>
            <Image src="./virtools.png" width="25%" mb={5} radius={10} />
            <Title order={4}>Virtools</Title>
            <Text size="xs" color="dimmed" className={classes.description}>
              Data based statistics for your Crypto Trading
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © 2022 Virtools. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <BrandTwitter size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandYoutube size={18} />
            </ActionIcon>
            <ActionIcon size="lg">
              <BrandInstagram size={18} />
            </ActionIcon>
          </Group>
        </Container>
      </Paper>
    </footer>
  );
};

export { FooterMain };
