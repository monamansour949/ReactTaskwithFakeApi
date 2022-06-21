import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { changeLanguage } from "../../store/actions/language";
const Home = () => {
  const language = useSelector((state) => state.language.lang);

    const dispatch= useDispatch()

const handleChange=()=>{

  dispatch(changeLanguage(language=="ar"?"en":"ar"))

}

  return (
    <div >
      <h1>language : {language}</h1>
      <h1>Home</h1>
      <button className="btn btn-success" onClick={() => handleChange()}>
        change language
      </button>
    </div>
  );
};

export default Home;
