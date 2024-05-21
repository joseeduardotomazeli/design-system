import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@design-system/react'

export default {
  title: 'Data/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/joseeduardotomazeli.png',
    alt: 'José Eduardo Tomazeli',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
