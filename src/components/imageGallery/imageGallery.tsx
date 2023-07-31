import { IProductImage } from "../../helpers/types";
import { useState } from 'react';
import './imageGallery.scss';

const ImageGallery = (props: {images: IProductImage[]}) => {
    const [mainImage, setMainImage] = useState(props.images[0]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <div className="image-gallery">
            <img className="image-gallery__main-image" src={mainImage.src} alt={mainImage.alt} />
            <div className="image-gallery__images">
                {props.images.map((image, index) => (
                    <div 
                    onClick={() => {
                        setMainImage(props.images[index]);
                        setSelectedImageIndex(index);
                    }}
                    key={image.alt + '-thumbnail'}
                    className={index === selectedImageIndex ?   'selected image-gallery__image-wrapper' : 'image-gallery__image-wrapper'}
                    >
                        <img
                            src={image.thumbnail}
                            alt={image.alt + '-thumbnail'}
                            />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGallery;
