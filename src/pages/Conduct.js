import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FolderGreen from "../assets/images/conduct.svg";
import { Main } from "../assets/styles/typography";

import {
  Section,
  Content,
  ContentTerms,
  Titles,
  Box,
  BoxTerms,
  Ilustration,
  Description,
} from "../assets/styles/pages/Terms";

function Conduct() {
  return (
    <>
      <Main>
        <Header />
        <Section>
          <Content>
            <Ilustration src={FolderGreen} />
            <Box>
              <Titles>{`Código`}</Titles>
              <Titles>{`de conduta`}</Titles>
            </Box>
          </Content>
          <ContentTerms>
            <BoxTerms>
              <Description>
              No Twittech, valorizamos todos os nossos mentores, mentorados e colaboradores. Nosso objetivo é tornar este um espaço seguro onde desenvolvedores novos e experientes possam se conectar e aprender uns com os outros. Portanto, não toleramos qualquer forma de assédio ou preconceito. Este Código de Conduta se aplica a todos os espaços do Twittech, incluindo, mas não se limitando a, acesso, divulgação, correspondência por e-mail e mídia social. <br /><br/> O assédio inclui, mas não está limitado a:<br /><br/> - Comentários ofensivos relacionados a gênero, identidade e expressão de gênero, orientação sexual, deficiência, doença mental, aparência física, tamanho do corpo, idade, raça ou religião.<br /><br/> - Adulteração deliberada de gênero ou uso de nomes "mortos" ou rejeitados.<br /><br/> - Contato físico e contato físico simulado (por exemplo, descrições textuais como “abraço” ou “beijo”) sem consentimento ou após um pedido para parar.<br /><br/> - Ameaças de violência.<br /><br/> - Incitação à violência contra qualquer indivíduo, incluindo o incentivo ao suicídio ou à auto-agressão.<br /><br/> - Intimidação deliberada.<br /><br/> - Perseguindo ou seguindo.<br /><br/> - Fotografia ou gravação de assédio, incluindo registro de atividades online para fins de assédio.<br /><br/> - Atenção sexual indesejada, como imagens sexuais ou comportamento em espaços onde não são apropriados.<br /><br/> - Padrão de contato social inadequado, como solicitar / assumir níveis inadequados de intimidade com outras pessoas.<br /><br/> - Comunicação individual continuada após solicitações de cessação.<br /><br/> - Deliberar "revelação" de qualquer aspecto da identidade de uma pessoa sem o seu consentimento, exceto quando necessário para proteger as pessoas vulneráveis ​​de abuso intencional.<br /><br/> - Publicação de comunicação privada sem assédio.<br /><br/><br /><br /> Valorizamos a integridade aqui no Twittech. Como tal, os mentorados não podem pedir soluções para entrevistas técnicas que levam para casa as avaliações. Temos o prazer de orientar você no processo de resolução de questões difíceis, mas não forneceremos soluções para suas avaliações, pois elas devem refletir seu conjunto de habilidades pessoais.<br /><br/> Os membros que violarem este código de conduta serão abordados por alguém da equipe de liderança do Twittech e solicitados a parar imediatamente. Os membros também podem ser banidos do Twittech, bloqueados nas redes sociais e removidos do site.<br /><br/> Se alguém fizer você ou qualquer outra pessoa se sentir insegura ou indesejável, informe o mais rápido possível. Para relatar um incidente de assédio, anonimamente ou não, preencha nosso formulário de denúncia.<br /><br/> Nosso objetivo principal é apoiá-lo. Vamos ouvi-lo e ajudá-lo a determinar um curso de ação com base na situação. Embora o assédio nem sempre resulte na expulsão do membro do grupo, dependendo do tipo e da gravidade do assédio. Queremos ter certeza de que você terá todo o suporte de que precisa, independentemente do que isso acarrete, incluindo se você deve permanecer anônimo ou não. Seja qual for sua decisão, nossa prioridade é sua segurança.
              </Description>
            </BoxTerms>
          </ContentTerms>
        </Section>
        <Footer />
      </Main>
    </>
  );
}

export default Conduct;