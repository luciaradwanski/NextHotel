

export const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/462023262.jpg?k=ffc38b7fb577fb7be256617c54c2ceb532d030a591eafe004811413c43b3f3a3&o=&hp=1", 
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/462024903.jpg?k=024b4e45420dc74ecf3262daeaffd06ae503946376481d4046c64567130f7b87&o=&hp=1", 
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/462024881.jpg?k=d5edea89eef78afadf1dcf78476adae7e88dc0f3fe05b013e2768d7447d74d01&o=&hp=1", 
    "https://cf.bstatic.com/xdata/images/hotel/max1280x900/462024914.jpg?k=8b3d926b6360a9c793e88e23cc0ecb39a84ecc79d304e1031082abfa44b7f163&o=&hp=1", 
    "https://cache.marriott.com/content/dam/marriott-renditions/HNMMC/hnmmc-cabanas-5977-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*"
]

const imageIndex = (index) => images[index % images.length]

export default imageIndex