type Props = {
  title: string;
  description: string;
};

export const CreateEventTitle = ({ description, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className={"text-3xl font-semibold"}>{title}</h2>
      <p className="text-iconMuted font-normal text-gray-800">{description}</p>
    </div>
  );
};
