import { Card } from "keep-react";

const Playlist_card = ({ value, playVideoHandler }) => {
  const { videoId } = value.contentDetails;
  const {
    channelTitle,
    description,
    title,
    thumbnails: { high },
  } = value.snippet;

  return (
    <div>
      <Card
        onClick={() => playVideoHandler(videoId)}
        className="py-3 mb-2 hover:cursor-pointer"
      >
        <Card.Container className="flex items-start border-none justify-start">
          {/* === channel image === */}
          <div className="channelImg rounded-lg">
            <img src={high?.url} className="p-2 rounded-xl" alt="" />
          </div>
          <div className="md:px-6 px-3">
            <Card.Title className="text-body-5 md:text-body-2 font-medium text-metal-700">
              <p className="font-medium">
                {channelTitle && channelTitle.length >= 50
                  ? channelTitle.slice(0, 50)
                  : channelTitle}
                <hr className="mb-1 block" />
              </p>
            </Card.Title>
            <Card.Description className="text-body-6 md:text-body-5 font-normal text-metal-500">
              <p>
                {description && description.length >= 50
                  ? `${description?.slice(0, 200)}...`
                  : description}
              </p>
            </Card.Description>
          </div>
        </Card.Container>
      </Card>
    </div>
  );
};

export default Playlist_card;
