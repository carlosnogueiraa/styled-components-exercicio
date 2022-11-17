import {MeuCardVideo} from "./styled"

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <MeuCardVideo onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </MeuCardVideo>
  );
}

export default CardVideo;
