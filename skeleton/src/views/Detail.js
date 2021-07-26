import {Panel,Header} from '@enact/sandstone/Panels';
import Todo from '../components/Detail/Todo';
import TodoInsert from '../components/Detail/TodoInsert';
import Scroller from '@enact/sandstone/Scroller';
import Todolist from '../components/Detail/Todolist';
import RightDetail from '../components/RightDetail/RightDetail';

const Detail= (props)=>{
    return(
        <Panel>
            <Header 
            onClose={()=>{
                let path = props.page.path.slice(); path.pop();
                path.push('calendar');
                props.movePage(path,{initialDate:props.page.args.targetDate});
            }}
            title={props.page.args.targetDate.toString()}/>
                <div style={{height:'400px',  horizontalScrollbar:"visible"}}>
                 <Scroller>
                 <RightDetail>

                 </RightDetail>
                    <Todo>
                         <div>
                             <TodoInsert />
                             <Todolist />
                        </div>
                    </Todo>
                </Scroller>
            </div>
        </Panel>
    )


}

export default Detail;