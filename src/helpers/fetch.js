export const fetchHappens = async (url) => {
  try {
    const results = await fetch(url);
    const data = await results.json();
    return data;
  } catch(error) {
    return error;
  }
}

