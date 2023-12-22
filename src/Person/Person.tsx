import React from 'react';

interface NumberBallProps {
  number: number;
}

const Numbers: React.FC<NumberBallProps> = ({number}) => {
  return (
    <div className='number'>
      {number}
    </div>
  );
};
export default Numbers;