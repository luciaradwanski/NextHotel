
import image3 from '../../public/Recreation3.jpg'
import image4 from '../../public/Recreation4.jpg'

import image7 from '../../public/Recreation7.jpg'

import image10 from '../../public/Recreation10.jpg'


export const images = [
    image3, 
    image4,
    image7,
    
    image10,
    
    
]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex