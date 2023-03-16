/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Header({ hasError, quantityOfContacts, quantityOfFilteredContacts }) {
  const aligment = hasError
    ? 'flex-end'
    : (
      quantityOfContacts > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container justifyContent={aligment}>
      {(!hasError && quantityOfContacts > 0) && (
        <strong>
          {quantityOfFilteredContacts}
          {quantityOfFilteredContacts === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  quantityOfContacts: PropTypes.number.isRequired,
  quantityOfFilteredContacts: PropTypes.number.isRequired,
};
