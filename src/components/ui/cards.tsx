interface Props {
    title: string;
    description: string;
    image: string;
}

export const EnergyCard = ({ title, description, image }: Props) => {
  return (
    <div className="py-5">
      <div className="flex justify-center">
        <img src={image} alt={title} />
      </div>
      <div className="px-4">
        <h1 className="text-sm mt-5 text-center montserrat">{title}</h1>
        <p className="text-[12px] mt-2 text-center text-muted-foreground montserrat">
          {description}
        </p>
      </div>
    </div>
  );
};

interface ProjectCardProps {
    title: string;
    location: string;
    image: string;
}

export const ProjectCards = ({ title, location, image }: ProjectCardProps) => {
  return (
    <div className="pb-5 bg-white w-full card-animation">
      <div className="flex justify-center">
        <img src={image} alt={title} width={"100%"} />
      </div>
      <div className="px-4">
        <h1 className="text-xl font-bold mt-5 text-center montserrat">
          {title}
        </h1>
        <p className="mt-2 text-[13px] text-center  montserrat">{location}</p>
      </div>
    </div>
  );
};


export const NewCard = ({ title, description, image }: Props) => {
  return (
    <div className="border border-gray-200 w-full card-animation relative">
      <span className="absolute top-0 left-0 bg-primary-blue text-white px-4 py-1 text-sm montserrat text-center">
        <p className="text-lg">28</p>
        Aug
      </span>
      <div className="flex justify-center">
        <img src={image} alt={title} width={"100%"} />
      </div>
      <div className="px-4">
        <h1 className="text-xl font-bold mt-5 montserrat  heading-line">
          {title}
        </h1>
        <p className="mt-2 text-[13px] montserrat">{description}</p>
        <div className="flex justify-end">
          <p className="text-primary-blue mt-5 mb-3 text-md font-bold montserrat cursor-pointer">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};