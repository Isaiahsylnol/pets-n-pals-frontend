import axios from "axios";
import dogHealth from "../mock_data/articles.json";
const API_URL = "https://api.thedogapi.com/v1/breeds";
const getDogBreeds = async () => {
  return await axios.get(API_URL);
};

const curatedPetFeed = (pets) => {
  let result;
  if (pets?.length >= 1) {
    result = dogHealth.filter((o1) =>
      pets?.some((o2) => o1.breed === o2.breed || o1.breed === "Any")
    );
  } else {
    result = dogHealth.filter((o1) => o1.breed === "Any");
  }
  return result;
};

const deletePet = async (props) => {
  return await axios.delete(
    `process.env.REACT_PUBLIC_BACKEND/pets/${props.id}`,
    {
      data: props,
    }
  );
};

const findPetByName = async (props) => {
  return await axios.post(
    `process.env.REACT_PUBLIC_BACKEND/pets/${props.userId}`,
    {
      props,
    }
  );
};

const PetService = {
  getDogBreeds,
  curatedPetFeed,
  deletePet,
  findPetByName,
};

export default PetService;
