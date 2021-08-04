import {callAPI} from './webosModule';

let eventlist=[];
export function loadEventList(Callback){
  callAPI('getEventlist',{},
    (msg)=>{
      let events = msg.Response;
      events.forEach(event=>{
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });
      eventlist = msg.Response.slice();
      Callback(events);
    },(msg)=>{
      console.log(msg);
  });
}

export function addEvent(event,setEvents){
  callAPI('addEvent',event,
  (msg)=>{
    eventlist = msg.Response.slice();
    setEvents(msg.Response);
  },(msg)=>{
    console.log(msg);
  });
}
export function makeValidEvents(starttime, endtime){
  let res = eventlist.slice();
  res.forEach(event=>{
    event.start = new Date(event.start);
    event.end = new Date(event.end);
  });
  console.log(res);
  return res;
}

export class EventInfo{
  constructor(device_id, action_id, title, contents, start, end){
      this.device_id = device_id;
      this.action_id = action_id;
      this.title = title;
      this.contents = contents;
      this.start = start;
      this.end = end;
  }
};