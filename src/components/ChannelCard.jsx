import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoProfilePicture } from "../utils/constants"

//No snippet or id in this API so those are removed
//Removed ParseInt for subscriber count as this API gives a string
//Thumbnails in this one is an array so the url was retireved from the first element in the array
//channelDetail has both an avatar property a thumbnail property so a conditional is used
const ChannelCard = ({channelDetail, marginTop}) => {

  return (
    <Box 
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width:{xs: '356px', md: '320px', },
            height: '326px',
            margin: 'auto',
            marginTop,
        }}>
        <Link to={`/channel/${channelDetail?.channelId}`}>
            <CardContent sx ={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                {channelDetail?.thumbnail ? (
                    <CardMedia
                    image={channelDetail?.thumbnail[channelDetail.thumbnail.length-1]?.url || demoProfilePicture}
                    alt={channelDetail?.title}
                    sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
                    />
                ): 
                    <CardMedia
                    image={channelDetail?.avatar[channelDetail.avatar.length-1]?.url || demoProfilePicture}
                    alt={channelDetail?.title}
                    sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
                    />
                }
                
                <Typography variant = "h6">
                    {channelDetail?.title}
                    <CheckCircle sx={{fontsize: 14, color:'gray', ml: '5px'}}></CheckCircle>
                </Typography>
                {channelDetail?.subscriberCountText ? (
                    <Typography>
                        {channelDetail?.subscriberCountText} Subscribers
                    </Typography>
                ) : 
                    <Typography>
                        {channelDetail?.subscriberCount} Subscribers
                    </Typography>}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard