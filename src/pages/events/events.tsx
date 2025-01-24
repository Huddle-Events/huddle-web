import { EventCard } from "@/components/events/event-card.tsx";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";

import { EventType } from "@/models/event";
import { EventDropdownLocation } from "@/components/events/event-dropdown-location.tsx";
import { EventDropdownType } from "@/components/events/event-dropdown-type.tsx";
import { EventDropdownOrderBy } from "@/components/events/event-dropdown-order-by.tsx";
import { EventDropdownDate } from "@/components/events/event-dropdown-date.tsx";
const allEvents: {
  id: string;
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
    id: "1",
  },

  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Networking Event",
    imageUrl: image2,
    isFree: false,
    id: "2",
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Seminar",
    imageUrl: image3,
    isFree: false,
    id: "3",
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Conference",
    imageUrl: image4,
    isFree: false,
    id: "4",
  },
  {
    state: "QLD",
    city: "Brisbane",
    eventDate: new Date().toISOString(),
    eventTitle: "Digital Marketing & E-commerce Session",
    eventType: "Expo",
    imageUrl: image1,
    isFree: false,
    id: "5",
  },
];
const Events = () => {
  return (
    <div className={"flex flex-col gap-2 w-screen"}>
      <div className={"flex flex-row gap-2"}>
        <EventDropdownLocation />
        <EventDropdownDate />
        <EventDropdownType />
        <EventDropdownOrderBy />
      </div>
      <div className={"grid grid-cols-[repeat(auto-fit,_287px)] gap-2"}>
        {allEvents.map((event) => (
          <EventCard {...event} key={event.id} />
        ))}
      </div>
    </div>
  );
};
export { Events };
