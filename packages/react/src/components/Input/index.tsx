import { ComponentProps } from 'react'
import { InputContainer, Prefix, Input as SInput } from './styles'

export interface InputProps extends ComponentProps<typeof SInput> {
  prefix?: string
}

export function Input({ prefix, ...props }: InputProps) {
  return (
    <InputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <SInput {...props} />
    </InputContainer>
  )
}

Input.displayName = 'Input'
