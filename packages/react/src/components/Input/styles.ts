import { styled } from '../../styles'

export const InputContainer = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',
  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  backgroundColor: '$gray900',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  width: '100%',
  border: 0,
  backgroundColor: 'transparent',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})
