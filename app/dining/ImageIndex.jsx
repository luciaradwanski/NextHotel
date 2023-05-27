import image1 from '../../public/Gastronomy1.jpg'
import image2 from '../../public/Gastronomy2.jpg'
import image3 from '../../public/Gastronomy3.jpg'
import image4 from '../../public/Gastronomy4.jpg'
import image5 from '../../public/Gastronomy5.jpg'

export const images = [
    image1, 
    image2, 
    image3, 
    image4, 
    image5
]

const imageIndex = (index) => images[index % images.length]

export default imageIndex