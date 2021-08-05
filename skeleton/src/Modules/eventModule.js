import { callAPI } from "./webosModule";
import axios from "axios";

let eventlist = [];
export function loadEventList(Callback) {
  callAPI(
    "getEventlist",
    {},
    (msg) => {
      let events = msg.Response;
      events.forEach((event) => {
        event.start = new Date(event.start);
        event.end = new Date(event.end);
      });
      eventlist = msg.Response.slice();
      Callback(events);
    },
    (msg) => {
      console.log(msg);
    }
  );
}

export const crawlerEvent = async (input, setEvents) => {
  try {
    console.log("start GET method..");
    const res = await axios.get("http://3.35.166.4:5000/scraps", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        NL: input,
      },
    });
    const scrap = JSON.parse(res.data);
    console.log(scrap);

    let eventLists = [];

    for (const key in scrap) {
      const title = scrap[key].title || "";
      const contents = scrap[key].contents || "";
      const date = scrap[key].date || "";
      const time = scrap[key].time || "";
      const temp = date + " " + time;
      const datetime = new Date(temp);

      let eventItem = new EventInfo(
        null,
        null,
        title,
        contents,
        datetime.toUTCString(),
        datetime.toUTCString()
      );
      eventLists.push(eventItem);
    }
    addEvent(eventLists, setEvents);
  } catch (error) {
    console.log(error);
  }
};

export function addEvent(event, setEvents) {
  callAPI(
    "addEvent",{
      'data': event,
    },
    (msg) => {
      console.log('complete!');
      eventlist = msg.Response.slice();
      setEvents(msg.Response);
    },
    (msg) => {
      console.log(msg);
    }
  );
}

export function makeValidEvents(starttime, endtime) {
  let res = eventlist.slice();
  res.forEach((event) => {
    event.start = new Date(event.start);
    event.end = new Date(event.end);
  });
  console.log(res);
  return res;
}

export class EventInfo {
  constructor(device_id, action_id, title, contents, start, end) {
    this.device_id = device_id;
    this.action_id = action_id;
    this.title = title;
    this.contents = contents;
    this.start = start;
    this.end = end;
  }
}
