import {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography, Box, Stack} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

//Updated the useEffect to the new API fetch structure
//Destrucured videoDetail

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI('video/info', {id: id, extend: 1})
      .then((data) => {
        console.log('This is the data', data)
        setVideoDetail(data)
      })

    /*fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.data))*/
  }, [id])
  
  if(!videoDetail) return 'Loading...'
  

  const {title, channelId, channelTitle, viewCount, likeCount} = videoDetail

  return (
    <Box minHeight ="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex ={1}>
          <Box sx ={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className='react-player' controls/>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color: "#fff"}} py={1} px={2}>
              <Link to ={`/channel/${channelId}`}>
                <Typography variant ={{sm: 'subtitle1', md: 'h6'}} color= '#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity: 0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
             

      </Box>
    </Box>
  )
}

export default VideoDetail

/*
*/