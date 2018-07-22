/**
 *
 * @author suliang
 * @date 2018/7/22
 */

import React from 'react';
import styled from 'styled-components';
import {
	Link
} from 'react-router-dom';

const TransactionPanel = styled.div`
	padding: 1em 5%;
	min-width: 30rem;
	box-shadow: 2px 2px 2px 2px #ded5d5;
	display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const PayLoadInput = styled.textarea`
	padding: 1em;
	margin: 1em 0;
	width: 100%;
	min-height: 10em;
	border: 1px solid #ded5d5;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
	margin: 1em 0;
	padding: 1em 5%;
	width: 100%;
	border-radius: 5px;
	border: none;
	font-size: 1em;
	font-weight: 500;
	color: #fff;
	background: #3c89ce;
`;

class Transaction extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			payload: '',
		}
	}
	
	handleChange(e){
		this.setState({
			payload: e.target.value,
		})
	}
	
	render(){
		const payloadValue = this.state.payload;
		
		return(
			<TransactionPanel>
				<div>
					<p>Please input the payload, it can be found in the browser console of the page where you finish your transaction</p>
				</div>
				<div>
					<PayLoadInput
						value={payloadValue}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<Link to={{
						pathname: '/result',
						state: {
							payload: payloadValue
						},
					}}>
						<SubmitButton>Submit</SubmitButton>
					</Link>
				</div>
			</TransactionPanel>
		)
	}
}

export default Transaction;