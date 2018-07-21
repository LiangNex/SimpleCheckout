/**
 *
 * @author suliang
 * @date 2018/7/18
 */

import styled from "styled-components";
import React from "react";

const FooterContainer = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: 100%;
	border-top: 1px solid #ded5d5;
	display: flex;
	justify-content: center;
	height: 4rem;
	background: #fff;
`;

const FooterTitle = styled.p`
	margin-top: 1em;
`;

const Footer = () => (
	<FooterContainer>
		<div>
			<FooterTitle>Liang's test project</FooterTitle>
		</div>
	</FooterContainer>
);

export default Footer;