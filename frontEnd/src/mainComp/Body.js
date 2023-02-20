import Anonce from "./Anonce"
import Formations from "./Formations";

const Body = () => {
  return (
      <div className="container mt-5">
          <div className="row pt-4">
              <Anonce />
              <Formations />
          </div>
      </div>
  );
}

export default Body