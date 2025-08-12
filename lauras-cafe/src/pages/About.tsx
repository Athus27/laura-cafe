import { Col, Row, Container } from "react-bootstrap";
import "../components/components-style.css";

//
// OS IMPORTS DAS IMAGENS FORAM REMOVIDOS DAQUI
//

function About() {
  return (
    <Container id="about" fluid className="bg-light min-vh-100">
      <Container className="py-5">
        <Row className="align-items-center mb-5 g-4">
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <img
              // CAMINHO CORRIGIDO:
              src="/assets/fachadaGrande.png"
              className="img-fluid rounded shadow"
              alt="fachada grande"
              style={{ maxHeight: "500px" }}
            />
          </Col>
          <Col md={7} className="d-flex flex-column justify-content-center">
            <div className="preparo-title">
              <h1 className="playfair-display-bold">Sobre Nós</h1>
            </div>
            <p className="preparo-description lato-regular">
              Nossa história começou com a paixão de Laura por cafés especiais...
            </p>
            <p className="preparo-description lato-regular">
              Nosso espaço foi pensado para ser uma extensão da sua casa...
            </p>
          </Col>
        </Row>

        <section id="preparo" className="mb-5">
        <div className="preparo-title-sm">
          <h2 className="playfair-display-bold">Nossos Métodos</h2>
        </div>
          <p className="preparo-description lato-regular">
            Acreditamos que um bom café vai muito além do sabor...
          </p>
          <Row className="justify-content-center g-4">
            {/* Espresso Clássico*/}
            <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
              <img
                // CAMINHO CORRIGIDO:
                src="/assets/espressoClassico.png.png"
                className="preparo-img img-fluid mb-2"
                alt="Espresso icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Espresso Clássico</h3>
              <p className="preparo-item-description text-center lato-regular">
                O clássico italiano, base para muitas de nossas bebidas...
              </p>
            </Col>
            {/* Prensa Francesa*/}
            <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
              <img
                // CAMINHO CORRIGIDO:
                src="/assets/prensaFrancesa.png.png"
                className="preparo-img img-fluid mb-2"
                alt="Prensa Francesa icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Prensa Francesa</h3>
              <p className="preparo-item-description text-center lato-regular">
                Um método que resulta em um café encorpado e rico em óleos...
              </p>
            </Col>
            {/* Hario V60*/}
            <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
              <img
                // CAMINHO CORRIGIDO:
                src="/assets/hariov60.png.png"
                className="preparo-img img-fluid mb-2"
                alt="Hario V60 icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Hario V60</h3>
              <p className="preparo-item-description text-center lato-regular">
                Para os amantes de um café mais limpo e suave...
              </p>
            </Col>
            {/* Aeropress*/}
            <Col xs={12} sm={6} md={3} className="d-flex flex-column align-items-center">
              <img
                // CAMINHO CORRIGIDO:
                src="/assets/aeropress.png.png"
                className="preparo-img img-fluid mb-2"
                alt="Aeropress icon"
                style={{ height: "200px" }}
              />
              <h3 className="preparo-item-title playfair-display-regular">Aeropress</h3>
              <p className="preparo-item-description text-center lato-regular">
                Versátil e rápido, produz um café com baixa acidez...
              </p>
            </Col>
          </Row>
        </section>
      </Container>
    </Container>
  );
}

export default About;