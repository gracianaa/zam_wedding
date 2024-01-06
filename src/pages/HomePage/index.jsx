import React from 'react';
import './style.css';
import { Intro } from '../../components/Intro';
import { WhenAndWhere } from '../../components/WhenAndWhere';
import { Rvsp } from '../../components/Rvsp';
import { Agenda } from '../../components/Agenda';

export const HomePage = () => {
  return (
    <main className="content">
      <Intro />
      <WhenAndWhere />
      <Agenda />
      <Rvsp />
    </main>
  );
};
