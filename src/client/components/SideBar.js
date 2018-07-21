/**
 *
 * @author suliang
 * @date 2018/7/19
 */

import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";
import styled from 'styled-components';
import routes from './RouteConfig';

const SidebarContainer = styled.div`
	background: linear-gradient(167deg,#009cde,#003087 40rem) #009cde;
  bottom: 0;
  left: 0;
  padding-top: 5rem;
  position: fixed;
  top: 0;
	width: 20%;
`;

const SidebarNav = styled.nav`
  height: 100%;
  line-height: 1.25;
  overflow-y: auto;
  padding-top: 1rem;
  scroll-behavior: smooth;
`;

const SidebarLinkContainer = styled.li`
	padding: 1em 0;
`;

const SidebarLink = styled(Link)`
	font-size: 1em;
	font-weight: 500;
	color: #e9e6e6;
	text-decoration: none;
	
	&:hover{
		text-decoration: underline;
		color: #fff;
	}
`;

const SidebarUl = styled.ul`
	padding-left: 20%;
  list-style-type: none;
`;



class SideBar extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
				<SidebarContainer>
					<SidebarNav>
						<SidebarUl>
							<SidebarLinkContainer>
								<SidebarLink to="/">Home</SidebarLink>
							</SidebarLinkContainer>
							<SidebarLinkContainer>
								<SidebarLink to="/purchase">Purchase</SidebarLink>
							</SidebarLinkContainer>
							<SidebarLinkContainer>
								<SidebarLink to="/transaction">Transaction</SidebarLink>
							</SidebarLinkContainer>
						</SidebarUl>
					</SidebarNav>
				</SidebarContainer>
		)
	}
	
}

export default SideBar;