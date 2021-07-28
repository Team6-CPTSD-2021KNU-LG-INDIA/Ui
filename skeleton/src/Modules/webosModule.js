
let bridge = new WebOSServiceBridge();
const config = require('./config.json');
const servicename = config.serviceName;

export function callAPI(method, params, callback){
    const API=`luna://${servicename}/${method}`;
    bridge.onservicecallback = callback;
    bridge.call(API, params);
}