export const EventTypes = [
  "Seminar",
  "Conference",
  "Webinar",
  "Networking Event",
  "Workshop & Training",
  "Expo",
] as const;

type EventType = (typeof EventTypes)[number];
type Event = {
  id: string;
  imageUrl: string;
  eventDate: string;
  eventTitle: string;
  city: string;
  state: string;
  eventType: EventType;
  isFree?: boolean;
};

export type { Event, EventType };
