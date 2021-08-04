const server=require('./config.json').iotServer;

let Devices = [];

class DeviceInfo{
    constructor(name,id,apilist,connection){
      this.name = name;
      this.id = id;
      this.apilist = apilist;
      this.connection = connection;
    }
}

export function makeDummy(){
  ['1','2','3','4','5','6','7','8','9','10'].forEach((item)=>{
      Devices.push(new DeviceInfo(item,'id',[],true));
  });
}

export function loadDevices(setDevices){
  // request.get({
  //   uri:`${server}/list`,
  //   },function(err,httpRespond,body){
  //     console.log(body);
  //   });
}

export function getDevices(){
    return Devices;
}
