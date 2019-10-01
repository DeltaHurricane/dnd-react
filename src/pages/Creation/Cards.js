import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import CurrentCardContext from '../../contexts/currentCardContext';
import DorEffect from '../../components/DorEffect/DorEffect';


const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function CardOrganizer({ currentCard }) {
  return (
    <div>
      { currentCard === 0 && <RaceCard /> }
      { currentCard === 1 && <ClassCard /> }
      { currentCard === 2 && <AtributesCard /> }
      { currentCard === 3 && <TraitsCard /> }
    </div>
  );
}

function RaceCard() {
  return (
    <div>
      <Figurebox description="teste" />
      <Figurebox description="teste" />
      <Figurebox description="teste" />
      <Figurebox description="teste" />
    </div>
  );
}

function ClassCard() {
  return (
    <div>
      <Figurebox description="teste" />
      <Figurebox description="teste" />
      <Figurebox description="teste" />
      <Figurebox description="teste" />
    </div>
  );
}

function Figurebox({ description }) {
  const nextCard = useContext(CurrentCardContext);
  return (
    <div onClick={nextCard} role="button" tabIndex={0}>
      <DorEffect />
    </div>
  );
}

function AtributesCard() {
  const nextCard = useContext(CurrentCardContext);
  return (
    <form className="atributes__form">
      {attributes.map((atribute) => (
        <Input key={atribute} type="number" placeholder={atribute} onChange={(e) => console.log(e.target.value)} />
      )) }
      <button name="next" type="button" onClick={nextCard}>proximo</button>
    </form>
  );
}

function TraitsCard() {
  return (
    <form className="traits__form">
      <Input type="number" placeholder="CA" onChange={(e) => console.log(e.target.value)} />
      <Input type="number" placeholder="HP" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <Input type="text" placeholder="Generico" onChange={(e) => console.log(e.target.value)} />
      <button name="next" type="button" onClick={(e) => console.log(e.target.value)}>proximo</button>
    </form>
  );
}
