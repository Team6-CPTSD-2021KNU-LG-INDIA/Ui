let Devices = [];

class DeviceInfo{
    constructor(name,id,connection){
      this.name = name;
      this.id = id;
      this.connection = connection;
    }
}

export function makeDummy(){
    ['1','2','3','4','5','6','7','8','9','10'].forEach((item)=>{
        Devices.push(new DeviceInfo(item,'id',true));
      });
}

export function getDevices(){
    return Devices;
}