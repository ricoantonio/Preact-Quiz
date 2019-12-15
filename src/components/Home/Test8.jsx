
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test8 =({count,correct,main})=>(
    <>
        {
            main == 'js' ?
                <div>
                    <h1 className={style.center}>% is a valid mathematical operator</h1>
                    <Link className={style.nounderline} href="/test9">
                        <button onClick={ correct } className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline} href="/test9">
                        <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div>:
            main == 'phy' ?
                <div>
                    <h1 className={style.center}> print(''abbzxyzxzxabb''.count(‘abb’,-10,-1)) => -2</h1>
                    <Link className={style.nounderline} href="/test9">
                        <button className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline}  href="/test9">
                        <button onClick={correct} className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div> : ''
        }
    </>
    
)

export default connect(['count','main'], actions)(Test8)
