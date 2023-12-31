import { Link } from "react-router-dom" //Need to navigate to the video once clicked
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"

//Changed all 'snippets' to the destructred video counterparts
//Thumbnails in this one is an array so we the url was retireved from the first element in the array
const VideoCard = ({video: {videoId, title, channelTitle, thumbnail, channelId}, channelTitle2}) => {
    var num = thumbnail.length-1

  return (
    <Card sx={{width:{xs: '100%', sm: '358px', md: '320px', boxShadow: 'none', borderRadius: 0}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

            <CardMedia 
                image={thumbnail[num]?.url}
                alt={title}
                sx={{width: {
                    xs: '100%', sm: '358px', md: '320px'
                }, height: 180}}/>
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {title.slice(0, 60) ||
                    demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {channelTitle || channelTitle2 || demoChannelTitle}
                    <CheckCircle sx={{fontsize: 12, color:'gray', ml: '5px'}}></CheckCircle>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard