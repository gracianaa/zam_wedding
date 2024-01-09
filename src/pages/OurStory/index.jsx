import './style.css';
import { Button } from '../../components/Button';

export const OurStory = () => {
  return (
    <div className="ourStory">
      <div className="ourStory-background">
        <div className="ourStory-background__opacity">
          <h1 className="ourStory-heading">Our love story!</h1>
          <Button to={'/'} type={'primary'}>
            Informácie o svadbe
          </Button>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex minima non
        voluptas sunt a nobis commodi in pariatur nisi iste, molestiae laborum
        voluptates modi tempore quia distinctio eveniet nostrum quas. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Ex minima non
        voluptas sunt a nobis commodi in pariatur nisi iste, molestiae laborum
        voluptates modi tempore quia distinctio eveniet nostrum quas.
      </p>
    </div>
  );
};
