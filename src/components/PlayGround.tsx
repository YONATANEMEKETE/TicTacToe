import { useState } from 'react';
import Header from './Header';

const PlayGround = () => {
  const [cells, setCells] = useState<string[]>(Array(9).fill(''));
  const [turn, setTurn] = useState<string>('X');
  const [winner, setWinner] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const combos = [
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    [
      [0, 4, 8],
      [2, 4, 6],
    ],
  ];

  const handleClick = (num: number) => {
    if (cells[num] !== '' || winner !== '') {
      return;
    }
    let arr = [...cells];
    if (turn == 'X') {
      arr[num] = 'X';
      setTurn('O');
    } else {
      arr[num] = 'O';
      setTurn('X');
    }
    handleWinner(arr);
    setCells(arr);
  };

  const handleReset = () => {
    setWinner('');
    setCells(Array(9).fill(''));
  };

  const handleWinner = (arr: string[]) => {
    combos.forEach((combo) => {
      combo.forEach((pattern) => {
        if (
          arr[pattern[0]] === '' &&
          arr[pattern[1]] === '' &&
          arr[pattern[2]] === ''
        ) {
          return;
        } else if (
          arr[pattern[0]] === arr[pattern[1]] &&
          arr[pattern[1]] === arr[pattern[2]]
        ) {
          setWinner(arr[pattern[0]]);
          console.log(winner);
        }
      });
    });

    if (!arr.includes('') && winner === '') {
      setWinner('Draw');
    }
  };

  return (
    <div className="relative border border-n1 pb-24 bg-n1 dark:bg-slate-100 size-full">
      <Header handleReset={handleReset} />
      <div
        className="mx-auto mt-[7rem] py-8 px-6 rounded-md bg-n4 text-slate-400 
        border-slate-400 text-2xl text-center font-bold"
      >
        {`Winner: ${winner}`}
      </div>
      <div className="bg-transparent w-max max mx-auto mt-[3rem] grid items-center grid-cols-3 gap-6 mb-12">
        {cells.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              (item == 'X' && 'border-n2 text-n2') ||
              (item == 'O' && 'border-n3 text-n3') ||
              'border-slate-400'
            } w-[8rem] h-[8rem] border-[0.25px] bg-n4  text-center font-all 
       text-[5rem] pt-12 rounded-xl cursor-pointer shadow-bg`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between w-[27rem] mx-auto px-8 pt-10">
        <div className="flex flex-col items-center gap-8">
          <div className="text-[5rem]  font-bold text-n3">O</div>
          <p className="text-[1.5rem] font-all font-semobold">Player 2</p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="text-[5rem]  font-bold text-n2">X</div>
          <p className="text-[1.5rem] font-all font-semobold">Player 1</p>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
