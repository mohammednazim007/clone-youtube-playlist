import { Badge, Card } from "keep-react";
import { CaretRight } from "phosphor-react";
import "./responsive.css";

export const SidebarComponent = ({ data, handleVideoId }) => {
  return (
    <>
      <Card
        className="border-none !bg-transparent lg:ml-5 pb-1"
        onClick={() => handleVideoId(data?.videoId)}
      >
        <Card.Container className="flex items-start border-none hover:cursor-wait">
          <Card.Container>
            <img
              src={data.medium.url}
              height={600}
              width={200}
              className="rounded-xl"
              alt=""
            />
          </Card.Container>
          <Card.Container className="md:px-6 px-3">
            <Card.Title className="text-body-5 md:text-body-2 font-medium text-metal-700">
              {data?.title.length >= 50
                ? `${data?.title.slice(0, 40)} ...`
                : data?.title}
            </Card.Title>

            <Card.Description className="text-body-6 md:text-body-5 font-normal text-metal-500">
              {data?.description.length >= 60
                ? `${data?.description.slice(0, 90)} ...`
                : data?.description}
            </Card.Description>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
