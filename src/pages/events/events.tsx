import { EventCard } from "@/components/events/event-card.tsx";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";

import { EventType } from "@/models/event";
import { EventDropdownLocation } from "@/components/events/event-dropdown-location.tsx";
import { EventDropdownType } from "@/components/events/event-dropdown-type.tsx";
import { EventDropdownOrderBy } from "@/components/events/event-dropdown-order-by.tsx";
const allEvents: {
  imageUrl: string;
  eventDate: string;
  eventTitle: string;
  city: string;
  state: string;
  eventType: EventType;
  isFree?: boolean;
}[] = [
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Expo",
    imageUrl: image1,
    isFree: false,
  },

  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Networking Event",
    imageUrl: image2,
    isFree: false,
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Seminar",
    imageUrl: image3,
    isFree: false,
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Conference",
    imageUrl: image4,
    isFree: false,
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Expo",
    imageUrl: image1,
    isFree: false,
  },
];
const Events = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <div className={"flex flex-row gap-2"}>
        <EventDropdownLocation />
        <EventDropdownType />
        <EventDropdownOrderBy />
      </div>
      <div className={"grid grid-cols-[repeat(4,_287px)] gap-2"}>
        {allEvents.map((event) => (
          <EventCard {...event} key={event.eventTitle} />
        ))}
      </div>
    </div>
  );
};
export { Events };
