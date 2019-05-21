import React from 'react';

import Header from './header/header';

import AddNote from './pages/add-note';
import RemoveNote from './pages/remove-note';
import UpdateNote from './pages/update-note';
import Notes from './pages/notes';

export default class Home extends React.Component {
	state = {
		currentPage: 'NOTES'
	}

	handlePageChange = currentPage => {
		this.setState({currentPage});
	}

	goBack = () => this.handlePageChange('NOTES')

	renderPage = currentPage => {
		switch(currentPage) {
			case 'ADD_NOTE':
				return <AddNote goBack={this.goBack} />
			case 'NOTES':
				return <Notes />
			case 'UPDATE_NOTE':
				return <UpdateNote goBack={this.goBack} />
			case 'REMOVE_NOTE':
				return <RemoveNote goBack={this.goBack} />
			default:
				return null;
		}
	}

	render() {
		let {currentPage} = this.state;

		return(
			<div>
				<Header currentPage={currentPage} handlePageChange={this.handlePageChange} />
				{this.renderPage(currentPage)}
			</div>
		)
	}
}