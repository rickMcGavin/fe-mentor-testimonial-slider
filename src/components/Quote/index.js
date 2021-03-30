import { animated, useSpring, interpolate } from 'react-spring';
import QuoteStyled from './QuoteStyled';

const Quote = ({ active }) => {

  const { x, altX } = useSpring({
    x: active ? 327 : 0,
    altX: active ? 0 : 327
  });

  return (
    <QuoteStyled>
      <animated.div
        className="quote tanya"
        style={{
          transform: interpolate([x], (x) => `translateX(-${x}px)`)
        }}
      >
        <p>“ I’ve been interested in coding for a while but never taken the jump, until now. 
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
      excited about the future. ”
        </p>
        <div className="attribution">
          <div className="name">Tanya Sinclair</div>
          <div className="title">UX Engineer</div>
        </div>
      </animated.div>
      <animated.div
        className="quote john"
        style={{
          transform: interpolate([altX], (altX) => `translateX(${altX}px)`)
        }}
      >
        <p>“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”
        </p>
        <div className="attribution">
          <div className="name">John Tarkpor</div>
          <div className="title">Junior Front-end Developer</div>
        </div>
      </animated.div>
    </QuoteStyled>
  );
};

export default Quote;
