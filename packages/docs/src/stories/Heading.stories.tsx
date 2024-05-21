import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Heading',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: [
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
}
