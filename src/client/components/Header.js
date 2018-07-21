/**
 *
 * @author suliang
 * @date 2018/7/18
 */

import styled from "styled-components";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HeaderContainer = styled.header`
	box-shadow: 0 2px 4px #ded5d5;
	display: flex;
	text-align: center;
	height: 4rem;
	width: 100%;
	position: absolute;
	z-index: 2;
	background: #fff;
	justify-content: center;
	
	@media screen and (max-width: 768px) {
    min-height: 2rem;
    box-shadow: none;
	}
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: center;
`;

const HeaderLeft = styled.div`
	flex-basis: 10%;
	text-align: center;
`;

const HeaderRight = styled.div`
	flex-basis: 10%;
`;

const HeaderTitle = styled.p`
	margin: auto;
`;

const Header = () => (
	<HeaderContainer>
		<HeaderContent>
			<HeaderTitle>Simple Checkout</HeaderTitle>
		</HeaderContent>
	</HeaderContainer>
);

export default Header;
