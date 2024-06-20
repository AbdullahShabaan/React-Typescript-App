import { useNavigate, useParams } from "react-router-dom";
import usePet from "../hooks/usePet";
import { LoaderDetails } from "../components/Loader";
import Carousel from "../components/Carousel";
import { useState, useContext } from "react";
import AdoptPet from "../Contexts/AdoptPet";
import { lazy, Suspense } from "react";
import PetType from "../types/Common";
import { useGetPetQuery } from "../services/Pets";

const Modal = lazy(() => import("../components/Modal"));

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    throw new Error("There is no ID!");
  }
  const petQuery = useGetPetQuery(+id);
  const [modalState, setModalState] = useState(false);
  const pet = petQuery?.data?.pets[0] as PetType;
  const [, setContextValue] = useContext(AdoptPet);

  return (
    <div className="details" style={{ textAlign: "center" }}>
      {!petQuery.data && <LoaderDetails />}
      {petQuery.isError && <span>{petQuery.error.message}</span>}
      {petQuery.data && (
        <div>
          <h2 style={{ fontSize: "40px" }}>Name: {pet.name}</h2>
          <Carousel images={pet.images} />
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button onClick={() => setModalState(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          {modalState && (
            <Suspense fallback={<h2>Loading</h2>}>
              <Modal>
                <div>
                  <h2>Are you sure to adopt {pet.name}?</h2>
                  <div className="buttons">
                    <button
                      onClick={() => {
                        setContextValue(pet);
                        navigate(-1);
                      }}
                    >
                      Yes
                    </button>
                    <button onClick={() => setModalState(false)}>No</button>
                  </div>
                </div>
              </Modal>
            </Suspense>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
