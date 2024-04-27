// Home.js
import React from 'react';
import Card from '../../src/components/Card';
import image from '../../src/img/img.jpg';
import image1 from '../../src/img/img1.jpg';
import image2 from '../../src/img/image2.jpg';
import image3 from '../../src/img/image3.jpg';
import image4 from '../../src/img/img4.jpg';
import image5 from '../../src/img/img5.jpg';
import image6 from '../../src/img/img6.jpg';
import image8 from '../../src/img/img8.jpg';
import images8 from '../../src/img/images8.jpg';

export default function Home() {
  return (
    <main>
      <div className="row m-0">
        <Card
          image={image}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
        <Card
          image={image4}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
        <Card
          image={image5}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
          <Card
          image={image6}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
       
      
          <Card
          image={images8}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
       
      
       
          <Card
            image={image3}
            title="Special title treatment"
            text="With supporting text below as a natural lead-in to additional content."
          />
        <Card
          image={image2}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
         <Card
          image={image1}
          title="Special title treatment"
          text="With supporting text below as a natural lead-in to additional content."
        />
     
        <Card 
        image={image8}
        title={'books'}
        text={'With supporting text below as a natural lead-in to additional content.'}
        />



      </div>
    </main>
  );
}
