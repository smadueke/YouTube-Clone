import { Stack, Box } from "@mui/material"

import {VideoCard, ChannelCard} from "./"

const Videos = ({ videos }) => {
  console.log('Videos:', videos);

  if (!videos) {
    console.log('No videos');
    return <div>No videos available</div>;
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => {
        console.log('Item:', item);
        return (
          <Box key={idx}>
            {item.type === "video" && item.videoId && (
              <VideoCard video={item} />
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

