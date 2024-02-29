import React from 'react';

const Education = () => {
  return (
    <section id="education" className="padding">
      <h2 className="text-center">Education</h2>
      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '3rem' }}>
        {/* add education details from elementary to college(now) */}
        <div className="container">
          <div className="box">
            <h3>Elementary School</h3>
            <p className="small">SDN 015 Kresna Bandung, Indonesia</p>
          </div>
          <div className="box">
            <h3>Junior High School</h3>
            <p className="small">SMPN 1 Bandung, Indonesia</p>
          </div>
          <div className="box">
            <h3>Senior High School</h3>
            <p className="small">SMA Laboratorium Percontohan UPI Bandung, Indonesia</p>
          </div>
          <div className="box">
            <h3>University</h3>
            <p className="small">Computer University of Indonesia, Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
