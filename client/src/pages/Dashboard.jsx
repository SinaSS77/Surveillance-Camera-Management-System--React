import { useEffect, useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from "@material-ui/core/Typography";
import VideoCard from "../components/cards/VideoCard";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Dialog, DialogTitle, DialogContent, DialogActions, Backdrop } from '@mui/material';
import { makeStyles } from '@mui/styles/';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    // zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

export default function Dashboard({}) {
    const [camerasData, setCamerasData] = useState([]);
    const [cameraOffline, setCameraOffline] = useState(false);
    const [camerasHealth, setCamerasHealth] = useState(true);
    const [showWarning, setShowWarning] = useState(false);

    const classes = useStyles();

    const cameraError = `https://cdn.shopify.com/s/files/1/0058/3286/7909/articles/How_to_solve_the_problem_about_camera_is_offline.jpg?v=1566467876`;

    useEffect(() => {
        axios.get('http://localhost:8080/api/cameras')
            .then((res) => {
                setCamerasHealth(true)
                setCamerasData(res.data);
                setCameraOffline(true);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (cameraOffline) {
            const randomCameraId = { cameraId: camerasData[Math.floor(Math.random() * camerasData.length)].id };

            const timeoutCall = setTimeout(() => {
                axios.post('http://localhost:8080/api/cameras/setOffline', randomCameraId)
                .then(response => {
                    setCamerasData(response.data);
                    setCameraOffline(false);
                });
            }, 10000);

            return () => {
                clearTimeout(timeoutCall);
                // clearInterval(intervalCall);
            };
        }
    }, [cameraOffline]);

    useEffect(() => {
        const interval = setInterval(() => {
          axios.get('http://localhost:8080/api/cameras/checkStatus')
            .then((res) => {
                if (res.status === 200) {
                    setCamerasHealth(true)
                    setShowWarning(false)
                } else {
                    setCamerasHealth(false)
                    setShowWarning(true)
                }
            })
            .catch(error => console.log(error));
        }, 500);
    
        return () => clearInterval(interval);
      }, []);


    const handleRestartCameras = async () => {
        await axios.post("http://localhost:8080/api/cameras/restartCameras").then((cameras) => {
            setCamerasData(cameras.data)
            setCamerasHealth(true)
            setShowWarning(false)
        });
    };

    const handleClose = () => {
        setShowWarning(false)
    };


    return (
        <div className="flex flex-col items-center mx-auto text-center m-auto justify-center">
            <div className="flex flex-1 flex-wrap justify-between items-center mx-auto mt-[150px] text-center px-[30px] gap-10 h-full min-h-full ">
                  <Typography variant="h3" align="center" sx={{
                        fontSize: '3rem',
                        fontWeight: '600',
                        textAlign: 'center',
                        color: 'purple.700',
                        textDecoration: 'underline wavy',
                        textTransform: 'uppercase'
                    }}>
                        Camera Health:{' '}
                        {camerasHealth ? (
                            <CheckCircleIcon sx={{ color: 'green', ml: 1 }} />
                        ) : (
                            <CancelIcon sx={{ color: 'red', ml: 1 }} />
                        )}
                    </Typography>
                {camerasData.map((camera, i) => (
                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                        {camera.status === 1 ?
                            <VideoCard
                                videoUrl={camera.camera_url}
                                title={camera.camera_name}
                            />
                            :
                            <VideoCard
                                videoUrl={cameraError}
                                title={camera.camera_name}
                                status={camera.status}
                            />
                        }
                    </div>
                ))}
                <div>
                    <Button variant="contained" onClick={handleRestartCameras}>
                        Restart Cameras
                    </Button>
                </div>
                {showWarning && (
                    <Backdrop className={classes.backdrop} open={true}>
                        <Dialog open={showWarning} onClose={handleClose}>
                            <DialogTitle onClose={handleClose}>Warning!</DialogTitle>
                                <DialogContent>
                                <p>One of cameras is offline, Please click the button below to restart</p>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleRestartCameras}>Restart Cameras</Button>
                            </DialogActions>
                        </Dialog>
                    </Backdrop>
                )
                }
                {/* <form className="flex mx-auto mt-[100px] flex-shrink-0 ">
                    <button type="submit" onClick={onClickHandler} value={'Reset Cameras'} className="w-[15em] h-[4em] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] flex-shrink-0" >Reset Cameras</button>
                </form> */}
            </div>
        </div>
    );
}