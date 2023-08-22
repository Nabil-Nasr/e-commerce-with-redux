import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductGallery.css";
import { useEffect, useState } from "react";

const responsiveObj = { sm: 576, md: 768, lg: 992, xl: 1200 };

const ProductGallery = ({ items, responsive = "lg" }) => {

  const [galleryArgs, setGalleryArgs] = useState({});
  const scrollThumbnailNearest = () => {
    document.querySelector(".image-gallery-thumbnail.active")
      ?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  useEffect(() => {
    const controller = new AbortController();
    const handleResize = () => {
      if (window.innerWidth < responsiveObj[responsive]) {
        setGalleryArgs({ showThumbnails: false, showBullets: true });
      } else {
        setGalleryArgs({ thumbnailPosition: "left", showThumbnails: true, showBullets: false });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize, { signal: controller.signal });
    return () => controller.abort();
  }, []);


  return (
    <ReactImageGallery items={items.map(image => ({ original: image, thumbnail: image }))}
      additionalClass="bg-white shadow-sm"
      disableThumbnailScroll
      isRTL showPlayButton={false} {...galleryArgs} showNav={false} showIndex infinite={false}
      onSlide={scrollThumbnailNearest}
    />
  );
};

export default ProductGallery;
