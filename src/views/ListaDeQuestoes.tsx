import { Button, Col, Container, Row } from "react-bootstrap";
import { Questao } from "../components";
import { useCallback, useEffect, useState } from "react";
import localstorage from "../service/localstorage";
import { IQuestao } from "../interfaces";
import { useNavigate, useParams } from "react-router-dom";

export default function ListaDeQuestoes() {
  const [questoes, setQuestoes] = useState<IQuestao[]>([]);

  const navigate = useNavigate();
  const params = useParams();
  const idSimulado = params.idSimulado;
  const idTentativa = params.idTentativa;

  useEffect(() => {
    if (!idSimulado) return;
    const tentativas = localstorage.getQuestoes(idSimulado);
    setQuestoes(tentativas);
    return () => {};
  }, [idSimulado]);

  const handleClickEnd = useCallback(() => {
    if (!idSimulado || !idTentativa) return;

    const pontuacao = localstorage.finalizarTentativa(idTentativa, idSimulado);
    if (pontuacao === -1) return;
    else navigate(-1);
  }, [idSimulado, idTentativa, navigate]);

  const handleClickBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container fluid>
      <Row>
        <Col
          sm="12"
          className="border-bottom pt-1 pb-1 position-sticky sticky-top bg-primary"
        >
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <label
                className="text-secondary me-4 fs-4 my-clicavel-item"
                onClick={handleClickBack}
                role="button"
              >
                <i className="bi bi-arrow-left-circle-fill"></i>
              </label>
              <span className="fs-4 fw-bold">Questões</span>
            </div>{" "}
          </div>
        </Col>
        <Col sm="12" className="mb-4">
          <Row className="gap-4 pt-3">
            {questoes.map((questao) => (
              <Col sm="12">
                <Questao questao={questao} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="position-fixed bottom-0 text-end mb-2">
          <Button onClick={handleClickEnd} variant="primary">
            Finalizar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
