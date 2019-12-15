import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';

import {connect} from 'unistore/preact'
import {actions} from './storeAction'

import js from '../jslogo.png'
import phy from '../phytonlogo.png'

const Home2 =({count,correct,main,toJs, toPhy})=>(
    <>
    {
        main == 'js' ?
        <div>
            <h1 className={style.center} style={{fontSize:"40px"}}>JavaScript True/False Quiz</h1>
            <h2 className={style.center2}>Lets see how well you know about JavaScript !!</h2>
            <Link className={style.nounderline} href="/test1"><button className={style.myButton} style={{fontSize:"20px"}}>START</button></Link>
        </div> :
        main == 'phy' ?
        <div>
            <h1 className={style.center} style={{fontSize:"40px"}}>Python True/False Quiz</h1>
            <h2 className={style.center2}>Lets see how well you know about Python !!</h2>
            <Link className={style.nounderline} href="/test1"><button className={style.myButton} style={{fontSize:"20px"}}>START</button></Link>
        </div> : ''
    }
    </>
)
export default connect(['count','main'], actions)(Home2)
