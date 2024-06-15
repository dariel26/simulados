import { Col, Container, Row, Form } from "react-bootstrap";
import { IQuestao } from "../interfaces";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import localstorage from "../service/localstorage";
import "./questao.css";
interface Props {
  questao: IQuestao;
}

const indices = ["A", "B", "C", "D", "E", "F", "G"];
const indicesRomanos = ["I", "II", "III", "IV", "V", "VI"];

export default function Questao(props: Props) {
  const [indexSelecionado, setIndexSelecionado] = useState<null | number>();
  const [tentativaFinalizada, setTentativaFinalizada] =
    useState<boolean>(false);

  const { questao } = props;

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
    },
    [idSimulado, idTentativa, questao]
  );

  return (
    <Container fluid className="border rounded shadow pt-2 pb-2">
      <Row>
        <Col sm="12" className="fw-bold">
          Questão {questao.numero}
        </Col>
        <Col sm="12" className="mt-2">
          {questao.texto}
        </Col>
        {questao.imagens && questao.imagens.map((imagem) => <Col sm="12" className="mt-2">
        <img className="my-questao-imagem" src={`/${imagem}.png`} alt={`${imagem}`}/>
        </Col>)}
        {questao.itens && (
          <Col sm="12" className="mt-2">
            <Row>
              {questao.itens.map((item, index) => (
                <Col sm="12">
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
        <Col className="mt-3" sm="12">
          <Row>
            <Form>
              {questao.alternativas.map((alternativa, index) => (
                <Col
                  sm="12"
                  className={`${
                    tentativaFinalizada && questao.alternativaCorreta === index
                      ? "text-success"
                      : tentativaFinalizada && indexSelecionado === index
                      ? "text-danger"
                      : ""
                  }`}
                >
                  <Form.Check
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
