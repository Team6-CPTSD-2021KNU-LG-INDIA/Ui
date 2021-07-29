import LS2Request from '@enact/webos/LS2Request';

const config = require('./config.json');
const servicename = config.serviceName;
const LS2 = new LS2Request();

export function callAPI(method, params, callback){
    const API=`luna://${servicename}/`;
	try{
		return LS2.send({
			service: API,
			method: method,
			parameters: params,
			onSuccess: (res) => {
				callback(res);
			},
			onFailure: (res) => console.error(res),
		});
	}catch(e){
		return e.toString();
	}
}