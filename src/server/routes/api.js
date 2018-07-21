/**
 *
 * @author suliang
 * @date 2018/7/20
 */

import express from 'express';
const router = express.Router();

import request from 'request';

router.get('/api/transaction', function (req, res, next) {
	
	const API_KEY = "AQE1hmfxL47NbxNDw0m/n3Q5qf3Ve55dHZxYTFdTxWq+l3JOk8J4BABkJz1fgjxh0GJPTqI99usQwV1bDb7kfNy1WIxIIkxgBw==-hGPBn8HaiKHNwORfh5U4r/UqZyiBm2VQqJ86+UeweU4=-6LMjSck4bjt8Frpb";
	
	const endpoint = "https://checkout-test.adyen.com/checkout/v32/paymentSession";
	const price = 1.5;
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
		};
		console.log(`response body: ${JSON.stringify(info)}`);
		res.send(info);
	});
	
});

module.exports = router;