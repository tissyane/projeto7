import Suggestions from "./Suggestions";

export default function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <div class="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div class="texto">
            <strong>catanacomics</strong>
            Catana
          </div>
        </div>

        <Suggestions />

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}
