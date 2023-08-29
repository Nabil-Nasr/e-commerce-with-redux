const fileUrlIntoFileInput = async (fileUrl, target, type) => {
  // get file data from url
  const urlArray = fileUrl.split("/");
  const fileName = urlArray[urlArray.length - 1];
  const fileExtension = fileName.split(".")[1];

  // create file from the file data
  const fileBlob = await fetch(fileUrl).then(res => res.blob());
  const file = new File([fileBlob], fileName, { type: `${type}/${fileExtension}`, lastModified: new Date().getTime() }, 'utf-8');

  const container = new DataTransfer();
  container.items.add(file);

  for (const file of target.files) {
    container.items.add(file);
  }

  target.files = container.files;
};

export default fileUrlIntoFileInput;