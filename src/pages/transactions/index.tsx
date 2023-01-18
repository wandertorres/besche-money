import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header /> 
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Site</td>
              <td>
                <PriceHighLight variant="income">R$ 10.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/12/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td>
                <PriceHighLight variant="outcome">R$ -600,00</PriceHighLight>
              </td>
              <td>Moradia</td>
              <td>13/12/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}