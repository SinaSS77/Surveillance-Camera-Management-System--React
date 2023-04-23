import React from "react";

const CameraCard = ({ camera }) => {
  return (
    
    <div className=" flex flex-wrap gap-7 m-0 p-5 mt-60 rounded-2xl w-full justify-center ">
      {/* <div>{camera.view}</div>
      <div>{camera.name}</div> */}
      <div className=" flex flex-wrap w-[full] h-[200px] justify-center   gap-8 ">
        <div className="relative">
          <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

          <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 1</lable>
        </div>
        <div className="relative">
          <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] flex " />

          <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 2</lable>
        </div>
        <div className="relative">
          <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

          <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 3</lable>
        </div>
        <div className="relative">
          <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

          <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 4</lable>
        </div>
      </div>


    </div>
  );
};
export default CameraCard;