import './style.css';
import { Button } from '../../components/Button';
import video_zam from '../../assets/video.mp4';
import video_zam_2 from '../../assets/video_zam_2.mp4';
import ReactPlayer from 'react-player';

export const OurStory = () => {
  return (
    <div className="ourStory">
      <h1 className="ourStory-heading">Our love story!</h1>
      <Button to={'/'} type={'secondary'}>
        Informácie o svadbe
      </Button>
      <div className="ourStory__video">
        <ReactPlayer controls={true} url={video_zam} />
        <ReactPlayer controls={true} url={video_zam_2} />
      </div>
    </div>
  );
};
