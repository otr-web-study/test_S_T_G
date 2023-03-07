import './Characters.css';
import Header from '../../components/Header';
import CharactersContent from '../../components/CharactersContent';
import ErrorBoundary from '../../components/error-boundary/error-boundary';

const Characters = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <CharactersContent />
      </ErrorBoundary>
    </>
  );
}

export default Characters;