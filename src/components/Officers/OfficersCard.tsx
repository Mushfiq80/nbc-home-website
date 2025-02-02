

interface Officer {
  image: string;
  name: string;
  position: string;
}

const OfficersCard = ({ officer }: { officer: Officer }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src={officer.image}
          alt={officer.name}
          className="rounded-xl w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{officer.name}</h2>
        <p>{officer.position}</p>
      </div>
    </div>
  );
};

export default OfficersCard;