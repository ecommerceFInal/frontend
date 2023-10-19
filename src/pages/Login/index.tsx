import CustomButtonSmall from "../../components/Buttons/ButtonSmall/buttonSmall";
import CustomButton from "../../components/Buttons/buttons";
import CardAnuncio from "../../components/Cards/CardAnuncio/cardAnuncio";
import Footer from "../../components/Footer/footer";
import FormComponent from "../../components/Forms/forms";
import HeaderComponent from "../../components/Header/header";

export const Login = () => {
  const handleFormSubmit = (data: { [key: string]: string }) => {
    console.log(data);
  };

  const handleLoginClick = () => {
    // Lógica para lidar com o clique em "Fazer Login"
    console.log("Clicou em Fazer Login");
  };

  const handleRegisterClick = () => {
    // Lógica para lidar com o clique em "Cadastrar"
    console.log("Clicou em Cadastrar");
  };

  const handleButtonClick = () => {
    console.log("clickou");
  };

  return (
    <>
      <HeaderComponent
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <CustomButton
        backgroundColor="black"
        textColor="#fff"
        onClick={handleButtonClick}
        label="Text Button"
      />
      <CustomButton
        backgroundColor="var(--grey6)"
        textColor="var(--grey0)"
        onClick={handleButtonClick}
        label="Text Button"
      />
      <CustomButton
        backgroundColor="var(--brand1)"
        textColor="var(--whiteFixed)"
        onClick={handleButtonClick}
        label="Text Button"
      />
      <CustomButton
        backgroundColor="var(--alert1)"
        textColor="var(--grey1)"
        onClick={handleButtonClick}
        label="Butão"
      />
      <CustomButtonSmall
        backgroundColor="black"
        textColor="#fff"
        onClick={handleButtonClick}
        label="Text Button"
      />

      <FormComponent
        type="email"
        id="email"
        name="Email"
        onSubmit={handleFormSubmit}
      />
      <ul>
        <CardAnuncio
          carroNome="Mercedes"
          carroDescricao="Lorem Iosynm dfsdasd, ewwasd"
          anuncianteNome="Felipe Martins"
          anuncianteImagemSrc="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          carroImagemSrc="https://cdn.motor1.com/images/mgl/bgmkom/s3/mercedes-amg-cla-45-falando-de-carro.webp"
          carroKm={45000}
          carroAno={2019}
          carroValor={100000}
        />

        <CardAnuncio
          carroNome="Mercedes"
          carroDescricao="Lorem Iosynm dfsdasd, ewwasd"
          anuncianteNome="Felipe Martins"
          anuncianteImagemSrc="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          carroImagemSrc="https://cdn.motor1.com/images/mgl/bgmkom/s3/mercedes-amg-cla-45-falando-de-carro.webp"
          carroKm={45000}
          carroAno={2019}
          carroValor={157000}
        />
      </ul>
      <Footer />
    </>
  );
};
