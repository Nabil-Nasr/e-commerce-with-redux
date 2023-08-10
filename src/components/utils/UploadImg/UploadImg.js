import styles from "./UploadImg.module.css"

const UploadImg = ({imgSrc,htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className="my-3">
      <img  src={imgSrc} className={styles["upload-img"]} alt="" />
    </label>
  );
}

export default UploadImg;
