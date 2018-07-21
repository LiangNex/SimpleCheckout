
import express from 'express';
const router = express.Router();
import os from 'os';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import serialize from "serialize-javascript";

import {
	matchPath,
	StaticRouter
} from "react-router-dom";
import request from 'request';
import App from '../../client/App';
import Html from '../../client/template/Html';
import routes from '../../client/components/RouteConfig';
import {
	ServerStyleSheet,
	StyleSheetManager,
} from 'styled-components';
import Helmet from 'react-helmet';

/**
 * GET Home page
 */

router.get('*', function (req, res, next) {
	if (req.url.indexOf('api')>-1) return next();
	
	const sheet = new ServerStyleSheet();
	
	const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

	const promise = activeRoute.getInitialData
	? activeRoute.getInitialData(req.path)
	: Promise.resolve();
	
	promise.then((data) => {
		const context = { data };
		const body = ReactDomServer.renderToString(
			sheet.collectStyles(
			<StaticRouter
				location={req.url}
				context={context}
			>
				<App/>
			</StaticRouter>
			)
		);
		const helmet = Helmet.renderStatic();
		
		const title = `Simple Checkout`;
		const styles = sheet.getStyleTags();
		
		res.send(
			Html({
				body,
				styles,
				title,
			})
		)
	}).catch(next);

});

router.get('/api/getUsername', function (req, res, next) {

	console.log(`id: ${req.query.id}`);
	res.send({ username: os.userInfo().username });
});

router.get('/api/transaction', function (req, res, next) {
	const price = req.query.price;
	if (price !== undefined){
		const API_KEY = "AQE1hmfxL47NbxNDw0m/n3Q5qf3Ve55dHZxYTFdTxWq+l3JOk8J4BABkJz1fgjxh0GJPTqI99usQwV1bDb7kfNy1WIxIIkxgBw==-hGPBn8HaiKHNwORfh5U4r/UqZyiBm2VQqJ86+UeweU4=-6LMjSck4bjt8Frpb";
		
		const endpoint = "https://checkout-test.adyen.com/checkout/v32/paymentSession";
		console.log(`price: ${price}`);
		const transaction_id = `nex_test_order_${Date.now()}`;
		
		const data = {
			amount: {
				currency: 'USD',
				value: price
			},
			countryCode: "CN",
			merchantAccount: "SupportRecruitementCOM",
			reference: transaction_id,
			returnUrl: `/about`,
			sdkVersion: `1.3.2`,
			channel: `Web`,
		};
		
		const options = {
			url: endpoint,
			headers: {
				'content-type': 'application/json',
				'X-API-KEY': API_KEY
			},
			method: 'POST',
			json: true,
			body: data,
		};
		
		request(options, function (error, response, body) {
			let info = JSON.stringify(body);
			info = {
				data: info,
				transaction_id: transaction_id,
				error: false,
			};
			console.log(`response body: ${JSON.stringify(info)}`);
			res.send(info);
		});
	} else {
		res.statusCode = 401;
		res.send({
			data: 'No price is inputted. Please check again.',
			error: true
		});
		res.end();
	}
	
});


module.exports = router;
