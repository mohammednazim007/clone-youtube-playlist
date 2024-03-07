import { Heart, ShoppingCart } from "phosphor-react";
import { Avatar, Card } from "keep-react";
import { Link } from "react-router-dom";

const Play_list_cart_component = ({ data }) => {
  return (
    <div className="customShadow mx-auto">
      {/*=== PRODUCT CARD === */}
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc={data?.high?.url}
        imgSize="md"
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-1 mt-2">
          {/* === title === */}
          <Card.Container className="flex items-center justify-between">
            <p>
              {data?.title.length >= 50
                ? `${data?.title.slice(0, 70)} ...`
                : data?.title}
            </p>
          </Card.Container>
          {/* image with channel name */}
          <Link to={`/home/playlistVideo/${data?.playlistId}`}>
            <Card.Container className="flex items-center py-2">
              <div className="w-[100px]">
                <Avatar shape="circle" size="lg" img={data?.medium?.url} />
              </div>
              <div>
                <span className="inline-block ml-2 text-[1.0rem] font-bold">
                  {data?.channelTitle.length >= 20
                    ? `${data?.channelTitle.slice(0, 50)} ...`
                    : data?.channelTitle}
                </span>
              </div>
            </Card.Container>
          </Link>
        </Card.Container>
      </Card>
    </div>
  );
};

export default Play_list_cart_component;
