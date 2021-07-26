import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function Calendar(props){
    return(
      <div {...props} style={{backgroundColor:'rgb(176, 204, 179)', height:'100%'}}>
        <FullCalendar
          plugins={[dayGridPlugin,interactionPlugin]}
          eventColor='black'
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
