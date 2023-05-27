import image1 from '../../public/Reserva1.jpg'
import image2 from '../../public/Reserva2.jpg'
import image3 from '../../public/Reserva3.jpg'
import image4 from '../../public/Reserva4.jpg'
import image5 from '../../public/Reserva5.jpg'
import image6 from '../../public/Reserva6.jpg'
import image7 from '../../public/Reserva7.jpg'
import image8 from '../../public/Reserva8.jpg'
import image9 from '../../public/Reserva9.jpg'
import image10 from '../../public/Reserva10.jpg'


export const images = [
    image1, 
    image2, 
    image3, 
    image4, 
    image5,
    image6,
    image7,
    image8, 
    image9,
    image10
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex