export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert('no file');
    return false;
  }

  // 용량 체크
  if (file.size > 30 * 1024 * 1024) {
    alert('too big file limit 30mb');
    return false;
  }

  // 확장자 체크
  // if (!file.type.includes('jpeg') && !file.type.includes('png')) {
  //   alert('jpeg png can upload');
  //   return false;
  // }
  return true;
};
