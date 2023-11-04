
import DateYear from './date';
import UnderLine from './Line';
import BuyButton from "./button";
import Connect from "./cennectWallet";
import React ,  { useState, useEffect } from "react";

const Card = ()=>{
    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSecond, setTimerSecond]   = useState()

    let interval;

    const timerStarter = ()=>{
            const countDownDate =new Date('december 15 2023').getTime()
            interval = setInterval(()=>{
                const now = new Date().getTime()
                const distance = countDownDate - now
                const days = Math.floor(distance / (24 * 60 * 60 * 1000))
                const hours = Math.floor(distance % (24 * 60 * 60 * 1000) /  ( 1000* 60 * 60))
                const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
                const seconds = Math.floor(distance % (60 * 1000) / 1000)

                if(distance < 0){
                    clearInterval(interval.current)
                }else{
                    setTimerDays(days)
                    setTimerHours(hours)
                    setTimerMinutes(minutes)
                    setTimerSecond(seconds)
                }
                
            })
        }
        useEffect(()=>{
            timerStarter()
        })
    return(
        <div className="card">
            <div className="text">
            <h5>token sales</h5>
            <p>token sales would end december 31 2023</p>
            <DateYear timerDays={timerDays} timerHours ={timerHours} timerMinutes={timerMinutes} timerSecond={timerSecond} />
            </div>
            <p className="current">current progress</p>
            <UnderLine/>
            <div className="total-p">
            <p className="total">total token: 10,200,000</p>
            <p className="total">available for ico: 612,000,000</p>
            <p className="total"> token price: <span style={{textTransform:'capitalize'}}>1 core = 24</span> merc</p>
            </div>
            <BuyButton/>
            <Connect/>
        </div>
    )
}

export default Card;


