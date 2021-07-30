import LS2Request from '@enact/webos/LS2Request';

const config = require('./config.json');
const servicename = config.serviceName;
const LS2 = new LS2Request();

export function callAPI(method, params, onSuccess, onFailure){
    const API=`luna://${servicename}/`;
	return LS2.send({
		service: API,
		method: method,
		parameters: params,
		onSuccess: (res) => {
			onSuccess(res);
		},
		onFailure: (res) => {
			onFailure(res);
		}
	});
}