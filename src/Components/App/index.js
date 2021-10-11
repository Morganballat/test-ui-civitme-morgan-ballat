import React from 'react';
import './style.css';

// J'ai refait un peu d'ordre afin d'avoir une organisation claire en cas d'évolution de l'app

import Profile from '../Profile';

const App = () => {
	return (
		<div className='app'>
			<Profile />
		</div>
	);
};

export default App;
