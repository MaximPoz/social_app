import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiJsAPP from './App';

it('render with chashing', () => {   //Тест на то что наше приложение загружается, хз за чем
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJsAPP />, div);
  ReactDOM.unmountComponentAtNode(div);
});
