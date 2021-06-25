import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
  background: #1a1a1a;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
`

const SideBarNav = styled.div(
  ({ sidebar }) => css`
    background: #1a1a1a;
    /* background: #d62828; */
    width: 250px;
    height: 100vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    color: #fff;
    position: fixed;
    top: 0;
    /* padding-top: 7%; */
    left: ${sidebar ? '0' : '-100%'};
    transition: 350ms ease-in;
    z-index: 10;
  `
)

const SidebarWrap = styled.div`
  width: 100%;
  padding-top: 40%;
  z-index: 100;
`

const TestSideNav = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <Nav>
        <NavIcon to='#' onClick={showSidebar}>
          <FaIcons.FaArrowCircleRight />
        </NavIcon>
      </Nav>
      <SideBarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to='#'>
            <FaIcons.FaWindowClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => (
            <SubMenu item={item} key={index} />
          ))}
        </SidebarWrap>
      </SideBarNav>
    </>
  )
}

export default TestSideNav
