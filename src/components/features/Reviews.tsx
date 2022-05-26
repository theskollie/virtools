import React from 'react';
import {
  createStyles, Text, Avatar, Group, TypographyStylesProvider, Paper, useMantineTheme,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  comment: {
    padding: `${theme.spacing.xl}px ${theme.spacing.xl}px`,
    '@media (max-width: 450px)': { padding: `${theme.spacing.md}px ${theme.spacing.md}px` },
  },

  body: {

    paddingTop: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    '@media (min-width: 450px)': { paddingLeft: 54 },
  },

  content: {
    '& > p:last-child': {
      marginBottom: 0,
    },
  },
}));

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

const Reviews = ({ postedAt, body, author }: CommentHtmlProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const currentColor = theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[0];

  return (
    <Paper withBorder radius="md" className={classes.comment} sx={{ backgroundColor: currentColor }}>
      <Group>
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
};

export { Reviews };
