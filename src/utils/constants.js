import { hashCode } from "./utils";

export const whitelistValue = [
    {
        value: 'Социальные сети',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Работа с текстами',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Email-рассылки',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Организация мероприятий',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Реклама',
        group: 'Маркетинг и коммуникации'
    },
    {
        value: 'Верстка',
        group: 'Дизайн и верстка'
    },
    {
        value: 'Что-то',
        group: 'IT'
    },
    {
        value: 'То-то',
        group: 'IT'
    },
    {
        value: 'Еще что-то',
        group: 'IT'
    },
    {
      value: 'Финансирую',
      group: 'Финансы и фандрайзинг'
    },
    {
      value: 'Умею включать камеру',
      group: 'Фото и видео'
    },
    {
      value: 'Знаю законы',
      group: 'Юридические услуги'
    },
    {
      value: 'Стратегии-стратегии',
      group: 'Стратегический консалтинг'
    },
    {
      value: 'Чему-нибудь да обучу',
      group: 'Обучение и тренинги'
    },
    {
      value: 'Контролирую работу других',
      group: 'Менеджемент'
    },
    {
      value: 'Пускай что-то будет',
      group: 'HR'
    },
  ].map(item => ({ ...item, class: `group_${hashCode(item.group)}` }));

 export const inputElm = document.querySelector('input[name=tags-manual-suggestions]')