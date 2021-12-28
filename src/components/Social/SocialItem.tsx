import React from 'react'
import styled from 'styled-components'
import { SocialItemData } from '../../data/socialItems'
import { iconMap } from './iconMap'

const SocialItemLink = styled.a`
  display: inline-block;
  fill: #000;
  width: 24px;
`

const SocialItemLi = styled.li`
  margin-right: 10px;
  flex: none;
`

type Props = {
  data: SocialItemData
}

export const SocialItem: React.FunctionComponent<Props> = (props) => {
  const { data } = props
  const Icon = iconMap[data.name]
  return (
    <SocialItemLi>
      <SocialItemLink
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: data.wider ? '57px' : '24px' }}
      >
        <Icon />
      </SocialItemLink>
    </SocialItemLi>
  )
}
