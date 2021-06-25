const getComic = async (num) => {
  try {
    let response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    return await response.json();
  } catch {
    console.log("error in fetching comic.");
  }
};
// gets json Array of comics
export const getComics = async (maxNum) => {
  try {
    const numArray = Array.from({ length: maxNum }, (_, i) => i + 1);
    return Promise.all(numArray.map((num) => getComic(num)));
  } catch {
    console.log("error in fetching comics.");
  }
};
