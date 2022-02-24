import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" {...props}>
      <rect width="18" height="18" rx="9" fill="#777E89" />
      <g clipPath="url(#clip0)">
        <path
          d="M7.96694 10.2723L7.80814 12.5059C8.03534 12.5059 8.13374 12.4083 8.25174 12.2911L9.31694 11.2731L11.5241 12.8895C11.9289 13.1151 12.2141 12.9963 12.3233 12.5171L13.7721 5.72832L13.7725 5.72792C13.9009 5.12952 13.5561 4.89552 13.1617 5.04232L4.64574 8.30272C4.06454 8.52832 4.07334 8.85232 4.54694 8.99912L6.72414 9.67632L11.7813 6.51192C12.0193 6.35432 12.2357 6.44152 12.0577 6.59912L7.96694 10.2723Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="9.6" height="9.6" fill="white" transform="translate(4.20001 4.19995)" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
