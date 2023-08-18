# Workflow

PL для протокола Workflow.

Для использования нужно предварительно создать файл *npmrc.* ([инструкция](https://confluence.ca.sbrf.ru/display/ARMCZK/.npmrc)). 

## Установка 

- Устанавливаем npm-пакет:
```shell
npm i @armczk/workflow  
```

### Пример использования:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Workflow } from '@armczk/workflow';

const NAME = 'someName';
const URL = 'flow/123-456-789-abc';
const handleCompletion = () => { alert('Процесс завершён!') };

ReactDOM.render(
  <Workflow
    name={NAME}
    url={`https://example.com/api/${URL}`}
    onComplete={handleCompletion}
  />,
  document.getElementById('app')
)
```


## Локальное развертывание

- Запускаем команду `npm i` для установки зависимостей проекта.
- В папке `configs/webpack/buildConfigs` создаем копию файла `config.dev.js.example` и удалить ".example".
- Выполняем команду `npm start` для запуска локальной разработки.
