import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { VPNSidebar } from '@/components/VPNSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';
import SEO from '@/components/SEO';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Step {
  num: number;
  title: Record<string, string>;
  desc: Record<string, string>;
  img: string;
  note?: Record<string, string>;
}

const steps: Step[] = [
  {
    num: 1,
    title: {
      ru: 'Откройте приложение ClubGG', en: 'Open the ClubGG App',
      es: 'Abrir la aplicación ClubGG', de: 'ClubGG-App öffnen',
      fr: "Ouvrir l'application ClubGG", it: "Apri l'app ClubGG",
      pt: 'Abrir o aplicativo ClubGG', ar: 'افتح تطبيق ClubGG',
      hi: 'ClubGG ऐप खोलें', fa: 'اپلیکیشن ClubGG را باز کنید',
      tr: 'ClubGG uygulamasını aç', az: 'ClubGG tətbiqini aç',
      zh: '打开 ClubGG 应用', ja: 'ClubGGアプリを開く',
    },
    desc: {
      ru: 'Запустите ClubGG. На главном экране нажмите кнопку «Присоединиться» — она откроет форму регистрации GGPass.',
      en: 'Launch ClubGG. On the main screen tap «Join» — it opens the GGPass registration form.',
      es: 'Inicia ClubGG. En la pantalla principal toca «Unirse» — abre el formulario de registro de GGPass.',
      de: 'Starte ClubGG. Tippe auf dem Hauptbildschirm auf «Beitreten» — das öffnet das GGPass-Registrierungsformular.',
      fr: "Lancez ClubGG. Sur l'écran principal, appuyez sur «Rejoindre» — cela ouvre le formulaire d'inscription GGPass.",
      it: 'Avvia ClubGG. Nella schermata principale tocca «Unisciti» — si apre il modulo di registrazione GGPass.',
      pt: 'Inicie o ClubGG. Na tela principal toque em «Entrar» — abre o formulário de registro do GGPass.',
      ar: 'شغّل ClubGG. في الشاشة الرئيسية اضغط على «انضم» — سيفتح نموذج تسجيل GGPass.',
      hi: 'ClubGG लॉन्च करें। मुख्य स्क्रीन पर «जॉइन» टैप करें — यह GGPass रजिस्ट्रेशन फॉर्म खोलता है।',
      fa: 'ClubGG را اجرا کنید. در صفحه اصلی روی «پیوستن» ضربه بزنید — فرم ثبت‌نام GGPass باز می‌شود.',
      tr: "ClubGG'yi başlat. Ana ekranda «Katıl»'a dokun — GGPass kayıt formu açılır.",
      az: 'ClubGG-ni işə sal. Əsas ekranda «Qoşul» düyməsinə bas — GGPass qeydiyyat forması açılır.',
      zh: '启动 ClubGG。在主屏幕上点击「加入」— 将打开 GGPass 注册表单。',
      ja: 'ClubGGを起動します。メイン画面で「参加」をタップ — GGPass登録フォームが開きます。',
    },
    img: '/images/account/step1-start.png',
  },
  {
    num: 2,
    title: {
      ru: 'Введите адрес электронной почты', en: 'Enter your Email',
      es: 'Introducir tu correo electrónico', de: 'E-Mail-Adresse eingeben',
      fr: 'Saisir votre e-mail', it: 'Inserisci la tua email',
      pt: 'Inserir seu e-mail', ar: 'أدخل بريدك الإلكتروني',
      hi: 'अपना ईमेल दर्ज करें', fa: 'ایمیل خود را وارد کنید',
      tr: 'E-posta adresini gir', az: 'E-poçt ünvanını daxil et',
      zh: '输入电子邮件地址', ja: 'メールアドレスを入力',
    },
    desc: {
      ru: 'Откроется форма GGPass. Введите адрес электронной почты и нажмите «Далее». Также можно войти через Google, Facebook или Apple.',
      en: 'The GGPass form opens. Enter your email address and tap «Next». You can also sign in via Google, Facebook, or Apple.',
      es: 'Se abre el formulario de GGPass. Ingresa tu dirección de correo electrónico y toca «Siguiente». También puedes iniciar sesión con Google, Facebook o Apple.',
      de: 'Das GGPass-Formular öffnet sich. Gib deine E-Mail-Adresse ein und tippe auf «Weiter». Du kannst dich auch über Google, Facebook oder Apple anmelden.',
      fr: "Le formulaire GGPass s'ouvre. Saisissez votre adresse e-mail et appuyez sur «Suivant». Vous pouvez aussi vous connecter via Google, Facebook ou Apple.",
      it: 'Si apre il modulo GGPass. Inserisci il tuo indirizzo email e tocca «Avanti». Puoi anche accedere tramite Google, Facebook o Apple.',
      pt: 'O formulário GGPass abre. Insira seu endereço de e-mail e toque em «Próximo». Você também pode entrar via Google, Facebook ou Apple.',
      ar: 'يفتح نموذج GGPass. أدخل عنوان بريدك الإلكتروني واضغط على «التالي». يمكنك أيضاً تسجيل الدخول عبر Google أو Facebook أو Apple.',
      hi: 'GGPass फॉर्म खुलता है। अपना ईमेल पता दर्ज करें और «अगला» टैप करें। आप Google, Facebook या Apple के जरिए भी साइन इन कर सकते हैं।',
      fa: 'فرم GGPass باز می‌شود. آدرس ایمیل خود را وارد کرده و روی «بعدی» ضربه بزنید. همچنین می‌توانید از طریق Google، Facebook یا Apple وارد شوید.',
      tr: "GGPass formu açılır. E-posta adresini gir ve «İleri»ye dokun. Google, Facebook veya Apple ile de giriş yapabilirsin.",
      az: 'GGPass forması açılır. E-poçt ünvanını daxil et və «İrəli»yə bas. Google, Facebook və ya Apple ilə də daxil ola bilərsin.',
      zh: '打开 GGPass 表单。输入您的电子邮件地址，然后点击「下一步」。您也可以通过 Google、Facebook 或 Apple 登录。',
      ja: 'GGPassフォームが開きます。メールアドレスを入力し「次へ」をタップ。Google、Facebook、Appleでもサインインできます。',
    },
    img: '/images/account/step2-email.png',
  },
  {
    num: 3,
    title: {
      ru: 'Подтвердите email', en: 'Verify your Email',
      es: 'Verificar tu correo electrónico', de: 'E-Mail verifizieren',
      fr: 'Vérifier votre e-mail', it: 'Verifica la tua email',
      pt: 'Verificar seu e-mail', ar: 'تحقق من بريدك الإلكتروني',
      hi: 'अपना ईमेल सत्यापित करें', fa: 'ایمیل خود را تأیید کنید',
      tr: 'E-postanı doğrula', az: 'E-poçtunu təsdiq et',
      zh: '验证您的邮箱', ja: 'メールアドレスを確認',
    },
    desc: {
      ru: 'На вашу почту придёт письмо с 4-значным кодом. Введите код в поля. Если письмо не пришло — проверьте папку «Спам» или запросите новый код.',
      en: 'A 4-digit code will be sent to your email. Enter the code in the fields. If no email arrived, check Spam or request a new code.',
      es: 'Se enviará un código de 4 dígitos a tu correo. Ingresa el código en los campos. Si no llegó el correo, revisa la carpeta de spam o solicita un nuevo código.',
      de: 'Ein 4-stelliger Code wird an deine E-Mail gesendet. Gib den Code in die Felder ein. Falls keine E-Mail ankam, prüfe den Spam-Ordner oder fordere einen neuen Code an.',
      fr: "Un code à 4 chiffres sera envoyé à votre e-mail. Entrez le code dans les champs. Si aucun e-mail n'est arrivé, vérifiez les spams ou demandez un nouveau code.",
      it: 'Verrà inviato un codice a 4 cifre alla tua email. Inserisci il codice nei campi. Se non è arrivata nessuna email, controlla lo spam o richiedi un nuovo codice.',
      pt: 'Um código de 4 dígitos será enviado para o seu e-mail. Insira o código nos campos. Se não chegou nenhum e-mail, verifique o spam ou solicite um novo código.',
      ar: 'سيتم إرسال رمز مكون من 4 أرقام إلى بريدك الإلكتروني. أدخل الرمز في الحقول. إذا لم يصل البريد، تحقق من مجلد البريد العشوائي أو اطلب رمزاً جديداً.',
      hi: 'आपके ईमेल पर 4 अंकों का कोड भेजा जाएगा। फ़ील्ड में कोड दर्ज करें। अगर ईमेल नहीं आया तो स्पैम फ़ोल्डर जांचें या नया कोड मांगें।',
      fa: 'یک کد 4 رقمی به ایمیل شما ارسال می‌شود. کد را در فیلدها وارد کنید. اگر ایمیلی نرسید، پوشه اسپم را بررسی کنید یا کد جدید درخواست دهید.',
      tr: 'E-postana 4 haneli bir kod gönderilecek. Kodu alanlara gir. E-posta gelmediyse spam klasörünü kontrol et veya yeni kod iste.',
      az: 'E-poçtuna 4 rəqəmli kod göndəriləcək. Kodu sahələrə daxil et. E-poçt gəlmədisə, spam qovluğunu yoxla və ya yeni kod tələb et.',
      zh: '系统将向您的邮箱发送一个4位验证码。在输入框中填入验证码。如果未收到邮件，请检查垃圾邮件文件夹或请求重新发送。',
      ja: '4桁のコードがメールに送信されます。コードをフィールドに入力してください。メールが届かない場合はスパムフォルダを確認するか、新しいコードをリクエストしてください。',
    },
    img: '/images/account/step3-verify.png',
    note: {
      ru: 'Код действителен 60 секунд. Если не пришёл — нажмите «Отправить код снова».',
      en: "The code is valid for 60 seconds. If it didn't arrive, tap «Resend Code».",
      es: 'El código es válido por 60 segundos. Si no llegó, toca «Reenviar código».',
      de: 'Der Code ist 60 Sekunden gültig. Falls er nicht ankam, tippe auf «Code erneut senden».',
      fr: "Le code est valable 60 secondes. S'il n'est pas arrivé, appuyez sur «Renvoyer le code».",
      it: 'Il codice è valido per 60 secondi. Se non è arrivato, tocca «Reinvia codice».',
      pt: 'O código é válido por 60 segundos. Se não chegou, toque em «Reenviar código».',
      ar: 'الرمز صالح لمدة 60 ثانية. إذا لم يصل، اضغط على «إعادة إرسال الرمز».',
      hi: 'कोड 60 सेकंड के लिए वैध है। अगर नहीं आया तो «कोड पुनः भेजें» टैप करें।',
      fa: 'کد به مدت 60 ثانیه معتبر است. اگر نرسید، روی «ارسال مجدد کد» ضربه بزنید.',
      tr: "Kod 60 saniye geçerlidir. Gelmediyse «Kodu yeniden gönder» düğmesine dokun.",
      az: 'Kod 60 saniyə etibarlıdır. Gəlmədisə, «Kodu yenidən göndər»ə bas.',
      zh: '验证码有效期为60秒。如果未收到，请点击「重新发送验证码」。',
      ja: 'コードは60秒間有効です。届かない場合は「コードを再送」をタップしてください。',
    },
  },
  {
    num: 4,
    title: {
      ru: 'Установите пароль', en: 'Set a Password',
      es: 'Establecer una contraseña', de: 'Passwort festlegen',
      fr: 'Définir un mot de passe', it: 'Imposta una password',
      pt: 'Definir uma senha', ar: 'تعيين كلمة مرور',
      hi: 'पासवर्ड सेट करें', fa: 'رمز عبور تنظیم کنید',
      tr: 'Şifre belirle', az: 'Şifrə təyin et',
      zh: '设置密码', ja: 'パスワードを設定',
    },
    desc: {
      ru: 'Придумайте надёжный пароль и введите его дважды для подтверждения. Требования к паролю: от 8 до 20 символов, минимум одна цифра.',
      en: 'Create a strong password and enter it twice. Password requirements: 8–20 characters, at least one digit.',
      es: 'Crea una contraseña segura e ingrésala dos veces. Requisitos: 8–20 caracteres, al menos un dígito.',
      de: 'Erstelle ein sicheres Passwort und gib es zweimal ein. Anforderungen: 8–20 Zeichen, mindestens eine Ziffer.',
      fr: 'Créez un mot de passe fort et entrez-le deux fois. Exigences : 8 à 20 caractères, au moins un chiffre.',
      it: 'Crea una password sicura e inseriscila due volte. Requisiti: 8–20 caratteri, almeno una cifra.',
      pt: 'Crie uma senha forte e insira-a duas vezes. Requisitos: 8–20 caracteres, pelo menos um dígito.',
      ar: 'أنشئ كلمة مرور قوية وأدخلها مرتين. المتطلبات: 8–20 حرفاً، رقم واحد على الأقل.',
      hi: 'एक मजबूत पासवर्ड बनाएं और इसे दो बार दर्ज करें। आवश्यकताएं: 8–20 अक्षर, कम से कम एक अंक।',
      fa: 'یک رمز عبور قوی ایجاد کنید و آن را دو بار وارد کنید. الزامات: 8 تا 20 کاراکتر، حداقل یک عدد.',
      tr: 'Güçlü bir şifre oluştur ve iki kez gir. Gereksinimler: 8–20 karakter, en az bir rakam.',
      az: 'Güclü şifrə yarat və iki dəfə daxil et. Tələblər: 8–20 simvol, ən azı bir rəqəm.',
      zh: '创建一个强密码并输入两次确认。密码要求：8-20个字符，至少包含一个数字。',
      ja: '強力なパスワードを作成して2回入力してください。要件: 8〜20文字、少なくとも1つの数字。',
    },
    img: '/images/account/step4-password.png',
  },
  {
    num: 5,
    title: {
      ru: 'Создайте игровой профиль', en: 'Create your Gaming Profile',
      es: 'Crear tu perfil de juego', de: 'Spielprofil erstellen',
      fr: 'Créer votre profil de jeu', it: 'Crea il tuo profilo di gioco',
      pt: 'Criar seu perfil de jogo', ar: 'إنشاء ملف شخصي للألعاب',
      hi: 'अपना गेमिंग प्रोफ़ाइल बनाएं', fa: 'پروفایل بازی خود را بسازید',
      tr: 'Oyun profilini oluştur', az: 'Oyun profilini yarat',
      zh: '创建游戏档案', ja: 'ゲームプロフィールを作成',
    },
    desc: {
      ru: 'Выберите аватар и страну, затем придумайте никнейм. Требования: от 4 до 15 символов, только латиница, цифры и спецсимволы [ ] _ ! - @ . Никнейм не должен начинаться со спецсимвола.',
      en: 'Choose an avatar and country, then create a nickname. Requirements: 4–15 characters, latin letters, digits and [ ] _ ! - @ only. Nickname must not start with a special character.',
      es: 'Elige un avatar y país, luego crea un apodo. Requisitos: 4–15 caracteres, solo letras latinas, dígitos y [ ] _ ! - @. El apodo no debe comenzar con un carácter especial.',
      de: 'Wähle einen Avatar und ein Land, dann erstelle einen Nicknamen. Anforderungen: 4–15 Zeichen, nur lateinische Buchstaben, Ziffern und [ ] _ ! - @. Der Nickname darf nicht mit einem Sonderzeichen beginnen.',
      fr: "Choisissez un avatar et un pays, puis créez un pseudo. Exigences : 4–15 caractères, lettres latines, chiffres et [ ] _ ! - @ uniquement. Le pseudo ne doit pas commencer par un caractère spécial.",
      it: 'Scegli un avatar e il paese, poi crea un nickname. Requisiti: 4–15 caratteri, solo lettere latine, cifre e [ ] _ ! - @. Il nickname non deve iniziare con un carattere speciale.',
      pt: 'Escolha um avatar e país, depois crie um apelido. Requisitos: 4–15 caracteres, apenas letras latinas, dígitos e [ ] _ ! - @. O apelido não deve começar com um caractere especial.',
      ar: 'اختر صورة رمزية وبلداً، ثم أنشئ اسم مستخدم. المتطلبات: 4–15 حرفاً، أحرف لاتينية وأرقام و [ ] _ ! - @ فقط. يجب ألا يبدأ الاسم بحرف خاص.',
      hi: 'एक अवतार और देश चुनें, फिर एक उपनाम बनाएं। आवश्यकताएं: 4–15 अक्षर, केवल लैटिन अक्षर, अंक और [ ] _ ! - @। उपनाम एक विशेष वर्ण से शुरू नहीं होना चाहिए।',
      fa: 'یک آواتار و کشور انتخاب کنید، سپس یک نام کاربری بسازید. الزامات: 4 تا 15 کاراکتر، فقط حروف لاتین، اعداد و [ ] _ ! - @. نام کاربری نباید با کاراکتر خاص شروع شود.',
      tr: 'Bir avatar ve ülke seç, ardından takma ad oluştur. Gereksinimler: 4–15 karakter, yalnızca latin harfler, rakamlar ve [ ] _ ! - @. Takma ad özel karakterle başlamamalıdır.',
      az: 'Avatar və ölkə seç, sonra ləqəb yarat. Tələblər: 4–15 simvol, yalnız latın hərfləri, rəqəmlər və [ ] _ ! - @. Ləqəb xüsusi simvolla başlamamalıdır.',
      zh: '选择头像和国家，然后创建昵称。要求：4-15个字符，仅限拉丁字母、数字和 [ ] _ ! - @ 符号。昵称不能以特殊字符开头。',
      ja: 'アバターと国を選択し、ニックネームを作成してください。要件: 4〜15文字、ラテン文字、数字と [ ] _ ! - @ のみ。ニックネームは特殊文字で始めることはできません。',
    },
    img: '/images/account/step5-profile.png',
  },
  {
    num: 6,
    title: {
      ru: 'Примите условия использования', en: 'Accept Terms of Service',
      es: 'Aceptar los Términos de servicio', de: 'Nutzungsbedingungen akzeptieren',
      fr: "Accepter les conditions d'utilisation", it: 'Accetta i Termini di servizio',
      pt: 'Aceitar os Termos de serviço', ar: 'قبول شروط الخدمة',
      hi: 'सेवा की शर्तें स्वीकार करें', fa: 'شرایط خدمات را بپذیرید',
      tr: 'Hizmet Koşullarını kabul et', az: 'İstifadə şərtlərini qəbul et',
      zh: '接受服务条款', ja: '利用規約に同意',
    },
    desc: {
      ru: 'Ознакомьтесь с Условиями обслуживания и Политикой конфиденциальности. Поставьте галочку «Я согласен» и нажмите «Подтвердить».',
      en: 'Review the Terms of Service and Privacy Policy. Check «I agree» and tap «Confirm».',
      es: 'Revisa los Términos de servicio y la Política de privacidad. Marca «Acepto» y toca «Confirmar».',
      de: 'Lies die Nutzungsbedingungen und die Datenschutzrichtlinie. Setze ein Häkchen bei «Ich stimme zu» und tippe auf «Bestätigen».',
      fr: "Consultez les Conditions d'utilisation et la Politique de confidentialité. Cochez «J'accepte» et appuyez sur «Confirmer».",
      it: 'Leggi i Termini di servizio e la Privacy Policy. Spunta «Accetto» e tocca «Conferma».',
      pt: 'Revise os Termos de serviço e a Política de privacidade. Marque «Concordo» e toque em «Confirmar».',
      ar: 'اقرأ شروط الخدمة وسياسة الخصوصية. ضع علامة على «أوافق» واضغط على «تأكيد».',
      hi: 'सेवा की शर्तें और गोपनीयता नीति की समीक्षा करें। «मैं सहमत हूं» चेक करें और «पुष्टि करें» टैप करें।',
      fa: 'شرایط خدمات و سیاست حریم خصوصی را مطالعه کنید. «موافقم» را علامت بزنید و روی «تأیید» ضربه بزنید.',
      tr: "Hizmet Koşullarını ve Gizlilik Politikasını incele. «Kabul ediyorum» kutusunu işaretle ve «Onayla»ya dokun.",
      az: 'İstifadə şərtlərini və Gizlilik Siyasətini oxu. «Razıyam» qutusunu işarələ və «Təsdiqlə»yə bas.',
      zh: '阅读服务条款和隐私政策。勾选「我同意」，然后点击「确认」。',
      ja: '利用規約とプライバシーポリシーを確認してください。「同意する」にチェックを入れ、「確認」をタップしてください。',
    },
    img: '/images/account/step6-terms.png',
  },
  {
    num: 7,
    title: {
      ru: 'Аккаунт создан — вы в ClubGG!', en: "Account Created — You're in ClubGG!",
      es: '¡Cuenta creada — estás en ClubGG!', de: 'Konto erstellt — du bist in ClubGG!',
      fr: 'Compte créé — vous êtes dans ClubGG !', it: 'Account creato — sei in ClubGG!',
      pt: 'Conta criada — você está no ClubGG!', ar: 'تم إنشاء الحساب — أنت في ClubGG!',
      hi: 'खाता बना लिया — आप ClubGG में हैं!', fa: 'حساب ایجاد شد — شما در ClubGG هستید!',
      tr: "Hesap oluşturuldu — ClubGG'desin!", az: 'Hesab yaradıldı — ClubGG-dəsən!',
      zh: '账户已创建 — 欢迎加入 ClubGG！', ja: 'アカウント作成完了 — ClubGGへようこそ！',
    },
    desc: {
      ru: 'Регистрация завершена. Вы попадёте на главный экран приложения. Теперь найдите клуб MOJO через поисковую строку и отправьте заявку на вступление.',
      en: "Registration complete. You'll land on the main app screen. Now find the MOJO club via the search bar and send a join request.",
      es: 'Registro completo. Llegarás a la pantalla principal de la aplicación. Ahora encuentra el club MOJO a través de la barra de búsqueda y envía una solicitud para unirte.',
      de: 'Registrierung abgeschlossen. Du landest auf dem Hauptbildschirm der App. Suche jetzt den MOJO-Club über die Suchleiste und sende eine Beitrittsanfrage.',
      fr: "Inscription terminée. Vous arriverez sur l'écran principal de l'application. Trouvez maintenant le club MOJO via la barre de recherche et envoyez une demande d'adhésion.",
      it: "Registrazione completata. Atterrerai sulla schermata principale dell'app. Ora trova il club MOJO tramite la barra di ricerca e invia una richiesta di adesione.",
      pt: 'Registro completo. Você chegará à tela principal do aplicativo. Agora encontre o clube MOJO pela barra de pesquisa e envie uma solicitação de adesão.',
      ar: 'اكتملت التسجيل. ستصل إلى الشاشة الرئيسية للتطبيق. الآن ابحث عن نادي MOJO عبر شريط البحث وأرسل طلب انضمام.',
      hi: 'पंजीकरण पूरा हुआ। आप ऐप की मुख्य स्क्रीन पर पहुंचेंगे। अब सर्च बार से MOJO क्लब खोजें और जॉइन रिक्वेस्ट भेजें।',
      fa: 'ثبت‌نام کامل شد. به صفحه اصلی برنامه می‌رسید. حالا باشگاه MOJO را از طریق نوار جستجو پیدا کنید و درخواست پیوستن ارسال کنید.',
      tr: "Kayıt tamamlandı. Uygulamanın ana ekranına geçeceksin. Şimdi arama çubuğu aracılığıyla MOJO kulübünü bul ve katılma isteği gönder.",
      az: 'Qeydiyyat tamamlandı. Tətbiqin əsas ekranına keçəcəksən. İndi axtarış paneli vasitəsilə MOJO klubunu tap və qoşulma sorğusu göndər.',
      zh: '注册完成。您将进入应用主屏幕。现在通过搜索栏找到 MOJO 俱乐部并提交加入申请。',
      ja: '登録完了。アプリのメイン画面に移動します。検索バーでMOJOクラブを見つけて参加リクエストを送信してください。',
    },
    img: '/images/account/step7-done.png',
  },
];

