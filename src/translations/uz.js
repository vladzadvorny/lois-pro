export default {
  auth: {
    signIn: 'Kirish',
    authWithTelegram: 'Telegram orqali kirish',
    goToBot: 'Botga oting va "start"ni bosing',
    orSend: 'Yoki unga keyingi kodni yuboring',
    notPassAutomatically:
      'Agar avtorizatsiya avtomatik ravishda ótmagan bólsa, bu erga bosing.'
  },
  myTasks: {
    myTasks: 'Topshiriqlarim',
    paused: 'Tóxtatildi',
    playing: 'Ishga tushirildi'
  },
  exchange: {
    exchange: 'Birja',
    execute: 'Bajarish',
    check: 'Tekshirish'
  },
  history: {
    history: 'Tarix',
    income: 'Daromad',
    expenses: 'Yechimlar',
    incomeCanceled: 'Jarimalar',
    expensesCanceled: 'Qaytimlar'
  },
  settings: {
    settings: 'Sozlamar',
    interfaceLanguage: 'Interfeys tili',
    useWebLinks: 'Web-ssilkalar bilan foydalanish'
  },
  about: {
    about: 'Dastur haqida'
  },
  coupon: {
    coupon: 'Kuponlar',
    couponCode: 'Kupon',
    info:
      'Kuponlar balans toldirish uchun kerak. Ularni promo-aktsiyadalarda bepul olish mumkin yoki boshqa usulda, adminlarga yozib',
    activate: 'Faollashtirish',
    done: 'Kupon faollashtirildi!'
  },
  purchases: {
    purchase: 'Tanga sotib olish',
    history: 'Tarix',
    xCoins: '{{x}} tanga',
    yandexMoney: 'Tolov Karta yoki Yandex hamyoni orqali',
    bonus: 'bonus',
    buying: 'Sotib olish',
    card: 'Xarita',
    wallet: 'Hamyon'
  },
  check: {
    check: 'Buyurtmani tekshirish',
    info:
      'Tekshirish paytida obunani bekor qilgan foydalanuvchilar jarimaga tortiladi, tangalar esa hisobingizga qaytariladi. Har kuni bir marta tekin tekshuruv mumkun. Agar siz bir marta buyurtma bergan bolsangiz, qoshimcha tekshirishni, qoshimcha tangalarni sotib olish orqali olishingiz mumkin.',
    queue: 'Qatorda',
    process: 'Jarayonda',
    done: 'Bajarildi',
    result: 'Tastiqlashni kuting. Bu bir necha kun davom etishi mumkin.'
  },
  newTask: {
    newTask: 'Yangi vazifa',
    createTask: 'Ish órinlarilini yaratish',
    botAdmin: 'bot-administrator',
    botAdminInst:
      'Bizning botni kanalingizda admin qiling (superguruh uchun buni qilish kerak emas)',
    chat: 'jamoat kanali yoki superguruh',
    pricePerSubscriber: 'bir obunachini narxi',
    amount: 'obunachilar soni'
  },
  referrals: {
    referrals: 'Sheriklik dasturi',
    info:
      'Sheriklik dasturi sizga havolangizni jalb qilgan odamlarning daromadidan 20% olish imkonini beradi. Dostlaringizga ushbu ssilkani yuboring va hisobingiz balansining kopayishini tomosha qiling! Aytgancha, sizning, ssilkangizdan foydalangan holda royxatdan otgan odamlar har bir hisob uchun 50 tangadan olishadi! Bu bilan ularni motivatsiya qilishingiz mumkin :)',
    noReferrals:
      'Bu erda siz taklif qilgan odamlar va siz uchun nimani qolga kiritganliklari namoyish etiladi.',
    yourReferrals: 'Sizning tavsiyanomlaringiz'
  },
  update: {
    update: 'Yangilash',
    info:
      'Sizning ilovangiz eskirgan. Togri ishlamasligi mumkun. Yangilash knopkasini bosing, va Google Playdan  yangisini yuklab oling.',
    button: 'Yangilash'
  },
  help: {
    help: 'Yordam'
  },
  accounts: {
    accounts: 'Multiakkaunt',
    addAccount: 'Akkaunt qoshish',
    switchAcccountWarning:
      'Ushbu foydalanuvchi bilan Telegram dasturida tizimga kirishni unutmang!',
    goToBot:
      "Siz qo'shmoqchi bo'lgan foydalanuvchi sifatida Telegram dasturiga kiring. Keyin ushbu tugmachani bosib botga o'ting va shu yerni bosing \"(Re)start\""
  },
  blog: {
    blog: 'Blog',
    editor: 'Post editor',
    title: 'Title',
    more: 'Read more'
  },
  contacts: {
    contacts: 'Kontaktlar',
    support: 'Yordam',
    community: 'Jamiyatlar'
  },
  errors: {
    TASK_NOT_ENOUGH_COINS:
      "Ushbu topshiriqni bajarish uchun hisobingizda kamida {{x}} tanga bo'lishi kerak",
    TASK_NO_SUBSCRIPTION: 'vazifa bajarilmagan!',
    TASK_BOT_IS_NOT_CHAT_ADMIN:
      "vazifa yaratuvchi bilan o'chirildi. Ushbu kanal yoki superguruh obunani bekor qiling!",
    TASK_NOT_PLAYING:
      "vazifa yaratuvchi bilan o'chirildi. Ushbu kanal yoki superguruh obunani bekor qiling!",
    TASK_NO_OWNER_POINTS:
      "vazifa yaratuvchi bilan o'chirildi. Ushbu kanal yoki superguruh obunani bekor qiling!",
    TASK_CHAT_INCORRECT: 'bunday kanal yoki super guruh mavjud emas!',
    TASK_PRICE_INCORRECT: 'Qiymati dan {{min}} gacha {{max}}!',
    TASK_AMOUNT_INCORRECT: 'Qiymati dan {{min}} gacha {{max}}!',
    TASK_BOT_NO_ADMIN: "Botni kanal administratoriga qo'shing!",
    TASK_IS_BUSY: 'Vazifa allaqachon yaratilgan!',
    TASK_NOT_FOUND: 'vazifa topilmadi!',
    TASK_CHAT_BANNED: 'Qoidabuzarlik uchun kanal yoki super guruh taqiqlangan!',
    UNKNOWN_ERROR:
      "Noma'lum xato. Ilovani qayta ishga tushiring va qaytadan urinib koring",
    COUPON_CODE_IS_EPMTY: 'kupon kodini kiriting!',
    COUPON_NOT_FOUND: 'Kupon topilmadi, yoki ishlatildi!',
    CHECK_QUEUE_OR_PROCESS: 'Qatorda yoki jarayonda',
    CHECK_EXPIRE:
      "Keyingi bepul tekshiruvni {{time}} so'ng amalga oshirishim mumkin. Ammo agar siz hozir tanga sotib olsangiz, uni hozir buyurtma qilishingiz mumkin."
  },
  common: {
    ok: 'Ок',
    cancel: 'Bekor qilish',
    yes: 'Ha',
    no: 'Yoq',
    step: 'Qadam {{step}}',
    add: 'qoshish',
    save: 'Tejab qolish',
    order: 'Buyurish',
    loadMore: 'Koproq yuklash',
    error: 'Xato',
    you: 'Siz',
    noTasks: 'vazifalar yoq',
    noHistory: 'hali tarix yoq',
    textCopied: 'Matn nusxasi olindi',
    subscribe: "Obuna bo'lish",
    unsubscribe: 'Obunani bekor qiling',
    toEarnMoney: 'Ishlash',
    appRequired: "Rasmiy Telegram ilovasi qurilmangizga o'rnatilishi kerak!",
    instruction: "Qo'llanma",
    instructions: [
      '«{{exchange}}» Yorliqiga oting.',
      "Kanallarga obuna bo'ling va buning uchun tangalarni oling.",
      '«{{myTasks}}» Yorliqiga qayting.',
      "Ong pastki burchakdagi to'q sariq tugmachani bosing.",
      'Obunachilarni qoshish uchun vazifa yarating.',
      'Ushbu vazifani ishga tushuring.'
    ],
    exchangeWarning:
      'Vazifalarda kanallarga obunani bekor qilish taqiqlanadi! Obunani bekor qilsangiz, sizga vazifaning uch baravar miqdorida jarima solinadi. Vazifa uchun pullar kanal egasining hisobiga qaytariladi! Shuning uchun, kelajakda obunani bekor qilmaslik uchun asosiy Telegram hisob qaydnomangizni vazifalarni bajarish uchun ishlatmang, balki soxta akkaunt yarating.',
    exchangeNewTask:
      "Narx qancha yuqori bo'lsa, vazifa birjada shunchalik yuqori bo'ladi. Pudratchi tizim komissiyasidan tashqari narxning 70 foizini oladi. Miqdori - kanal uchun qabul qilmoqchi bo'lgan obunachilar soni. Unga etib borgach, vazifa to'xtatiladi. Botga barcha huquqlarni bering. Bazan bot Telegram chegaralarini kengaytirish uchun boshqa botlarning adminlariga qo'shiladi. Vazifani bajargandan so'ng, botni o'chirmang, chunki yil davomida obunani bekor qiladi va tangalarni sizga qaytarib beradi.",
    attention: 'Diqqat',
    community: 'Telegram chat'
  }
};
