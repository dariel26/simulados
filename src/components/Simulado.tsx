import { Col, Container, Row } from "react-bootstrap";
import { ISimulado } from "../interfaces";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  simulado: ISimulado;
}
export default function Simulado(props: Props) {
  const { simulado } = props;

  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate("simulado/" + simulado.id);
  }, [simulado, navigate]);

  return (
    <Container fluid onClick={handleOnClick} role="button">
      <Row className="border rounded shadow-sm">
        <Col sm="12" className="fw-bold">
          {simulado.nome}
        </Col>
        <Col sm="12">Tentativas: {simulado.tentativas}</Col>
      </Row>
    </Container>
  );
}
