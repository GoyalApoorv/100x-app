import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(postedAt, referenceTime = Date.now()) {
  const timeDifference = referenceTime - postedAt;
  const secondsAgo = Math.floor(timeDifference / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (secondsAgo < 60) {
    return "just now";
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else if (daysAgo < 2) {
    return `${daysAgo} days ago`;
  } else {
    // For anything beyond 2 days, provide a formatted date
    const postedDate = new Date(postedAt); // Use milliseconds directly
    const day = postedDate.getDate();
    const month = postedDate.toLocaleString("default", { month: "short" });
    const year = postedDate.getFullYear();

    return `${day} ${month} ${year}`;
  }
}
