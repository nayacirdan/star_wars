export const makeIdFromUrl = (url) => {
    const urlArr = url.split('/');
    return urlArr[urlArr.length - 2];
}

export const changeUrls=(arr)=>{
    return arr.map(str=>{
        return str.substr(0,4)+'s'+str.substr(4);
    });
}