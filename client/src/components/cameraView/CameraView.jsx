import { KeyboardBackspaceOutlined } from '@material-ui/icons';

export default function Watch() {
  return (
    <div className='watch w-full '>
      <div className='absolute top-1 left-[2px] flex align-middle gap-4 cursor-pointer sm:left-[10px]'>
        <KeyboardBackspaceOutlined style={{ fontSize: 60 }} className=' absolute pt-3 top-10 left-10 text-white z-50 bg-slate-400' ></KeyboardBackspaceOutlined>
        <h3 className=' absolute top-10 left-12 text-white z-50 bg-slate-400 text-center'>Home</h3>
      </div>
      <video src={require('../../assets/video.mp4')} autoPlay loop muted className=" relative m-auto w-full h-full " />

    </div>
  );
}
