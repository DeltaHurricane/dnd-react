import React from 'react';
import PropTypes from 'prop-types';
import CurrentCardContext from '../../../../contexts/currentCardContext';
import './FigureBox.scss';
import Door from './Door';

export default function FigureBox({ description, imgSource, onClick }) {
  function onFigureClick(nextState) {
    return () => {
      onClick(description);
      nextState();
    };
  }

  return (
    <CurrentCardContext.Consumer>
      {({ nextState }) => (
        <div className="figure-box" onClick={onFigureClick(nextState)} role="button" tabIndex={0}>
          <Door imgSource={imgSource} position="top" />
          <p className="description">{description}</p>
          <Door imgSource={imgSource} position="bottom" />
        </div>
      )}
    </CurrentCardContext.Consumer>
  );
}

FigureBox.propTypes = {
  imgSource: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
