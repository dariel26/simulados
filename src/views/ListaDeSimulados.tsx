import { Col, Container, Row } from "react-bootstrap";
import { Simulado } from "../components";
import { useEffect, useState } from "react";
import localstorage from "../service/localstorage";
import { ISimulado } from "../interfaces";

export default function ListaDeSimulados() {
  const [simulados, setSimulados] = useState<ISimulado[]>([]);

  useEffect(() => {
    const simulados = localstorage.getSimulados();
    setSimulados(simulados);
    return () => {};
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="pt-1 pb-1 position-sticky sticky-top bg-primary">
          <span className="fs-4 fw-bold text-dark user-select-none">Simulados</span>
        </Col>
        <Col sm="12">
          <Row className="gap-2 pt-3">
            {simulados.map((simulado) => (
              <Col sm="12" className="my-clicavel-item bg-white">
                <Simulado simulado={simulado} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
