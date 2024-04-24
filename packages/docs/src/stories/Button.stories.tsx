import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@design-system/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Submit',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
}
