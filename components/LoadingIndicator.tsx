/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { AppCardProps } from '../types';
import { ShieldCheck, Cloud, BrainCircuit, BarChart, Mail } from 'lucide-react';

const AppCard: React.FC<AppCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="transform-card glass-effect rounded-2xl p-6 text-left flex flex-col items-start h-full">
      <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="font-bold text-xl mb-2 font-orbitron">{title}</h3>
      <p className="text-secondary-text text-sm flex-grow">{description}</p>
      <a href="#" className="mt-4 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
        Launch App &rarr;
      </a>
    </div>
  );
};


const AppGrid: React.FC = () => {
  const apps: AppCardProps[] = [
    {
      icon: ShieldCheck,
      title: 'Aura Auth',
      description: 'Centralized and secure authentication for all your platforms.',
    },
    {
      icon: Cloud,
      title: 'Nexus Drive',
      description: 'Your personal cloud storage, seamlessly integrated.',
    },
    {
      icon: BrainCircuit,
      title: 'Project Titan',
      description: 'Advanced AI analytics and data processing engine.',
    },
    {
      icon: Mail,
      title: 'Pulse Mail',
      description: 'An intelligent and privacy-focused email client.',
    },
     {
      icon: BarChart,
      title: 'Momentum BI',
      description: 'Powerful business intelligence and data visualization tools.',
    },
  ];

  return (
    <div className="w-full max-w-5xl mt-12 p-4 opacity-0 animate-slide-in-up delay-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={app.title} {...app} />
        ))}
      </div>
    </div>
  );
};


export default AppGrid;
