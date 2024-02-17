import { ContainerStyled } from '../components/Container';
import { Dashboard } from '../components/Dashboard';
import { Faq } from '../components/Faq';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Mobile } from '../components/Mobile';
import { Recipes } from '../components/Recipes';

export function Main() {
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
