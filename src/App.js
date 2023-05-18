
import './App.css';
import './font.css'
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Form from './components/Form/Form';
import About from './components/About/About';
import { useState } from 'react';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';

function App() {

  const [enable,setEnable] = useState(true);
  const [name,setName] = useState("");
  const [pop,setPop] = useState(false);

  const handleClickScroll = () => {
    setEnable(true);
    const element = document.getElementById('formMain');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      
      <Banner />
      { enable && <Form setName={setName} setEnable={setEnable} setPop={setPop} /> }
      { pop && <Popup name={name} setPop={setPop} /> }
      <Content scroll={handleClickScroll}/>
      <About scroll={handleClickScroll}/>
      <Footer />
      <div className="copyRit">
        <p className="copyPara">
          © 2023 Avery Dennison Label Packaging Material. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default App;
