import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './Components/Header';

const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline flex justify-center text-slate-900">Hello world!</h1> */}
      <div className='pt-[4.7rem]:lg pt-[5.25rem] overflow-hidden bg-slate-800 text-slate-50' >
        {/* <Buttonb classgName="my-10" href="#-login">Something</Button> */}
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
