import './App.css';

import {
  AppShell,
  useMantineTheme,
  Paper,
  ColorSchemeProvider, ColorScheme,
  MantineProvider, MantineThemeOverride,
} from '@mantine/core';

import { Routes, Route } from 'react-router-dom';

// Pages
import React, { useState } from 'react';
import {
  Home, Blog, Features, NotFound, Pricing, Support,
} from './pages';

// Components
import { HeaderNav } from './components/HeaderNav';
import { FooterMain } from './components/FooterMain';

// Utils
import { links } from './utils/navItems';
import { footerItems } from './utils/footerItems';

const App = () => {
  const theme = useMantineTheme();

  const [active, setActive] = useState(links[0].link);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  const myTheme : MantineThemeOverride = {
    colorScheme,
    primaryColor: 'brand',
    primaryShade: 0,
    headings: {
      fontFamily: 'Open Sans',
      fontWeight: 500,
    },
    fontFamily: 'Open Sans',
    colors: {
      brand: [
        '#8BBABC', '#212B3B', '#FFC20A', '#E7EAEE', '#FFFFFF',
        '#59999B', '#19202C', '#C79500', '#A3AEBD', '#BFBFBF',
      ],
    },
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={myTheme}>
        <Paper>
          <AppShell
            styles={{
              main: {
                background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white,
                padding: '15px',
                flexGrow: 3,
              },
            }}
            footer={
              <FooterMain data={footerItems.data} />
            }
            header={
              <HeaderNav links={links} active={active} setActive={setActive} />
            }
          >
            <div className="body-container">
              <Routes>
                <Route path="/" element={<Home setActive={setActive} />} />
                <Route path="/features" element={<Features />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/support" element={<Support />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </AppShell>
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export {
  App,
};
