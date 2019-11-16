export default {
  auth: {
    signIn: 'Sign In',
    authWithTelegram: 'Auth with Telegram',
    goToBot: 'Go to the bot and press "start"',
    orSend: 'Or send the following code to the bot',
    notPassAutomatically:
      'If authorization did not pass automatically, press here.'
  },
  myTasks: {
    myTasks: 'My Tasks',
    paused: 'Paused',
    playing: 'Playing'
  },
  exchange: {
    exchange: 'Task exchange',
    execute: 'Execute',
    check: 'Check'
  },
  history: {
    history: 'History',
    income: 'Income',
    expenses: 'Expenses',
    incomeCanceled: 'Fines',
    expensesCanceled: 'Refunds'
  },
  settings: {
    settings: 'Settings',
    interfaceLanguage: 'Interface language',
    useWebLinks: 'Use web links'
  },
  about: {
    about: 'About'
  },
  coupon: {
    coupon: 'Coupons',
    couponCode: 'Coupon',
    info:
      'Coupons are used to recharge your account balance. Coupons can be obtained free of charge in promotions or otherwise obtained by writing to the admin',
    activate: 'Activate',
    done: 'Coupon activated!'
  },
  purchases: {
    purchases: 'Buy coins',
    history: 'History',
    xCoins: '{{x}} coins',
    yandexMoney: 'Payment by card or Yandex wallet (only for Russian users)',
    bonus: 'bonus',
    buying: 'Buying',
    card: 'Card',
    wallet: 'Wallet'
  },
  check: {
    check: 'Check unsubscribers',
    info:
      'When checking, unsubscribing users will be fined, and the coins will be returned to your account. One free check is available every day. If you have already ordered a check for free, then an additional check can be obtained by purchasing coins.',
    queue: 'In the queue',
    process: 'In the process',
    done: 'Done',
    result: 'Expect check. This may take several days.'
  },
  newTask: {
    newTask: 'New Task',
    createTask: 'Create task',
    botAdmin: 'Bot Admin',
    botAdminInst:
      'Add our bot to channel administrators, for which you need subscribers (this is not necessary for the supergroup)',
    chat: 'Public channel or supergroup',
    pricePerSubscriber: 'Price per subscriber',
    amount: 'Amount of subscribers'
  },
  referrals: {
    referrals: 'Referrals',
    info:
      'The referral system will allow you to receive 20% of the earnings of people attracted by your link. Send this link to your friends and watch the increase in the balance of your account! By the way, people registering on your link will receive 50 coins to the account! You can motivate them with this :)',
    noReferrals:
      'Here will be displayed the people you invited and their earnings for you.',
    yourReferrals: 'Your referrals'
  },
  update: {
    update: 'Update',
    info:
      'Your app is out of date. It will not work correctly. Click the update button, and download the update from Google Play.',
    button: 'Update'
  },
  help: {
    help: 'Help'
  },
  accounts: {
    accounts: 'Multi Account',
    addAccount: 'Add account',
    switchAcccountWarning:
      'Do not forget to log in with this user in the Telegram app!',
    goToBot:
      'Log in to the Telegram app with the user you want to add. Then click this button, go to the bot and press "(re)start"'
  },
  blog: {
    blog: 'Blog',
    editor: 'Post editor',
    title: 'Title',
    more: 'Read more'
  },
  contacts: {
    contacts: 'Contacts',
    support: 'Support',
    community: 'Community'
  },
  errors: {
    TASK_NOT_ENOUGH_COINS:
      'You must have at least {{x}} coins in your account to run this task.',
    TASK_NO_SUBSCRIPTION: 'Task not completed.',
    TASK_BOT_IS_NOT_CHAT_ADMIN:
      'Task deleted. Unsubscribe from the channel or group!',
    TASK_NOT_PLAYING: 'Task deleted. Unsubscribe from the channel or group!',
    TASK_NO_OWNER_POINTS:
      'Task deleted. Unsubscribe from the channel or group!',
    TASK_CHAT_INCORRECT: 'Channel or group name is incorrect!',
    TASK_PRICE_INCORRECT: 'The value is from {{min}} to {{max}}!',
    TASK_AMOUNT_INCORRECT: 'The value is from {{min}} to {{max}}',
    TASK_BOT_NO_ADMIN: 'Add bot to channel administrators!',
    TASK_IS_BUSY: 'Task already created!',
    TASK_NOT_FOUND: 'Task not found!',
    TASK_CHAT_BANNED: 'Channel or Group banned for violation!',
    UNKNOWN_ERROR: 'Unknown error. Reload the app and try again.',
    COUPON_CODE_IS_EPMTY: 'Enter coupon code!',
    COUPON_NOT_FOUND: 'Coupon not found or used!',
    CHECK_QUEUE_OR_PROCESS: 'In the queue or in the process',
    CHECK_EXPIRE:
      'The following free check can be ordered after {{time}}. But if you buy coins, you can order it right now.'
  },
  common: {
    ok: 'Ok',
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    step: 'Step {{step}}',
    add: 'Add',
    save: 'Save',
    order: 'Order',
    loadMore: 'Load more',
    error: 'Error',
    you: 'You',
    noTasks: 'No Tasks',
    noHistory: 'No History',
    textCopied: 'Text copied',
    subscribe: 'Subscribe',
    unsubscribe: 'Unsubscribe',
    toEarnMoney: 'To earn money',
    appRequired: 'The official Telegram app must be installed on your device!',
    instruction: 'How to use it',
    instructions: [
      'Click the "{{exchange}}" tab.',
      'Subscribe to the channels and get the points for that',
      'Return to the "{{myTasks}}" tab.',
      'Click on the orange button in the lower right corner.',
      'Create a task for boosting subscribers.',
      'Run this task.'
    ],
    exchangeWarning:
      'Unsubscribe from the channels in the tasks is prohibited! In the case of a unsubscribe, you will be fined in the amount of the triple price of the assignment. Coins for the task will be returned to the account of the owner of the channel! Therefore, in order not to unsubscribe in the future, DO NOT use your main Telegram account to perform tasks, but create other account.',
    exchangeNewTask:
      'The higher the price, the higher the task will be on the exchange. The executor will receive 70% of the price, minus the system commission.  Give all rights to Bot. Sometimes, the bot will add to the admins of our other bots to extend the limits Telegram. After completing the assignment, do not delete the bot, because within a year it will check the unsubscribers and return you the coins.',
    attention: 'Attention',
    community: 'Telegram chat'
  }
}
