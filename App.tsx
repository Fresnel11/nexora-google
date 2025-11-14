/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import AnimatedBackground from './components/ApiKeyDialog';
import Header from './components/PromptForm';
import Hero from './components/VideoResult';
import AppGrid from './components/LoadingIndicator';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen font-sans overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col h-full">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center p-4 text-center overflow-y-auto">
          <Hero />
          <AppGrid />
        </main>
      </div>
    </div>
  );
};

export default App;
