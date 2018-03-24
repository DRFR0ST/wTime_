import React from 'react';
import {Card, Grid, Input, Button} from 'semantic-ui-react';


class MainBar extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.state = {
			sent: false
		};
	}

	render() {
		return(
			<div>
				<Card fluid>
					<Card.Content>
						<Grid>
							<Grid.Row columns={3}>
								<Grid.Column>
									<Input fluid />
								</Grid.Column>
								<Grid.Column>
									<Button disabled={this.state.sent} onClick={() => this.setState({sent: true})}>{this.state.sent ? "Testowanko" : "Wysylanko"}</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>
					</Card.Content>
				</Card>
			</div>
		);
	}
}

export default MainBar;