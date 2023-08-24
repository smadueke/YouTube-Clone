import { Stack, Box } from "@mui/material"

import {VideoCard, ChannelCard} from "./"

//Added channelTitle into the params since the API doesn't pass it into 'videos' consistently
const Videos = ({ videos, direction, channelTitle }) => {
  console.log('Videos:', videos);

  if (!videos) {
    console.log('No videos');
    return <div>No videos available</div>;
  }

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => {
        console.log('Item:', item);
        return (
          <Box key={idx}>
            {item.type === "video" && item.videoId && (
              <VideoCard video={item} channelTitle2={channelTitle}/>
            )}
            {item.type === "channel" && item.channelId && (
              <ChannelCard channelDetail={item} />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

