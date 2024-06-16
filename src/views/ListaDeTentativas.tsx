import { Button, Col, Container, Row } from "react-bootstrap";
import { Tentativa } from "../components";
import { useCallback, useEffect, useState } from "react";
import localstorage from "../service/localstorage";
import { ITentativa } from "../interfaces";
import { useNavigate, useParams } from "react-router-dom";

export default function ListaDeTentativas() {
  const [tentativas, setTentativas] = useState<ITentativa[]>([]);

  const navigate = useNavigate();
  const params = useParams();
  const idSimulado = params.idSimulado;

  useEffect(() => {
    if (!idSimulado) return;
    const tentativas = localstorage.getTentativas(idSimulado);
    setTentativas(tentativas);
    return () => {};
  }, [idSimulado]);

  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleClickTry = useCallback(() => {
    if (!idSimulado) return;

    const idTentativa = localstorage.crearTentativa(idSimulado);
    navigate(`/tentativa/${idTentativa}/simulado/${idSimulado}`);
  }, [navigate, idSimulado]);

  return (
    <Container fluid>
      <Row>
        <Col
          sm="12"
          className="border-bottom pt-1 pb-1 position-sticky sticky-top bg-primary"
        >
          <div className="d-flex align-items-center user-select-none">
            <label
              className="text-primary me-4 fs-4 my-clicavel-item"
              onClick={handleClickBack}
              role="button"
            >
              <i className="bi bi-arrow-left-circle-fill text-secondary"></i>
            </label>
            <span className="fs-4 fw-bold text-dark">Tentativas</span>
          </div>
        </Col>
        <Col sm="12">
          <Row className="gap-2 pt-3">
            {tentativas.map((tentativa, index) => (
              <Col key={index} sm="12" className="my-clicavel-item bg-white user-select-none">
                <Tentativa tentativa={tentativa} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="position-fixed bottom-0 text-end mb-2">
          <Button onClick={handleClickTry} variant="primary">
            Tentar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
