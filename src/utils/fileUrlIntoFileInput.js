const fileUrlIntoFileInput = async (fileUrl, target) => {
  // get file data from url
  const urlArray = fileUrl.split("/");
  const fileName = urlArray[urlArray.length - 1];

  // create file blob from the file data
  const fileBlob = await fetch(fileUrl).then(res => res.blob());

  const file = new File([fileBlob], fileName, { type: fileBlob.type, lastModified: new Date().getTime() }, 'utf-8');

  const container = new DataTransfer();
  container.items.add(file);

  for (const file of target.files) {
    container.items.add(file);
  }

  target.files = container.files;
};

export default fileUrlIntoFileInput;