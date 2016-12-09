//import React from 'react';
import ReactDOM from 'react-dom'; //via import
var React=require('react'); //via variable
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js'; // my own component
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import _ from 'lodash';

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

		this.state = {
			videos:[],
			selectedVideo: null
		};

		this.videoSearch('kites');



	}

	videoSearch(term) {
			YTSearch({key: API_KEY, term: term}, (videos) => {
				this.setState({ 
					videos: videos, 
					selectedVideo: videos[0]
				});;
		});

	}

	render() {
		//debounce just like google instant search works
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>		
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos}
				/>
			</div>)

	}
}



// Take this component and put it in the DOM and on the page somewhere
ReactDOM.render(<App />, document.querySelector('.container'));