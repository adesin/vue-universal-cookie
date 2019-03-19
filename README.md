# Vue Universal Cookie

Универсальный Vue-плагин для работы с Cookie. Поддерживает SSR, интегрируется при помощи Express Middleware.

## Установка

```cmd
$ yarn add vue-universal-cookie
```

## Использование

### Клиент
```js
import { ClientPlugin } from 'vue-universal-cookie';

//  Подключение плагина
Vue.use(ClientPlugin);
```

### Сервер
```js
import { ServerPlugin, ExpressMiddleware } from 'vue-universal-cookie';

//  Добавление Middleware к вашему приложению Express
app.use(ExpressMiddleware());

//  Подключение плагина
Vue.use(ServerPlugin, {
  cookieApi: request.universalCookies  // request из Express
});
```

