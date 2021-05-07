export default {
  titlecase: (str: string) =>
    str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(" "),
  price: (value: string, code = "INR") =>
    `${code} ${Number.parseInt(value).toFixed(2)}`,
  discount: (current: string, last: string, decimal = 1) =>
    Math.abs(((Number(current) - Number(last)) / Number(last)) * 100).toFixed(
      decimal
    ) + "%",
};
