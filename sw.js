// Минимальный сервис-воркер: делает сайт устанавливаемым и показывает запись «нет сети».
// Данные не кешируем — оплаты и расписание всегда должны быть свежими.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
