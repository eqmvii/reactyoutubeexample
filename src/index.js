//import React from 'react';
import ReactDOM from 'react-dom'; //via import
var React=require('react'); //via variable
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js'; // my own component
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyBaK605cQZg1J99DcUgYYokRFP_5YTLH00' // for YouTube Datav3 API

//YTSEarch example: AJAX
/*
YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});
*/

// Create a new component. This component should produce some HTML.

//App started functional so long as it is not aware of state. Refactored to a class afterward.
/*
const App = () => {
	return <div>
		<SearchBar />
	</div>;
}
*/

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {videos:[] };
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });;
		});

	}

	render() {
			return (
	<div>		
		<SearchBar />
		<VideoDetail video={this.state.videos[0]}/>
		<VideoList videos={this.state.videos}/>
	</div>)

	}
}



// Take this component and put it in the DOM and on the page somewhere
ReactDOM.render(<App />, document.querySelector('.container'));