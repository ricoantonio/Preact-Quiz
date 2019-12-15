
import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';
import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test6 =({count,correct,main})=>(
    <>
        {
            main == 'js' ?
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
                </div>:
            main == 'phy' ?
                <div>
                    <h1 className={style.center}> Value of the expression 1 + 2 ** 3 * 4 => 33</h1>
                    <Link className={style.nounderline} href="/test7">
                        <button onClick={correct} className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
                    </Link>
                    <Link className={style.nounderline}  href="/test7">
                        <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
                    </Link>
                </div> : ''
        }
    </>
    
    
)

export default connect(['count','main'], actions)(Test6)
