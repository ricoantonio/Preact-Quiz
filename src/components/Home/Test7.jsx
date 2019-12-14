
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test7 =({count,correct})=>(
    <div>
        <h1 className={style.center}>5array is a valid variable name in javascript</h1>
        <Link className={style.nounderline} href="/test8">
            <button className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
        </Link>
        <Link className={style.nounderline} href="/test8">
            <button onClick={correct} className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
        </Link>
    </div>
)

export default connect('count', actions)(Test7)
