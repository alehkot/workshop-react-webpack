var React = require('react/addons');
var articles  = require('./../models/articles');

var Name = React.createClass({
	componentDidMount() {
		this.setFocus();
	},
	componentWillUpdate() {
		this.setFocus();
	},
	setFocus() {
		if (this.props.isEditingName) {
			setTimeout(() => this.getDOMNode().focus(), 50);
		}		
	},
	onKeyDown(event) {
		if (event.keyCode === 13) {
			articles.updateArticle(this.props.id, event.target.innerText || event.target.textContent);
		}
	},
	render() {
		return (<div contentEditable={this.props.isEditingName} onKeyDown={this.onKeyDown}>
                            {this.props.name}
                        </div>);
		                        
	}
});

module.exports = Name;
 