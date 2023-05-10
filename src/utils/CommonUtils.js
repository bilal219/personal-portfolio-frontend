export const ancherTarget = (target) => {
  return target == "New_Target" ? "_blank" : "_self";
};

export const dateFormat = (date) => {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var now = new Date(date);
  const formatted = date
    ? months[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear()
    : "";
  return formatted;
};
