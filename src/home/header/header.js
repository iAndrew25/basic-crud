import React from 'react';
import classNames from 'classnames';

export default function({currentPage, handlePageChange}) {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<a className="navbar-brand" href="#">Notes</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className={classNames("nav-item", {"active": currentPage === 'NOTES'})} onClick={() => handlePageChange('NOTES')}>
						<a className="nav-link">Notes</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'ADD_NOTE'})} onClick={() => handlePageChange('ADD_NOTE')}>
						<a className="nav-link">Add note</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'UPDATE_NOTE'})} onClick={() => handlePageChange('UPDATE_NOTE')}>
						<a className="nav-link">Update note</a>
					</li>
					<li className={classNames("nav-item", {"active": currentPage === 'REMOVE_NOTE'})} onClick={() => handlePageChange('REMOVE_NOTE')}>
						<a className="nav-link">Remove note</a>
					</li>
				</ul>
			</div>
		</nav>
	)
};