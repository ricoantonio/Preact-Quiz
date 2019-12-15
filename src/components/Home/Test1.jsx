import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';

import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test1 =({count,correct,main})=>(
    <>
        {
            main == 'js' ?
                <div>
                    <h1 className={style.center}> JavaScript and Java are basically the same </h1>
                    <Link className={style.nounderline} href="/test2">
                        <button  className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline}  href="/test2">
                        <button onClick={correct} className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div> :
            main == 'phy' ?
                <div>
                    <h1 className={style.center}> Python is an object-oriented language </h1>
                    <Link className={style.nounderline} href="/test2">
                        <button onClick={correct} className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline}  href="/test2">
                        <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div> : ''
        }
    </>
)

export default connect(['count','main'], actions)(Test1)
