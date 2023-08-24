import { FilePond, registerPlugin } from "react-filepond";

// filepond plugins
import ImageExifOrientationPlugin from "filepond-plugin-image-exif-orientation";
import ImagePreviewPlugin from 'filepond-plugin-image-preview';
import FileValidateTypePlugin from 'filepond-plugin-file-validate-type';
import FileValidateSizePlugin from 'filepond-plugin-file-validate-size';
import ImageValidateSizePlugin from 'filepond-plugin-image-validate-size';


import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


registerPlugin(ImageExifOrientationPlugin, ImagePreviewPlugin, FileValidateTypePlugin, FileValidateSizePlugin, ImageValidateSizePlugin);


const ImagesInput = ({ name, max = 1, abortErrorMessageTime = 5000 }) => {
  return (
    <FilePond
      name={name}
      credits={false}
      allowMultiple={max > 1}
      allowReorder
      maxFiles={max}
      className="font-main"
      labelIdle='<span style="cursor:pointer;font-size:2.75em"><i class="fas fa-cloud-arrow-up text-dark"></i></span>'
      // for creating fileInput for every file
      storeAsFile

      acceptedFileTypes={["image/jpeg", "image/webp", "image/gif", "image/png"]}
      labelFileTypeNotAllowed="من فضلك قم باختيار صورة"
      fileValidateTypeLabelExpectedTypes="{allTypes} الصور المسموحة"
      // for replacing every acceptedFileType with the corresponding extension in the message
      fileValidateTypeLabelExpectedTypesMap={{ "image/jpeg": ".jpeg,.jpg", "image/webp": ".webp", "image/gif": ".gif", "image/png": ".png" }}

      minFileSize="7KB"
      labelMinFileSizeExceeded="حجم الصورة صغير جداً"
      labelMinFileSize="{filesize} الحد الأدني لحجم الصورة"

      maxFileSize="850KB"
      labelMaxFileSizeExceeded="حجم الصورة كبير جداً"
      labelMaxFileSize="{filesize} الحد الأقصى لحجم الصورة"

      imageValidateSizeMinWidth={200}
      imageValidateSizeMinHeight={200}
      imageValidateSizeLabelImageSizeTooSmall="أبعاد الصورة صغيرة جداً"
      imageValidateSizeLabelExpectedMinSize="الحد الأدنى لأبعاد الصورة ({minHeight} × {minWidth})"

      imageValidateSizeMaxWidth={2000}
      imageValidateSizeMaxHeight={2500}
      imageValidateSizeLabelImageSizeTooBig="أبعاد الصورة كبيرة جداً"
      imageValidateSizeLabelExpectedMaxSize="الحد الأقصي لأبعاد الصورة ({maxHeight} × {maxWidth})"

      onerror={(...args) => {
        const file = args[1];
        setTimeout(file.abortLoad, abortErrorMessageTime);
      }}
    />
  );
};
export default ImagesInput;