import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import { Event } from "@/models/event.ts";

export const getAllCards = async () => {
  const allEvents: Event[] = [
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
  return new Promise<Event[]>((resolve) => {
    resolve(allEvents);
  });
};
export const getRelatedCards = async () => {
  const events: Event[] = [
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
  ];
  return new Promise<Event[]>((resolve) => {
    resolve(events);
  });
};
