import { useEffect } from "react";
import axios from 'axios';
import VideoCard from "../components/cards/VideoCard";

export default function Dashboard() {

    useEffect(() => {
        axios.get('http://localhost:8080/api/cameras')
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, []);

    const videoUrl = `https://vod-progressive.akamaized.net/exp=1682402223~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=6f065954fd69285ecaf991adc58a727c485613f8e99dba956324f4dd212ddd23/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4`;
    const imgUrl = `https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png`;
    return (
        <>
            {/* <Card videoUrl={''} cameraTitle={'camera 1'}></Card> */}
            <VideoCard videoUrl={videoUrl} title={'camera 1'} thumbnailUrl={imgUrl} />
            {/* <Card></Card>
        <Card></Card>
        <Card></Card> */}
            {/* <AuthForm formType={'register'}></AuthForm>
            <AuthForm formType={'login'}></AuthForm> */}
        </>
    );
}