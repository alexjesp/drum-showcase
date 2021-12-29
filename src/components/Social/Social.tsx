import React from 'react'
import styled from 'styled-components'

import { SocialItem } from './SocialItem'
import { SocialItemData } from '../../data/socialItems'

const SocialList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  position: fixed;
  top: 50px;

  @media screen and (min-width: 740px) and (max-width: 1100px) {
    position: static;
  }

  @media screen and (max-width: 740px) {
    position: static;
  }
`

type Props = {
  items: SocialItemData[]
}

export const Social: React.FunctionComponent<Props> = (props) => (
  <SocialList>
    {props.items.map((item, i) => (
      <SocialItem data={item} key={i} />
    ))}
  </SocialList>
)
