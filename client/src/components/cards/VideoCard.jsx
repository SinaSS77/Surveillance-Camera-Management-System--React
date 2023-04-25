// import React from "react";

// const CameraCard = ({ camera }) => {
//   return (

//     <div className=" flex flex-wrap gap-7 m-0 p-5 mt-60 rounded-2xl w-full justify-center ">
//       {/* <div>{camera.view}</div>
//       <div>{camera.name}</div> */}
//       <div className=" flex flex-wrap w-[full] h-[200px] justify-center   gap-8 ">
//         <div className="relative hover:cursor-pointer">
//           <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

//           <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 1</lable>
//         </div>
//         <div className="relative hover:cursor-pointer">
//           <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] flex " />

//           <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 2</lable>
//         </div>
//         <div className="relative hover:cursor-pointer">
//           <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

//           <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 3</lable>
//         </div>
//         <div className="relative hover:cursor-pointer">
//           <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

//           <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 4</lable>
//         </div>
//       </div>


//     </div>
//   );
// };
// export default CameraCard;

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function VideoCard({ videoUrl, title, status = 1 }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          {status === 1 ?
            <video width="100%" height="auto" autoPlay muted loop>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <img src={videoUrl} width="100%" height="auto" autoPlay muted loop />
          }
          <CardContent>
            <h2>{title}</h2>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <DialogContent>
          <video width="1000px" height="auto" autoPlay controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </>
  );
};






