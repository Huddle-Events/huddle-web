export const eventTypes = [
  "Seminar",
  "Conference",
  "Webinar",
  "Networking Event",
  "Workshop & Training",
  "Expo",
] as const;
export type EventType = (typeof eventTypes)[number];
