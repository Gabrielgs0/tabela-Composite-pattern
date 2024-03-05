# Tabela pattern composition

O projeto **Tabela pattern composition** é uma aplicação React que oferece uma interface de usuário para visualizar e interagir com uma tabela de dados de carros. Ele inclui versões para desktop e mobile para garantir um design responsivo.

## Componente de Tabela

### Versão Desktop

A versão desktop da tabela é implementada no componente `Table`. Ele exibe informações sobre carros, como nome, próxima data de reserva, status e avaliação. Cada linha possui um botão para acionar um menu suspenso com opções adicionais. Os usuários também podem clicar na imagem de um carro para expandi-la e marcá-la como selecionada.

#### Dependências

- React
- Next.js
- TypeScript
- Vercel
- node 18.17.0 ou superior
- react-rating-stars-component
- Font Awesome

#### Uso

```jsx
import Table from '../components/table/Table'

export default function Home() {
  return (
    <main className="container-fluid mx-auto px-4 pt-4 grid gap-4">
      <Table />
    </main>
  );
}
````
## Versão Mobile

A versão mobile da tabela é implementada no componente `MobileTableItem`. Ele apresenta uma visualização simplificada dos dados do carro, permitindo que os usuários vejam a imagem do carro, nome, próxima data de reserva e avaliação. O menu suspenso com opções adicionais é acessível por meio de um botão.

#### Uso

```jsx
import MobileTableItem from '../components/table/TableMobile'

// Dentro do seu componente
{TableData.map((item, index) => (
  <MobileTableItem key={index} item={item} index={undefined} />
))}
````
## Dados

Os dados de exemplo para a tabela estão armazenados no módulo `TableData`. Isso inclui informações como imagens de carros, nomes, próximas datas de reserva, status, avaliações e ações.

#### Uso

```jsx
import CarImage from '../../../public/assets/img/mini-cooper.jpg';
import TableData from '../../components/data/data';

// Exemplo de uso dos dados
const firstCar = TableData[0];
console.log(firstCar.name); // Mini Cooper 2020
````

## Como Começar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute a aplicação com `npm run dev`.
