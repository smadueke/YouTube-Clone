import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { demoChannelUrl, demoProfilePicture } from "../utils/constants"

//No snippet or id in this API so those are removed
//Removed ParseInt for subscriber count as this API gives a string
//Thumbnails in this one is an array so we the url was retireved from the first element in the array
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
                <CardMedia 
                    image={channelDetail?.thumbnail[0]?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
                />
                <Typography variant = "h6">
                    {channelDetail?.title}
                    <CheckCircle sx={{fontsize: 14, color:'gray', ml: '5px'}}></CheckCircle>
                </Typography>
                {channelDetail?.subscriberCount && (
                    <Typography>
                        {channelDetail?.subscriberCount} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard