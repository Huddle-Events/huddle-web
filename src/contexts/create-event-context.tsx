import { TitleForm } from "@/models/create-event";
import { createContext, useState, ReactNode, useContext } from "react";

interface CreateEventContextProps {
  title: TitleForm | undefined;
  setTitle: (title: TitleForm) => void;
  setFiles: (files: File[]) => void;
  files: File[];
}

export const CreateEventContext = createContext<
  CreateEventContextProps | undefined
>(undefined);

export const CreateEventProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<TitleForm | undefined>(undefined);
  const [files, setFiles] = useState<File[]>([]);
  return (
    <CreateEventContext.Provider value={{ files, title, setFiles, setTitle }}>
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
