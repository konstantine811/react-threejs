З цієї статті ми розпочинаємо знайомство з основами **Three.js** — потужної бібліотеки для створення 3D-графіки у браузері. На старті створимо базову структуру додатку, а далі крок за кроком будемо додавати нові можливості, які допоможуть розширити наш віртуальний простір.

## Що на нас чекає:

1. У першому розділі створимо просту сцену з коробкою
2. Розглянемо ключові компоненти, які формують додаток на Three.js
3. Додамо трохи освітлення, щоб усе виглядало не так похмуро

## Створення першої сцени

Для початку нам потрібно ініціалізувати проєкт. Найзручніший спосіб — використати [Vite](https://vite.dev/guide/):

```terminal
npm create vite@latest
```

### Налаштування

В мене це:

```terminal
◇  Project name:
│  react-threejs
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
```

А ви вже можете підлаштувати під свій смак.

### Додаємо Tailwind CSS

Щоб не лишати нашу сцену повністю без стилю, підключимо [Tailwind CSS](https://tailwindcss.com/docs/installation). З ним усе виглядає охайно та сучасно без зайвих зусиль.

```terminal
npm install tailwindcss @tailwindcss/vite
```

<span class="highlight">vite.config.ts</span>:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

З <span class="highlight">index.css</span> (який знаходиться в корні папки <span class="text-highlight highlight-grey">src</span>) - видаляємо усі стилі від vite та вставляємо:

```css
@import "tailwindcss";
```

<span class="highlight">App.tsx</span> - теж очищаєм та лишаємо лиш контент для тесту **Tailwind**:

```tsx
function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
```

Запускаємо проєкт:

```terminal
npm run dev
```

Також не забудьте **видалити** не потрібний файл зі стилями <span class="highlight">App.css</span> від vite.

### Встановлюємо React Three Fiber

Далі — трохи 3D. Використаємо [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), який дозволяє працювати з Three.js у стилі React-компонентів:

```terminal
npm install three @types/three @react-three/fiber
```

### Пишемо першу сцену

І ось наш стартовий код, де на сцені з’являється об’єкт у формі коробки:

```tsx
<div className="h-screen">
  <Canvas>
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  </Canvas>
</div>
```

> <span class="text-highlight highlight-grey">className</span>="<span class="highlight">h-screen</span>" - клас від Tailwind, який виставляє висоту контейнера у <span class="text-highlight highlight-green">100vh</span>, а компонента Canvas - підхоплює батьківську висоту та теж наж холст буде вже на всю висоту екрана.

Щоб налаштувати положення камери:

```tsx
<Canvas camera={{ position: [3, 3, 5] }}>...</Canvas>
```

💡 Цей параметр дозволяє відразу бачити сцену під зручним кутом.

### Додаємо можливість обертати камеру

Якщо хочете, щоб користувач міг обертати сцену мишкою, додаємо [OrbitControls](https://github.com/pmndrs/drei) з бібліотеки `@react-three/drei`:

```terminal
npm install @react-three/drei
```

І оновлюємо компонент:

```tsx
<Canvas camera={{ position: [3, 3, 5] }}>
  <OrbitControls />
  ...
</Canvas>
```

Готово! Тепер ми маємо базову 3D-сцену в браузері, яку можна розглядати з усіх боків.
У наступних частинах розширимо функціональність — додамо освітлення, нові об’єкти, матеріали й анімації.

До зустрічі в наступній статті! 🚀
