
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test8 =({count,correct})=>(
    <div>
        <h1 className={style.center}>% is a valid mathematical operator</h1>
        <Link className={style.nounderline} href="/test9">
            <button onClick={ correct } className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
        </Link>
        <Link className={style.nounderline} href="/test9">
            <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
        </Link>
    </div>
)

export default connect('count', actions)(Test8)
