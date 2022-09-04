import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, set글제목] = useState(['남자 긴팔티', '남자 흰티', '남자 무지티'])
  let [글내용, set글내용] = useState(['긴팔티의 손목에 시보리가 들어간 제품', '비침이 없는 흰티를 찾아서', '오래오래 입을 수 있는 무지티는 기본템으로 중요하다'])
  let [like, setLike] = useState([0,0,0]);
  let [popups, setpopups] = useState(0);
  let [popup글제목, setpopup글제목] = useState(0);

  return (
    <div className="App">
      <div calssName="black_nav">
        <h4>영주의 블로그</h4>
        <button onClick = {function 글정리() {
          글제목[0] = '남자 반팔티';
          set글제목([...글제목])} }>글 정리</button>
        <button onClick = {() => {
          글제목.sort()
          set글제목([...글제목]) }}>글 순서 변경</button>
      </div>

      {
        글제목.map(function(a, i) {
          return(
          <div className="list">
            <h4 onClick = { () => {
             setpopups(!popups)
             setpopup글제목(글제목[i])}}>{ 글제목[i] } <span onClick = {() => {
             like[i] = like[i] + 1;
             setLike([...like])}}>😚</span> { like[i] }</h4>
            <p>{ 글내용[i] }</p>
          </div>
          )
        })
      }

      {
        popups == 1 ? <Popup popup글제목 = {popup글제목} set글제목 = {set글제목} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Popup(props) {
  return(
    <div className = "PopupClass">
      <h4>{props.popup글제목}</h4>
      <p>내용</p>
      <button onClick={ ()=> {
        props.글제목[0] = '남자 반팔 추천'
        props.set글제목([...props.글제목])}}>글변경</button>
    </div>
    )

}

export default App;