export function CreateAccount() {
  const { language, t } = useLanguage();
  const getLang = (field: Record<string, string>) => field[language] ?? field.en;
  const isMobile = useIsMobile();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      <SEO
        canonical="/create-account"
        langs={{
          ru: { title: "Как создать аккаунт в GGClub (ClubGG) — инструкция", description: "Пошаговая инструкция по регистрации аккаунта в GGClub для Massiv Poker Union и MOJO. Как выбрать нужный флаг ГЕО, использовать VPN и реферальный код.", keywords: "создать аккаунт GGClub, регистрация ClubGG, Massiv Poker Union аккаунт, VPN для GGClub" },
          en: { title: "How to Create a GGClub Account — Registration Guide", description: "Step-by-step guide to registering a GGClub account for Massiv Poker Union and MOJO. How to select the correct GEO flag, use VPN and referral code.", keywords: "create GGClub account, ClubGG registration, GGClub sign up, Massiv Poker Union account, VPN for GGClub" },
          es: { title: "Cómo crear una cuenta GGClub — Guía de Registro", description: "Guía paso a paso para registrar una cuenta GGClub para Massiv Poker Union y MOJO. Cómo seleccionar la bandera GEO correcta, usar VPN y código de referido." },
          de: { title: "GGClub-Konto erstellen — Registrierungsanleitung", description: "Schritt-für-Schritt-Anleitung zur Registrierung eines GGClub-Kontos für Massiv Poker Union und MOJO. Richtige GEO-Flagge, VPN und Referral-Code." },
          fr: { title: "Comment créer un compte GGClub — Guide d'inscription", description: "Guide étape par étape pour enregistrer un compte GGClub pour Massiv Poker Union et MOJO. Comment sélectionner le bon drapeau GEO, utiliser un VPN et un code de parrainage." },
          it: { title: "Come creare un account GGClub — Guida alla Registrazione", description: "Guida passo passo per registrare un account GGClub per Massiv Poker Union e MOJO. Come selezionare la bandiera GEO corretta, utilizzare VPN e codice referral." },
          pt: { title: "Como criar uma conta GGClub — Guia de Registro", description: "Guia passo a passo para registrar uma conta GGClub para Massiv Poker Union e MOJO. Como selecionar a bandeira GEO correta, usar VPN e código de referência." },
          ar: { title: "كيفية إنشاء حساب GGClub — دليل التسجيل", description: "دليل خطوة بخطوة لتسجيل حساب GGClub لـ Massiv Poker Union وMOJO. كيفية اختيار علم GEO الصحيح، واستخدام VPN ورمز الإحالة." },
          hi: { title: "GGClub अकाउंट कैसे बनाएं — रजिस्ट्रेशन गाइड", description: "Massiv Poker Union और MOJO के लिए GGClub अकाउंट रजिस्टर करने की चरण-दर-चरण गाइड। सही GEO फ्लैग, VPN और रेफरल कोड।" },
          fa: { title: "نحوه ایجاد حساب GGClub — راهنمای ثبت‌نام", description: "راهنمای گام به گام ثبت‌نام حساب GGClub برای Massiv Poker Union و MOJO. نحوه انتخاب پرچم GEO صحیح، استفاده از VPN و کد معرف." },
          tr: { title: "GGClub Hesabı Nasıl Oluşturulur — Kayıt Rehberi", description: "Massiv Poker Union ve MOJO için GGClub hesabı kaydetmek için adım adım kılavuz. Doğru GEO bayrağı, VPN ve referans kodu." },
          az: { title: "GGClub Hesabı Necə Yaradılır — Qeydiyyat Bələdçisi", description: "Massiv Poker Union və MOJO üçün GGClub hesabı qeyd etmək üçün addım-addım bələdçi. Düzgün GEO bayrağı, VPN və referral kodu." },
          zh: { title: "如何创建 GGClub 账户 — 注册指南", description: "为 Massiv Poker Union 和 MOJO 注册 GGClub 账户的逐步指南。如何选择正确的 GEO 旗帜，使用 VPN 和推荐码。" },
          ja: { title: "GGClubアカウントの作成方法 — 登録ガイド", description: "Massiv Poker UnionとMOJOのためのGGClubアカウント登録のステップバイステップガイド。正しいGEOフラグ、VPNと紹介コードの使い方。" },
        }}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Create a GGClub Account for MOJO Poker Club',
          description: 'Registration guide for GGClub to join Massiv Poker Union or MOJO',
          url: 'https://mojo-poker.com/create-account',
        }}
      />
      <Navbar />
      <PageHeader
        title={t('pages.createAccount.title')}
        subtitle={t('pages.createAccount.subtitle')}
        breadcrumbs={[
          { label: t('pages.home'), href: '/' },
          { label: t('pages.joinGuide.label'), href: '/join' },
          { label: t('pages.createAccount.breadcrumb') },
        ]}
      />

      <main style={{ flex: 1, padding: isMobile ? '40px 0 64px' : '64px 0 100px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px' }}>

          {/* Two-column layout */}
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 40 : 64, alignItems: 'flex-start' }}>

            {/* LEFT: step-by-step guide */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {steps.map((step, idx) => (
                <div key={step.num} style={{ marginBottom: idx < steps.length - 1 ? 72 : 0 }}>

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

                  {/* Description */}
                  <div style={{ paddingLeft: 52 }}>
                    <p style={{ margin: '0 0 24px', fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)' }}>
                      {getLang(step.desc)}
                    </p>

                    {step.note && (
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: 6,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderLeft: '3px solid hsl(4 80% 45%)',
                        marginBottom: 24,
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.6,
                      }}>
                        {getLang(step.note!)}
                      </div>
                    )}

                    {/* Screenshot */}
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
                        style={{ width: 300, height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  {idx < steps.length - 1 && (
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '72px 0 0' }} />
                  )}
                </div>
              ))}

              {/* Next step CTA */}
              <div style={{
                marginTop: 72,
                padding: '32px 36px',
                borderRadius: 8,
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                flexWrap: 'wrap',
              }}>
                <div>
                  <p style={{ margin: '0 0 4px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', color: 'hsl(220 5% 45%)', textTransform: 'uppercase' }}>
                    {t('pages.createAccount.nextStepLabel')}
                  </p>
                  <h3 style={{ margin: '0 0 6px', fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>
                    {t('pages.createAccount.nextStepTitle')}
                  </h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>
                    {t('pages.createAccount.nextStepDesc')}
                  </p>
                </div>
                <Link href="/join"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '13px 28px', borderRadius: 4,
                    background: 'hsl(4 80% 45%)', color: 'white',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 38%)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'hsl(4 80% 45%)'; }}
                >
                  {t('pages.createAccount.nextStepBtn')}
                </Link>
              </div>
            </div>

            {/* RIGHT: sticky VPN sidebar */}
            <VPNSidebar />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
