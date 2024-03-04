import { Card } from "react-bootstrap";

const CardPoke = ({ nombre }) => {
  const { name, stats, src, types } = nombre;
  return (
    <>
      <div className="cards">
        <Card>
          <Card.Img className="detail-pokemon" src={src} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <ul className="ul-card">
              <Card.Text>
                {stats?.map((stat, i) => (
                  <li key={i}>
                    {stat.name}: {stat.base}
                  </li>
                ))}
              </Card.Text>
            </ul>
            <Card.Text>{types}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardPoke;
