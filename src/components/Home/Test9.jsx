
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test9 =({count,correct})=>(
    <div>
        <h1 className={style.center}>Two or more conditions can be added using && and ||</h1>
        <Link className={style.nounderline} href="/test10">
            <button onClick={correct} className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
        </Link>
        <Link className={style.nounderline} href="/test10">
            <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
        </Link>
    </div>
)

export default connect('count', actions)(Test9)
