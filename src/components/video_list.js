import React from 'react';
import VideoListItem from './video_list_item.js'; //don't need js but don't tell anyone that


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem key={video.etag} video={video} />
	});
	return (
		<ul className="col-md-4 list-group">
		{videoItems}
		</ul>
		)
}

// If this were class based, this.props would allow it to be available anywhere.

export default VideoList;