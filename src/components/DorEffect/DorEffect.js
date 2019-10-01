import React from 'react';
import imaadas from '../../assets/teste.jpg';

export default function DorEffect({ description, imgSource }) {
  return (
    <>
      <UpperDor figureSource={imgSource} />
      <p>{description}</p>
      <LowerDor imgSource={imgSource} />
    </>
  );
}
function UpperDor({ imgSource }) {
  return (
    <div className="dor dor--upper">
      <img className="figure figure--upper" src={imgSource} alt="Smiley face" />
    </div>
  );
}

function LowerDor({ imgSource }) {
  return (
    <div className="dor dor--lower">
      <img className="figure figure--lower" src={imgSource} alt="Smiley face" />
    </div>
  );
}
