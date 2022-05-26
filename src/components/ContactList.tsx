import React from 'react';
import {
  Group, ThemeIcon, Title, Box,
} from '@mantine/core';
import {
  Photo, BrandDiscord, Icon, Mail, BrandGithub,
} from 'tabler-icons-react';

interface ConnectTypes {
  name: string;
  url?: string;
  text: string;
  icon?: Icon;
}

const howtoContact: ConnectTypes[] = [
  {
    name: 'Discord',
    url: 'https://discord.gg/Gq6UDHk5PC',
    text: 'Join Discord',
    icon: BrandDiscord,
  },
  {
    name: 'Email',
    url: 'mailto:support@3cpm.io',
    text: 'support@3cpm.io',
    icon: Mail,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/3cpm',
    text: 'View Source',
    icon: BrandGithub,
  },
];

const outputContact = howtoContact.map((item) => (
  <Group>
    <ThemeIcon>
      {item.icon ? <item.icon /> : <Photo />}
    </ThemeIcon>
    <Title order={5} sx={{ fontFamily: 'Montserrat', fontWeight: 'normal' }}>{item.name}</Title>
    {item.url ? <a href={item.url}>{item.text}</a> : item.text}
  </Group>
));

const ContactList = () => (
  <div>
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        height: '250px',
        justifyContent: 'space-evenly',
        alignItems: 'space-apart',

        a: {
          color: 'black',
          fontSize: '0.7rem',
          fontFamily: 'Montserrat',
        },

      })}
    >
      {outputContact}
    </Box>
  </div>
);

export { ContactList };
