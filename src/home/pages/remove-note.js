import React from 'react';

import fetch from '../../utils/fetch';

export default class RemoveNote extends React.Component {
	state = {
		noteId: ''
	}

	handleChange = event => {
		this.setState({
			noteId: event.target.value
		});
	}

	addNode = () => {
		let {noteId} = this.state;

		fetch(`/notes/${noteId}`, 'DELETE')
			.then(() => {
				this.setState({
					noteId: ''
				});

				this.props.goBack();
			});
	}

	render() {
		return(
			<div className="notes">
				<span className="page-title">Remove a note</span>

				<label htmlFor="noteId">Note id:</label>
				<input type="text" id="noteId" onChange={this.handleChange}/>
				<br />
				<button onClick={this.addNode}>Remove note</button>
			</div>
		)
	}
}