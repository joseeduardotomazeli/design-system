import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  space,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@my-ds/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors,
    space,
    radii,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})
