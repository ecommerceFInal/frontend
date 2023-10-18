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
  const formattedCarroValor = carroValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
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
          <div className="tags-span">
            <span className="span-km">{carroKm} KM</span>
            <span>{carroAno}</span>
          </div>
          <p>{formattedCarroValor}</p>
        </div>
      </div>
    </CardAnuncioStyled>
  );
};

export default CardAnuncio;
