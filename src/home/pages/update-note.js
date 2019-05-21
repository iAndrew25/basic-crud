import React from 'react';

import fetch from '../../utils/fetch';

export default class UpdateNote extends React.Component {
	state = {
		title: '',
		content: '',
		noteId: ''
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		});
	}

	addNode = () => {
		let {title, content, noteId} = this.state;

		fetch(`/notes/${noteId}`, 'PUT', {body: JSON.stringify({title, content})})
			.then(() => {
				this.setState({
					title: '',
					content: '',
					noteId: ''
				});

				this.props.goBack();
			});
	}

	render() {
		return(
			<div className="notes">
				<span className="page-title">Update a note</span>

				<label htmlFor="noteId">Note id:</label>
				<input type="text" id="noteId" onChange={this.handleChange('noteId')}/>
				<br />
				<label htmlFor="title">Title:</label>
				<input type="text" id="title" onChange={this.handleChange('title')}/>
				<br />
				<label htmlFor="content">Content:</label>
				<input type="text" id="content" onChange={this.handleChange('content')}/>
				<br />
				<button onClick={this.addNode}>Update note</button>
			</div>
		)
	}
}