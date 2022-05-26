import React from 'react';
import {
  createStyles, Header, Container, Group, Burger, Paper,
  Transition, Title, Image, useMantineTheme, ActionIcon, useMantineColorScheme,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { Sun, MoonStars } from 'tabler-icons-react';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.35)
          : theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.50),
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 0 : 1],
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderNav = ({ links, active, setActive }: HeaderResponsiveProps) => {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();

  const navigate = useNavigate();

  const items = links.map((link) => {
    if (link.label === 'Docs') {
      return (
        <a
          key={link.label}
          href={link.link}
          target="_blank"
          rel="noreferrer"
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        >
          {link.label}
        </a>
      );
    }
    return (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.link, { [classes.linkActive]: active === link.link })}
        onClick={(event) => {
          event.preventDefault();
          setActive(link.link);
          toggleOpened(false);
          navigate(link.link);
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container size="xl" className={classes.header}>
        <Group spacing={10} onClick={() => navigate('/')}>
          <Image src="./virtools.png" width={40} radius={10} />
          <Title
            order={2}
            sx={{
              fontFamily: 'Open Sans',
              fontWeight: 500,
              color: theme.colorScheme === 'dark' ? theme.colors.brand[4] : theme.colors.brand[1],
            }}
          >
            Virtools
          </Title>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
          <ActionIcon
            variant="outline"
            color={theme.colorScheme === 'dark' ? theme.colors.brand[1] : theme.colors.brand[1]}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {theme.colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export { HeaderNav };
