import React from "react";
import YouTube from "react-youtube";
import { Badge, Card } from "keep-react";

const Video_card = ({ videoInfo }) => {
  return (
    <div className="mb-4 lg:mb-0">
      <YouTube videoId={videoInfo.videoId} />

      {/* // === video title with info === */}
      <Card className="max-w-2xl border-none !bg-transparent">
        <Card.Container className="">
          <Card.Container className="">
            <Card.Title className="text-body-6 py-2 md:text-body-2 font-medium text-metal-700">
              {videoInfo?.title?.length >= 50
                ? `${videoInfo?.title?.slice(0, 100)} ...`
                : videoInfo?.title}
            </Card.Title>
            <Card.Description className="text-body-5 md:text-body-4 font-normal text-metal-500">
              {videoInfo?.description?.length >= 100
                ? `${videoInfo?.description?.slice(0, 200)} ...`
                : videoInfo?.description}
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

export default Video_card;
