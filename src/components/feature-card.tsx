
interface FeatureCardProps {
    title: string;
    description: string;
    image: string
}

export const FeatureCard = ({
  title,
  description,
  image,
}: FeatureCardProps) => {
  return (
    <div>
      <img src={image} alt={title} className="" width={"100%"} />
      <h1 className="text-xl mt-8 montserrat font-bold text-center uppercase mb-5 card-title">
        {title}
      </h1>
      <p className="text-center montserrat">{description}</p>
    </div>
  );
};