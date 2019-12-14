
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test6 =({count,correct})=>(
    <div>
        <div>
            <h1 className={style.center}>Javascript must be in the body tag to work</h1>
            <Link className={style.nounderline} href="/test7">
                <button onClick={ correct } className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
            </Link>
            <Link className={style.nounderline} href="/test7">
                <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
            </Link>
        </div>
    </div>
)

export default connect('count', actions)(Test6)
