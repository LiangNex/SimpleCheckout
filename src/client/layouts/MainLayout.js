/**
 *
 * @author suliang
 * @date 2018/7/18
 */

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import SideBar from '../components/SideBar';

const Layout = styled.div`
	display: flex;
	flex-wrap: wrap;
	background: #fff;
	height: 100%;
	width: 100%;
`;

const Main = styled.main`
	position: relative;
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	position: fixed;
`;


const MainLayout = (props) => (
	<Layout>
		<Header/>
		<Main>
			{props.children}
		</Main>
		<Footer/>
	</Layout>
);

export default MainLayout;