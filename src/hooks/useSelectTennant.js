import configByTennant from "../settings";

const useSelectTennant = (tennant = null) => {
  return {
    ...configByTennant['configBase'],
    ...configByTennant[ tennant || process.env.REACT_APP_TENNANT ]
  };
};

export default useSelectTennant;