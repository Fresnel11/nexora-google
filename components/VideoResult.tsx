/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-orbitron tracking-wide text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 animate-slide-in-up">
        Your Gateway to the Digital Universe
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-secondary-text text-center opacity-0 animate-slide-in-up delay-1">
        The central hub for all your applications. Seamlessly connect, manage,
        and explore your integrated digital ecosystem.
      </p>
      <button className="mt-8 px-8 py-3 font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-lg opacity-0 animate-slide-in-up delay-2">
        Explore Apps
      </button>
    </div>
  );
};

export default Hero;
