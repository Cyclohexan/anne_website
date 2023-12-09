
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//custom pics
import img1 from '../images/img_3.PNG'
import img2 from '../images/img_5.jpeg'
import img3 from '../images/img_1a.png'

const spanStyle = {
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '95vh'
}
const slideImages = [
  {
    pic: img1,
  },
  {
    pic: img2,
  },
  {
    pic: img3,
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" style={{height: '100vh', width: '100vw'}}>
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