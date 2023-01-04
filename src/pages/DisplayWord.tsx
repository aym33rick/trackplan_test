import {useLocation} from "react-router-dom";
import DisplayTable from "../components/DisplayTable";
import '../CSS/DisplayWord.css';

function DisplayWord() {

  let { state } = useLocation();

  const word: string = state?.data;

  return <div className="center-form">
    <DisplayTable word={word} reverse={false}/>
    <DisplayTable word={word} reverse={true}/>
  </div>;
};

export default DisplayWord;