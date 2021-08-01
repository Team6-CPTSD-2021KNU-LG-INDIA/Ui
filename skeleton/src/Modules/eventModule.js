import {callAPI} from './webosModule';

let events=[];

export function loadEventList(setEvents){
  callAPI('getEventlist',{},
  (msg)=>{
    events = msg.Response;
    events.forEach(event=>{
      event.start = new Date(event.start);
      event.end = new Date(event.end);
    });
    setEvents(events);
  },(msg)=>{
    console.log(msg);
  });
}

export function addEvent(event,setEvents){
  callAPI('addEvent',event,
  (msg)=>{
    loadEventList(setEvents);
  },(msg)=>{
    console.log(msg);
  });
}

export function getEventList(){
  return events;
}

export function makeValidEvents(starttime, endtime){
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