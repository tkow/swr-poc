import defaultTheme from './colors/default'
import darkTheme from './colors/dark'
import { createStitches, CSS as BasedCss } from '@stitches/react'
import { ScaleValue } from '@stitches/react'
import { Property } from '@stitches/react/types/css'

export const MEDIA_QUERY = {
  xl: 1440,
  lg: 1170,
  md: 768,
  sm: 450,
  xsm: 380,
  xxsm: 320,
}

export type MediaQuery = typeof MEDIA_QUERY
export type MediaQueryType = keyof typeof MEDIA_QUERY

export type DeviceFontSizeType =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'

export const DEFAULT_FONT_SIZE: Record<DeviceFontSizeType, number> = {
  xxsmall: 8,
  xsmall: 10,
  small: 14,
  medium: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 40,
}

export type FontSize = keyof typeof DEFAULT_FONT_SIZE

export const {
  getCssText,
  createTheme,
  globalCss,
  config,
  css,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: defaultTheme,
    fonts: {
      sans:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif," Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono:
        '"IBM Plex Mono", "JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      body: '1rem',
      0: '0.625rem', // 10px
      1: '0.75rem', // 12px
      2: '0.875rem', // 14px
      3: '1rem', // 16px - body, h5, h4
      4: '1.125rem', // 18px
      5: '1.25rem', // 20px
      6: '1.375rem', // 22px
      7: '1.5625rem', // 25px - h3
      8: '1.75rem', // 28px
      9: '2rem', // 32px - h2
      10: '2.25rem', // 36px
      11: '2.625rem', // 42px - h1
      12: '2.875rem', // 46px
      13: '3.1875rem', // 51px
      ...DEFAULT_FONT_SIZE,
    },
    radii: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      m: '0.4rem',
      lg: '0.625rem',
      xl: '1rem',
      full: '9999px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      max: 999,
    },
    space: {
      none: '0px',
      xxsmall: '2px',
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '48px',
    },
    letterSpacings: {
      none: '0px',
      xxsmall: '2px',
      xsmall: '4px',
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px',
      xxlarge: '48px',
    },
  },
  media: Object.entries(MEDIA_QUERY).reduce((result, [id, size]) => {
    return {
      ...result,
      [id]: `(min-width: ${size}px)`
    }
  }, {}) as Record<MediaQueryType, string>,
  utils: {
    // https://stitches.dev/blog/migrating-from-beta-to-v1
    marginHorizontal: (value: ScaleValue<'space'> | Property.Margin) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginVertical: (value: ScaleValue<'space'> | Property.Margin) => ({
      marginTop: value,
      marginBOTTOM: value,
    }),
    paddingHorizontal: (value: ScaleValue<'space'> | Property.Margin) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingVertical: (value: ScaleValue<'space'> | Property.Margin) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  }
})


const dark = createTheme({
  colors: darkTheme
})

export const colorThemes = {
  default: theme,
  dark,
}

export type CSS = BasedCss<typeof config>
