const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }
    const  videSrc = `https://www.youtube.com/embed/${video.id.videoId}`


    return(
        <div className = "video-detail">
               <iframe src={videSrc}></iframe>
               <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;

