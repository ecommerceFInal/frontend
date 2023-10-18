import { CardAnuncioStyled } from "./styled";

interface CardAnuncioProps {
  carroNome: string;
  carroDescricao: string;
  anuncianteNome: string;
  anuncianteImagemSrc: string;
  carroImagemSrc: string;
  carroKm: number;
  carroAno: number;
  carroValor: number;
}

const CardAnuncio: React.FC<CardAnuncioProps> = ({
  carroNome,
  carroDescricao,
  anuncianteNome,
  anuncianteImagemSrc,
  carroImagemSrc,
  carroKm,
  carroAno,
  carroValor,
}) => {
  return (
    <CardAnuncioStyled className="card-anuncio">
      <img src={carroImagemSrc} alt={carroNome} />
      <h2>{carroNome}</h2>
      <p>{carroDescricao}</p>
      <div className="anunciante-info">
        <img src={anuncianteImagemSrc} alt={anuncianteNome} />
        <p>{anuncianteNome}</p>
      </div>
      <div className="carro-info">
        <div className="carro-tags">
          <span>{carroKm}</span>
          <span>{carroAno}</span>
          <p>R$ {carroValor}</p>
        </div>
      </div>
    </CardAnuncioStyled>
  );
};

export default CardAnuncio;
