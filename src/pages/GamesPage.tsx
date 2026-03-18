import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import SEO from '@/components/SEO';

type LangText = Record<string, string>;
const LANGS = ['en','ru','es','de','fr','it','pt','ar','hi','fa','tr','az','zh','ja'];
function getLang(field: LangText, language: string): string {
  return field[language] ?? field.en;
}

const GAME_FORMATS = [
  {
    format: { en: 'Multi-Table Tournaments', ru: 'Мультистол. турниры', es: 'Torneos multimesa', de: 'Multi-Tisch-Turniere', fr: 'Tournois multi-tables', it: 'Tornei multi-tavolo', pt: 'Torneios multi-mesa', ar: 'بطولات متعددة الطاولات', hi: 'मल्टी-टेबल टूर्नामेंट', fa: 'تورنمنت‌های چند میزه', tr: 'Çok Masalı Turnuvalar', az: 'Çox Masalı Turnuvalar', zh: '多桌锦标赛', ja: 'マルチテーブルトーナメント' },
    limits: { en: 'Entry: FREE to 150', ru: 'Вход: Бесплатно — 150', es: 'Entrada: GRATIS hasta 150', de: 'Einstieg: KOSTENLOS bis 150', fr: 'Entrée: GRATUIT à 150', it: 'Ingresso: GRATIS fino a 150', pt: 'Entrada: GRÁTIS até 150', ar: 'الدخول: مجاني حتى 150', hi: 'प्रवेश: निःशुल्क से 150', fa: 'ورودی: رایگان تا ۱۵۰', tr: 'Giriş: ÜCRETSİZ - 150', az: 'Giriş: PULSUz - 150', zh: '入场：免费至 150', ja: 'エントリー：無料〜150' },
    features: { en: 'Freerolls, Knockout Bounty, Progressive Knockout Bounty, Mega Satellites', ru: 'Фрироллы, Knockout Bounty, Progressive KO, Мега-сателлиты', es: 'Freerolls, Knockout Bounty, Progressive Knockout Bounty, Mega Satélites', de: 'Freerolls, Knockout Bounty, Progressive KO Bounty, Mega Satellites', fr: 'Freerolls, Knockout Bounty, Progressive KO Bounty, Méga Satellites', it: 'Freeroll, Knockout Bounty, Progressive KO Bounty, Mega Satellite', pt: 'Freerolls, Knockout Bounty, Progressive KO Bounty, Mega Satélites', ar: 'فري رول، كنوك-اوت، كنوك-اوت تصاعدي، ميغا ساتلايت', hi: 'फ्रीरोल, नॉकआउट बाउंटी, प्रोग्रेसिव KO, मेगा सैटेलाइट', fa: 'فری‌رول، ناک‌اوت بانتی، ناک‌اوت تصاعدی، مگا ستلایت', tr: 'Freerollar, Knockout Bounty, Progressive KO Bounty, Mega Uydular', az: 'Freerollar, Knockout Bounty, Progressive KO, Meqa Peyklər', zh: '免费赛、淘汰赏金、累进淘汰赏金、超级卫星赛', ja: 'フリーロール、KOバウンティ、プログレッシブKOバウンティ、メガサテライト' },
  },
  {
    format: { en: 'No Limit Holdem', ru: 'Безлимитный Холдем', es: 'No Limit Holdem', de: 'No Limit Holdem', fr: 'No Limit Holdem', it: 'No Limit Holdem', pt: 'No Limit Holdem', ar: 'هولدم بدون حد', hi: 'नो लिमिट होल्डेम', fa: 'نو لیمیت هولدم', tr: 'No Limit Holdem', az: 'No Limit Holdem', zh: '无限注德州扑克', ja: 'ノーリミットホールデム' },
    limits: { en: '0.10/0.20 to 5/10', ru: '0.10/0.20 — 5/10', es: '0.10/0.20 a 5/10', de: '0.10/0.20 bis 5/10', fr: '0,10/0,20 à 5/10', it: '0.10/0.20 a 5/10', pt: '0.10/0.20 até 5/10', ar: '0.10/0.20 إلى 5/10', hi: '0.10/0.20 से 5/10', fa: '۰.۱۰/۰.۲۰ تا ۵/۱۰', tr: '0.10/0.20 ile 5/10 arası', az: '0.10/0.20 - 5/10', zh: '0.10/0.20 至 5/10', ja: '0.10/0.20〜5/10' },
    features: { en: '10BB Max, 20BB Max, Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times, Double Board, Bomb Pot', ru: '10BB Max, 20BB Max, Анте, Ограничения GPS & IP, Требования VPIP, Run it Multi-Times, Двойная доска, Bomb Pot', es: '10BB Max, 20BB Max, Ante, Restricción GPS e IP, Requisitos VPIP, Run it Multi-Times, Double Board, Bomb Pot', de: '10BB Max, 20BB Max, Ante, GPS & IP-Beschränkung, VPIP-Anforderungen, Run it Multi-Times, Double Board, Bomb Pot', fr: '10BB Max, 20BB Max, Ante, Restriction GPS & IP, Exigences VPIP, Run it Multi-Times, Double Board, Bomb Pot', it: '10BB Max, 20BB Max, Ante, Restrizione GPS & IP, Requisiti VPIP, Run it Multi-Times, Double Board, Bomb Pot', pt: '10BB Max, 20BB Max, Ante, Restrição GPS & IP, Requisitos VPIP, Run it Multi-Times, Double Board, Bomb Pot', ar: '10BB Max, 20BB Max, أنتي، تقييد GPS & IP، متطلبات VPIP، Run it Multi-Times، Double Board، Bomb Pot', hi: '10BB Max, 20BB Max, Ante, GPS & IP प्रतिबंध, VPIP आवश्यकताएं, Run it Multi-Times, Double Board, Bomb Pot', fa: '۱۰BB Max، ۲۰BB Max، Ante، محدودیت GPS & IP، الزامات VPIP، Run it Multi-Times، Double Board، Bomb Pot', tr: '10BB Max, 20BB Max, Ante, GPS & IP Kısıtlaması, VPIP Gereksinimleri, Run it Multi-Times, Double Board, Bomb Pot', az: '10BB Max, 20BB Max, Ante, GPS & IP Məhdudiyyəti, VPIP Tələbləri, Run it Multi-Times, Double Board, Bomb Pot', zh: '10BB上限, 20BB上限, 前注, GPS & IP限制, VPIP要求, 多次运行, 双牌面, 炸弹锅', ja: '10BB上限, 20BB上限, アンティ, GPS & IP制限, VPIP要件, マルチラン, ダブルボード, ボムポット' },
  },
  {
    format: { en: 'Pot Limit Omaha (PLO4)', ru: 'Пот-лимит Омаха (PLO4)', es: 'Pot Limit Omaha (PLO4)', de: 'Pot Limit Omaha (PLO4)', fr: 'Pot Limit Omaha (PLO4)', it: 'Pot Limit Omaha (PLO4)', pt: 'Pot Limit Omaha (PLO4)', ar: 'بوت ليميت أوماها (PLO4)', hi: 'पॉट लिमिट ओमाहा (PLO4)', fa: 'پات لیمیت اوماها (PLO4)', tr: 'Pot Limit Omaha (PLO4)', az: 'Pot Limit Omaha (PLO4)', zh: '底池限注奥马哈 (PLO4)', ja: 'ポットリミットオマハ (PLO4)' },
    limits: { en: '0.25/0.50 to 5/10', ru: '0.25/0.50 — 5/10', es: '0.25/0.50 a 5/10', de: '0.25/0.50 bis 5/10', fr: '0,25/0,50 à 5/10', it: '0.25/0.50 a 5/10', pt: '0.25/0.50 até 5/10', ar: '0.25/0.50 إلى 5/10', hi: '0.25/0.50 से 5/10', fa: '۰.۲۵/۰.۵۰ تا ۵/۱۰', tr: '0.25/0.50 ile 5/10 arası', az: '0.25/0.50 - 5/10', zh: '0.25/0.50 至 5/10', ja: '0.25/0.50〜5/10' },
    features: { en: '20BB Max, 60BB Max, Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times, Double Board, Bomb Pot', ru: '20BB Max, 60BB Max, Анте, GPS & IP, VPIP, Run it Multi-Times, Двойная доска, Bomb Pot', es: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', de: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', fr: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', it: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', pt: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', ar: '20BB Max, 60BB Max, أنتي، GPS & IP، VPIP، Run it Multi-Times، Double Board، Bomb Pot', hi: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', fa: '۲۰BB Max، ۶۰BB Max، Ante، GPS & IP، VPIP، Run it Multi-Times، Double Board، Bomb Pot', tr: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', az: '20BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board, Bomb Pot', zh: '20BB上限, 60BB上限, 前注, GPS & IP限制, VPIP要求, 多次运行, 双牌面, 炸弹锅', ja: '20BB上限, 60BB上限, アンティ, GPS & IP制限, VPIP要件, マルチラン, ダブルボード, ボムポット' },
  },
  {
    format: { en: 'PLO5', ru: 'PLO5', es: 'PLO5', de: 'PLO5', fr: 'PLO5', it: 'PLO5', pt: 'PLO5', ar: 'PLO5', hi: 'PLO5', fa: 'PLO5', tr: 'PLO5', az: 'PLO5', zh: 'PLO5', ja: 'PLO5' },
    limits: { en: '0.25/0.50 to 5/10', ru: '0.25/0.50 — 5/10', es: '0.25/0.50 a 5/10', de: '0.25/0.50 bis 5/10', fr: '0,25/0,50 à 5/10', it: '0.25/0.50 a 5/10', pt: '0.25/0.50 até 5/10', ar: '0.25/0.50 إلى 5/10', hi: '0.25/0.50 से 5/10', fa: '۰.۲۵/۰.۵۰ تا ۵/۱۰', tr: '0.25/0.50 ile 5/10 arası', az: '0.25/0.50 - 5/10', zh: '0.25/0.50 至 5/10', ja: '0.25/0.50〜5/10' },
    features: { en: '20BB Max, 50BB Max, Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times', ru: '20BB Max, 50BB Max, Анте, GPS & IP, VPIP, Run it Multi-Times', es: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', de: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', fr: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', it: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', pt: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', ar: '20BB Max, 50BB Max, أنتي، GPS & IP، VPIP، Run it Multi-Times', hi: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', fa: '۲۰BB Max، ۵۰BB Max، Ante، GPS & IP، VPIP، Run it Multi-Times', tr: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', az: '20BB Max, 50BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times', zh: '20BB上限, 50BB上限, 前注, GPS & IP限制, VPIP要求, 多次运行', ja: '20BB上限, 50BB上限, アンティ, GPS & IP制限, VPIP要件, マルチラン' },
  },
  {
    format: { en: 'PLO6', ru: 'PLO6', es: 'PLO6', de: 'PLO6', fr: 'PLO6', it: 'PLO6', pt: 'PLO6', ar: 'PLO6', hi: 'PLO6', fa: 'PLO6', tr: 'PLO6', az: 'PLO6', zh: 'PLO6', ja: 'PLO6' },
    limits: { en: '0.25/0.50 to 5/10', ru: '0.25/0.50 — 5/10', es: '0.25/0.50 a 5/10', de: '0.25/0.50 bis 5/10', fr: '0,25/0,50 à 5/10', it: '0.25/0.50 a 5/10', pt: '0.25/0.50 até 5/10', ar: '0.25/0.50 إلى 5/10', hi: '0.25/0.50 से 5/10', fa: '۰.۲۵/۰.۵۰ تا ۵/۱۰', tr: '0.25/0.50 ile 5/10 arası', az: '0.25/0.50 - 5/10', zh: '0.25/0.50 至 5/10', ja: '0.25/0.50〜5/10' },
    features: { en: '10BB Max, 60BB Max, Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times, Double Board', ru: '10BB Max, 60BB Max, Анте, GPS & IP, VPIP, Run it Multi-Times, Двойная доска', es: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', de: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', fr: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', it: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', pt: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', ar: '10BB Max, 60BB Max, أنتي، GPS & IP، VPIP، Run it Multi-Times، Double Board', hi: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', fa: '۱۰BB Max، ۶۰BB Max، Ante، GPS & IP، VPIP، Run it Multi-Times، Double Board', tr: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', az: '10BB Max, 60BB Max, Ante, GPS & IP, VPIP, Run it Multi-Times, Double Board', zh: '10BB上限, 60BB上限, 前注, GPS & IP限制, VPIP要求, 多次运行, 双牌面', ja: '10BB上限, 60BB上限, アンティ, GPS & IP制限, VPIP要件, マルチラン, ダブルボード' },
  },
  {
    format: { en: 'PLO5 Hi-Lo', ru: 'PLO5 Hi-Lo', es: 'PLO5 Hi-Lo', de: 'PLO5 Hi-Lo', fr: 'PLO5 Hi-Lo', it: 'PLO5 Hi-Lo', pt: 'PLO5 Hi-Lo', ar: 'PLO5 Hi-Lo', hi: 'PLO5 Hi-Lo', fa: 'PLO5 Hi-Lo', tr: 'PLO5 Hi-Lo', az: 'PLO5 Hi-Lo', zh: 'PLO5 高低', ja: 'PLO5 ハイロー' },
    limits: { en: '0.25/0.50 to 1/2', ru: '0.25/0.50 — 1/2', es: '0.25/0.50 a 1/2', de: '0.25/0.50 bis 1/2', fr: '0,25/0,50 à 1/2', it: '0.25/0.50 a 1/2', pt: '0.25/0.50 até 1/2', ar: '0.25/0.50 إلى 1/2', hi: '0.25/0.50 से 1/2', fa: '۰.۲۵/۰.۵۰ تا ۱/۲', tr: '0.25/0.50 ile 1/2 arası', az: '0.25/0.50 - 1/2', zh: '0.25/0.50 至 1/2', ja: '0.25/0.50〜1/2' },
    features: { en: 'Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times', ru: 'Анте, GPS & IP, VPIP, Run it Multi-Times', es: 'Ante, GPS & IP, VPIP, Run it Multi-Times', de: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', it: 'Ante, GPS & IP, VPIP, Run it Multi-Times', pt: 'Ante, GPS & IP, VPIP, Run it Multi-Times', ar: 'أنتي، GPS & IP، VPIP، Run it Multi-Times', hi: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fa: 'Ante، GPS & IP، VPIP، Run it Multi-Times', tr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', az: 'Ante, GPS & IP, VPIP, Run it Multi-Times', zh: '前注, GPS & IP限制, VPIP要求, 多次运行', ja: 'アンティ, GPS & IP制限, VPIP要件, マルチラン' },
  },
  {
    format: { en: 'PLO6 Hi-Lo', ru: 'PLO6 Hi-Lo', es: 'PLO6 Hi-Lo', de: 'PLO6 Hi-Lo', fr: 'PLO6 Hi-Lo', it: 'PLO6 Hi-Lo', pt: 'PLO6 Hi-Lo', ar: 'PLO6 Hi-Lo', hi: 'PLO6 Hi-Lo', fa: 'PLO6 Hi-Lo', tr: 'PLO6 Hi-Lo', az: 'PLO6 Hi-Lo', zh: 'PLO6 高低', ja: 'PLO6 ハイロー' },
    limits: { en: '0.25/0.50 to 0.50/1', ru: '0.25/0.50 — 0.50/1', es: '0.25/0.50 a 0.50/1', de: '0.25/0.50 bis 0.50/1', fr: '0,25/0,50 à 0,50/1', it: '0.25/0.50 a 0.50/1', pt: '0.25/0.50 até 0.50/1', ar: '0.25/0.50 إلى 0.50/1', hi: '0.25/0.50 से 0.50/1', fa: '۰.۲۵/۰.۵۰ تا ۰.۵۰/۱', tr: '0.25/0.50 ile 0.50/1 arası', az: '0.25/0.50 - 0.50/1', zh: '0.25/0.50 至 0.50/1', ja: '0.25/0.50〜0.50/1' },
    features: { en: 'Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times', ru: 'Анте, GPS & IP, VPIP, Run it Multi-Times', es: 'Ante, GPS & IP, VPIP, Run it Multi-Times', de: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', it: 'Ante, GPS & IP, VPIP, Run it Multi-Times', pt: 'Ante, GPS & IP, VPIP, Run it Multi-Times', ar: 'أنتي، GPS & IP، VPIP، Run it Multi-Times', hi: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fa: 'Ante، GPS & IP، VPIP، Run it Multi-Times', tr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', az: 'Ante, GPS & IP, VPIP, Run it Multi-Times', zh: '前注, GPS & IP限制, VPIP要求, 多次运行', ja: 'アンティ, GPS & IP制限, VPIP要件, マルチラン' },
  },
  {
    format: { en: 'Short Deck', ru: 'Short Deck', es: 'Short Deck', de: 'Short Deck', fr: 'Short Deck', it: 'Short Deck', pt: 'Short Deck', ar: 'شورت ديك', hi: 'शॉर्ट डेक', fa: 'شورت دک', tr: 'Short Deck', az: 'Short Deck', zh: '短牌', ja: 'ショートデック' },
    limits: { en: '0.50 to 2', ru: '0.50 — 2', es: '0.50 a 2', de: '0.50 bis 2', fr: '0,50 à 2', it: '0.50 a 2', pt: '0.50 até 2', ar: '0.50 إلى 2', hi: '0.50 से 2', fa: '۰.۵۰ تا ۲', tr: '0.50 ile 2 arası', az: '0.50 - 2', zh: '0.50 至 2', ja: '0.50〜2' },
    features: { en: 'Ante, GPS & IP Restriction, VPIP Requirements, Run it Multi-Times', ru: 'Анте, GPS & IP, VPIP, Run it Multi-Times', es: 'Ante, GPS & IP, VPIP, Run it Multi-Times', de: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', it: 'Ante, GPS & IP, VPIP, Run it Multi-Times', pt: 'Ante, GPS & IP, VPIP, Run it Multi-Times', ar: 'أنتي، GPS & IP، VPIP، Run it Multi-Times', hi: 'Ante, GPS & IP, VPIP, Run it Multi-Times', fa: 'Ante، GPS & IP، VPIP، Run it Multi-Times', tr: 'Ante, GPS & IP, VPIP, Run it Multi-Times', az: 'Ante, GPS & IP, VPIP, Run it Multi-Times', zh: '前注, GPS & IP限制, VPIP要求, 多次运行', ja: 'アンティ, GPS & IP制限, VPIP要件, マルチラン' },
  },
  {
    format: { en: 'Sit-N-Gos', ru: 'Сит-энд-гоу', es: 'Sit-N-Gos', de: 'Sit-N-Gos', fr: 'Sit-N-Gos', it: 'Sit-N-Gos', pt: 'Sit-N-Gos', ar: 'سيت إن غو', hi: 'सिट-एन-गोज़', fa: 'سیت-این-گو', tr: 'Sit-N-Gos', az: 'Sit-N-Gos', zh: 'Sit-N-Gos', ja: 'サイアンゴー' },
    limits: { en: '—', ru: '—', es: '—', de: '—', fr: '—', it: '—', pt: '—', ar: '—', hi: '—', fa: '—', tr: '—', az: '—', zh: '—', ja: '—' },
    features: { en: 'Not enough current demand', ru: 'Недостаточный спрос', es: 'Demanda insuficiente actualmente', de: 'Derzeit nicht genug Nachfrage', fr: 'Pas assez de demande actuellement', it: 'Domanda attuale insufficiente', pt: 'Procura atual insuficiente', ar: 'لا يوجد طلب كافٍ حالياً', hi: 'वर्तमान में पर्याप्त मांग नहीं', fa: 'تقاضای کافی در حال حاضر وجود ندارد', tr: 'Şu anda yeterli talep yok', az: 'Hazırda kifayət qədər tələb yoxdur', zh: '目前需求不足', ja: '現在需要が不十分' },
  },
];

const RAKE_SECTIONS: { title: string; rate: string; rows: { blind: string; cap: string }[] }[] = [
  {
    title: 'NLHE',
    rate: '6.5%',
    rows: [
      { blind: '0.05/0.10', cap: '10bb' },
      { blind: '0.10/0.20', cap: '8bb' },
      { blind: '0.25/0.50', cap: '6bb' },
      { blind: '0.5/1', cap: '5bb' },
      { blind: '1/2', cap: '3bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: '2.5/5', cap: '3bb' },
      { blind: '3/6', cap: '3bb' },
      { blind: '5/10', cap: '2bb' },
    ],
  },
  {
    title: 'NLHE DB (6MAX)',
    rate: '6.5%',
    rows: [
      { blind: '0.10/0.20', cap: '5bb' },
      { blind: '0.25/0.50', cap: '4.5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3bb' },
      { blind: '5/10', cap: '2bb' },
    ],
  },
  {
    title: 'NLHE DB/BP (6MAX)',
    rate: '6.5%',
    rows: [
      { blind: '0.10/0.20', cap: '5bb' },
      { blind: '0.25/0.50', cap: '4.5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3bb' },
    ],
  },
  {
    title: 'NLHE SB/BP (6MAX)',
    rate: '6.5%',
    rows: [
      { blind: '0.25/0.50', cap: '5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3bb' },
    ],
  },
  {
    title: 'PLO4',
    rate: '6%',
    rows: [
      { blind: '0.05/0.10', cap: '8bb' },
      { blind: '0.10/0.20', cap: '7bb' },
      { blind: '0.25/0.50', cap: '6bb' },
      { blind: '0.50/1', cap: '5bb' },
      { blind: '1/2', cap: '4bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: '2.5/5', cap: '3bb' },
      { blind: '3/6', cap: '3bb' },
      { blind: '5/10', cap: '2bb' },
      { blind: '5/10 (500-1k)', cap: '2.5bb' },
      { blind: '10/20', cap: '2bb' },
    ],
  },
  {
    title: 'PLO5',
    rate: '6%',
    rows: [
      { blind: '0.05/0.10', cap: '7.5bb' },
      { blind: '0.10/0.20', cap: '6.5bb' },
      { blind: '0.25/0.50', cap: '5.5bb' },
      { blind: '0.50/1', cap: '4.5bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: '2.5/5', cap: '3bb' },
      { blind: '3/6', cap: '3bb' },
      { blind: '5/10', cap: '2bb' },
      { blind: '10/20', cap: '1.5bb' },
    ],
  },
  {
    title: 'PLO6',
    rate: '6%',
    rows: [
      { blind: '0.10/0.20', cap: '6bb' },
      { blind: '0.25/0.50', cap: '5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: 'MEX SWT', cap: '1.5bb' },
      { blind: '10/20', cap: '1.5bb' },
    ],
  },
  {
    title: 'PLO5/6 Hi-Lo',
    rate: '6%',
    rows: [
      { blind: '0.10/0.20', cap: '6bb' },
      { blind: '0.25/0.50', cap: '5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: '3/6', cap: '2.5bb' },
    ],
  },
  {
    title: 'PLO6 DB',
    rate: '6%',
    rows: [
      { blind: '0.25/0.50', cap: '4.5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '2/4', cap: '3bb' },
      { blind: '10/20', cap: '1.5bb' },
    ],
  },
  {
    title: 'PLO6 BP/DB',
    rate: '6%',
    rows: [
      { blind: '0.25/0.50', cap: '4.5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '5/10', cap: '2bb' },
      { blind: '10/20', cap: '1.5bb' },
    ],
  },
  {
    title: 'PLO6 SB/BP',
    rate: '6%',
    rows: [
      { blind: '0.25/0.50', cap: '4.5bb' },
      { blind: '0.5/1', cap: '4bb' },
      { blind: '1/2', cap: '3.5bb' },
      { blind: '5/10', cap: '2bb' },
    ],
  },
  {
    title: 'Short Deck',
    rate: '6%',
    rows: [
      { blind: '25-75', cap: '4bb' },
      { blind: '50-150', cap: '3.5bb' },
      { blind: '100-200', cap: '3bb' },
    ],
  },
  {
    title: 'All In Or Fold',
    rate: '6%',
    rows: [
      { blind: '1/2', cap: '1bb' },
      { blind: '2.5/5', cap: '1bb' },
      { blind: '5/10', cap: '0.5bb' },
    ],
  },
];

const MOJO_RAKE_SECTIONS: { title: string; rate: string; rows: { blind: string; cap: string }[] }[] = [
  {
    title: 'NLH',
    rate: '5–7%',
    rows: [
      { blind: '0.05/0.10', cap: '5% no cap' },
      { blind: '0.10/0.20', cap: '5% no cap' },
      { blind: '0.25/0.50', cap: '7% cap 5 BB' },
      { blind: '0.50/1',    cap: '7% cap 5 BB' },
      { blind: '1/2',       cap: '5% cap 5 BB' },
      { blind: '2/4',       cap: '5% cap 5 BB' },
      { blind: '5/10',      cap: '5% cap 2 BB' },
    ],
  },
  {
    title: 'NLH Bonus Table',
    rate: '8%',
    rows: [
      { blind: '0.50/1', cap: '8% cap 3.5 BB' },
    ],
  },
  {
    title: 'PLO',
    rate: '5–7%',
    rows: [
      { blind: '0.05/0.10', cap: '5% no cap' },
      { blind: '0.10/0.20', cap: '5% no cap' },
      { blind: '0.25/0.50', cap: '7% cap 5 BB' },
      { blind: '0.50/1',    cap: '7% cap 5 BB' },
      { blind: '1/2',       cap: '7% cap 5 BB' },
      { blind: '2/4',       cap: '5% cap 5 BB' },
      { blind: '3/6',       cap: '5% cap 5 BB' },
    ],
  },
];

const PAGE_COPY: Record<string, LangText> = {
  label:       { en: 'MASSIV POKER UNION', ru: 'MASSIV POKER UNION' },
  title:       { en: 'Games & Formats', ru: 'Игры и форматы', es: 'Juegos y formatos', de: 'Spiele & Formate', fr: 'Jeux & Formats', it: 'Giochi & Formati', pt: 'Jogos & Formatos', ar: 'الألعاب والأشكال', hi: 'गेम्स और फॉर्मेट', fa: 'بازی‌ها و فرمت‌ها', tr: 'Oyunlar & Formatlar', az: 'Oyunlar & Formatlar', zh: '游戏与格式', ja: 'ゲームとフォーマット' },
  subtitle:    { en: 'Available game formats, limits, and features at MOJO: Massiv Poker Union.', ru: 'Доступные форматы игр, лимиты и особенности в MOJO: Massiv Poker Union.', es: 'Formatos de juego disponibles, límites y características en MOJO: Massiv Poker Union.', de: 'Verfügbare Spielformate, Limits und Features bei MOJO: Massiv Poker Union.', fr: 'Formats de jeu disponibles, limites et fonctionnalités chez MOJO: Massiv Poker Union.', it: 'Formati di gioco disponibili, limiti e caratteristiche a MOJO: Massiv Poker Union.', pt: 'Formatos de jogo disponíveis, limites e recursos na MOJO: Massiv Poker Union.', ar: 'تنسيقات اللعبة المتاحة والحدود والميزات في MOJO: Massiv Poker Union.', hi: 'MOJO: Massiv Poker Union में उपलब्ध गेम फॉर्मेट, लिमिट और फीचर।', fa: 'فرمت‌های بازی موجود، محدودیت‌ها و ویژگی‌ها در MOJO: Massiv Poker Union.', tr: 'MOJO: Massiv Poker Union\'da mevcut oyun formatları, limitler ve özellikler.', az: 'MOJO: Massiv Poker Union-da mövcud oyun formatları, limitlər və xüsusiyyətlər.', zh: 'MOJO: Massiv Poker Union 可用游戏格式、限注和特色。', ja: 'MOJO: Massiv Poker Union の利用可能なゲームフォーマット、リミット、機能。' },
  formatsTitle:{ en: 'Game Formats', ru: 'Форматы игр', es: 'Formatos de juego', de: 'Spielformate', fr: 'Formats de jeu', it: 'Formati di gioco', pt: 'Formatos de jogo', ar: 'أشكال اللعب', hi: 'गेम फॉर्मेट', fa: 'فرمت‌های بازی', tr: 'Oyun Formatları', az: 'Oyun Formatları', zh: '游戏格式', ja: 'ゲームフォーマット' },
  colFormat:   { en: 'Game Format', ru: 'Формат', es: 'Formato', de: 'Format', fr: 'Format', it: 'Formato', pt: 'Formato', ar: 'الشكل', hi: 'फॉर्मेट', fa: 'فرمت', tr: 'Format', az: 'Format', zh: '游戏格式', ja: 'フォーマット' },
  colLimits:   { en: 'Limits', ru: 'Лимиты', es: 'Límites', de: 'Limits', fr: 'Limites', it: 'Limiti', pt: 'Limites', ar: 'الحدود', hi: 'लिमिट', fa: 'محدودیت‌ها', tr: 'Limitler', az: 'Limitlər', zh: '限注', ja: 'リミット' },
  colFeatures: { en: 'Features', ru: 'Особенности', es: 'Características', de: 'Features', fr: 'Fonctionnalités', it: 'Caratteristiche', pt: 'Recursos', ar: 'الميزات', hi: 'फीचर', fa: 'ویژگی‌ها', tr: 'Özellikler', az: 'Xüsusiyyətlər', zh: '特色', ja: '特徴' },
  rakeTitle:   { en: 'Rake Schedule', ru: 'Расписание рейка', es: 'Tabla de rake', de: 'Rake-Tabelle', fr: 'Tableau de rake', it: 'Schema rake', pt: 'Tabela de rake', ar: 'جدول الريك', hi: 'रेक अनुसूची', fa: 'جدول ریک', tr: 'Rake Tarifesi', az: 'Rake Cədvəli', zh: '佣金表', ja: 'レーキスケジュール' },
  rakeSubtitle:{ en: 'MASSIV Fee Schedule effective 01/10/2025', ru: 'Расписание сборов MASSIV, действует с 01.10.2025', es: 'Tabla de tarifas MASSIV vigente desde 01/10/2025', de: 'MASSIV Gebührentabelle gültig ab 01.10.2025', fr: 'Tableau des frais MASSIV en vigueur depuis le 01/10/2025', it: 'Tabella tariffe MASSIV in vigore dal 01/10/2025', pt: 'Tabela de taxas MASSIV em vigor desde 01/10/2025', ar: 'جدول رسوم MASSIV ساري من 01/10/2025', hi: 'MASSIV शुल्क अनुसूची 01/10/2025 से प्रभावी', fa: 'جدول هزینه‌های MASSIV از ۲۰۲۵/۱۰/۰۱ لازم‌الاجرا', tr: 'MASSIV Ücret Tarifesi 01/10/2025 tarihinden itibaren geçerlidir', az: '01/10/2025 tarixindən etibarən qüvvədə olan MASSIV Ödəniş Cədvəli', zh: 'MASSIV 收费标准，自 2025 年 10 月 01 日起生效', ja: 'MASSIV 料金表 2025年10月01日より有効' },
  colBlind:    { en: 'Blinds', ru: 'Блайнды', es: 'Ciegas', de: 'Blinds', fr: 'Blindes', it: 'Bui', pt: 'Blinds', ar: 'البلايند', hi: 'ब्लाइंड', fa: 'بلاینด', tr: 'Blindlar', az: 'Blindlər', zh: '盲注', ja: 'ブラインド' },
  colCap:      { en: 'Cap', ru: 'Кэп', es: 'Tope', de: 'Cap', fr: 'Plafond', it: 'Cap', pt: 'Teto', ar: 'الحد الأقصى', hi: 'कैप', fa: 'سقف', tr: 'Tavan', az: 'Üst hədd', zh: '上限', ja: 'キャップ' },
};

type RakeSection = { title: string; rate: string; rows: { blind: string; cap: string }[] };

function RakeCard({ section, gl, thStyle, tdMonoStyle, tdStyle, colBlind, colCap }: {
  section: RakeSection;
  gl: (f: LangText) => string;
  thStyle: React.CSSProperties;
  tdMonoStyle: React.CSSProperties;
  tdStyle: React.CSSProperties;
  colBlind: LangText;
  colCap: LangText;
}) {
  return (
    <div style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', background: 'var(--bg-card)' }}>
      <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{section.title}</span>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Rake {section.rate}</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr>
          <th style={{ ...thStyle, fontSize: 10, padding: '8px 14px' }}>{gl(colBlind)}</th>
          <th style={{ ...thStyle, fontSize: 10, padding: '8px 14px', textAlign: 'right' }}>{gl(colCap)}</th>
        </tr></thead>
        <tbody>
          {section.rows.map((row, j) => (
            <tr key={j} style={{ background: j % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
              <td style={{ ...tdMonoStyle, padding: '8px 14px', fontSize: 12 }}>{row.blind}</td>
              <td style={{ ...tdStyle, padding: '8px 14px', fontSize: 12, textAlign: 'right', color: 'rgba(255,255,255,0.5)' }}>{row.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MojoRakeCard({ section, gl, thStyle, tdMonoStyle, tdStyle, colBlind }: {
  section: RakeSection;
  gl: (f: LangText) => string;
  thStyle: React.CSSProperties;
  tdMonoStyle: React.CSSProperties;
  tdStyle: React.CSSProperties;
  colBlind: LangText;
}) {
  return (
    <div style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', background: 'var(--bg-card)' }}>
      <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>{section.title}</span>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>Rake {section.rate}</span>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr>
          <th style={{ ...thStyle, fontSize: 10, padding: '8px 14px' }}>{gl(colBlind)}</th>
          <th style={{ ...thStyle, fontSize: 10, padding: '8px 14px', textAlign: 'right' }}>Rate / Cap</th>
        </tr></thead>
        <tbody>
          {section.rows.map((row, j) => (
            <tr key={j} style={{ background: j % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
              <td style={{ ...tdMonoStyle, padding: '8px 14px', fontSize: 12 }}>{row.blind}</td>
              <td style={{ ...tdStyle, padding: '8px 14px', fontSize: 12, textAlign: 'right', color: 'rgba(255,255,255,0.5)' }}>{row.cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 700,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.35)', borderBottom: '1px solid rgba(255,255,255,0.08)',
  whiteSpace: 'nowrap',
};
const tdStyle: React.CSSProperties = {
  padding: '14px 16px', fontSize: 13, color: 'rgba(255,255,255,0.75)',
  borderBottom: '1px solid rgba(255,255,255,0.05)', verticalAlign: 'top', lineHeight: 1.55,
};
const tdBoldStyle: React.CSSProperties = { ...tdStyle, fontWeight: 600, color: 'white', whiteSpace: 'nowrap' };
const tdMonoStyle: React.CSSProperties = { ...tdStyle, whiteSpace: 'nowrap' };

export function GamesPage() {
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const gl = (f: LangText) => getLang(f, language);
  const [activeClub, setActiveClub] = useState<'massiv' | 'mojo'>('massiv');

  return (
    <>
      <SEO
        canonical="/games"
        langs={{
          en: { title: "Poker Games & Formats — MOJO: Massiv Poker Union | GGClub", description: "Full list of poker game formats at MOJO Massiv Poker Union on GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Limits from 0.05/0.10 to 5/10. MASSIV rake schedule 6.5% NLH / 6% PLO.", keywords: "GGClub poker games, NLH poker, PLO4 PLO5 PLO6, Massiv poker union games, poker rake schedule, ClubGG game formats" },
          ru: { title: "Игры и форматы покера — MOJO: Massiv Poker Union | GGClub", description: "Полный список форматов покера в MOJO Massiv Poker Union на GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Лимиты от 0.05/0.10 до 5/10. Расписание рейка MASSIV: 6.5% NLH / 6% PLO.", keywords: "покер форматы GGClub, NLH покер, PLO4 PLO5 PLO6, Massiv покерный союз, расписание рейка, ClubGG форматы" },
          es: { title: "Juegos y Formatos de Póker — MOJO: Massiv Poker Union | GGClub", description: "Lista completa de formatos de juego en MOJO Massiv Poker Union en GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Límites desde 0.05/0.10 hasta 5/10. Tabla de rake MASSIV: 6.5% NLH / 6% PLO." },
          de: { title: "Poker Spiele & Formate — MOJO: Massiv Poker Union | GGClub", description: "Vollständige Liste der Spielformate bei MOJO Massiv Poker Union auf GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Limits von 0.05/0.10 bis 5/10. MASSIV Rake-Tabelle: 6,5% NLH / 6% PLO." },
          fr: { title: "Jeux & Formats de Poker — MOJO: Massiv Poker Union | GGClub", description: "Liste complète des formats de jeu chez MOJO Massiv Poker Union sur GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Limites de 0.05/0.10 à 5/10. Tableau de rake MASSIV: 6,5% NLH / 6% PLO." },
          it: { title: "Giochi & Formati Poker — MOJO: Massiv Poker Union | GGClub", description: "Elenco completo dei formati di gioco a MOJO Massiv Poker Union su GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Limiti da 0.05/0.10 a 5/10. Schema rake MASSIV: 6,5% NLH / 6% PLO." },
          pt: { title: "Jogos & Formatos de Pôquer — MOJO: Massiv Poker Union | GGClub", description: "Lista completa de formatos de jogo na MOJO Massiv Poker Union no GGClub: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. Limites de 0.05/0.10 a 5/10. Tabela de rake MASSIV: 6,5% NLH / 6% PLO." },
          ar: { title: "ألعاب وأشكال البوكر — MOJO: Massiv Poker Union | GGClub", description: "القائمة الكاملة لأشكال الألعاب في MOJO Massiv Poker Union على GGClub: NLH، PLO4، PLO5، PLO6، MTT، Short Deck، Hi-Lo. حدود من 0.05/0.10 إلى 5/10. جدول ريك MASSIV: 6.5% NLH / 6% PLO." },
          hi: { title: "पोकर गेम्स और फॉर्मेट — MOJO: Massiv Poker Union | GGClub", description: "MOJO Massiv Poker Union, GGClub पर सभी गेम फॉर्मेट: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo। लिमिट 0.05/0.10 से 5/10 तक। MASSIV रेक: 6.5% NLH / 6% PLO।" },
          fa: { title: "بازی‌ها و فرمت‌های پوکر — MOJO: Massiv Poker Union | GGClub", description: "فهرست کامل فرمت‌های بازی در MOJO Massiv Poker Union در GGClub: NLH، PLO4، PLO5، PLO6، MTT، Short Deck، Hi-Lo. محدودیت از 0.05/0.10 تا 5/10. جدول ریک MASSIV: 6.5% NLH / 6% PLO." },
          tr: { title: "Poker Oyunları & Formatları — MOJO: Massiv Poker Union | GGClub", description: "MOJO Massiv Poker Union'da GGClub'daki tüm oyun formatları: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. 0.05/0.10'dan 5/10'a kadar limitler. MASSIV rake: %6.5 NLH / %6 PLO." },
          az: { title: "Poker Oyunları & Formatları — MOJO: Massiv Poker Union | GGClub", description: "MOJO Massiv Poker Union-da GGClub-dakı bütün oyun formatları: NLH, PLO4, PLO5, PLO6, MTT, Short Deck, Hi-Lo. 0.05/0.10-dan 5/10-a qədər limitlər. MASSIV rake: 6.5% NLH / 6% PLO." },
          zh: { title: "扑克游戏与格式 — MOJO: Massiv Poker Union | GGClub", description: "MOJO Massiv Poker Union 在 GGClub 的完整游戏格式列表：NLH、PLO4、PLO5、PLO6、MTT、短牌、高低。限注从 0.05/0.10 到 5/10。MASSIV 佣金：NLH 6.5% / PLO 6%。" },
          ja: { title: "ポーカーゲームとフォーマット — MOJO: Massiv Poker Union | GGClub", description: "MOJO Massiv Poker Union（GGClub）の全ゲームフォーマット：NLH、PLO4、PLO5、PLO6、MTT、ショートデック、ハイロー。リミット 0.05/0.10〜5/10。MASSIVレーキ：NLH 6.5% / PLO 6%。" },
        }}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Poker Games & Formats — MOJO: Massiv Poker Union",
          "description": "Full list of poker game formats, limits, and rake schedule at MOJO Massiv Poker Union on GGClub network.",
          "url": "https://mojopokerclub.com/games",
          "publisher": {
            "@type": "Organization",
            "name": "MOJO Poker Club",
            "url": "https://mojopokerclub.com"
          },
          "mainEntity": {
            "@type": "ItemList",
            "name": "Available Poker Game Formats",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Multi-Table Tournaments", "description": "Entry FREE to 150. Freerolls, Knockout Bounty, Progressive KO, Mega Satellites." },
              { "@type": "ListItem", "position": 2, "name": "No Limit Holdem", "description": "Limits 0.10/0.20 to 5/10. 10BB Max, 20BB Max, Ante, Bomb Pot, Double Board." },
              { "@type": "ListItem", "position": 3, "name": "Pot Limit Omaha (PLO4)", "description": "Limits 0.25/0.50 to 5/10. 20BB Max, 60BB Max, Ante, Bomb Pot, Double Board." },
              { "@type": "ListItem", "position": 4, "name": "PLO5", "description": "Limits 0.25/0.50 to 5/10. 20BB Max, 50BB Max, Ante, Run it Multi-Times." },
              { "@type": "ListItem", "position": 5, "name": "PLO6", "description": "Limits 0.25/0.50 to 5/10. 10BB Max, 60BB Max, Ante, Double Board." },
              { "@type": "ListItem", "position": 6, "name": "PLO5 Hi-Lo", "description": "Limits 0.25/0.50 to 1/2." },
              { "@type": "ListItem", "position": 7, "name": "PLO6 Hi-Lo", "description": "Limits 0.25/0.50 to 0.50/1." },
              { "@type": "ListItem", "position": 8, "name": "Short Deck", "description": "Limits 0.50 to 2." },
              { "@type": "ListItem", "position": 9, "name": "Sit-N-Gos", "description": "Currently not available due to insufficient demand." },
            ]
          }
        }}
      />
      <Navbar />
      <PageHeader
        label={gl(PAGE_COPY.label)}
        title={gl(PAGE_COPY.title)}
        subtitle={gl(PAGE_COPY.subtitle)}
      />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '40px 16px 80px' : '64px 32px 100px' }}>

        {/* ── Game Formats Table ── */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: 'white', marginBottom: 24 }}>
            {gl(PAGE_COPY.formatsTitle)}
          </h2>

          <div style={{ overflowX: 'auto', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 600 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <th style={{ ...thStyle, width: isMobile ? '30%' : '22%' }}>{gl(PAGE_COPY.colFormat)}</th>
                  <th style={{ ...thStyle, width: isMobile ? '22%' : '18%' }}>{gl(PAGE_COPY.colLimits)}</th>
                  <th style={thStyle}>{gl(PAGE_COPY.colFeatures)}</th>
                </tr>
              </thead>
              <tbody>
                {GAME_FORMATS.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}>
                    <td style={tdBoldStyle}>{gl(row.format)}</td>
                    <td style={tdMonoStyle}>{gl(row.limits)}</td>
                    <td style={tdStyle}>{gl(row.features)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Rake Schedule ── */}
        <section>
          <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, color: 'white', marginBottom: 8 }}>
            {gl(PAGE_COPY.rakeTitle)}
          </h2>

          {/* Club switcher tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
            {([
              { key: 'massiv', label: 'MOJO: Massiv Poker Union' },
              { key: 'mojo',   label: 'MOJO' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveClub(key)}
                style={{
                  padding: '7px 18px', borderRadius: 6, border: '1px solid',
                  borderColor: activeClub === key ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)',
                  background: activeClub === key ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: activeClub === key ? 'white' : 'rgba(255,255,255,0.4)',
                  fontSize: 13, fontWeight: activeClub === key ? 600 : 400,
                  cursor: 'pointer', transition: 'all 0.15s',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {activeClub === 'massiv' && (
            <>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
                {gl(PAGE_COPY.rakeSubtitle)}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 20,
              }}>
                {RAKE_SECTIONS.map((section) => (
                  <RakeCard key={section.title} section={section} gl={gl} thStyle={thStyle} tdMonoStyle={tdMonoStyle} tdStyle={tdStyle} colBlind={PAGE_COPY.colBlind} colCap={PAGE_COPY.colCap} />
                ))}
              </div>
            </>
          )}

          {activeClub === 'mojo' && (
            <>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
                MOJO Club · ID: 356323
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 20,
              }}>
                {MOJO_RAKE_SECTIONS.map((section) => (
                  <MojoRakeCard key={section.title} section={section} gl={gl} thStyle={thStyle} tdMonoStyle={tdMonoStyle} tdStyle={tdStyle} colBlind={PAGE_COPY.colBlind} />
                ))}
              </div>
            </>
          )}
        </section>

      </div>

      <Footer />
    </>
  );
}
