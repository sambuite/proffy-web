import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import { Container, Form, PageMain } from './styles';

const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"></input>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"></input>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"></input>
          </div>
        </Form>
      </PageHeader>

      <PageMain>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </PageMain>
    </Container>
  );
};

export default TeacherList;