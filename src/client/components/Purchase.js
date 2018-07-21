/**
 *
 * @author suliang
 * @date 2018/7/18
 */

import React from 'react';
import styled from 'styled-components';
import MainLayout from "../layouts/MainLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ExecutionEnvironment from 'exenv';
import {Link} from 'react-router-dom';

const SelectGoodsPanel = styled.div`
	padding: 1em 5%;
	min-width: 30rem;
	box-shadow: 2px 2px 2px 2px #ded5d5;
`;

const GoodsContainer = styled.div`
	text-align: center;
`;

const GoodsCounter = styled.div`
	text-align: right;
`;

const PurchaseButton = styled.button`
	margin: 2em 0;
	padding: 1em 5%;
	width: 100%;
	border-radius: 5px;
	border: none;
	font-size: 1em;
	font-weight: 500;
	color: #fff;
	background: #3c89ce;
`;

const CountButton = styled.button`
  margin: 0 0.5em;
  color: #fff;
  background: #3c89ce;
  font-size: 0.8em;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  padding: 1em;
`;

class Purchase extends React.Component{
	constructor(props){
		super(props);
		this.handleMinusClick = this.handleMinusClick.bind(this);
		this.handlePlusClick = this.handlePlusClick.bind(this);
		this.state = {
			count: 1,
		};
	}
	
	handlePlusClick(){
		let count = this.state.count;
		if (count < 10) {
			count++;
		} else {
			count = 10;
			window.alert('You can buy at most 10 calculators per transaction!');
		}
		
		this.setState({
			count: count,
		});
	}
	
	handleMinusClick(){
		let count = this.state.count;
		if (count > 1){
			count--;
		} else {
			count = 1;
			window.alert('You should at least pick 1 calculator before continuing!');
		}
		
		this.setState({
			count: count,
		});
	}
	
	render(){
		const count = this.state.count;
		console.log(Date.now());
		
		const prePrice = count * 2;
		
		return(
			<div>
				<SelectGoodsPanel>
					<p>How many calculators do you want to buy?</p>
					<GoodsContainer>
						<FontAwesomeIcon icon='calculator'/> $2
					</GoodsContainer>
					<GoodsCounter>
						<p>Count: {count}</p>
						<CountButton onClick={this.handlePlusClick}>
							<FontAwesomeIcon icon='plus'/>
						</CountButton>
						<CountButton onClick={this.handleMinusClick}>
							<FontAwesomeIcon icon='minus'/>
						</CountButton>
					</GoodsCounter>
					<p>You need to pay {prePrice} USD</p>
					<Link to={`/payment/${prePrice}`}>
						<PurchaseButton>Purchase</PurchaseButton>
					</Link>
				</SelectGoodsPanel>
			</div>
		)
	}
}

export default Purchase;