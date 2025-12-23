import { capitalize } from '@/lib/utils';

export const themeNames = ['dark', 'synth', 'blue'] as const;
export type ThemeName = (typeof themeNames)[number];

export interface Theme {
  background: string;
  secondaryBackground: string;
  lightBackground: string;
}

export const ThemeName = {
  eq: {
    equals: (a: ThemeName, b: ThemeName) => a === b,
  },
};

export const showThemeName = {
  show: capitalize,
};

export const darkTheme: Theme = {
  background: '#03030d',
  secondaryBackground: '#101624',
  lightBackground: '#192030',
};

export const synthTheme: Theme = {
  background: '#240d2c',
  secondaryBackground: '#15071a',
  lightBackground: '#341D3B',
};

export const blueTheme: Theme = {
  background: '#001729',
  secondaryBackground: '#001123',
  lightBackground: '#192030',
};

export const getTheme = (theme: ThemeName): Theme => {
  switch (theme) {
    case 'blue':
      return blueTheme;
    case 'dark':
      return darkTheme;
    case 'synth':
      return synthTheme;
    default:
      return darkTheme;
  }
};
