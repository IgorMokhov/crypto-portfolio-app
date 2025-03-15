import { Header } from './components/Header/Header';
import { Container } from './UI/Container/Container';
import './App.scss';
import { Portfolio } from './components/Portfolio/Portfolio';

export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <Portfolio />
      </main>
    </Container>
  );
};
