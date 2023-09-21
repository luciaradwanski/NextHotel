import image1 from '../../public/Recreation3.jpg'
import image2 from '../../public/Recreation4.jpg'
import image3 from '../../public/Recreation7.jpg'
import image4 from '../../public/Recreation10.jpg'


export const images = [
    image1, 
    image2,
    image3,
    image4,
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex