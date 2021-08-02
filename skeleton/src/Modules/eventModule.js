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
    console.log(msg);
    setEvents(msg.Response);
  },(msg)=>{
    console.log(msg);
  });
}

export function makeValidEvents(events, starttime, endtime){
  return events;
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