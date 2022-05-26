import React from 'react';
import {
  Center, Group, ThemeIcon, Title,
} from '@mantine/core';
import { BrandApple, BrandWindows, DeviceMobile } from 'tabler-icons-react';

const Platforms = () => (
  <div>
    <Center>
      <Title order={5} mb={5} mt={6}>Available on all platforms</Title>
    </Center>
    <Center>
      <Group grow>
        <div>
          <ThemeIcon
            size="sm"
            sx={(appTheme) => ({
              backgroundColor: appTheme.colors.brand[1],
            })}
          >
            <BrandWindows />
          </ThemeIcon>
        </div>
        <div>
          <ThemeIcon
            size="sm"
            sx={(appTheme) => ({
              backgroundColor: appTheme.colors.brand[1],
            })}
          >
            <BrandApple />
          </ThemeIcon>
        </div>
        <div>
          <ThemeIcon
            size="sm"
            sx={(appTheme) => ({
              backgroundColor: appTheme.colors.brand[1],
            })}
          >
            <DeviceMobile />
          </ThemeIcon>
        </div>
      </Group>
    </Center>
  </div>
);

export { Platforms };
