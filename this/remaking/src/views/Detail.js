import { useState } from 'react';
import {Panel,Header} from '@enact/sandstone/Panels';
import Todo from '../components/Detail/Todo';
import TodoInsert from '../components/Detail/TodoInsert';
import Scroller from '@enact/sandstone/Scroller';
import Todolist from '../components/Detail/Todolist';
import RightDetail from '../components/RightDetail/RightDetail';
const Detail= ()=>{

    return(
        <Panel >
            <Header title="Detail"> </Header>
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