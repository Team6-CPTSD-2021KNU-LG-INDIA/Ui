import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

function Calendar(props){
    return(
      <div {...props}>
        <FullCalendar
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
          initialDate={props.page.args.initialDate}
          eventColor='DarkRed'
          selectable='true'
          height='100%'
          headerToolbar='false'
          nowIndicator= 'true'
          eventOverlap='true'
          dayMaxEvents={1}
          events={props.events}
          footerToolbar={{
            start: 'dayGridMonth,timeGridWeek,timeGridDay',//listDay
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
