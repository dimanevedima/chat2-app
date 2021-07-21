export default number => {
  const mins = Math.floor(number / 60);
  const secs = (number % 60).toFixed();
//  console.log( `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`);
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
