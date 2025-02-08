import GoogleAvatar from "@/assets/google-avatar.png";
import EventImage from "@/assets/single-event.png";
import {
  Agenda,
  EventDetailSimple,
  Faq,
  Partner,
  Presenter,
  Location,
  AnchorLink,
  DetailedEvent,
} from "@/models/single-event.ts";
import { add } from "date-fns";

import { v4 as uuidV4 } from "uuid";
import presenter1 from "@/assets/presenter-1.png";
import presenter2 from "@/assets/presenter-2.png";
import presenter3 from "@/assets/presenter-3.png";

import shell from "@/assets/shells.png";
import smartfinder from "@/assets/smartfinder.png";
import zoomer from "@/assets/zoomer.png";

export const getSimpleEvent = (eventId: string) => async () => {
  console.log(`Fetching event ${eventId}`);
  const simpleDetail: EventDetailSimple = {
    eventAttendanceType: "anyone",
    eventVisibility: "public",
    eventSubtitle: "Seminar at the Powerhouse, Brisbane",
    eventTile: "Annual Developers Conference",
    host: "Google",
    hostImageAvatarUrl: GoogleAvatar,
    imageUrl: EventImage,
    tags: ["Technology", "Development", "Seminar"],
    eventStartTime: add(new Date().toISOString(), { weeks: 2 }).toISOString(),
    eventEndTime: add(new Date(), {
      weeks: 2,
      hours: 3,
      minutes: 40,
    }).toISOString(),
  };
  return new Promise<EventDetailSimple>((resolve) => {
    resolve(simpleDetail);
  });
};

export const getEventAuthenticated = (eventId: string) => async () => {
  console.log(`Fetching authenticated event for ${eventId}`);
  const about: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis risus leo, vitae sollicitudin enim sollicitudin ut. Sed congue ligula id ex semper commodo. Proin tristique in turpis vel eleifend. Proin gravida dolor sit amet neque vulputate, non convallis felis euismod. Donec luctus felis at consequat imperdiet. Proin ut lorem finibus, mattis justo a, lobortis quam. Suspendisse sagittis ante eu neque bibendum, vel tristique erat accumsan. Pellentesque neque purus, convallis vitae diam sed, facilisis vestibulum nisi. Ut malesuada diam id feugiat bibendum. Nunc quis congue lorem, vel imperdiet nisl. Praesent nec blandit leo. Nam in ex tortor. In vitae leo convallis, elementum urna sit amet, tempus metus. Suspendisse fringilla vitae erat non fringilla. Vestibulum at vestibulum sapien.\n";
  const location: Location = {
    latitude: -27.451419162162498,
    longitude: 153.03056604850295,
    address: {
      city: "Brisbane",
      country: "Australia",
      postCode: "4000",
      state: "QLD",
      street: "600 Gregory Terrace",
      suburb: "Bowen Hills",
    },
    venueName: "Brisbane Showground",
  };
  const loremShort =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim magna, placerat vitae vulputate eget, consectetur non elit. Nulla dignissim nisi ipsum, ut ultricies lorem vulputate non. Duis ac eros vel lectus mollis volutpat eget sagittis turpis. Morbi ornare arcu leo, at ultrices libero eleifend sit amet. Fusce nisl lorem.";
  const agenda: Agenda[] = [
    {
      title: "Chapter 1: Why we program",
      summary: loremShort,
      startTime: add(new Date().toISOString(), { hours: 0 }).toISOString(),
      endTime: add(new Date(), { hours: 1 }).toISOString(),
    },
    {
      title: "Chapter 2: Variable And expression",
      summary: loremShort,
      startTime: add(new Date().toISOString(), { hours: 1 }).toISOString(),
      endTime: add(new Date(), { hours: 2 }).toISOString(),
    },
    {
      title: "Chapter 3: Loops",
      summary: loremShort,
      startTime: add(new Date().toISOString(), { hours: 2 }).toISOString(),
      endTime: add(new Date(), { hours: 3 }).toISOString(),
    },
    {
      title: "Chapter 4: Dependency injection",
      summary: loremShort,
      startTime: add(new Date().toISOString(), { hours: 3 }).toISOString(),
      endTime: add(new Date(), { hours: 4 }).toISOString(),
    },
    {
      title: "Chapter 5: Factory",
      summary: loremShort,
      startTime: add(new Date().toISOString(), { hours: 4 }).toISOString(),
      endTime: add(new Date(), { hours: 5 }).toISOString(),
    },
  ];

  const loremPresenter =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  const presenters: Presenter[] = [
    {
      id: uuidV4(),
      fullName: "Darrell Steward",
      imageUrl: presenter1,
      description: loremPresenter,
    },
    {
      id: uuidV4(),
      fullName: "Darrell Steward",
      imageUrl: presenter2,
      description: loremPresenter,
    },
    {
      id: uuidV4(),
      fullName: "Darrell Steward",
      imageUrl: presenter3,
      description: loremPresenter,
    },
  ];

  const partners: Partner[] = [
    {
      id: uuidV4(),
      imageUrl: shell,
      name: "Shells",
    },

    {
      id: uuidV4(),
      imageUrl: smartfinder,
      name: "SmartFinder",
    },
    {
      id: uuidV4(),
      imageUrl: zoomer,
      name: "Zoomer",
    },
  ];

  const faqs: Faq[] = [
    {
      id: uuidV4(),
      question: "What does the course provide me on the day of commencement?",
      answer: loremShort,
    },
    {
      id: uuidV4(),
      question: "What experience does Instructor has?",
      answer: loremShort,
    },
    {
      id: uuidV4(),
      question:
        "Do you provide a group discount for classroom training programs?",
      answer: loremShort,
    },
    {
      id: uuidV4(),
      question: "If I cancel my Enrolment, how can I claim my refund?",
      answer: loremShort,
    },
    {
      id: uuidV4(),
      question: "How do I get there by public transport?",
      answer: loremShort,
    },
    {
      id: uuidV4(),
      question: "Who do I contact if I have more questions?",
      answer: loremShort,
    },
  ];

  const anchors: AnchorLink[] = [
    {
      text: "About",
      anchorLink: "#about",
    },
    {
      text: "Location",
      anchorLink: "#location",
    },
    {
      text: "Presenters",
      anchorLink: "#presenters",
    },
    {
      text: "Agenda",
      anchorLink: "#agenda",
    },
    {
      text: "Partners & Sponsors",
      anchorLink: "#partners",
    },
    {
      text: "FAQ",
      anchorLink: "#faq",
    },
  ];
  const detail: DetailedEvent = {
    anchors,
    about,
    faqs,
    agenda,
    location,
    partners,
    presenters,
  };
  return new Promise<DetailedEvent>((resolve) => {
    resolve(detail);
  });
};
