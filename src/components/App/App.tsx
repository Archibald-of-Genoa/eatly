import { ContainerStyled } from '../Container';
import { Dashboard } from '../Dashboard';
import { Faq } from '../Faq';
import { Features } from '../Features';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Hero } from '../Hero';
import { Mobile } from '../Mobile';
import { Recipes } from '../Recipes';

export function App() {
  return (
   <>
    <ContainerStyled>
      <Header />
      <Hero />
    </ContainerStyled>

    <Features />

    <ContainerStyled>
      <Mobile />
      <Recipes />
      <Dashboard />
      <Faq />
    </ContainerStyled>

    <Footer />
   </>
  );
}
