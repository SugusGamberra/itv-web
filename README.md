<div align="center">
  <img src="public/oni.svg" alt="ITV Logo" width="120" />

  # ITV 👹
  ### Inspección Técnica de Variables
  
  <p>
    Plataforma de entrenamiento digital para dominar los módulos de <strong>DAM y DAW</strong>.<br>
    Estética <em>Darks</em>, lógica robusta y escalabilidad modular.
  </p>

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
</div>

<br />

## 🔮 Sobre el Proyecto

**ITV (Inspección Técnica de Variables)** es una aplicación web diseñada para mis compis y cualquier estudiante de Ciclos Formativos (Desarrollo de Aplicaciones Web/Multiplataforma). 

El objetivo es ofrecer un entorno visualmente atractivo y relajante (o estresante, según se mire) para repasar temarios técnicos. Olvídate de los tests aburridos en papel; aquí el conocimiento se entrena con estilo.

### ✨ Características Principales

* **🎨 Diseño Premium:** Interfaz inmersiva estilo "Dark" con Glassmorphism, animaciones fluidas y tarjetas inspiradas en TCG (Magic/Tarot).
* **⚡ Rendimiento:** Construido sobre Vite para una carga instantánea.
* **📱 Responsive:** Se adapta perfectamente desde monitores 4K hasta móviles.
* **🧠 Motor de Tests Inteligente:**
    * **🍷 Repaso Chill:** Sin tiempo, con feedback inmediato y explicaciones detalladas ("Sabiduría Ancestral").
    * **🧠 Modo Puntuación:** El reto completo. Todas las preguntas del banco de datos.
    * **🍀 Simulacro (Easy):** 30 preguntas aleatorias para calentar.
    * **🔥 Modo Diablo (Hard):** Sistema de penalización (3 fallos restan 1 acierto). Solo para expertos.

---

## 🛠️ Stack Tecnológico

Este proyecto ha sido construido utilizando las mejores prácticas modernas de desarrollo frontend:

| Tecnología | Uso |
| :--- | :--- |
| **React 18** | Biblioteca de UI basada en componentes. |
| **TypeScript** | Tipado estático para una lógica blindada y sin errores. |
| **Vite** | Empaquetador de última generación (HMR instantáneo). |
| **Tailwind CSS** | Estilizado atómico para un diseño rápido y mantenible. |
| **React Router** | Navegación SPA (Single Page Application) fluida. |
| **Lucide React** | Iconografía vectorial ligera y consistente. |

---

## 📈 Escalabilidad y Arquitectura

Uno de los pilares de **ITV** es su capacidad de crecer. El proyecto está diseñado para ser **agnóstico al contenido**, lo que significa que añadir nuevas asignaturas o cursos es cuestión de minutos, no de reprogramación.

### ¿Cómo funciona el sistema modular?

El sistema separa la **Lógica** (Motor de test) de los **Datos** (Preguntas y Asignaturas).

1.  **JSON de Datos:** Las preguntas se alojan en archivos JSON independientes (`src/data/preguntas/`).
2.  **Mapeo Automático:** Un índice central (`indicePreguntas.ts`) importa estos JSON.
3.  **Configuración Visual:** Un archivo de configuración (`asignaturas.ts`) define el nombre, color y emojis de la asignatura.

**Ejemplo de flujo de expansión:**
> *¿Quieres añadir "Bases de Datos"?* > Simplemente creas `bases-datos.json`, lo registras en el índice y la aplicación generará automáticamente las rutas, las tarjetas y los tests sin tocar ni una línea de lógica de componentes.

---

## 🚀 Instalación y Despliegue

Si quieres ejecutar este grimorio darks en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/sugusgamberra/itv-web.git
    ```

2.  **Instala las dependencias:**
    ```bash
    cd itv-web
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Construye para producción:**
    ```bash
    npm run build
    ```

---

<div align="center">
  <p>Hecho con 🖤, mucho café y solecito de Cádiz</p>
  <p><em>"El conocimiento es la única variable que siempre suma."</em></p>
</div>