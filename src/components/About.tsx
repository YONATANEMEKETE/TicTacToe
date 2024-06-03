import { FaArrowLeftLong } from 'react-icons/fa6';
import Header from './Header';
import { NavLink } from 'react-router-dom';

interface Playprops {
  darkMode: () => void;
  dark: boolean;
}

const About = ({ darkMode, dark }: Playprops) => {
  return (
    <>
      <div className={`${dark && 'dark'}`}>
        <Header className="dark:bg-slate-300 bg-n1" handledark={darkMode} />
        <div className="h-screen w-screen bg-n1 dark:bg-slate-300 pt-[13rem]">
          <div className="flex items-start gap-16 w-max mx-auto">
            <NavLink
              to="/"
              className="transition duration-400 hover:shadow-border text-2xl text-n2 font-all font-semibold p-4 rounded-full bg-n4 flex items-center"
            >
              <FaArrowLeftLong />
            </NavLink>
            <div className="text-2xl font-all font-semibold text-slate-400 dark:text-n1 max-w-[30rem] text-justify">
              <p>
                Hey welcome to TicTacToe game. the game is designed to be played
                in pair. here is the rule. player one makes a move which is{' '}
                <span className="text-n2">X</span> then next player two makes a
                move which is <span className="text-n3">O</span> then the
                persone who connected three the moves downward horizontal or
                diagonal will be the winner. once the game is over Draw or Win
                you can reset and replay. Thank you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
