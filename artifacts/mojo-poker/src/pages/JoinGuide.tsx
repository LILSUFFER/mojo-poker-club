import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';

const REFERRAL = '3383-3619';

const CLUBS = [
  { name: 'MOJO 2: Massiv Poker Union', id: '799798', main: true },
  { name: 'MOJO', id: '356323', main: false },
];

function CopyBtn({ value, label, copiedLabel }: { value: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const click = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={click} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '5px 11px', borderRadius: 4, cursor: 'pointer',
      border: `1px solid ${copied ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.12)'}`,
      background: copied ? 'rgba(34,197,94,0.07)' : 'transparent',
      color: copied ? '#22c55e' : 'rgba(255,255,255,0.4)',
      fontSize: 11, fontWeight: 600, transition: 'all 0.15s',
    }}>
      {copied ? <><CheckCircle2 size={11} /> {copiedLabel}</> : <><Copy size={11} /> {label}</>}
    </button>
  );
}

export function JoinGuide() {
  const { language, t } = useLanguage();
  const getLang = (field: Record<string, string>) => field[language] ?? field.en;

  interface StepDef {
    num: number;
    title: Record<string, string>;
    desc: Record<string, string>;
    img?: string;
    extra?: 'clubs' | 'referral' | 'telegram';
    note?: Record<string, string>;
  }

  const steps: StepDef[] = [
    {
      num: 1,
      title: {
        ru: 'Откройте раздел «Клубы» в приложении', en: 'Open the "Clubs" section in the app',
        es: 'Abrir la sección «Clubes» en la app', de: 'Den Bereich «Clubs» in der App öffnen',
        fr: "Ouvrir la section «Clubs» dans l'app", it: 'Apri la sezione «Club» nell\'app',
        pt: 'Abrir a seção «Clubes» no app', ar: 'افتح قسم «الأندية» في التطبيق',
        hi: 'ऐप में «क्लब» सेक्शन खोलें', fa: 'بخش «باشگاه‌ها» را در برنامه باز کنید',
        tr: 'Uygulamada «Kulüpler» bölümünü aç', az: 'Tətbiqdə «Klublar» bölməsini aç',
        zh: '在应用中打开「俱乐部」部分', ja: 'アプリで「クラブ」セクションを開く',
      },
      desc: {
        ru: 'Запустите ClubGG и войдите в аккаунт. На главном экране вы увидите строку «Поиск Клуба» вверху — нажмите на неё. Это откроет форму поиска клуба.',
        en: 'Launch ClubGG and sign in. On the main screen you\'ll see a "Search Club" bar at the top — tap it. This opens the club search form.',
        es: 'Inicia ClubGG e inicia sesión. En la pantalla principal verás una barra «Buscar club» en la parte superior — tócala. Esto abre el formulario de búsqueda de club.',
        de: 'Starte ClubGG und melde dich an. Auf dem Hauptbildschirm siehst du oben eine Leiste «Club suchen» — tippe darauf. Dadurch öffnet sich das Club-Suchformular.',
        fr: "Lancez ClubGG et connectez-vous. Sur l'écran principal, vous verrez une barre «Rechercher un club» en haut — appuyez dessus. Cela ouvre le formulaire de recherche de club.",
        it: 'Avvia ClubGG e accedi. Nella schermata principale vedrai una barra «Cerca club» in alto — toccala. Questo apre il modulo di ricerca del club.',
        pt: 'Inicie o ClubGG e faça login. Na tela principal você verá uma barra «Buscar clube» no topo — toque nela. Isso abre o formulário de pesquisa de clube.',
        ar: 'شغّل ClubGG وسجّل الدخول. في الشاشة الرئيسية سترى شريط «البحث عن نادٍ» في الأعلى — اضغط عليه. هذا يفتح نموذج البحث عن النادي.',
        hi: 'ClubGG लॉन्च करें और साइन इन करें। मुख्य स्क्रीन पर ऊपर «क्लब खोजें» बार दिखेगी — उसे टैप करें। यह क्लब खोज फॉर्म खोलता है।',
        fa: 'ClubGG را اجرا کنید و وارد شوید. در صفحه اصلی نوار «جستجوی باشگاه» را در بالا می‌بینید — روی آن ضربه بزنید. فرم جستجوی باشگاه باز می‌شود.',
        tr: "ClubGG'yi başlat ve giriş yap. Ana ekranda üstte «Kulüp Ara» çubuğunu göreceksin — ona dokun. Kulüp arama formu açılır.",
        az: 'ClubGG-ni işə sal və daxil ol. Əsas ekranda yuxarıda «Klub Axtar» panelini görəcəksən — ona bas. Klub axtarış forması açılır.',
        zh: '启动 ClubGG 并登录账户。在主屏幕顶部您会看到「搜索俱乐部」栏 — 点击它。这将打开俱乐部搜索表单。',
        ja: 'ClubGGを起動してサインインします。メイン画面の上部に「クラブを検索」バーが表示されます — それをタップします。クラブ検索フォームが開きます。',
      },
      img: '/images/join/step1-search.png',
    },
    {
      num: 2,
      title: {
        ru: 'Введите ID клуба и ID реферера', en: 'Enter the Club ID and Referrer ID',
        es: 'Introducir el ID del club y el ID del referido', de: 'Club-ID und Referrer-ID eingeben',
        fr: "Saisir l'ID du club et l'ID du référent", it: "Inserisci l'ID del club e l'ID referrer",
        pt: 'Inserir o ID do clube e o ID do referidor', ar: 'أدخل معرّف النادي ومعرّف المُحيل',
        hi: 'क्लब ID और रेफरर ID दर्ज करें', fa: 'شناسه باشگاه و شناسه معرف را وارد کنید',
        tr: "Kulüp ID'si ve Referans ID'si gir", az: 'Klub ID-si və Referral ID-si daxil et',
        zh: '输入俱乐部 ID 和推荐人 ID', ja: 'クラブIDとリファラーIDを入力',
      },
      desc: {
        ru: 'Перед вами откроется форма с двумя полями:\n\n• Поле «ID клуба» — введите ID нужного клуба из списка ниже\n• Поле «ID реферера» — обязательно укажите реферальный код MOJO, чтобы нас нашли и одобрили вашу заявку\n\nПосле заполнения обоих полей нажмите «Подтвердить».',
        en: 'A form with two fields will open:\n\n• "Club ID" field — enter the ID of the desired club from the list below\n• "Referrer ID" field — enter the MOJO referral code so we can find you and approve your request\n\nAfter filling both fields tap "Confirm".',
        es: 'Se abrirá un formulario con dos campos:\n\n• Campo «ID del club» — ingresa el ID del club deseado de la lista a continuación\n• Campo «ID del referido» — ingresa el código de referido MOJO para que podamos encontrarte y aprobar tu solicitud\n\nDespués de llenar ambos campos, toca «Confirmar».',
        de: 'Ein Formular mit zwei Feldern öffnet sich:\n\n• Feld «Club-ID» — gib die ID des gewünschten Clubs aus der Liste unten ein\n• Feld «Referrer-ID» — gib den MOJO-Empfehlungscode ein, damit wir dich finden und deine Anfrage bestätigen können\n\nNach dem Ausfüllen beider Felder tippe auf «Bestätigen».',
        fr: "Un formulaire avec deux champs s'ouvrira :\n\n• Champ «ID du club» — entrez l'ID du club souhaité dans la liste ci-dessous\n• Champ «ID du référent» — entrez le code de parrainage MOJO pour que nous puissions vous trouver et approuver votre demande\n\nAprès avoir rempli les deux champs, appuyez sur «Confirmer».",
        it: "Si aprirà un modulo con due campi:\n\n• Campo «ID club» — inserisci l'ID del club desiderato dall'elenco sottostante\n• Campo «ID referrer» — inserisci il codice referral MOJO in modo che possiamo trovarti e approvare la tua richiesta\n\nDopo aver compilato entrambi i campi, tocca «Conferma».",
        pt: 'Um formulário com dois campos será aberto:\n\n• Campo «ID do clube» — insira o ID do clube desejado da lista abaixo\n• Campo «ID do referidor» — insira o código de referência MOJO para que possamos encontrá-lo e aprovar sua solicitação\n\nDepois de preencher ambos os campos, toque em «Confirmar».',
        ar: 'سيفتح نموذج بحقلين:\n\n• حقل «معرّف النادي» — أدخل معرّف النادي المطلوب من القائمة أدناه\n• حقل «معرّف المُحيل» — أدخل رمز الإحالة MOJO حتى نتمكن من إيجادك والموافقة على طلبك\n\nبعد ملء كلا الحقلين اضغط على «تأكيد».',
        hi: 'दो फ़ील्ड वाला एक फॉर्म खुलेगा:\n\n• «क्लब ID» फ़ील्ड — नीचे की सूची से वांछित क्लब का ID दर्ज करें\n• «रेफरर ID» फ़ील्ड — MOJO रेफरल कोड दर्ज करें ताकि हम आपको ढूंढ सकें और आपकी रिक्वेस्ट को मंजूरी दे सकें\n\nदोनों फ़ील्ड भरने के बाद «पुष्टि करें» टैप करें।',
        fa: 'فرمی با دو فیلد باز می‌شود:\n\n• فیلد «شناسه باشگاه» — شناسه باشگاه مورد نظر را از لیست زیر وارد کنید\n• فیلد «شناسه معرف» — کد معرف MOJO را وارد کنید تا بتوانیم شما را بیابیم و درخواستتان را تأیید کنیم\n\nپس از پر کردن هر دو فیلد، روی «تأیید» ضربه بزنید.',
        tr: "İki alanlı bir form açılacak:\n\n• «Kulüp ID» alanı — aşağıdaki listeden istediğin kulübün ID'sini gir\n• «Referans ID» alanı — seni bulabilmemiz ve isteğini onaylayabilmemiz için MOJO referans kodunu gir\n\nHer iki alanı doldurduktan sonra «Onayla»ya dokun.",
        az: 'İki sahəli forma açılacaq:\n\n• «Klub ID» sahəsi — aşağıdakı siyahıdan istədiyin klubun ID-sini daxil et\n• «Referral ID» sahəsi — sizi tapa bilmək və sorğunu təsdiqləmək üçün MOJO referral kodunu daxil et\n\nHər iki sahəni doldurduqdan sonra «Təsdiqlə»yə bas.',
        zh: '将出现一个包含两个字段的表单：\n\n• 「俱乐部 ID」字段 — 从下方列表中输入所需俱乐部的 ID\n• 「推荐人 ID」字段 — 输入 MOJO 推荐码，以便我们找到您并批准申请\n\n填写完两个字段后，点击「确认」。',
        ja: '2つのフィールドのフォームが開きます：\n\n• 「クラブID」フィールド — 下のリストから希望のクラブのIDを入力\n• 「リファラーID」フィールド — MOJOリファラルコードを入力してください\n\n両方のフィールドを入力したら「確認」をタップ。',
      },
      img: '/images/join/step2-form-empty.png',
      extra: 'clubs',
    },
    {
      num: 3,
      title: {
        ru: 'Форма заполнена — нажмите «Подтвердить»', en: 'Form filled — tap "Confirm"',
        es: 'Formulario completo — toca «Confirmar»', de: 'Formular ausgefüllt — tippe auf «Bestätigen»',
        fr: 'Formulaire rempli — appuyez sur «Confirmer»', it: 'Modulo compilato — tocca «Conferma»',
        pt: 'Formulário preenchido — toque em «Confirmar»', ar: 'تم ملء النموذج — اضغط على «تأكيد»',
        hi: 'फॉर्म भरा — «पुष्टि करें» टैप करें', fa: 'فرم پر شد — روی «تأیید» ضربه بزنید',
        tr: 'Form dolduruldu — «Onayla»ya dokun', az: 'Forma dolduruldu — «Təsdiqlə»yə bas',
        zh: '表单已填写 — 点击「确认」', ja: 'フォーム入力完了 — 「確認」をタップ',
      },
      desc: {
        ru: 'Убедитесь, что оба поля заполнены: Club ID и ID реферера (3383-3619). После этого кнопка «Подтвердить» станет активной — нажмите её.',
        en: 'Make sure both fields are filled: Club ID and Referrer ID (3383-3619). Once done, the "Confirm" button becomes active — tap it.',
        es: 'Asegúrate de que ambos campos estén llenos: ID del club e ID del referido (3383-3619). Una vez hecho, el botón «Confirmar» se activa — tócalo.',
        de: 'Stelle sicher, dass beide Felder ausgefüllt sind: Club-ID und Referrer-ID (3383-3619). Wenn erledigt, wird die Schaltfläche «Bestätigen» aktiv — tippe darauf.',
        fr: "Assurez-vous que les deux champs sont remplis : ID du club et ID du référent (3383-3619). Une fois fait, le bouton «Confirmer» devient actif — appuyez dessus.",
        it: 'Assicurati che entrambi i campi siano compilati: ID club e ID referrer (3383-3619). Una volta completato, il pulsante «Conferma» diventa attivo — toccalo.',
        pt: 'Certifique-se de que ambos os campos estejam preenchidos: ID do clube e ID do referidor (3383-3619). Quando pronto, o botão «Confirmar» fica ativo — toque nele.',
        ar: 'تأكد من ملء كلا الحقلين: معرّف النادي ومعرّف المُحيل (3383-3619). بمجرد الانتهاء، يصبح زر «تأكيد» نشطاً — اضغط عليه.',
        hi: 'सुनिश्चित करें कि दोनों फ़ील्ड भरी हों: क्लब ID और रेफरर ID (3383-3619)। एक बार पूरा होने पर «पुष्टि करें» बटन सक्रिय हो जाता है — उसे टैप करें।',
        fa: 'مطمئن شوید که هر دو فیلد پر شده‌اند: شناسه باشگاه و شناسه معرف (3383-3619). پس از تکمیل، دکمه «تأیید» فعال می‌شود — روی آن ضربه بزنید.',
        tr: "Her iki alanın dolu olduğundan emin ol: Kulüp ID'si ve Referans ID'si (3383-3619). Tamamlandığında «Onayla» düğmesi aktif olur — ona dokun.",
        az: 'Hər iki sahənin dolu olduğundan əmin ol: Klub ID-si və Referral ID-si (3383-3619). Tamamlandıqda «Təsdiqlə» düyməsi aktiv olur — ona bas.',
        zh: '确认两个字段均已填写：俱乐部 ID 和推荐人 ID (3383-3619)。完成后，「确认」按钮将激活 — 点击它。',
        ja: '両方のフィールドが入力されていることを確認してください：クラブIDとリファラーID (3383-3619)。完了したら「確認」ボタンがアクティブになります — タップしてください。',
      },
      img: '/images/join/step3-form-filled.png',
      note: {
        ru: 'Если кнопка «Подтвердить» не активна — проверьте, что оба поля заполнены.',
        en: 'If the "Confirm" button is not active — check that both fields are filled.',
        es: 'Si el botón «Confirmar» no está activo — verifica que ambos campos estén llenos.',
        de: 'Wenn die Schaltfläche «Bestätigen» nicht aktiv ist — prüfe, dass beide Felder ausgefüllt sind.',
        fr: "Si le bouton «Confirmer» n'est pas actif — vérifiez que les deux champs sont remplis.",
        it: 'Se il pulsante «Conferma» non è attivo — controlla che entrambi i campi siano compilati.',
        pt: 'Se o botão «Confirmar» não estiver ativo — verifique se ambos os campos estão preenchidos.',
        ar: 'إذا لم يكن زر «تأكيد» نشطاً — تحقق من ملء كلا الحقلين.',
        hi: 'अगर «पुष्टि करें» बटन सक्रिय नहीं है — जांचें कि दोनों फ़ील्ड भरी हैं।',
        fa: 'اگر دکمه «تأیید» فعال نیست — بررسی کنید که هر دو فیلد پر شده باشند.',
        tr: '«Onayla» düğmesi aktif değilse — her iki alanın dolu olduğunu kontrol et.',
        az: '«Təsdiqlə» düyməsi aktiv deyilsə — hər iki sahənin dolu olduğunu yoxla.',
        zh: '如果「确认」按钮未激活 — 请检查两个字段是否都已填写。',
        ja: '「確認」ボタンがアクティブでない場合 — 両方のフィールドが入力されているか確認してください。',
      },
    },
    {
      num: 4,
      title: {
        ru: 'Страница клуба — нажмите «Присоединиться»', en: 'Club page — tap "Join"',
        es: 'Página del club — toca «Unirse»', de: 'Club-Seite — tippe auf «Beitreten»',
        fr: 'Page du club — appuyez sur «Rejoindre»', it: 'Pagina del club — tocca «Unisciti»',
        pt: 'Página do clube — toque em «Entrar»', ar: 'صفحة النادي — اضغط على «انضم»',
        hi: 'क्लब पेज — «जॉइन» टैप करें', fa: 'صفحه باشگاه — روی «پیوستن» ضربه بزنید',
        tr: "Kulüp sayfası — «Katıl»'a dokun", az: 'Klub səhifəsi — «Qoşul»a bas',
        zh: '俱乐部页面 — 点击「加入」', ja: 'クラブページ — 「参加」をタップ',
      },
      desc: {
        ru: 'Появится страница клуба MOJO. Вы увидите:\n\n• Название клуба и его ID\n• Количество членов клуба\n• Поле «Информация для проверки» — напишите туда краткое приветствие, например: «Привет! Я [ваш никнейм]»\n\nПосле этого нажмите зелёную кнопку «Присоединиться» внизу экрана.',
        en: "The MOJO club page appears. You'll see:\n\n• Club name and ID\n• Number of members\n• \"Verification info\" field — write a short greeting, e.g. \"Hi! I'm [your nickname]\"\n\nThen tap the green \"Join\" button at the bottom of the screen.",
        es: 'Aparece la página del club MOJO. Verás:\n\n• Nombre e ID del club\n• Número de miembros\n• Campo «Información de verificación» — escribe un breve saludo, p. ej. «¡Hola! Soy [tu apodo]»\n\nLuego toca el botón verde «Unirse» en la parte inferior de la pantalla.',
        de: 'Die MOJO-Club-Seite erscheint. Du siehst:\n\n• Club-Name und ID\n• Anzahl der Mitglieder\n• Feld «Verifizierungsinfo» — schreib eine kurze Begrüßung, z. B. «Hallo! Ich bin [dein Nickname]»\n\nTippe dann auf die grüne Schaltfläche «Beitreten» unten auf dem Bildschirm.',
        fr: "La page du club MOJO apparaît. Vous verrez :\n\n• Nom du club et ID\n• Nombre de membres\n• Champ «Informations de vérification» — écrivez une courte salutation, ex. «Bonjour ! Je suis [votre pseudo]»\n\nEnsuite, appuyez sur le bouton vert «Rejoindre» en bas de l'écran.",
        it: "Appare la pagina del club MOJO. Vedrai:\n\n• Nome del club e ID\n• Numero di membri\n• Campo «Informazioni di verifica» — scrivi un breve saluto, es. «Ciao! Sono [tuo nickname]»\n\nQuindi tocca il pulsante verde «Unisciti» in fondo allo schermo.",
        pt: "A página do clube MOJO aparece. Você verá:\n\n• Nome do clube e ID\n• Número de membros\n• Campo «Informações de verificação» — escreva uma saudação curta, ex. «Olá! Sou [seu apelido]»\n\nDepois toque no botão verde «Entrar» na parte inferior da tela.",
        ar: 'تظهر صفحة نادي MOJO. ستشاهد:\n\n• اسم النادي ومعرّفه\n• عدد الأعضاء\n• حقل «معلومات التحقق» — اكتب تحية قصيرة، مثل: «مرحباً! أنا [اسمك المستعار]»\n\nثم اضغط على زر «انضم» الأخضر في أسفل الشاشة.',
        hi: 'MOJO क्लब पेज दिखाई देता है। आप देखेंगे:\n\n• क्लब का नाम और ID\n• सदस्यों की संख्या\n• «सत्यापन जानकारी» फ़ील्ड — एक छोटा अभिवादन लिखें, जैसे: «नमस्ते! मैं [आपका उपनाम] हूं»\n\nफिर स्क्रीन के नीचे हरे «जॉइन» बटन को टैप करें।',
        fa: 'صفحه باشگاه MOJO نمایش داده می‌شود. می‌بینید:\n\n• نام باشگاه و شناسه\n• تعداد اعضا\n• فیلد «اطلاعات تأیید» — یک سلام کوتاه بنویسید، مثلاً: «سلام! من [نام کاربری شما] هستم»\n\nسپس دکمه سبز «پیوستن» را در پایین صفحه ضربه بزنید.',
        tr: "MOJO kulüp sayfası görünür. Göreceksin:\n\n• Kulüp adı ve ID'si\n• Üye sayısı\n• «Doğrulama bilgisi» alanı — kısa bir selamlama yaz, örn. «Merhaba! Ben [takma adın]»\n\nArdından ekranın altındaki yeşil «Katıl» düğmesine dokun.",
        az: 'MOJO klub səhifəsi görünür. Görəcəksən:\n\n• Klub adı və ID-si\n• Üzv sayı\n• «Yoxlama məlumatı» sahəsi — qısa salamlama yaz, məs. «Salam! Mən [ləqəbin]»\n\nSonra ekranın altındakı yaşıl «Qoşul» düyməsinə bas.',
        zh: 'MOJO 俱乐部页面将显示出来。您将看到：\n\n• 俱乐部名称和 ID\n• 成员数量\n• 「验证信息」字段 — 写下简短问候，例如：「您好！我是 [您的昵称]」\n\n然后点击屏幕底部的绿色「加入」按钮。',
        ja: 'MOJOクラブページが表示されます。以下が確認できます：\n\n• クラブ名とID\n• メンバー数\n• 「確認情報」フィールド — 短い挨拶を書いてください、例：「こんにちは！私は[あなたのニックネーム]です」\n\n次に画面下部の緑の「参加」ボタンをタップしてください。',
      },
      img: '/images/join/step4-join.png',
      note: {
        ru: 'Заполните поле «Информация для проверки» — это ускорит одобрение заявки.',
        en: 'Fill in the "Verification info" field — this speeds up approval.',
        es: 'Completa el campo «Información de verificación» — esto acelera la aprobación.',
        de: 'Füll das Feld «Verifizierungsinfo» aus — das beschleunigt die Genehmigung.',
        fr: "Remplissez le champ «Informations de vérification» — cela accélère l'approbation.",
        it: "Compila il campo «Informazioni di verifica» — questo velocizza l'approvazione.",
        pt: 'Preencha o campo «Informações de verificação» — isso acelera a aprovação.',
        ar: 'املأ حقل «معلومات التحقق» — هذا يسرّع الموافقة.',
        hi: '«सत्यापन जानकारी» फ़ील्ड भरें — इससे मंजूरी जल्दी मिलती है।',
        fa: 'فیلد «اطلاعات تأیید» را پر کنید — این تأیید را سریع‌تر می‌کند.',
        tr: '«Doğrulama bilgisi» alanını doldur — bu onayı hızlandırır.',
        az: '«Yoxlama məlumatı» sahəsini doldur — bu təsdiqi sürətləndirir.',
        zh: '填写「验证信息」字段 — 这将加快审批速度。',
        ja: '「確認情報」フィールドを入力してください — これにより承認が早まります。',
      },
    },
    {
      num: 5,
      title: {
        ru: 'Напишите менеджеру в Telegram', en: 'Message the manager on Telegram',
        es: 'Escribe al gerente en Telegram', de: 'Schreibe dem Manager in Telegram',
        fr: 'Écrire au manager sur Telegram', it: 'Scrivi al manager su Telegram',
        pt: 'Escreva para o gerente no Telegram', ar: 'أرسل رسالة للمدير عبر Telegram',
        hi: 'Telegram पर मैनेजर को संदेश भेजें', fa: 'در Telegram به مدیر پیام بدهید',
        tr: "Telegram'da yöneticiye yaz", az: 'Telegramda menecerə yaz',
        zh: '在 Telegram 联系经理', ja: 'Telegramでマネージャーにメッセージ',
      },
      desc: {
        ru: 'Заявка отправлена — теперь напишите менеджеру MOJO Contacts в Telegram. Укажите:\n\n• Ваш никнейм в ClubGG\n• В какой клуб хотите вступить (MOJO или Massiv)\n\nОбычно одобрение приходит в течение нескольких минут. Менеджер может задать дополнительные вопросы.',
        en: 'Request sent — now message manager MOJO Contacts on Telegram. Include:\n\n• Your ClubGG nickname\n• Which club you want to join (MOJO or Massiv)\n\nApproval usually takes just a few minutes. The manager may ask a few questions.',
        es: 'Solicitud enviada — ahora escribe al gerente MOJO Contacts en Telegram. Incluye:\n\n• Tu apodo de ClubGG\n• A qué club quieres unirte (MOJO o Massiv)\n\nLa aprobación suele tardar solo unos minutos. El gerente puede hacer algunas preguntas.',
        de: 'Anfrage gesendet — schreibe jetzt dem Manager MOJO Contacts in Telegram. Gib an:\n\n• Deinen ClubGG-Nickname\n• Welchem Club du beitreten möchtest (MOJO oder Massiv)\n\nDie Genehmigung dauert normalerweise nur wenige Minuten. Der Manager kann einige Fragen stellen.',
        fr: "Demande envoyée — envoyez maintenant un message au manager MOJO Contacts sur Telegram. Mentionnez :\n\n• Votre pseudo ClubGG\n• Le club que vous souhaitez rejoindre (MOJO ou Massiv)\n\nL'approbation prend généralement quelques minutes. Le manager peut poser quelques questions.",
        it: 'Richiesta inviata — ora scrivi al manager MOJO Contacts su Telegram. Includi:\n\n• Il tuo nickname ClubGG\n• A quale club vuoi unirti (MOJO o Massiv)\n\nLa approvazione di solito richiede solo pochi minuti. Il manager potrebbe fare alcune domande.',
        pt: 'Solicitação enviada — agora escreva para o gerente MOJO Contacts no Telegram. Inclua:\n\n• Seu apelido no ClubGG\n• Qual clube você quer entrar (MOJO ou Massiv)\n\nA aprovação geralmente leva apenas alguns minutos. O gerente pode fazer algumas perguntas.',
        ar: 'تم إرسال الطلب — الآن أرسل رسالة للمدير MOJO Contacts عبر Telegram. اذكر:\n\n• اسمك المستعار في ClubGG\n• النادي الذي تريد الانضمام إليه (MOJO أو Massiv)\n\nعادةً ما تستغرق الموافقة بضع دقائق فقط. قد يطرح المدير بعض الأسئلة.',
        hi: 'रिक्वेस्ट भेजी गई — अब Telegram पर मैनेजर MOJO Contacts को संदेश भेजें। शामिल करें:\n\n• ClubGG में आपका उपनाम\n• आप किस क्लब में जॉइन करना चाहते हैं (MOJO या Massiv)\n\nमंजूरी आमतौर पर कुछ मिनटों में मिल जाती है। मैनेजर कुछ सवाल पूछ सकते हैं।',
        fa: 'درخواست ارسال شد — حالا در Telegram به مدیر MOJO Contacts پیام بدهید. موارد زیر را ذکر کنید:\n\n• نام کاربری شما در ClubGG\n• کدام باشگاه می‌خواهید بپیوندید (MOJO یا Massiv)\n\nتأیید معمولاً فقط چند دقیقه طول می‌کشد. مدیر ممکن است چند سوال بپرسد.',
        tr: "İstek gönderildi — şimdi Telegram'da yönetici MOJO Contacts'e yaz. Şunları belirt:\n\n• ClubGG takma adın\n• Hangi kulübe katılmak istediğin (MOJO veya Massiv)\n\nOnay genellikle sadece birkaç dakika sürer. Yönetici bazı sorular sorabilir.",
        az: 'Sorğu göndərildi — indi Telegramda menecer MOJO Contacts-ə yaz. Qeyd et:\n\n• ClubGG-dəki ləqəbin\n• Hansı kluba qoşulmaq istədiyini (MOJO və ya Massiv)\n\nTəsdiq adətən yalnız bir neçə dəqiqə çəkir. Menecer bir neçə sual verə bilər.',
        zh: '申请已发送 — 现在请在 Telegram 上联系经理 MOJO Contacts。请说明：\n\n• 您在 ClubGG 的昵称\n• 您想加入哪个俱乐部（MOJO 或 Massiv）\n\n审批通常只需几分钟。经理可能会提出几个问题。',
        ja: 'リクエストが送信されました — TelegramでマネージャーのTelegram MOJO Contactsにメッセージを送ってください。以下を含めてください：\n\n• ClubGGのニックネーム\n• 参加したいクラブ（MOJOまたはMassiv）\n\n承認は通常数分で完了します。マネージャーからいくつか質問があるかもしれません。',
      },
      extra: 'telegram',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/join"
        langs={{
          ru: { title: "Как вступить в покер клуб GGClub — инструкция MOJO", description: "Пошаговая инструкция как вступить в MOJO Poker Club на GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Реферальный код 3383-3619.", keywords: "как вступить в GGClub, ClubGG инструкция, Massiv Poker Union регистрация, MOJO Poker вступить" },
          en: { title: "How to Join MOJO Poker Club on GGClub — Step by Step Guide", description: "Step-by-step guide to join MOJO Poker Club on GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Referral code 3383-3619.", keywords: "how to join GGClub, ClubGG guide, Massiv Poker Union sign up, MOJO Poker join" },
          es: { title: "Cómo unirse a MOJO Poker Club en GGClub — Guía Paso a Paso", description: "Guía paso a paso para unirse a MOJO Poker Club en GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Código de referido 3383-3619." },
          de: { title: "MOJO Poker Club auf GGClub beitreten — Schritt-für-Schritt", description: "Schritt-für-Schritt-Anleitung zum Beitreten von MOJO Poker Club auf GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Referral-Code 3383-3619." },
          fr: { title: "Comment rejoindre MOJO Poker Club sur GGClub — Guide Étape par Étape", description: "Guide étape par étape pour rejoindre MOJO Poker Club sur GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Code de parrainage 3383-3619." },
          it: { title: "Come unirsi a MOJO Poker Club su GGClub — Guida Passo Passo", description: "Guida passo passo per unirsi a MOJO Poker Club su GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Codice referral 3383-3619." },
          pt: { title: "Como entrar no MOJO Poker Club no GGClub — Guia Passo a Passo", description: "Guia passo a passo para entrar no MOJO Poker Club no GGClub (ClubGG). Massiv Poker Union ID 799798, MOJO ID 356323. Código de referência 3383-3619." },
          ar: { title: "كيفية الانضمام إلى MOJO Poker Club على GGClub — دليل خطوة بخطوة", description: "دليل خطوة بخطوة للانضمام إلى MOJO Poker Club على GGClub (ClubGG). Massiv Poker Union ID 799798، MOJO ID 356323. رمز الإحالة 3383-3619." },
          hi: { title: "GGClub पर MOJO Poker Club में कैसे शामिल हों — चरण-दर-चरण गाइड", description: "GGClub (ClubGG) पर MOJO Poker Club में शामिल होने के लिए चरण-दर-चरण गाइड। Massiv Poker Union ID 799798, MOJO ID 356323। रेफरल कोड 3383-3619।" },
          fa: { title: "نحوه پیوستن به MOJO Poker Club در GGClub — راهنمای گام به گام", description: "راهنمای گام به گام پیوستن به MOJO Poker Club در GGClub (ClubGG). شناسه Massiv Poker Union 799798، شناسه MOJO 356323. کد معرف 3383-3619." },
          tr: { title: "GGClub'da MOJO Poker Club'a Nasıl Katılınır — Adım Adım Rehber", description: "GGClub (ClubGG)'da MOJO Poker Club'a katılmak için adım adım kılavuz. Massiv Poker Union ID 799798, MOJO ID 356323. Referans kodu 3383-3619." },
          az: { title: "GGClub-da MOJO Poker Club-a Necə Qoşulunur — Addım-addım Bələdçi", description: "GGClub (ClubGG)-da MOJO Poker Club-a qoşulmaq üçün addım-addım bələdçi. Massiv Poker Union ID 799798, MOJO ID 356323. Referral kodu 3383-3619." },
          zh: { title: "如何加入 GGClub 上的 MOJO Poker Club — 逐步指南", description: "逐步指南，了解如何在 GGClub (ClubGG) 上加入 MOJO Poker Club。Massiv Poker Union ID 799798，MOJO ID 356323。推荐码 3383-3619。" },
          ja: { title: "GGClubでMOJO Poker Clubに参加する方法 — ステップバイステップガイド", description: "GGClub (ClubGG) でMOJO Poker Clubに参加するためのステップバイステップガイド。Massiv Poker Union ID 799798、MOJO ID 356323。紹介コード 3383-3619。" },
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Join MOJO Poker Club on GGClub',
          description: 'Guide to joining MOJO Poker Club on GGClub / Massiv Poker Union',
          url: 'https://mojopokerclub.com/join',
        }}
      />
      <Navbar />
      <PageHeader
        label={t('pages.joinGuide.label')}
        title={t('pages.joinGuide.title')}
        subtitle={t('pages.joinGuide.subtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.joinGuide.label') },
        ]}
      />

      <main style={{ flex: 1, padding: '80px 0 100px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>

          {steps.map((step, idx) => (
            <div key={step.num} style={{ marginBottom: idx < steps.length - 1 ? 80 : 0 }}>

              {/* Step header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'hsl(4 80% 45%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 13, fontWeight: 800, color: 'white',
                }}>
                  {step.num}
                </div>
                <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {getLang(step.title)}
                </h2>
              </div>

              {/* Content */}
              <div style={{ paddingLeft: 52 }}>

                {/* Description with line breaks */}
                <div style={{ marginBottom: 24 }}>
                  {(getLang(step.desc)).split('\n').map((line, i) => (
                    line === '' ? <div key={i} style={{ height: 8 }} /> :
                    line.startsWith('•') ? (
                      <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                        <span style={{ color: 'hsl(4 80% 45%)', flexShrink: 0, marginTop: 2 }}>•</span>
                        <span style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)' }}>
                          {line.slice(2)}
                        </span>
                      </div>
                    ) : (
                      <p key={i} style={{ margin: '0 0 8px', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                        {line}
                      </p>
                    )
                  ))}
                </div>

                {/* Club IDs extra */}
                {step.extra === 'clubs' && (
                  <div style={{ marginBottom: 24 }}>

                    {/* ── Clubs section ── */}
                    <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
                      {t('pages.joinGuide.mojoClubs')}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>

                      {/* Massiv Poker Union */}
                      <div style={{
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '14px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                            <img src="/images/mojo-logo-dark.svg" alt="MOJO Massiv" style={{ width: 38, height: 38, objectFit: 'contain' }} />
                          </div>
                          <div>
                            <p style={{ margin: '0 0 2px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              Massiv Poker Union
                            </p>
                            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO: Massiv Poker Union</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Club ID</p>
                            <span style={{ fontSize: 22, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>799798</span>
                          </div>
                          <CopyBtn value="799798" label={t('pages.copy')} copiedLabel={t('pages.copied')} />
                        </div>
                      </div>

                      {/* MOJO */}
                      <div style={{
                        borderRadius: 8,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '14px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <img src="/images/mojo-logo-red.svg" alt="MOJO" style={{ width: 36, height: 36, objectFit: 'contain' }} />
                          </div>
                          <div>
                            <p style={{ margin: '0 0 2px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              {t('pages.pokerClub')}
                            </p>
                            <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO</span>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Club ID</p>
                            <span style={{ fontSize: 22, fontWeight: 800, color: 'white', fontVariantNumeric: 'tabular-nums' }}>356323</span>
                          </div>
                          <CopyBtn value="356323" label={t('pages.copy')} copiedLabel={t('pages.copied')} />
                        </div>
                      </div>
                    </div>

                    {/* ── Referral section ── */}
                    <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
                      {t('pages.joinGuide.referralCode')}
                    </p>
                    <div style={{
                      borderRadius: 8,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        padding: '8px 18px',
                        background: 'rgba(255,255,255,0.03)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        display: 'flex', alignItems: 'center', gap: 8,
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>
                          {t('pages.joinGuide.referralRequired')}
                        </span>
                      </div>
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '16px 18px', gap: 16, flexWrap: 'wrap',
                      }}>
                        <div>
                          <p style={{ margin: '0 0 3px', fontSize: 11, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                            {t('pages.joinGuide.referrerId')}
                          </p>
                          <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>MOJO Poker Club</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <div style={{ textAlign: 'right' }}>
                            <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                              {t('pages.joinGuide.codeLabel')}
                            </p>
                            <span style={{ fontSize: 26, fontWeight: 900, color: 'white', fontVariantNumeric: 'tabular-nums', letterSpacing: '0.06em' }}>
                              {REFERRAL}
                            </span>
                          </div>
                          <CopyBtn value={REFERRAL} label={t('pages.copy')} copiedLabel={t('pages.copied')} />
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* Telegram extra */}
                {step.extra === 'telegram' && (
                  <a
                    href="/contact"
                   
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24,
                      padding: '13px 22px', borderRadius: 4, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'white', fontSize: 14, fontWeight: 600,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
                    </svg>
                    MOJO Contacts
                  </a>
                )}

                {/* Note */}
                {step.note && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderLeft: '3px solid hsl(4 80% 45%)',
                    marginBottom: 24,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.6,
                  }}>
                    {getLang(step.note!)}
                  </div>
                )}

                {/* Screenshot */}
                {step.img && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
                      display: 'inline-block',
                    }}>
                      <img
                        src={step.img}
                        alt={getLang(step.title)}
                        style={{ width: 320, height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              {idx < steps.length - 1 && (
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '80px 0 0' }} />
              )}
            </div>
          ))}

          {/* Chips info block */}
          <div style={{
            marginTop: 72,
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--bg-card)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
                {t('pages.joinGuide.afterJoining')}
              </span>
            </div>
            <div style={{ padding: '24px 24px', display: 'flex', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 32, lineHeight: 1 }}>🎯</div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>
                  {t('pages.joinGuide.chipsTitle')}
                </h3>
                <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>
                  {t('pages.joinGuide.chipsDesc')}
                </p>
                <a
                  href="/contact"
                 
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    padding: '11px 20px', borderRadius: 4, textDecoration: 'none',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white', fontSize: 13, fontWeight: 600,
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.886l-1.872 8.82c-.14.62-.503.77-.995.48l-2.75-2.026-1.328 1.278c-.147.147-.27.27-.553.27l.196-2.79 5.088-4.597c.221-.196-.048-.305-.344-.11l-6.29 3.96-2.713-.85c-.59-.184-.602-.59.123-.872l10.582-4.08c.49-.178.92.108.856.517z" fill="#229ED9"/>
                  </svg>
                  MOJO Contacts
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
