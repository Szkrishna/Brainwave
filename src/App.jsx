import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './Components/button';

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline flex justify-center">Hello world!</h1>
      <div className='pt-[4.7rem]:lg pt-[5.25rem] overflow-hidden'>
        <Button className="mt-10 text-black" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient/>
    </>
  );
};

export default App
