import ControlsStyled from './ControlsStyled';

const Controls = ({ active, setActive }) => {
  return (
    <ControlsStyled onClick={() => setActive(!active)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18" width="12" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M11 1L3 9l8 8"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 18" width="13" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M2 1l8 8-8 8"/></svg>
    </ControlsStyled>
  )
}

export default Controls;