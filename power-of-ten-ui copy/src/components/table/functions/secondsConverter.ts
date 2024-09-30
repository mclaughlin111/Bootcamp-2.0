export const secondsConverter = (seconds: number) => {
  // Check for valid input, if invalid, return empty string
  if (isNaN(seconds)) return " ";

  // Calculate the whole hours
  const hours = Math.floor(seconds / 3600);

  // Calculate the remaining minutes (after hours are extracted)
  const minutes = Math.floor((seconds % 3600) / 60);

  // Calculate the remaining seconds (after minutes are extracted)
  const remainingSeconds = Math.floor(seconds % 60);

  // Format the time as H:MM:SS
  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

  return formattedTime;
};
