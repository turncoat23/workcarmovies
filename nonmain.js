const obj = {
    adult: false,
    backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
    id: 385687,
    original_language: "en",
    original_title: "Fast X",
    popularity: 6963.783,
}

Object.entries(obj).forEach((arr) => {
    const [key, value] = arr
    console.log(key, value)
})




export const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
  time: "EST",
};

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const dateString = date.toLocaleDateString("en-US", options);

  return dateString;
}