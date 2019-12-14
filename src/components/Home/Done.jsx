

import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Done =({count,correct,reset})=>(
    <div>
        <h1 className={style.center2}>
            {
                count <= 3 ? "You can do better than this :)" :
                count >3 && count <7 ? "Nice! Keep trying": 
                count >= 7 && count < 10 ? "Good Job! Nearly perfect score" :
                count == 10 ? "PERFECT SCORE!!! Well Done":''
            }
        </h1>
        <div className={style.center2}><span style={{fontSize:"80px"}}>{count}</span><span style={{fontSize:"50px"}}>/</span><span>10</span></div>
        <Link className={style.nounderline} href="/test1"><button onClick={reset} className={style.myButton} style={{fontSize:"20px"}}>Restart</button></Link>
        <Link className={style.nounderline} href="/"><button onClick={reset} className={style.myButton} style={{fontSize:"20px"}}>Home</button></Link>
    </div>
)

export default connect('count', actions)(Done)
