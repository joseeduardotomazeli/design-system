import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@my-ds/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
