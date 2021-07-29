import LS2Request from '@enact/webos/LS2Request';

const config = require('./config.json');
const servicename = config.serviceName;

export function callAPI(method, params, callback){
    const API=`luna://${servicename}/`;
    return new LS2Request().send({
		service: API,
		method: method,
		parameters: params,
		onSuccess: (res) => {
			callback(res);
		},
		onFailure: (res) => console.error(res),
	});
}