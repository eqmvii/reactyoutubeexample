import React, { Component } from 'react'; // Necessary since each component converts into React.createClass()

/*const SearchBar = () => {
	return <input />;
};*/
// Promote from class based to give it more capacity / functionality 

class SearchBar extends Component { // would be React.Component but for { component } at import
	
	constructor(props) {
		super(props); // thanks ES6. Call parent and check in with parents.
		this.state = { term: '' }; // State is a plain JavaScript object for class based components.
		//Only allowed to manipulate state like this within the constructor. Otherwise, must call setState.
	}

	render () {
		return (
			<div className="search-bar">
			Enter your search term: <input 
			value ={this.state.term}
			onChange={event => this.onInputChange(event.target.value)} />
	
	</div>
	) // close return
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}


}

//module.exports = SearchBar;
export default SearchBar; // does the same thing