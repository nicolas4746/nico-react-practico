import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
	return (
		<div>
			<div className="not-found-container">
			<div className="not-found-info">
				<h1 className="not-found-title">Error 404.</h1>
				<h2>This page is not found.</h2>
				<button className="primary-button">Go Home</button>
			</div>
			</div>
		</div>
	);
}

export default NotFound;
