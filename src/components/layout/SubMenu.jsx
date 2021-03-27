import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3em;
  height: 80px;
  padding: 20px;
  text-decoration: none;
  &:hover {
    background: #1f1f1f;
    border-left: 2px solid #F36B2B;
    cursor: pointer;
  }
`

const SidebarLabel = styled.span(
  ({ color }) => css`
    margin-left: 1em;
  `
)

const DropDownLink = styled(Link)`
  background: #1f1f1f;
  display: flex;
  /* justify-content: center; */
  padding-left: 2em;
  color: #ddd;
  align-items: center;
  height: 60px;


  &:hover {
    background: #181818;
    cursor: pointer;
  }
  
`
 
const SubMenu = ({ item }) => {

  console.log("TITLE:", item.title, "SUB NAVS:", item.subNav)

  const [subnav, setSubnav] = useState(false)

  const showSubNav = () => setSubnav(!subnav)
  
    return (
      <>
        <SidebarLink 
          to={item.subNav ? "#" : item.path }
          onClick={ item.subNav && showSubNav }>
          <div>
            {item.icon} 
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav ? item.iconClosed : item.subNav ? item.iconOpen : null }
          </div>
        </SidebarLink>   
        {subnav && item.subNav.map((item, index) => (
          <DropDownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropDownLink>
        ))}     
      </>
  )
}

export default SubMenu