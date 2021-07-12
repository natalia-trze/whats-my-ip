import MyMap from "./MyMap";
import Card from 'react-bootstrap/Card';

const CardComponent = ({ fetchedData, countryInfo }) => {
  console.log(countryInfo)
  return (
    <div className="container">
      <Card body><MyMap geoLocation={fetchedData} /></Card>

      <Card.Body> {fetchedData.ip}</Card.Body>
      <Card.Img variant="top" className="mt-4 mb-4" src={countryInfo.flag} />
     
      <Card body>Numeric Code: {countryInfo.numericCode}</Card> 
      <Card body>Country: {countryInfo.name} 
      
      </Card>
      
    </div>
  );
};

export default CardComponent;
