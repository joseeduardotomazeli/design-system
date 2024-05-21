import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Text',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Custom: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
}
