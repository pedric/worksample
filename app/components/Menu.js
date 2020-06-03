import React from 'react'
import PageData from 'data/PageData'

class Menu extends React.Component{

	constructor(){
		super()
		this.state = {
			menuItems: PageData.menu.items,
			menuStatus: ''
		}
		this.toggleMenu = this.toggleMenu.bind(this)
	}

	toggleMenu(e){
		let status = this.state.menuStatus ? '' : 'active' 
		this.setState({menuStatus: status})
	}

	render(){

		const MenuItems = this.state.menuItems.map(item =>
				<li key={item.name}><a href={item.url}>{item.name}</a></li>
			)

		return(
			<div>
				<div className={'menubutton'}>
					<button onClick={() => this.toggleMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<nav className={'menu '+this.state.menuStatus} onClick={() => this.toggleMenu()}>
					<ul>
						{MenuItems}
					</ul>
				</nav>
			</div>
		)
	}
}

export default Menu