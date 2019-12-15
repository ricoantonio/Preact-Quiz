
import test4 from '../Test4.png'
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test4 =({count,correct,main})=>(
    <>
        {
            main == 'js' ?
                <div>
                    <img className={style.img} src={test4} alt=""/>
                    <Link className={style.nounderline} href="/test5">
                        <button className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline} href="/test5">
                        <button onClick={ correct } className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div>:
            main == 'phy' ?
                <div>
                    <h1 className={style.center}> print(1, 2, 3, 4, sep='*') => 1,2,3,4,*</h1>
                    <Link className={style.nounderline} href="/test5">
                        <button className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline}  href="/test5">
                        <button onClick={correct} className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div> : ''
        }
    </>
    
    
)

export default connect(['count','main'], actions)(Test4)
