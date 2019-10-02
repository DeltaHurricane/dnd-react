import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import CurrentCardContext from '../../contexts/currentCardContext';
import FigureBox from '../../components/FigureBox/FigureBox';
import './Cards.scss';

import {
  kobold, human, halfOrc, d20, dwarf, elf,
} from '../../assets';

const attributes = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

export default function CardOrganizer({ currentCard }) {
  return (
    <div>
      <RaceCard currentCard={currentCard} />
      <ClassCard currentCard={currentCard} />
      <AtributesCard currentCard={currentCard} />
      <TraitsCard currentCard={currentCard} />
    </div>
  );
}

CardOrganizer.propTypes = {
  currentCard: PropTypes.number.isRequired,
};

function RaceCard({ currentCard }) {
  const show = `card${currentCard !== 0 ? ' fadeaway' : ''}`;
  return (
    <div className={show}>
      <FigureBox description="teste" imgSource={dwarf} />
      <FigureBox description="teste" imgSource={human} />
      <FigureBox description="teste" imgSource={halfOrc} />
      <FigureBox description="teste" imgSource={elf} />
    </div>
  );
}

function ClassCard({ currentCard }) {
  const show = `card ${currentCard !== 1 && 'fadeaway'}`;
  return (
    <div className={show}>
      <FigureBox description="teste" imgSource={kobold} />
      <FigureBox description="teste" imgSource={human} />
      <FigureBox description="teste" imgSource={d20} />
      <FigureBox description="teste" imgSource={elf} />
    </div>
  );
}


function AtributesCard({ currentCard }) {
  const show = `card ${currentCard !== 2 && 'fadeaway'}`;
  const nextCard = useContext(CurrentCardContext);
  return (
    <form className={show}>
      {attributes.map((atribute) => (
        <Input key={atribute} type="number" placeholder={atribute} onChange={(e) => console.log(e.target.value)} />
      )) }
      <button name="next" type="button" onClick={nextCard}>proximo</button>
    </form>
  );
}

function TraitsCard({ currentCard }) {
  const show = `card ${currentCard !== 3 && 'fadeaway'}`;
  return (
    <form className={show}>
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
