import { Badge, Card } from "keep-react";
import { CaretRight } from "phosphor-react";
import "./responsive.css";

export const SidebarComponent = ({ value, handleVideoId }) => {
  const {
    channelTitle,
    description,
    title,
    thumbnails: { medium, high },
    resourceId: { videoId },
  } = value.snippet;

  return (
    <div className="bg-[#FFFFFF] my-3">
      <Card
        className="border-none !bg-transparent lg:ml-5 pb-1"
        onClick={() =>
          handleVideoId({ videoId, channelTitle, description, title, medium })
        }
      >
        <Card.Container className="flex items-start border-none hover:cursor-wait">
          <Card.Container className="">
            <img
              src={medium?.url}
              height={600}
              width={200}
              className="rounded-xl"
              alt=""
            />
          </Card.Container>
          <Card.Container className="md:px-6 px-3">
            <Card.Title className="text-sm text-metal-700">
              {title.length >= 50 ? `${title?.slice(0, 30)} ...` : title}
            </Card.Title>

            <Card.Description className="text-body-6 md:text-body-5 font-normal text-metal-500">
              <p>
                {description.length >= 60
                  ? `${description?.slice(0, 120)} ...`
                  : description}
              </p>
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};
