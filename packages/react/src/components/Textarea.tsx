import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Textarea = styled('textarea', {
  boxSizing: 'border-box',
  minHeight: 80,
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$green300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextareaProps extends ComponentProps<typeof Textarea> {}

Textarea.displayName = 'Textarea'
