import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { NavItem } from '../data/navItems'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: BebasNeueRegular;
  font-size: 2em;
  margin-top: 1em;
`

const NavListItem = styled.li`
  display: flex;
  flex: none;
  justify-content: flex-end;

  @media screen and (max-width: 740px) {
    justify-content: center;
  }
`

const NavListItemLink = styled(Link)`
  &,
  &:visited {
    text-decoration: none;
    color: #000;
  }
`

type Props = {
  items: NavItem[]
}

export const Nav: React.FunctionComponent<Props> = (props) => (
  <NavList>
    {props.items.map((props, i) => (
      <NavListItem key={i}>
        <NavAnchor {...props} />
      </NavListItem>
    ))}
  </NavList>
)

const NavAnchor: React.FunctionComponent<NavItem> = (props) => {
  if (props.external) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    )
  }
  return <NavListItemLink href={props.href}>{props.title}</NavListItemLink>
}
