import Loader from "./Loader";
import Pet from "./Pet";
import Common from "../types/Common";

type props = {
  pets: Common[];
};

const Results = ({ pets }: props) => {
  return (
    <div className="search">
      {!pets.length && (
        <div style={{ textAlign: "center" }}>
          <Loader />
        </div>
      )}
      {pets &&
        pets.map((e) => {
          return (
            <Pet
              name={e.name}
              animal={e.animal}
              key={e.id}
              breed={e.breed}
              images={e.images}
              location={e.city}
              id={e.id}
            />
          );
        })}
    </div>
  );
};

export default Results;
