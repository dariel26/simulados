import { Col, Container, Row, Form, Stack } from "react-bootstrap";
import { IQuestao } from "../interfaces";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import localstorage from "../service/localstorage";
import "./questao.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Props {
  questao: IQuestao;
  atualiza: () => void;
}

const indices = ["A", "B", "C", "D", "E", "F", "G"];
const indicesRomanos = ["I", "II", "III", "IV", "V", "VI"];

export default function Questao(props: Props) {
  const [indexSelecionado, setIndexSelecionado] = useState<null | number>();
  const [tentativaFinalizada, setTentativaFinalizada] =
    useState<boolean>(false);

  const { questao, atualiza } = props;
  const questaoCancelada =
    tentativaFinalizada && questao.alternativaCorreta === -1;

  const params = useParams();
  const idSimulado = params.idSimulado;
  const idTentativa = params.idTentativa;

  useEffect(() => {
    if (!idTentativa || !idSimulado) return;

    const tentativas = localstorage.getTentativas(idSimulado);
    const tentativaAtual = tentativas.find(
      (tentativa) => tentativa.id === idTentativa
    );

    if (tentativaAtual) {
      const respostaAtual = tentativaAtual.respostas.find(
        (resposta) => resposta.questaoId === questao.id
      );

      setIndexSelecionado(respostaAtual?.indexSelecionado ?? null);
      setTentativaFinalizada(tentativaAtual.fim ? true : false);
    }
  }, [idSimulado, idTentativa, questao]);

  const handleOnClick = useCallback(
    (index: number) => {
      if (!idTentativa || !idSimulado) return;

      localstorage.atualizaTentativa(idTentativa, idSimulado, {
        questaoId: questao.id,
        indexSelecionado: index,
      });
      setIndexSelecionado(index);
      atualiza();
    },
    [idSimulado, idTentativa, questao, atualiza]
  );

  return (
    <Container
      fluid
      className={`position-relative bg-white border rounded shadow`}
    >
      <Row>
        {questaoCancelada && (
          <Col
            sm="12"
            className="d-flex justify-content-center align-items-center position-absolute w-100 h-100 bg-secondary bg-opacity-50"
          >
            <span className="display-3 text-dark fw-bold">CANCELADA</span>
          </Col>
        )}
        <Col sm="12" className="fw-bold mt-2">
          Questão {questao.numero}
        </Col>
        <Col sm="12" className="mt-2">
          {questao.texto}
        </Col>
        {questao.imagens &&
          questao.imagens.map((imagem) => (
            <Col sm="12" className="mt-2" key={imagem}>
              <Stack className="d-flex w-100 align-items-center">
                <PhotoProvider>
                  <PhotoView src={`/${imagem}.png`}>
                    <img
                      className="my-questao-imagem"
                      src={`/${imagem}.png`}
                      alt={`${imagem}`}
                      role="button"
                    />
                  </PhotoView>
                </PhotoProvider>
                <small className="opacity-75">Clique para visualizar</small>
              </Stack>
            </Col>
          ))}
        {questao.itens && (
          <Col sm="12" className="mt-2">
            <Row>
              {questao.itens.map((item, index) => (
                <Col sm="12" key={index}>
                  <label>
                    <strong>{indicesRomanos[index]}-</strong> {item}
                  </label>
                </Col>
              ))}
            </Row>
          </Col>
        )}
        {questao.itensVF && (
          <Col sm="12" className="mt-2">
            <Row>
              {questao.itensVF.map((item) => (
                <Col sm="12">
                  <label>
                    <strong>{"( ) "}</strong> {item}
                  </label>
                </Col>
              ))}
            </Row>
          </Col>
        )}
        {questao.subTexto && (
          <Col sm="12" className="mt-2">
            {questao.subTexto}
          </Col>
        )}
        <Col className="mt-3 p-4" sm="12">
          <Row>
            <Form className="bg-light pt-1 pb-1 rounded border">
              {questao.alternativas.map((alternativa, index) => (
                <Col
                  key={index}
                  sm="12"
                  className={`${
                    tentativaFinalizada && questao.alternativaCorreta === index
                      ? "text-success"
                      : tentativaFinalizada && indexSelecionado === index
                      ? "text-danger"
                      : tentativaFinalizada
                      ? "opacity-75"
                      : ""
                  }`}
                >
                  <Form.Check
                    role="button"
                    readOnly
                    onClick={() => handleOnClick(index)}
                    checked={indexSelecionado === index}
                    type="radio"
                    id={`questao-${questao.numero}-alternativa-${index}`}
                    label={
                      <label>
                        <strong>{indices[index] + ") "}</strong>
                        {alternativa}
                      </label>
                    }
                    name={questao.id}
                  />
                </Col>
              ))}
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
