
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

//custom pics
import img1 from '../images/IMG_9373.PNG'
import img2 from '../images/img_5a.jpeg'
import img3 from '../images/img_1a.png'
import img4 from '../images/img_6a.jpeg'
import img5 from '../images/img_7.JPG'

import mobile_img1 from '../images/mobile/1.jpeg';
import mobile_img2 from '../images/mobile/2.JPG';
import mobile_img3 from '../images/mobile/3.PNG';

import {mobileCheck} from '../util/mobileCheck';

const spanStyle = {
  background: '#efefef',
  color: '#000000'
}

const desktop = !mobileCheck();

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: desktop ? '80vh' : '60vh'
}

const slideImages = [
  {
    pic: desktop ? img1 : mobile_img1,
  },
  {
    pic: desktop ? img2 : mobile_img2,
  },
  {
    pic: desktop ? img4 : mobile_img3,
  }
];

if (desktop) {
  slideImages.push({
    pic: img5,
  });
}

const Slideshow = () => {
    return (
      <div className="slide-container" style={{height: desktop ? '80vh' : '60vh', width: '100vw'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.pic})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;