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

export const CreateEventFormSchema = z.object({
  title: TitleFormSchema.optional(),
  audience: AudienceFormSchema.optional(),
  time: TimeFormSchema.optional(),
});

export type CreateEventForm = z.infer<typeof CreateEventFormSchema>;
