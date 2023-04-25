import { useEffect, useState } from "react";
import axios from 'axios';
import VideoCard from "../components/cards/VideoCard";

export default function Dashboard() {
    const [camerasData, setCamerasData] = useState([]);
    const [cameraOffline, setCameraOffline] = useState(false);

    const cameraError = `https://cdn.shopify.com/s/files/1/0058/3286/7909/articles/How_to_solve_the_problem_about_camera_is_offline.jpg?v=1566467876`;

    useEffect(() => {
        axios.get('http://localhost:8080/api/cameras')
            .then((res) => {
                setCamerasData(res.data);
                setCameraOffline(true);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (cameraOffline) {
            const randomCameraId = { cameraId: camerasData[Math.floor(Math.random() * camerasData.length)].id };

            const timeoutCall = setTimeout(() => {
                axios.post('http://localhost:8080/api/cameras/setOffline', randomCameraId).then(response => {
                    setCamerasData(response.data);
                    setCameraOffline(false);
                    console.log(response.data);
                });
            }, 10000);

            // const intervalCall = setInterval(() => {
            //     axios.get('http://localhost:8080/api/cameras/checkStatus').then(response => {
            //         console.log(response.data, response.status);
            //         if (response.status === 207) {
            //             setCamerasData(response.data, ...camerasData,);
            //         }
            //     });
            // }, 60000);


            return () => {
                clearTimeout(timeoutCall);
                // clearInterval(intervalCall);
            };
        }
    }, [cameraOffline]);



    return (
        <>
            {camerasData.map((camera, i) => {
                return (
                    (camera.status === 1 ?
                        <VideoCard
                            key={i}
                            videoUrl={camera.camera_url}
                            title={camera.camera_name}
                        />
                        :
                        <VideoCard
                            key={i}
                            videoUrl={cameraError}
                            title={camera.camera_name}
                            status={camera.status}
                        />
                    )
                );
            })}
        </>
    );
}