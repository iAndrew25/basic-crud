import React from 'react';
import fetch from '../../utils/fetch';

export default class Notes extends React.Component {
	state = {
		notes: []
	}

	componentDidMount() {
		fetch('/notes', 'GET').then(notes => {
			console.log("notes", notes);
			this.setState({notes});
		});
	}

	render() {
		return(
			<div className="notes">
				<span className="page-title">Notes</span>
				{this.state.notes.map(({_id, title, content}) => {
					return (
						<div key={_id} className="note">
							<div><span className="title">Id</span>: {_id}</div>
							<div><span className="title">Title</span>: {title}</div>
							<div><span className="title">Content</span>: {content}</div>
						</div>
					)
				})}
			</div>
		)
	}
}