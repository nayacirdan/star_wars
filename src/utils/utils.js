export const makeIdFromUrl = (url) => {
    const urlArr = url.split('/');
    return urlArr[urlArr.length - 2];
}
