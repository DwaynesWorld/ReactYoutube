import React from "react";

const VideoListItem = ({ video, onVideoSelected }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelected(video)}>
      <div className="media-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
