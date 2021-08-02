import {callAPI} from './webosModule';

export function loadEventList(Callback){
  callAPI('getEventlist',{},
    (msg)=>{
      let events = msg.Response;
      events.forEach(event=>{
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });
      Callback(events);
    },(msg)=>{
      console.log(msg);
  });
}

export function addEvent(event,setEvents){
  callAPI('addEvent',event,
  (msg)=>{
    setEvents(msg.Response.slice());
  },(msg)=>{
    console.log(msg);
  });
}

export function makeValidEvents(events, starttime, endtime){
  if (events !== false)
    return events.slice();
  else 
    return false;
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