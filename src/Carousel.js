import { Carousel } from "react-bootstrap";
import MyMap from "./MyMap";

const CarouselComponent = ({fetchedData, countryInfo}) => {
  return (
    <Carousel style={{width: "80%", height: "40%"}} className="car-container">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://cdn.crispedge.com/43464b.png"
          alt="Card "
        />
        <Carousel.Caption>
          <MyMap geoLocation={fetchedData} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.crispedge.com/43464b.png"
          alt="second slide"
        />
        <Carousel.Caption>
          <h3> {fetchedData.ip}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.crispedge.com/43464b.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <img src={countryInfo.flag} style={{height: "100px", width: "200px"}} alt="flag-of-the-country"/>
          <h3>Country: {countryInfo.name}</h3>
          <h3>Numeric Code: {countryInfo.numericCode} </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
