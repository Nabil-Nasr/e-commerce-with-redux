import styles from "./UploadImg.module.css"

const UploadImg = ({imgSrc,htmlFor}) => {
  return (
    <div className="my-3 w-75">
      <label htmlFor={htmlFor}>
        <img  src={imgSrc} className={styles["upload-img"]} alt="" />
      </label>
    </div>
  );
}

export default UploadImg;
