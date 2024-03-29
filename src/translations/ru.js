export default {
  auth: {
    signIn: 'Войти',
    authWithTelegram: 'Вход через Телеграмм',
    goToBot: 'Перейди в бот и нажми "старт"',
    orSend: 'Либо отправь ему следующий код',
    notPassAutomatically:
      'Если авторизация не прошла автоматически, нажми сюда.'
  },
  myTasks: {
    myTasks: 'Мои задания',
    paused: 'Остановлено',
    playing: 'Запущено'
  },
  exchange: {
    exchange: 'Биржа',
    execute: 'Выполнить',
    check: 'Проверить'
  },
  history: {
    history: 'История',
    income: 'Заработок',
    expenses: 'Списания',
    incomeCanceled: 'Штрафы',
    expensesCanceled: 'Возвраты'
  },
  settings: {
    settings: 'Настройки',
    interfaceLanguage: 'Язык интерфейса',
    useWebLinks: 'Использовать web-ссылки'
  },
  about: {
    about: 'О приложении'
  },
  coupon: {
    coupon: 'Купоны',
    couponCode: 'Купон',
    info:
      'Купоны нужны для пополнения баланса. Их можно получить бесплатно в промо-акциях или иным способом, написав админам',
    activate: 'Активировать',
    done: 'Купон активирован!'
  },
  purchases: {
    purchases: 'Купить монеты',
    history: 'История',
    xCoins: '{{x}} монет',
    yandexMoney: 'Оплата картой либо яндекс-кошельком',
    bonus: 'бонус',
    buying: 'Покупка',
    card: 'Карта',
    wallet: 'Кошелёк'
  },
  check: {
    check: 'Проверка отписавшихся',
    info:
      'При проверке отписавшиеся юзеры будут оштрафованы, а монеты возвращены на твой счёт. Каждый день доступна одна бесплатная проверка. Если ты уже заказал одну, то дополнительную проверку, можно получить купив монеты.',
    queue: 'В очереди',
    process: 'В процессе',
    done: 'Готово',
    result: 'Ожидайте проверку. Это может занять несколько дней.'
  },
  newTask: {
    newTask: 'Новое задание',
    createTask: 'Создание задания',
    botAdmin: 'Бот-администратор',
    botAdminInst:
      'Добавь нашего бота в администраторы канала, для которого ты хочешь накрутить подписчиков (для супергруппы этого делать не нужно)',
    chat: 'Публичный канал или супергруппа',
    pricePerSubscriber: 'Цена за 1 подписчика',
    amount: 'Количество подписчиков'
  },
  referrals: {
    referrals: 'Партнёрка',
    info:
      'Партнёрская программа позволит тебе получать 20% с заработка привлечённых по твоей ссылке людей. Разошли эту ссылку своим друзьям и наблюдай за увеличением балланса своего аккаунта! Кстати, люди, зарегистрировавшиеся по твоей ссылке, получат 50 монет на счёт! Можешь их этим мотивировать :)',
    noReferrals:
      'Здесь будут отображаться приглашённые тобой люди и то, что они для тебя заработали.',
    yourReferrals: 'Твои рефералы'
  },
  update: {
    update: 'Обновление',
    info:
      'Твоё приложение устарело. Работать оно будет не совсем правильно. Нажми кнопку обновить, и скачай обновление с Google Play.',
    button: 'Обновить'
  },
  help: {
    help: 'Помощь'
  },
  accounts: {
    accounts: 'Мультиаккаунт',
    addAccount: 'Добавление аккаунта',
    switchAcccountWarning:
      'Не забудь залогиниться под этим пользователем в приложении Telegram!',
    goToBot:
      'Залогинься в приложении Telegram под пользователем, которого ты хочешь добавить. Затем нажми на эту кнопку перейди в бот и нажми там "(ре)старт"'
  },
  blog: {
    blog: 'Блог',
    editor: 'Редактор поста',
    title: 'Заголовок',
    more: 'Продолжить чтение'
  },
  contacts: {
    contacts: 'Контакты',
    support: 'Поддержка',
    community: 'Сообщества'
  },
  errors: {
    TASK_NOT_ENOUGH_COINS:
      'Для запуска этого задания у тебя на счету должно быть как минимум {{x}} монет!',
    TASK_NO_SUBSCRIPTION: 'Задание не выполнено!',
    TASK_BOT_IS_NOT_CHAT_ADMIN:
      'Задание удалено создателем. Отпишись от этого канала или группы!',
    TASK_NOT_PLAYING:
      'Задание остановлено создателем. Отпишись от этого канала или группы!',
    TASK_NO_OWNER_POINTS:
      'Задание остановлено создателем. Отпишись от этого канала или группы!',
    TASK_CHAT_INCORRECT: 'Такого канала или супергруппы не существует!',
    TASK_PRICE_INCORRECT: 'Значение от {{min}} до {{max}}!',
    TASK_AMOUNT_INCORRECT: 'Значение от {{min}} до {{max}}!',
    TASK_BOT_NO_ADMIN: 'Добавь бота в администраторы канала!',
    TASK_IS_BUSY: 'Задание уже создано!',
    TASK_NOT_FOUND: 'Задание не найдено!',
    TASK_CHAT_BANNED: 'Канал или группа забанены за нарушения!',
    UNKNOWN_ERROR:
      'Неизвестная ошибка. Перезапусти приложение и попробуй снова.',
    COUPON_CODE_IS_EPMTY: 'Введите код купона!',
    COUPON_NOT_FOUND: 'Купон не найден либо использован!',
    CHECK_QUEUE_OR_PROCESS: 'В очереди или в процессе',
    CHECK_EXPIRE:
      'Следующую бесплатную проверку можно будет заказать через {{time}}. Но если купишь монеты, то сможешь заказать её прямо сейчас.'
  },
  common: {
    ok: 'Ок',
    cancel: 'Отмена',
    yes: 'Да',
    no: 'Нет',
    step: 'Шаг {{step}}',
    add: 'Добавить',
    save: 'Сохранить',
    order: 'Заказать',
    loadMore: 'Загрузить ещё',
    error: 'Ошибка',
    you: 'Ты',
    noTasks: 'Заданий нет',
    noHistory: 'Истории пока нет',
    textCopied: 'Текст скопирован',
    subscribe: 'Подписаться',
    unsubscribe: 'Отписаться',
    toEarnMoney: 'Заработать',
    appRequired:
      'На твоём устройстве должно быть установлено официальное приложение Telegram!',
    instruction: 'Инструкция',
    instructions: [
      'Перейди на вкладку «{{exchange}}».',
      'Подпишись на каналы и получи за это монеты.',
      'Вернись на вкладку «{{myTasks}}».',
      'Нажми на оранжевую кнопку в правом нижнем углу.',
      'Создай задание для накрутки подписчиков.',
      'Запусти это задание.'
    ],
    instructionsPro: [
      'Перейди через боковом меню в раздел «{{purchases}}» и купи монеты.',
      'Вернись на вкладку «{{myTasks}}».',
      'Нажми на оранжевую кнопку в правом нижнем углу.',
      'Создай задание для накрутки подписчиков.',
      'Запусти это задание.'
    ],
    instructionsProFree:
      'Если же ты хочешь накрутить подписчиков бесплатно, то заработай монеты на нашем сайте (lois.pro)! Нажми сюда, чтобы перейти на него.',
    exchangeWarning:
      'Отписываться от каналов в заданиях запрещено! В случае отписки вы будете оштрафованы в размере тройной цены задания. Монеты за задание будут возвращены на счёт владельца канала! Поэтому, чтобы не отписываться в дальнейшем, НЕ используй для выполнения заданий свой основной Telegram-аккаунт, а создай фейк.',
    exchangeNewTask:
      'Чем выше цена, тем выше задание будет на бирже. Исполнитель получит 70% от цены, с вычетом комиссии системы. Количество - число подписчиков, которое тебе нужно получить для канала. По его достижению задание будет остановлено. Боту предоставь все права. Периодически, бот будет добавлять в админы других наших ботов для расширения лимитов Telegram. После выполнения задания, бота не удаляй - так как в течении года он будет чекать отписавшихся и возвращать тебе монеты.',
    attention: 'Внимание',
    community: 'Чат в Телеграмм'
  }
}
