import { h, Component } from 'preact';
import style from './style'
import { Link } from 'preact-router/match';

export class Home2 extends Component {



    render() {
        return (
            <div>
                <h1 className={style.center} style={{fontSize:"40px"}}>JavaScript True/False Quiz</h1>
                <h2 className={style.center2}>Lets see how well you know about JavaScript !!</h2>
                <Link className={style.nounderline} href="/test1"><button className={style.myButton} style={{fontSize:"20px"}}>START</button></Link>
            </div>
        )
    }
}

export default Home2
