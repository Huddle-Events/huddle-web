type EventDetailSimple = {
  imageUrl: string;
  eventTitle: string;
  eventSubtitle: string;
  tags: string[];
  host: string;
  hostImageAvatarUrl: string;
  eventStartTime: string;
  eventEndTime: string;
  eventVisibility: "public" | "private";
  eventAttendanceType: "anyone" | "exclusive";
  ticketSalesEnd: string;
  numberOfSpotLeft: number;
  numberOfAttendant: number;
  numberOfInterested: number;
  ticketPrice: number;
  isSaved: boolean;
};

type Agenda = {
  startTime: string;
  endTime: string;
  title: string;
  summary: string;
};

type Presenter = {
  id: string;
  fullName: string;
  description: string;
  imageUrl: string;
};

type Partner = {
  id: string;
  name: string;
  imageUrl: string;
};

type Faq = {
  id: string;
  question: string;
  answer: string;
};
type Address = {
  street: string;
  suburb: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
};

type Location = {
  latitude: number;
  longitude: number;
  address: Address;
  venueName: string;
};

type AnchorLink = { text: string; anchorLink: string };
type DetailedEvent = {
  anchors: AnchorLink[];
  location: Location;
  about: string;
  agenda: Agenda[];
  presenters: Presenter[];
  partners: Partner[];
  faqs: Faq[];
};
export type {
  AnchorLink,
  DetailedEvent,
  EventDetailSimple,
  Agenda,
  Faq,
  Presenter,
  Partner,
  Address,
  Location,
};
