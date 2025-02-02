type Agenda = {
  startTime: string;
  endTime: string;
  title: string;
  summary: string;
};

type Presenter = {
  fullName: string;
  description: string;
  imageUrl: string;
};

type Partner = {
  name: string;
  imageUrl: string;
};

type Faq = {
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
};
export type { Agenda, Faq, Presenter, Partner, Address, Location };
