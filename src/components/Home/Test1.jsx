import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';

import {connect} from 'unistore/preact'
import {actions} from './storeAction'

const Test1 =({count,correct,progressUp})=>(
    <div>
        <h1 className={style.center}> JavaScript and Java are basically the same </h1>
        <Link  className={style.nounderline} href="/test2">
            <button onClick={progressUp} className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
        </Link>
        <Link className={style.nounderline}  href="/test2">
            <button onClick={correct,progressUp } className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
        </Link>
    </div>
)

// export class Test1 extends Component {
//     //false
//     render() {
//         return (
//             <div>
//                 <h1 className={style.center}> JavaScript and Java are basically the same.</h1>
//                 <Link href="/test2">
//                     <button className={style.myButtonTrue} style={{fontSize:"20px"}}> True</button>
//                 </Link>
//                 <Link href="/test2">
//                     <button className={style.myButtonFalse} style={{fontSize:"20px"}}> False</button>
//                 </Link>
//             </div>
//         )
//     }
// }

export default connect('count', actions)(Test1)
