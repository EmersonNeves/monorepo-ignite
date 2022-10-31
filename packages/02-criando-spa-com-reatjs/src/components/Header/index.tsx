import React from "react";
import { HeaderContainer } from "./styles";
import logoIgnite from '../../assets/logo-ignite.svg'
import {Timer, Scroll} from 'phosphor-react'
import {NavLink} from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
     <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer" end><Timer/></NavLink>
        <NavLink to="/historic" title="Histórico"><Scroll/></NavLink>
      </nav>
    </HeaderContainer>
  );
}
