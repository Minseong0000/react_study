// import 'minireset.css';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Com1_props from './components/Com1_props';
import Com2_props from './components/Com2_props';
import Com3_event from './components/Com3_event';
import Com4_state1 from './components/Com4_state1';
import Com5_state2 from './components/Com5_state2';
import Com6_state3 from './components/Com6_state3';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* 내가 작성하는 reset */
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <div>
      {/* <GlobalStyle /> */}
      <h1><a href="#">리액트연습</a></h1>

      {/* <Com1_props /> */}
      {/* <Com2_props /> */}
      {/* <Com3_event /> */}
      {/* <Com4_state1 /> */}
      {/* <Com5_state2 /> */}
      <Com6_state3 />
    </div>
  );
};

export default App;