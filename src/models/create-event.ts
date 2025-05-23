import { z } from "zod";

export const TitleFormSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters",
    })
    .max(255),
  type: z.string().min(3).max(255),
});
export type TitleForm = z.infer<typeof TitleFormSchema>;

export const Industries = [
  "Accounting",
  "Administration",
  "Agriculture",
  "Architecture",
  "Banking",
  "Communication",
] as const;
export const EventFormat = ["InPerson", "InPersonAndOnline", "Online"] as const;
export const EventView = ["Everyone", "InviteOnly", "MyCommunity"] as const;

export const AudienceFormSchema = z.object({
  industry: z.enum(Industries),
  searchTags: z.array(z.string()),
  eventFormat: z.enum(EventFormat),
  eventView: z.enum(EventView),
});

export type AudienceForm = z.infer<typeof AudienceFormSchema>;

export const TimeFormSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  isRecurring: z.boolean().optional(),
  location: z.string().optional(),
  virtualAttendanceLink: z.string(),
});

export type TimeForm = z.infer<typeof TimeFormSchema>;
export const twoDecimalSchema = z
  .number()
  .min(3)
  .refine(
    (value) => {
      const tolerance = 1e-10;
      const multiplier = 100;
      const fractionalPart =
        value * multiplier - Math.trunc(value * multiplier);
      return Math.abs(fractionalPart) < tolerance;
      // return Math.abs(fractionalPart) < Number.EPSILON;
    },
    {
      message: "Number must have up to two decimal places",
    },
  );

export const TicketSchema = z.object({
  price: z.union([twoDecimalSchema, z.number().min(0).max(0)]),
  limit: z.number(),
  title: z.string().min(3).max(20),
  id: z.string().optional(),
});

export const TicketFormSchema = z.object({
  tickets: z.array(TicketSchema),
  daysBeforeEvent: z.number().gt(0, { message: "cannot have under 1" }),
});
export type TicketForm = z.infer<typeof TicketFormSchema>;
export type Ticket = z.infer<typeof TicketSchema>;

export const PeopleSchema = z.object({
  fullName: z.string().min(3).max(255),
  position: z.string().min(0),
  id: z.string().optional(),
});

export type People = z.infer<typeof PeopleSchema>;

export const PeopleFormSchema = z.object({
  hosts: z.array(PeopleSchema),
  guests: z.array(PeopleSchema),
});
export type PeopleForm = z.infer<typeof PeopleFormSchema>;

export const CreateEventFormSchema = z.object({
  title: TitleFormSchema.optional(),
  audience: AudienceFormSchema.optional(),
  time: TimeFormSchema.optional(),
  tickets: TicketFormSchema.optional(),
  peoples: PeopleFormSchema.optional(),
});

export type CreateEventForm = z.infer<typeof CreateEventFormSchema>;

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it.each<[number]>([[1], [2], [2.22], [1.22], [1.11]])(
    "should validate two decimal schema for %f",
    (value) => {
      const parse = twoDecimalSchema.safeParse(value);
      expect(parse.success).toBe(true);
    },
  );
  it("should invalidate with negative number", () => {
    const parse = twoDecimalSchema.safeParse(-100);
    expect(parse.success).toBe(false);
  });
}
