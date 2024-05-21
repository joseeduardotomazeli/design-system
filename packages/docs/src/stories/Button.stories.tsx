import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@design-system/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Submit',
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: ['sm', 'md'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Icon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next step
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
