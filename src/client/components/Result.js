/**
 *
 * @author suliang
 * @date 2018/7/22
 */

import React from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

const TextArea = styled.textarea`
	padding: 1em;
	width: 100%;
	min-height: 10em;
	border: 1px solid #ded5d5;
  border-radius: 5px;
`;

const ResultPanel = styled.div`
	padding: 1em 5%;
	min-width: 30rem;
	box-shadow: 2px 2px 2px 2px #ded5d5;
	display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;


class Result extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: null,
			error: false,
		}
	}
	
	componentDidMount() {
		const { state } = this.props.location;
		const payload = state.payload;
		
		console.log(`payload: ${payload}`);
		
		fetch(`/api/result?payload=${payload}`,)
			.then(res => res.json())
			.then(info => this.setState({
				data: info.data,
				error: info.error
			}));
		
	}
	
	render(){
		const data = this.state.data;
		const error = this.state.error;
		
		if (data === null){
			return (
				<div>
					Loading......
				</div>
			)
		} else {
			const additionalData = JSON.parse(data).additionalData;
			
			if (error || additionalData === undefined){
				return(
					<ResultPanel>
						<p>Oops, looks something went wrong.</p>
						<TextArea>
							{data}
						</TextArea>
					</ResultPanel>
				)
			} else {
				
				return(
					<ResultPanel>
						<TextArea>
							{additionalData}
						</TextArea>
					</ResultPanel>
				)
			}
		}
	}
}

export default Result;