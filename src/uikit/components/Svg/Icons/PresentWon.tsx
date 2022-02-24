/* eslint-disable react/style-prop-object */
import React from 'react'
import uniqueId from 'lodash/uniqueId'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId('svg')
  const { mr: marginR='0px' } = props
  return (
    <img src='images/lottery/total-ticket.svg' alt='' {...props} style={{marginRight:`${String(marginR)}`}}/> 
  )
}

export default Icon
