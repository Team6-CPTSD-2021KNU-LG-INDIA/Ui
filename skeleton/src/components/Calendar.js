import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {makeValidEvents} from '../Modules/eventModule'
import { useEffect, useState } from 'react';

function Calendar(props){
  const [elist, setlist] = useState([]);

  useEffect(()=>{
    console.log('Cal');
    console.log(props.events);
    console.log(makeValidEvents(props.events,null,null));
    setlist(makeValidEvents(props.events,null,null));
    console.log(elist);
  },[props.events]);

  return(
      <div {...props}>
        <FullCalendar
          customButtons={{
            customButton1:{
              text:'SEARCH',
              click:function(){
                let path = props.page.path.slice(); path.pop();
                path.push('crawling');
                props.movePage(path,{});
            },
            
          },
          customButton2:{
            text:'REPEAT',
            click:function(){
              let path = props.page.path.slice(); path.pop();
              path.push('setting');
              props.movePage(path,{});
          }
        }
        }}
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
          initialDate={props.page.args.initialDate}
          eventColor='black'
          selectable='true'
          height='100%'
          headerToolbar='false'
          nowIndicator= 'true'
          eventOverlap='true'
          dayMaxEvents={1}
          events={elist}
          footerToolbar={{
            start: 'customButton1,customButton2',//listDay
            center: 'title',
            end: 'today prev,next',

        }}
          dateClick={function(info){
            let path = props.page.path.slice(); path.pop();
            path.push('detail');
            props.movePage(path,{
              targetDate: info.date,
            })
          }}
        
        />
      </div>
    )
}

export default Calendar;
