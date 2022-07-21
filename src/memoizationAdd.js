export function memoizationAdd() {
  const cache = { result: {} };
  console.log("I memo");
  return function (first, second) {
    const result = Object.keys(cache["result"]);
    if (result.indexOf(`${first}_${second}`) >= 0) {
      console.log("cache in if");
      return cache["result"][`${first}_${second}`];
    } else {
      console.log("cache in else");
      cache.result[`${first}_${second}`] = Number(first) + Number(second);
      return cache["result"][`${first}_${second}`];
    }
    //return cache;
  };
}
