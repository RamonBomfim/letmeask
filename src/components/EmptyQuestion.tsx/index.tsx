import emptyImg from "../../assets/images/empty-questions.svg";
import "./styles.scss";

export function EmptyQuestion() {
  return (
    <div className="empty-question">
      <img src={emptyImg} alt="" />
      <p>Nenhuma pergunta por aqui...</p>
      <span>
        Envie o código desta sala para seus amigos e <br /> comece a responder
        perguntas!
      </span>
    </div>
  );
}