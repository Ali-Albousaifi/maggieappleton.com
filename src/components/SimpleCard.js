import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from './Theming'

const SimpleCard = props => {
  const theme = useTheme()

  return (
    <div
      css={css({
        border: '1px solid rgba(52, 61, 68, 0.05)',
        transition: props.hover
          ? 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;'
          : null,
        margin: '0 auto',
        clear: 'both',
        marginBottom: props.marginBottom ? props.marginBottom : '2em',
        marginTop: props.marginTop ? props.marginTop : null,
        padding: props.padding ? props.padding : '1.4em 1.6em 2.4em',
        width: props.width ? props.width : '100%',
        maxWidth: props.maxWidth ? props.maxWidth : '100%',
        borderRadius: '6px',
        'p, h1, h2, h3, h4, button' : {
          textAlign: props.center ? 'center' : null,
          margin: props.center ? '0.8em auto 0' : null,
        },
        boxShadow: props.hover
          ? '0px 1px 2px rgba(52, 61, 68, 0.1)'
          : '0 4px 10px -4px rgba(0,0,0,0.15)',
        ':hover': {
          transform: props.hover ? 'scale(1.015)' : null,
          borderTop: props.hover
            ? `2px solid ${theme.colors.lightOrange}`
            : null,
          borderRadius: props.hover ? '0px 0px 6px 6px' : null,
          boxShadow: props.hover ? '0 10px 30px -10px rgba(0,0,0,0.15)' : null,
          p: {
            transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
          },
        },
      })}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default SimpleCard
