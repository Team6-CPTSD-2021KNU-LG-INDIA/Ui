import axios from "axios";

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

export function loadDevices(setDevices,setSearch){
  axios.get(`${server}/list`, {
    // headers: {
    //   "Content-Type": "application/json",
    // },
  }).then((res)=>{
    let data = res.data;
    Devices = data.map((item)=>{
      return new DeviceInfo(
        item.device_name,
        item.id,
        item.api,
        true
      );
    });
    setDevices(Devices);
    setSearch(false);
  },(err)=>{
    console.error(err);
  });
}

export function updateList(data){
  Devices = data.slice();
}

export function getDevices(){
    return Devices;
}
