import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      currencys: [],
    };
  }

  render() {
    const { currencys } = this.state;
    return (
      <form>
        <label htmlFor="valorDespesa">
          Valor:
          <input
            type="valorDespesa"
            id="valorDespesa"
            name="valorDespesa"
            data-testid="value-input"
          />
        </label>

        <label htmlFor="descriçãoDespesa">
          Descrição:
          <input
            type="descriçãoDespesa"
            id="descriçãoDespesa"
            name="descriçãoDespesa"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currencys">
          Moeda:
          <select data-testid="currency-input" id="currencys">
            {
              currencys.map((currency) => currency !== 'USDT'
                && (
                  <option
                    key={ currency }
                    data-testid={ currency }
                  >
                    { currency }
                  </option>
                ))
            }
          </select>
        </label>

        <label htmlFor="metodoPagamento">
          Forma de Pagamento
          <select data-testid="method-input" name="metodoPagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tagDespesa">
          Categoria
          <select data-testid="tag-input" name="tagDespesa">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
