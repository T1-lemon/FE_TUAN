import React from 'react'

import '../assets/css/components/button.css'

type Props = {
  text?: string
  icon?: React.ReactNode
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
  onClickBtn?: () => void
}

export default function ButtonCustomize(props: Props) {
  const { text, icon, className, type, onClickBtn } = props
  return (
    <button
      type={`${type ?? 'button'}`}
      className={`button__customize ${className ?? ''}`}
      onClick={onClickBtn}
    >
      {text ?? icon}
    </button>
  )
}
