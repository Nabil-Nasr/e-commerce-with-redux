import ReactImageGallery from "react-image-gallery";

import phone1 from "../../../assets/images/phone1.png";
import phone2 from "../../../assets/images/phone2.jpg";
import phone3 from "../../../assets/images/phone3.webp";

import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductGallery.css";

const ProductGallery = () => {
  const scrollThumbnailNearest = () => {
    document.querySelector(".image-gallery-thumbnail.active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  return (
    <ReactImageGallery items={[
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
      {
        original: phone1,
        thumbnail: phone1,
      },
      {
        original: phone2,
        thumbnail: phone2
      },
      {
        original: phone3,
        thumbnail: phone3
      },
    ]}
      additionalClass="btn-outline-dark"
      disableThumbnailScroll
      isRTL showPlayButton={false} showBullets thumbnailPosition="left" showNav={false} showIndex infinite={false}
      onSlide={scrollThumbnailNearest}
    />
  );
};

export default ProductGallery;
