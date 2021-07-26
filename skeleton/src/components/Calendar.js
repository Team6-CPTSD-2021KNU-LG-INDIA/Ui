import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar(props){
    return(
      <div {...props}>
        <FullCalendar
          plugins={[dayGridPlugin,interactionPlugin]}
          selectable='true'
          height='100%'
          headerToolbar='false'
          footerToolbar={{
            start: 'title',
            center: '',
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
