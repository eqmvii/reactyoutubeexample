import React from 'react';
import VideoListItem from './video_list_item.js'; //don't need js but don't tell anyone that


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
		onVideoSelect={props.onVideoSelect}
		key={video.etag} 
		video={video} 
		/>
		)
	});
	return (<div>
		<p>Top 5 hits:</p>
		<ul className="col-md-4 list-group">

		{videoItems}
		</ul>
		</div>
		)
}

// If this were class based, this.props would allow it to be available anywhere.

export default VideoList;