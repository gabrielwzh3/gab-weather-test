export const formattedSGTimeZone = (timestamp) => {
  return new Intl.DateTimeFormat("en-US", {
    timeStyle: "long",
    dateStyle: "medium",
    timeZone: "Asia/Singapore",
  }).format(new Date(timestamp));
};
