import image1 from '../../public/Room1.jpg'
import image2 from '../../public/Room2.jpg'
import image3 from '../../public/Room3.jpg'
import image4 from '../../public/Room4.jpg'
import image5 from '../../public/Room5.jpg'
import image6 from '../../public/Room6.jpg'
import image7 from '../../public/Room7.jpg'
import image8 from '../../public/Room8.jpg'
import image9 from '../../public/Room9.jpg'

export const images = [
    image1, 
    image2, 
    image3, 
    image4, 
    image5,
    image6,
    image7,
    image8, 
    image9
]

const RoomIndex = (index) => images[index % images.length]

export default RoomIndex