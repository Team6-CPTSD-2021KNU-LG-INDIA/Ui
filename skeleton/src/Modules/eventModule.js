import {callAPI} from './webosModule';

let events=[];

export function getEventList(){
  callAPI('test',{},
  (msg)=>{
    var arg = JSON.parse(msg);
    events = arg.Response;
  },(msg)=>{
  });
  
  return events;
}

export function makeDummy(){
    events = [
        {
            title: 'All Day Event',
            start: '2021-07-01'
          },
          {
            title: 'Long Event',
            start: '2021-07-01',
            end: '2021-07-10',
            color: 'purple' // override!
          },
          {
            title: 'Long Event',
            start: '2021-07-01',
            end: '2021-07-10',
            color: 'purple' // override!
          },
          {
            title: 'Long Event',
            start: '2021-07-07',
            end: '2021-07-10',
            color: 'purple' // override!
          },
          {
            title: 'Long Event2',
            start: '2021-07-07',
            end: '2021-07-10',
            color: 'purple' // override!
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2021-07-09T16:00:00'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            start: '2021-07-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2021-07-11',
            end: '2021-07-13',
            color: 'purple' // override!
          },
          {
            title: 'Conference2',
            start: '2021-07-11',
            end: '2021-07-13',
            color: 'purple' // override!
          },
          {
            title: 'Meeting',
            start: '2021-07-12T10:30:00',
            end: '2021-07-13',
          },
          {
            title: 'Lunch',
            start: '2021-07-12T12:00:00',
                end: '2021-07-13',
          },
          {
            title: 'Lunch',
            start: '2021-07-14T12:00:00',
                end: '2021-07-22',
          },
          {
            title: 'Lunch',
            start: '2021-07-14T12:00:00',
                end: '2021-07-22',
          },
          {
            title: 'Meeting',
            start: '2021-07-12T14:30:00'
          },
          {
            title: 'Birthday Party',
            start: '2021-07-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2021-07-28',
            end: '2021-08-28'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2021-07-28',
            end: '2021-08-28'
          }
    ]
}