import ReactImageGallery from "react-image-gallery";

import phone1 from "../../../assets/images/phone1.png";
import phone2 from "../../../assets/images/phone2.jpg";
import phone3 from "../../../assets/images/phone3.webp";

import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductGallery.css";
import { useEffect, useState } from "react";

const responsiveObj = {sm:576,md:768,lg:992,xl:1200}

const ProductGallery = ({responsive="lg"}) => {
  const [galleryArgs, setGalleryArgs] = useState({});
  const scrollThumbnailNearest = () => {
    document.querySelector(".image-gallery-thumbnail.active")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < responsiveObj[responsive]) {
        setGalleryArgs({ showThumbnails: false, showBullets: true });
      } else {
        setGalleryArgs({thumbnailPosition:"left", showThumbnails: true, showBullets: false });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);


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
      additionalClass="btn-outline-dark bg-white shadow-sm"
      disableThumbnailScroll
      isRTL showPlayButton={false} {...galleryArgs} showNav={false} showIndex infinite={false}
      onSlide={scrollThumbnailNearest}
    />
  );
};

export default ProductGallery;
