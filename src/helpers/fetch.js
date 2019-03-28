export const fetchHappens = async (url) => {
  try {
    const results = await fetch(url);
    const data = await results.json();
    return data.results;
  } catch(error) {
    return error;
  }
}