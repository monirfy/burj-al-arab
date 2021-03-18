import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUsers, faDollarSign, faBath } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Room = ({ room }) => {
  return (
    <div className='col-lg-4 mb-3'>
      <div className='card h-100'>
        <img className='img-fluid' src={room.imgUrl} alt='ad' />
        <div className='card-body'>
          <h5 className='card-title'>{room.title}</h5>
          <p>{room.description}</p>
          <div className='d-flex justify-content-between mb-3'>
            <div>
              <FontAwesomeIcon icon={faBath} />
              <span className='ms-2'>{room.bath}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBed} />
              <span className='ms-2'>{room.bed}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUsers} />
              <span className='ms-2'>{room.capacity}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faDollarSign} />
              <span className='ms-2'>{room.price}</span>
            </div>
          </div>

          <Link className='btn btn-warning' to='/book-room'>
            Book Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
