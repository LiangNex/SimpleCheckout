/**
 *
 * @author suliang
 * @date 2018/7/19
 */

import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';
import Purchase from './Purchase';

export default function Home () {
	return (
		<div>
			<p>
				Welcome to Liang's sample checkout page. Click below link to start.
			</p>
			<Link to={'/purchase'}>Purchase</Link>
			<Route path={'/purchase'} component={Purchase}/>
		</div>
	)
}