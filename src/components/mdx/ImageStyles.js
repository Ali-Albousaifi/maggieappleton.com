import React from 'react'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { bpMinMD, bpMinSM, bpMaxSM } from '../../lib/breakpoints'

export const TwoCol = props => {
  return (
    <div
      css={css({
        [bpMinMD]: { gridTemplateColumns: '1fr 1fr' },
        gridTemplateColumns: '1fr',
        display: 'grid',
        gridGap: '20px',
      })}
    >
      {props.children}
    </div>
  )
}

export const ThreeImageGrid = props => {
  return (
    <div
      css={css({
        [bpMinSM]: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        gridTemplateColumns: 'repeat(2, 1fr)',
        display: 'grid',
        gridGap: '30px',
        padding: '20px 0px',
        img: {
          maxWidth: '100%',
          gridAutoFlow: 'row',
          padding: '6px',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const ImageFrame = props => {
  return (
    <div
      css={css({
        marginBottom: '1.6em',
        marginTop: '1.6em',
        boxShadow: '0px 2px 3px rgba(152, 151, 158, 0.1)',
        img: {
          maxWidth: '960px',
          border: '1px solid #e7eef3',
          borderRadius: '4px',
        },
      })}
    >
      {props.children}
    </div>
  )
}

export const ImageGrid = props => {
  return (
    <>
      <div
        css={css({
          [bpMinSM]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          gridTemplateColumns: 'repeat(1, 1fr)',
          display: 'grid',
          gridGap: '20px',
          img: {
            maxWidth: '100%',
            gridAutoFlow: 'row',
          },
        })}
      >
        {props.children}
      </div>
    </>
  )
}

export const FullWidth = props => {
  return (
    <div
      css={css`
        width: 200%;
        margin: 4em 0;
        margin-left: -50%;
        padding: 2em 0;
        background: ${props.bgColor};
        height: ${props.height};
        .innerDiv {
          max-width: 60%;
          margin: 0 auto;
          display: grid;
          grid-gap: 1em;
          grid-template-columns: 2fr 1fr;
          $bpMaxSM {
            grid-template-columns: 1fr;
          }
          p {
            padding: 1em;
            color: white;
            line-height: 1.6em;
          }
        }
      `}
    >
      <div className="innerDiv">{props.children}</div>
    </div>
  )
}