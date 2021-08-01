import {callAPI} from './webosModule';

export async function loadEventList(){
  let events = [];
  await callAPI('getEventlist',{},
    (msg)=>{
      events = msg.Response;
      events.forEach(event=>{
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });
    },(msg)=>{
      console.log(msg);
  });
  return events;
}

export function addEvent(event,setEvents){
  callAPI('addEvent',event,
  (msg)=>{
    loadEventList(null).then(res=>{
      setEvents(res);
    });
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