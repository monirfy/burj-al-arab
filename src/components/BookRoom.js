import React from 'react';

const BookRoom = () => {
  return (
    <>
      <section className='page-title'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='display-2 text-white mb-0'>Book your favorite room.</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-lg-6 mx-auto'>
              <h3>Standard Single Room</h3>
              <ul>
                <li>Room: 3</li>
                <li>Bath: 2</li>
                <li>Capacity: 4 people</li>
              </ul>
              <h3>Price: $253</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookRoom;
