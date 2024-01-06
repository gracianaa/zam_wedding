import './style.css';
import { Link } from 'react-router-dom';

export const Calendar = () => {
  const openMapChurch = () => {
    const mapUrl =
      'https://www.google.com/maps/place/Farsk%C3%BD+kostol+mu%C4%8Den%C3%ADckej+smrti+sv.+J%C3%A1na+Krstite%C4%BEa/@49.1036518,21.0826415,15z/data=!4m6!3m5!1s0x473e8a5e0b5687a3:0x5b83101d35f55afc!8m2!3d49.1029412!4d21.0967397!16s%2Fg%2F11xndvkdj?entry=ttu';

    window.open(mapUrl, '_blank');
  };
  const openMapRestaurant = () => {
    const mapUrl =
      'https://www.google.com/maps/place/Royal+M/@49.1036518,21.0826415,15z/data=!4m9!3m8!1s0x473e8b445ee398ad:0xadc87d92119d9405!5m2!4m1!1i2!8m2!3d49.1115542!4d21.0836047!16s%2Fg%2F11fn5sf4fj?entry=ttu';

    window.open(mapUrl, '_blank');
  };

  return (
    <div className="info-list__body">
      <div className="info-list__row">
        <p className="info-list info-list__headings">dátum svadby: </p>
        <p className="info-list info-list__detail">10.08.2024</p>
      </div>

      <div className="info-list__row">
        <p className="info-list info-list__headings">čas: </p>
        <p className="info-list info-list__detail">14:00</p>
      </div>

      <div className="info-list__row">
        <p className="info-list info-list__headings">sobáš: </p>
        <p className="info-list info-list__detail">
          Farský kostol mučeníckej smrti sv. Jána Krstiteľa
        </p>
      </div>

      <div className="info-list__row">
        <p className="info-list info-list__headings">adresa kostola: </p>
        <Link className="info-list info-list__detail" onClick={openMapChurch}>
          Námestie slobody, Sabinov
        </Link>
      </div>

      <div className="info-list__row">
        <p className="info-list info-list__headings">spolu to oslávime: </p>
        <Link
          className="info-list info-list__detail"
          onClick={openMapRestaurant}
        >
          Royal M, Hollého 2346, Sabinov
        </Link>
      </div>
    </div>
  );
};
