import LS2Request from '@enact/webos/LS2Request';

const config = require('./config.json');
const servicename = config.serviceName;

export function callAPI(method, params, callback){
    const API=`luna://${servicename}/${method}/`;
    return new LS2Request().send({
		service: API,
		method: 'callAPI',
		parameters: params,
		onSuccess: (res) => {
			callback(res);
		},
		onFailure: (res) => console.error(res),
	});
}