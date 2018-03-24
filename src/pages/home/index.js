import React, {Component} from 'react';
import {Button, Card, Image, Icon} from 'semantic-ui-react';

import MainBar from './mainbar.js';

class Home extends Component {
	constructor()
	{
		super();
	}

	render() {
		return (
			<div>
        <MainBar />
			</div>

		);
	}
}

export default Home;