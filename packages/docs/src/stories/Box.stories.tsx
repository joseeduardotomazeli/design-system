import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@my-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
