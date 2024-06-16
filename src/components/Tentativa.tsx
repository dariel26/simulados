import { Col, Container, Row } from "react-bootstrap";
import { ITentativa } from "../interfaces";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  tentativa: ITentativa;
}

export default function Tentativa(props: Props) {
  const { tentativa } = props;

  const navigate = useNavigate();
  const params = useParams();
  const idSimulado = params.idSimulado;

  const handleOnClick = useCallback(() => {
    navigate(`/tentativa/${tentativa.id}/simulado/${idSimulado}`);
  }, [navigate, tentativa, idSimulado]);

  return (
    <Container
      fluid
      className="border shadow rounded pt-1 pb-1"
      role="button"
      onClick={handleOnClick}
    >
      <Row>
        <Col sm="12" className="fw-bold">
          #{tentativa.id}
        </Col>
        <Col sm="12">
          Início:{" "}
          {new Date(tentativa.inicio).toLocaleDateString("pt-Br", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Col>
        <Col sm="12">
          Fim:{" "}
          {tentativa.fim
            ? new Date(tentativa.fim).toLocaleDateString("pt-Br", {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "--- Não finalizada ---"}
        </Col>
        <Col sm="12">
          Pontuação:{" "}
          {tentativa.pontuacao
            ? tentativa.pontuacao.toFixed(2)
            : "--- Você precisa finalizar esta tentativa para receber uma pontuação ---"}
        </Col>
        {tentativa.fim && (
          <Col sm="12">
            Tempo médio por questão respondida:{" "}
            {(
              (new Date(tentativa.fim).getTime() -
                new Date(tentativa.inicio).getTime()) /
              (1000 * 60 * tentativa.respostas.length)
            ).toFixed(2)}{" "}
            min
          </Col>
        )}
      </Row>
    </Container>
  );
}
