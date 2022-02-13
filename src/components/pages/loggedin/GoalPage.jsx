import React, {useContext} from 'react';
import { UserContext }  from '../../UserContext';

import Navbar from '../../Navbar';
import './GoalPage.scss';

import Card from '../../ui/Card';

const GoalPage = () => {

    const {user,  setUser} = useContext(UserContext);

    var activeTasks = user['tasks'];
    
    
    

    return(
       
        <div className = "goal-page">
            <Navbar/>

            <div className="goal-container">
                
                <h1 className="goal-header">Current Goals</h1>

                <ul className='task-list'>
                    {activeTasks.map(function(activeTasks, index){
                        return <li className='task-list-item' key={index}>
                            <Card id={activeTasks['taskId']}>
                                <h1 className='task-title'>{activeTasks['taskTitle']}</h1>
                                {activeTasks['taskDescription']}
                            </Card>
                            
                            </li>;
                    })}
                </ul>
            </div>
           
        </div>
          

    );


}

export default GoalPage;