import React from 'react';
import FigureBox from './FigureBox';
import CharacterContext from '../../../contexts/characterContext';
import {
  human, kobold, d20, elf,
} from '../assets';


export default function ClassCard() {
  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <div className="card" title="ClassCard">
          <FigureBox description="kobold" imgSource={kobold} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={human} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={d20} onClick={character.updateClass} />
          <FigureBox description="teste" imgSource={elf} onClick={character.updateClass} />
        </div>
      )}
    </CharacterContext.Consumer>
  );
}
