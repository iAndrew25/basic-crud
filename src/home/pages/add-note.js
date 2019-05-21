import React from 'react';

import fetch from '../../utils/fetch';

export default class AddNote extends React.Component {
	state = {
		title: '',
		content: ''
	}

	handleChange = field => event => {
		this.setState({
			[field]: event.target.value
		});
	}

	addNode = () => {
		let {title, content} = this.state;

		fetch('/notes', 'POST', {body: JSON.stringify({title, content})})
			.then(() => {
				this.setState({
					title: '',
					content: ''
				});

				this.props.goBack();
			});
	}

	render() {
		return(
			<div className="notes">
				<span className="page-title">Add a note</span>

				<label htmlFor="title">Title:</label>
				<input type="text" id="title" onChange={this.handleChange('title')}/>
				<br />
				<label htmlFor="content">Content:</label>
				<input type="text" id="content" onChange={this.handleChange('content')}/>
				<br />
				<button onClick={this.addNode}>Add note</button>
			</div>
		)
	}
}