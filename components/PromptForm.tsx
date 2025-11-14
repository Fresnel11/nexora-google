/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-6 flex justify-between items-center glass-effect">
      <h1 className="text-2xl font-bold font-orbitron tracking-widest">
        NEXORA X
      </h1>
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="#" className="text-secondary-text hover:text-primary-text transition-colors">Apps</a>
        <a href="#" className="text-secondary-text hover:text-primary-text transition-colors">About</a>
        <a href="#" className="text-secondary-text hover:text-primary-text transition-colors">Contact</a>
      </nav>
      <button className="px-4 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
        Connect
      </button>
    </header>
  );
};

export default Header;
