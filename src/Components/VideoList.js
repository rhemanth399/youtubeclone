const VideoList = ({videos, selectedVideo}) => {

  const renderedList = videos.map((video)=>{
          return(
                 <div className="video-item" key={video.id.videoId} onClick={()=> selectedVideo(video)}>
                             <img  src={video.snippet.thumbnails.default.url}  alt={video.snippet.title}/>
                             <div className="video-title">{video.snippet.title}</div>
                 </div>
          )
  })

  return(
       <div className="video-list">
                {renderedList}
       </div>
  )



 
}


export default VideoList;