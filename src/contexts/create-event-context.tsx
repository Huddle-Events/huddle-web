import { CreateEventForm } from "@/models/create-event";
import { createContext, useState, ReactNode, useContext } from "react";

interface CreateEventContextProps {
  createEventParams: CreateEventForm;
  setCreateEventParams: React.Dispatch<React.SetStateAction<CreateEventForm>>;
  setFiles: (files: File[]) => void;
  files: File[];
}

export const CreateEventContext = createContext<
  CreateEventContextProps | undefined
>(undefined);

export const CreateEventProvider = ({ children }: { children: ReactNode }) => {
  const [createEventParams, setCreateEventParams] = useState<CreateEventForm>(
    {} as CreateEventForm,
  );
  const [files, setFiles] = useState<File[]>([]);
  return (
    <CreateEventContext.Provider
      value={{
        files,
        createEventParams,
        setCreateEventParams,
        setFiles,
      }}
    >
      {children}
    </CreateEventContext.Provider>
  );
};
export const useCreateEvent = () => {
  const context = useContext(CreateEventContext);
  if (!context) {
    throw new Error("useCreateEvent must be used within a CreateEventProvider");
  }
  return context;
};
