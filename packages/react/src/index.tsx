import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  borderRadius: '$sm',
  border: 0,
  backgroundColor: '$green300',
  color: '$white',
  fontFamily: '$default',
  fontWeight: 'bold',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      large: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
