import styled from 'styled-components'

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['gray-700']};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`
