import React from "react";
import {useEffect, useState} from 'react'
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop:100,
    margin:200,
    display:'flex',
    flex:'wrap'
    
  }
});

export default function CardView() {
const [cameraNames , setCameraNames] = useState();
const [cameraViews , setCameraViews] = useState();
useEffect (() =>{
  const cameraNames = axios.get(`http://localhost:8080/api/cameras`)
  .then(response => {
    console.log("this is the response in the card", response);

  })
},[])


  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
       <CardHeader
            title={"cameraName"}
        />
      <CardActionArea>
        <CardMedia
         component='video'
         className={classes.media}
         image={"../../assets/video.mp4"}
         autoPlay
     />
       
      </CardActionArea>
    </Card>
  );
}



    // <div className=" flex flex-wrap gap-7 m-0 p-5 mt-60 rounded-2xl w-full justify-center ">
    //   {/* <div>{camera.view}</div>
    //   <div>{camera.name}</div> */}
    //   <div className=" flex flex-wrap w-[full] h-[200px] justify-center   gap-8 ">
    //     <div className="relative hover:cursor-pointer">
    //       <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

    //       <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 1</lable>
    //     </div>
    //     <div className="relative hover:cursor-pointer">
    //       <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] flex " />

    //       <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 2</lable>
    //     </div>
    //     <div className="relative hover:cursor-pointer">
    //       <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

    //       <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 3</lable>
    //     </div>
    //     <div className="relative hover:cursor-pointer">
    //       <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" w-full h-full  rounded-[30px] " />

    //       <lable className=" flex  justify-center absolute bottom-2 z-50 text-yellow-400 left-4 ">Camera 4</lable>
    //     </div>
    //   </div>


    // </div>
//   );
// };
