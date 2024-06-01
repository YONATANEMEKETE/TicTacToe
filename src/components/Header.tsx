import React from 'react';
import Button from './Button';
import { IoMoonOutline } from 'react-icons/io5';

interface HeaderProp {
  handleReset?: () => void;
}
const Header = ({ handleReset }: HeaderProp) => {
  return (
    <div className="bg-n1 w-full h-[7rem] fixed top-0 left-0">
      <div className="mx-auto max-w-[950px] h-full flex items-center justify-between">
        <div className="text-[5rem] font-all text-n3 font-bold">
          <span className="text-n2 mr-2">X</span>O
        </div>
        <nav>
          <div className="flex items-center gap-4">
            <Button
              child="About"
              className="bg-n4 text-slate-400 border border-n2 hover:bg-n2  hover:text-slate-100 transition-colors duration-200"
              to="/about"
            />
            <Button
              child="Reset"
              reset={handleReset}
              className="bg-n4 border text-slate-400 border-slate-400 
              hover:border-n2 hover:shadow-border shadow-n2 transition duration-200"
            />

            <div
              className="text-[2rem] px-2 py-2 rounded-full bg-n4 border border-slate-600 
            cursor-pointer text-n2  hover:text-slate-100 hover:shadow-border transition-colors duration-200"
            >
              <IoMoonOutline />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
