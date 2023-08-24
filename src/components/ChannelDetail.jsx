import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia, CardContent} from "@mui/material";

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

//Changed useEffect function to match new fetchFromAPI function
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  console.log("This is the id", id)

  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromAPI('channel/home', {id: id})
      .then((data) => {
        console.log("API Response:", data); // Log the API response
        console.log("I made it this far")
      if (data.meta && data.meta.channelId) {
        console.log("Channel ID has been set")
        setChannelDetail(data.meta); 
      } else {
        console.error("Channel ID not found in API response:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching channel details:", error);
    });
    
    fetchFromAPI('channel/videos', {id: id, type: 'video', sort: 'date'})
      .then((data) => setVideos(data.data))
  }, [id])

  console.log('The channelDetail is this:', channelDetail)

  return (
    <Box minHeight = "95vh">
      <Box>

        <CardContent sx ={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
          <CardMedia 
              image={channelDetail?.banner[2]?.url}
              sx={{borderRadius: '0%', height: '350px', width: 'auto', mb: 2, border: '1px solid #e3e3e3'}}
          />
        </CardContent>
        <ChannelCard channelDetail={channelDetail} marginTop="-125px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px' }}} />
        <Videos videos ={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail