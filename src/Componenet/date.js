import React from "react";
import { Fragment } from "react";

const DateYear = ( { timerDays,timerHours,timerMinutes,timerSecond} )=>{

    return (
            <Fragment>
            <div className="year-hour">
                <div className="figure">
                <h1>{timerDays}</h1>
                <p>days</p>
                </div>
                <div className="figure">
                <h1>{timerHours}</h1>
                <p>hours</p> 
                </div>
                <div className="figure">
                <h1>{timerMinutes}</h1>
                <p>mins</p>
                </div>
                <div className="figure">
                <h1>{timerSecond}</h1>
                <p>sec</p>
                </div>
            </div>
            </Fragment>
            
        
    )
}

DateYear.defaultProps = {
   timerDays: 10 ,
   timerHours: 10,
   timerMinutes: 10,
   timerSecond: 10


}
export default DateYear;