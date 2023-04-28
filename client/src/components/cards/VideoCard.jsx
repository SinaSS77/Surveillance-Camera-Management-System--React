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
      <Card sx={{}}>
        <CardActionArea onClick={handleClickOpen}>
          {status === 1 ?
            <video width="100%" height="auto" autoPlay muted loop>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            :
            <img src={videoUrl} width="100%" height="160px" autoPlay muted loop />
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






