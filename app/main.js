import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';

export class App extends React.Component {
	render() {
		return (
			<RaisedButton label="Click me!" />			
		);
	}
}
ReactDOM.render(<App/>, document.body);
