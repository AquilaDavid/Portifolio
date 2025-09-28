import "./SobreEmpresa.css"; // importa o CSS separado

export default function SobreEmpresa() {
  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <h1>Sobre a DriveGo</h1>
        <p>Inovando o aluguel de veículos desde 2018</p>
      </header>

      <main>
        <section className="card">
          <h2>Nossa História</h2>
          <p>
            A <strong>DriveGo</strong> nasceu em 2018 com o sonho de transformar
            a forma como as pessoas alugam veículos. Criada por três amigos
            apaixonados por tecnologia e mobilidade, a empresa começou em João
            Pessoa - PB com uma frota pequena, mas uma ideia grande: tornar o
            aluguel de carros algo simples, digital e transparente.
          </p>
        </section>

        <section className="card">
          <h2>Linha do Tempo</h2>
          <div className="timeline">
            <div>
              <h3>2018 - O início</h3>
              <p>Fundação da DriveGo com apenas 10 carros disponíveis.</p>
            </div>
            <div>
              <h3>2019 - Crescimento regional</h3>
              <p>
                Expansão para outras cidades da Paraíba e início da plataforma
                online.
              </p>
            </div>
            <div>
              <h3>2021 - Inovação</h3>
              <p>Lançamento do sistema integrado com reservas 100% digitais.</p>
            </div>
            <div>
              <h3>2024 - Referência</h3>
              <p>
                Reconhecimento como uma das startups mais inovadoras de
                mobilidade no Nordeste.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso ao aluguel de veículos, oferecendo praticidade,
            confiança e tecnologia para conectar pessoas às melhores opções de
            mobilidade.
          </p>
        </section>

        <section className="card">
          <h2>Valores</h2>
          <ul>
            <li>Transparência nos preços</li>
            <li>Facilidade no processo de reserva</li>
            <li>Inovação tecnológica</li>
            <li>Compromisso com o cliente</li>
          </ul>
        </section>
      </main>

    </div>
  );
}
