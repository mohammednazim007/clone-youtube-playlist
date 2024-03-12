import style from "./responsive.module.css";

const VideoFooter = ({ videoObject }) => {
  return (
    <div>
      <div className="">
        <div className={`py-5 px-2 mt-1 ${style.customShadow}`}>
          <div>
            <div className="flex items-center">
              {videoObject?.value && (
                <img
                  src={videoObject?.value?.high?.url}
                  className="object-cover w-10 h-10 rounded-full dark:bg-gray-500"
                />
              )}

              <span className="dark:text-gray-600 font-semibold ml-4">
                {videoObject?.value?.channelTitle}
              </span>
            </div>

            <hr className="my-3 border-error-100 " />
          </div>
          <div className="mt-3">
            <p className="mt-2">
              {videoObject?.value &&
              videoObject?.value?.description?.length >= 50
                ? ` ${videoObject?.value?.description?.slice(0, 200)}...`
                : videoObject?.value?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
