import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Input, InputProps } from '@design-system/react'

export default {
  title: 'Form/Input',
  component: Input,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">E-mail</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'E-mail',
  },
}

export const Prefix: StoryObj<InputProps> = {
  args: {
    prefix: 'email.com/',
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
}
