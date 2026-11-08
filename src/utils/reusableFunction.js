function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);

    return result;
  }, {});
}

 function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


 const venueImages = [
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
  // "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
  // "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800",
  // "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
  // "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  // "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
  // "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
  // "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
  // "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  // "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
  // "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800"
];

const eventImages =[
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
  // "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800"
]
export { groupBy , debounce ,venueImages ,eventImages };