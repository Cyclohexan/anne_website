
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

//custom pics
import img1 from '../images/img_3.PNG'
import img2 from '../images/img_5a.jpeg'
import img3 from '../images/img_1a.png'
import img4 from '../images/img_6a.jpeg'
import img5 from '../images/img_7.JPG'

const spanStyle = {
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '80vh'
}
const slideImages = [
  {
    pic: img2,
  },
  {
    pic: img3,
  },
  {
    pic: img1,
  },
  {
    pic: img4,
  },
  {
    pic: img5,
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" style={{height: '80vh', width: '100vw'}}>
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