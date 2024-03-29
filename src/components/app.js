import { h, Component } from 'preact';
import { Router } from 'preact-router';

import {connect} from 'unistore/preact'
import {actions} from '../components/Home/storeAction'

import github from '../components/githublogo.png'
import js from '../components/jslogo.png'
import phy from '../components/phytonlogo.png'

import style from './style'
// Code-splitting is automated for routes
import Home2 from './Home/Home'
import Test1 from './Home/Test1'
import Test2 from './Home/Test2'
import Test3 from './Home/Test3'
import Test4 from './Home/Test4'
import Test5 from './Home/Test5'
import Test6 from './Home/Test6'
import Test7 from './Home/Test7'
import Test8 from './Home/Test8'
import Test9 from './Home/Test9'
import Test10 from './Home/Test10'
import Done from './Home/Done'

export class App extends Component {
	

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	// renderTest=()=>{
	// 	arr = [<Test1 path="/test1"/>]
	// 	return arr[0]
	// }

	render() {
		return (
			<>
	{
		this.props.main == 'js' ? 
			<div id="app" style={{backgroundColor:"orange"}}>
			<a href='https://github.com/ricoantonio/Preact-Quiz' target="_blank">
				<img className={style.img} style={{width:"70px", padding:10, cursor:"pointer"}} src={github}/>
			</a>
			<br/>
			<a href = '/'>
			<img onClick={this.props.toPhy} className={style.logo} style={{width:"70px", padding:10, cursor:"pointer"}} src={phy}/>
			</a>
			<Router onChange={this.handleRoute}>
				<Home2 path="/" />
				<Test1 path="/test1"/>
				<Test2 path="/test2"/>
				<Test3 path="/test3"/>
				<Test4 path="/test4"/>
				<Test5 path="/test5"/>
				<Test6 path="/test6"/>
				<Test7 path="/test7"/>
				<Test8 path="/test8"/>
				<Test9 path="/test9"/>
				<Test10 path="/test10"/>
				<Done path="/done"/>
			</Router>
		</div> :
		this.props.main == 'phy' ?
			<div id="app" style={{backgroundColor:"powderblue"}}>
				<a href='https://github.com/ricoantonio/Preact-Quiz' target="_blank">
					<img className={style.img} style={{width:"70px", padding:10, cursor:"pointer" }} src={github}/>
				</a>
				<br/>
				<a href = '/'>
				<img onClick={this.props.toJs} className={style.logo} style={{width:"70px", padding:10, cursor:"pointer"}} src={js}/>
				</a>
				<Router onChange={this.handleRoute}>
					<Home2 path="/" />
					<Test1 path="/test1"/>
					<Test2 path="/test2"/>
					<Test3 path="/test3"/>
					<Test4 path="/test4"/>
					<Test5 path="/test5"/>
					<Test6 path="/test6"/>
					<Test7 path="/test7"/>
					<Test8 path="/test8"/>
					<Test9 path="/test9"/>
					<Test10 path="/test10"/>
					<Done path="/done"/>
				</Router>
			</div> : ''
	}
	</>
		);
	}
}


export default connect('main', actions)(App)
