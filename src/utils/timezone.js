const TimeZone = () => {
  // Get the current date and time
  const now = new Date();

  // Get the user's timezone
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Format the date and time according to the user's timezone
  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: userTimezone,
  });

  // Output the date and time
  return `${formattedDate}_at_${formattedTime}`;
};

export default TimeZone;
