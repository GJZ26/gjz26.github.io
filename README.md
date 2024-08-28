# Portafolio Simple (Español)

[Read the documentation in English.](#simple-portfolio-english)

## ¡Bienvenidos a la plantilla de mi portafolio!
Espero que esta plantilla pueda a ayudar a todos los que lo necesiten a iniciar su portafolio web, o al menos que sea de utilidad para modificarlo y extenderlo como deseen.
A continuación, te explico algunos de los archivos importantes y cómo modificarlo para tener tu propia versión de este proyecto :D.

## Configuración del Archivo `LangsAvailables.ts`

El archivo `LangsAvailables.ts` se encuentra en `src/shared/config/` y se encarga de registrar los idiomas que serán soportados por el sitio web.

### Detalles de Configuración

- **Ubicación:** `src/shared/config/LangsAvailables.ts`
- **Descripción:** Aquí se especifican los idiomas disponibles para el sitio web. Al añadir un nuevo idioma, es necesario también proporcionar las traducciones correspondientes en la carpeta `src/shared/langs`, siguiendo el formato del idioma de ejemplo “Demo”.

### Ejemplo de Configuración

```typescript
// Agrega la lista de idiomas que tu sitio web soportará.
// Usa las dos primeras letras del idioma,
// por ejemplo: “es” para “Español”, “en” para “English”, etc.

export type AvailableLangs = "demo";
```

### Instrucciones para Añadir Nuevos Idiomas

1. **Añadir el Idioma al Archivo:**
   - Incluye el código del nuevo idioma en el tipo `AvailableLangs`. Utiliza el formato de dos letras para el idioma.

2. **Agregar Traducciones:**
   - Crea una carpeta con el nombre del nuevo idioma en `src/shared/langs`.
   - Añade los archivos de traducción necesarios en esa carpeta.

3. **Ejemplo:**
   - Si añades el idioma “Español”, deberías incluir `"es"` en el tipo `AvailableLangs` y crear la carpeta `es` en `src/shared/langs` con los archivos de traducción apropiados.


## Configuración del Archivo `ThemesAvailables.ts`

El archivo `ThemesAvailables.ts` se encuentra en `src/shared/config/` y se utiliza para registrar los temas disponibles para el sitio web.

### Detalles de Configuración

- **Ubicación:** `src/shared/config/ThemesAvailables.ts`
- **Descripción:** Aquí se registran los temas que se pueden usar en el sitio web. Para añadir un nuevo tema, debes agregar tus propias definiciones y clases en el archivo `src/styles/Themes.styl` y registrar su ID en `ThemesAvailables`. Luego, en el objeto `Themes`, usa el ID como clave y el nombre de la clase como valor para aplicar el tema al elemento HTML.

#### Ejemplo de Configuración

```typescript
export type ThemesAvailables = "dark" | "light" | "debug";

// Para temas personalizados, añade tus atributos y clases en el archivo src/styles/Themes.styl.
// Agrega la palabra clave en el tipo ThemesAvailables y en el objeto Themes, 
// usa el valor de la clase de tu tema.

export const Themes: Record<ThemesAvailables, string> = {
  dark: "dark",
  light: "light",
  debug: "debug",
};
```

#### Instrucciones para Añadir Nuevos Temas

1. **Actualizar el Archivo de Estilos:**
   - Añade los atributos y clases correspondientes en `src/styles/Themes.styl`.

2. **Registrar el Nuevo Tema:**
   - Incluye el ID del nuevo tema en el tipo `ThemesAvailables`.

3. **Configurar el Objeto de Temas:**
   - En el objeto `Themes`, asigna el nombre de la clase del tema como valor correspondiente al ID del tema.

4. **Ejemplo:**
   - Si añades un tema personalizado llamado "custom", deberías incluir `"custom"` en `ThemesAvailables` y añadir una entrada en el objeto `Themes` con el valor de la clase correspondiente a tu nuevo tema.


## Configuración del Archivo `SystemData.ts`

El archivo `SystemData.ts` se encuentra en `src/shared/config/` y se utiliza para registrar las traducciones correspondientes a cada idioma de la interfaz de usuario.

### Detalles de Configuración

- **Ubicación:** `src/shared/config/SystemData.ts`
- **Descripción:** Aquí se asignan las traducciones a cada idioma. Los idiomas disponibles se declaran en `src/shared/langs/your-lang`. Este archivo importa las traducciones específicas del idioma y las registra en el objeto `SystemData`.

#### Ejemplo de Configuración

```typescript
import { AppTranslation } from "../interfaces/LangInterface";
import { SystemDemo } from "../langs/Demo/SystemDemo";

export const SystemData: AppTranslation = {
  demo: SystemDemo,
};
```

#### Instrucciones para Añadir Nuevas Traducciones

1. **Agregar Traducciones:**
   - Crea o actualiza el archivo de traducción correspondiente en `src/shared/langs/your-lang`. Asegúrate de seguir el formato y estructura requeridos.

2. **Registrar el Idioma:**
   - Importa las traducciones en `SystemData.ts` desde la ubicación correcta.

3. **Actualizar `SystemData`:**
   - Añade una entrada en el objeto `SystemData` para el nuevo idioma, usando una clave que represente el idioma y asignando las traducciones importadas como valor.

4. **Ejemplo:**
   - Si añades un idioma llamado "es", deberías importar las traducciones desde `src/shared/langs/Es/SystemEs` y agregar una entrada en `SystemData` con la clave `"es"` y el valor `SystemEs`.
  
## Configuración del Archivo `UserData.ts`

El archivo `UserData.ts` se encuentra en `src/shared/config/` y se utiliza para registrar la información del usuario, como nombre, experiencia, etc., para cada idioma disponible.

### Detalles de Configuración

- **Ubicación:** `src/shared/config/UserData.ts`
- **Descripción:** Aquí se asigna la información del usuario correspondiente a cada idioma. Los datos del usuario se declaran en `src/shared/langs/your-lang`. Este archivo importa los datos específicos del idioma y los registra en el objeto `UserData`.

#### Ejemplo de Configuración

```typescript
import { TranslatedInfo } from "../interfaces/LangInterface";
import { DataDemo } from "../langs/Demo/DataDemo";

export const UserData: TranslatedInfo = {
  demo: DataDemo,
};
```

#### Instrucciones para Añadir Nuevos Datos de Usuario

1. **Agregar Datos del Usuario:**
   - Crea o actualiza el archivo de información del usuario correspondiente en `src/shared/langs/your-lang`. Asegúrate de seguir el formato y estructura requeridos.

2. **Registrar el Idioma:**
   - Importa los datos del usuario en `UserData.ts` desde la ubicación correcta.

3. **Actualizar `UserData`:**
   - Añade una entrada en el objeto `UserData` para el nuevo idioma, usando una clave que represente el idioma y asignando los datos importados como valor.

4. **Ejemplo:**
   - Si añades un idioma llamado "es", deberías importar los datos desde `src/shared/langs/Es/DataEs` y agregar una entrada en `UserData` con la clave `"es"` y el valor `DataEs`.

## Configuración del Archivo `Config.ts`

El archivo `Config.ts` se encuentra en `src/shared/config/` y se utiliza para definir la configuración del sitio web, como los componentes visibles, temas por defecto y otras opciones del sitio.

### Detalles de Configuración

- **Ubicación:** `src/shared/config/Config.ts`
- **Descripción:** Aquí puedes configurar varias opciones del sitio web. Los atributos con el signo `?` indican que son opcionales y puedes omitirlos sin problemas. No debes crear un nuevo archivo; simplemente sobrescribe las configuraciones preexistentes para tu proyecto.

#### Ejemplo de Configuración

```typescript
/**************************************************************************
 * 
 * Configuration section
 * 
 * In this section you will be able to configure some things about the website.
 * The attributes with the ? sign indicate that they can be omitted, so there should be no problem if you delete them.
 * Do not create a new file, it overwrites these pre-existing settings for your project.
 * 
 **************************************************************************/

import { Config } from "../interfaces/ConfigInterface";
import { version } from "../../../package.json";

export const defaultConfig: Config = {
  version, // Application version, do not MANUALLY MODIFY
  global: { // General website configuration
    translatable: true, // Show the option to change languages
    allowChangeTheme: true, // Show the option to change themes
    currentTheme: "dark", // Current theme (the one that will be displayed when opening the website for the first time)
    currentLang: "demo", // Current language (The language that will be displayed by default)
    showCredit: true, // Show the year and the creator's nickname in the footer (Giving credits is important)
    showVersion: true, // Show version in footer
    showSource: true, // Show link to source code
    showMinimap: true, // Show navigation map
    inactiveHours: { // - ? Indicate the time when you are not available
      start_hour: "00:00", // Inactivity start time (in 24-hour format)
      end_hour: "12:00", // End of inactivity time (in 24-hour format)
    },
    timeZone: "America/Mexico_City", // Time zone of where you are living, to show visitors from another country what time it is for you.
  },
  head: { // Section where your name appears
    showTimeZone: true, // Show your time zone
    indicateStatus: true, // Show your schedule when you are not available
  },
  experience: {
    abreviate_month: true, // Render the full name of the months or just the first three letters of them
    max_skills_listed: 3 // Maximum number of skills to render
  },
  links: { // Link section to your networks 
    showCV: true, // Generate and allow you to download your CV
  },
};
```

#### Secciones de Configuración

- **`global`:** Configuración general del sitio web.
  - `translatable`: Muestra la opción para cambiar idiomas.
  - `allowChangeTheme`: Muestra la opción para cambiar temas.
  - `currentTheme`: Tema actual que se mostrará al abrir el sitio web.
  - `currentLang`: Idioma actual que se mostrará por defecto.
  - `showCredit`: Muestra el año y el apodo del creador en el pie de página.
  - `showVersion`: Muestra la versión en el pie de página.
  - `showSource`: Muestra un enlace al código fuente.
  - `showMinimap`: Muestra un mapa de navegación.
  - `inactiveHours` (Opcional): Horario de inactividad.
  - `timeZone` (Opcional): Zona horaria para mostrar la hora local a los visitantes.

- **`head`:** Configuración de la sección donde aparece tu nombre.
  - `showTimeZone`: Muestra tu zona horaria.
  - `indicateStatus`: Muestra tu horario cuando no estás disponible.

- **`experience`:** Configuración relacionada con la experiencia.
  - `abreviate_month`: Renderiza el nombre completo de los meses o solo las primeras tres letras.
  - `max_skills_listed`: Número máximo de habilidades a renderizar.

- **`links`:** Configuración de la sección de enlaces a tus redes.
  - `showCV`: Genera y permite descargar tu CV.

## Configuración del Archivo `SystemDemo.ts`

El archivo `SystemDemo.ts` se encuentra en `src/shared/langs/Demo/` y se utiliza para definir las traducciones de los textos de la interfaz de usuario para el idioma "Demo". Debes crear un archivo similar para cada idioma definido en el archivo de idiomas disponibles (`src/shared/config/LangsAvailables.ts`) y colocarlo en `src/shared/langs/<your-lang>/System<Lang>.ts`.

### Detalles de Configuración

- **Ubicación:** `src/shared/langs/Demo/SystemDemo.ts`
- **Descripción:** Aquí se encuentran las traducciones para todas las frases de la interfaz de usuario. Traduce los textos de la UI al idioma que estás agregando. Los idiomas disponibles se configuran en el archivo `src/shared/config/Config.ts` y se registran en `src/shared/config/SystemData.ts`.

#### Ejemplo de Configuración

```typescript
/**
 * Here you will find the translations to all the interface phrases.
 * Please translate the UI texts to the language you are trying to add.
 *
 * The available languages are changed from the src/shared/config/Config.ts file and recorded in the src/shared/config/SystemData.ts file.
 */

import { LanguageTranslation } from "../../interfaces/LangInterface";

export const SystemDemo: LanguageTranslation = {
  title: "Demo Web Portfolio", // The text that is displayed in the browser tab
  language: "Demo", // How the language should be displayed in the header bar!
  theme: "Theme",
  about: "About Me",
  experiences: "Experience",
  certificates: "Certificates",
  side_project: "Side Projects",
  links: "Links",
  version: "Version",
  source: "Source",
  month: {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  },
  remote: "Remote",
  on_site: "On-Site",
  hybrid: "Hybrid",
  present: "Present",
  dark: "Dark",
  light: "Light",
  debug: "Debug",
  empty_experience: "No experience to show",
  empty_certificates: "No certificate to show",
  empty_side_projects: "No side project to show",
  empty_links: "No links to show",
  skills: "Skills",
  download_cv_in: "Download CV in"
};
```

#### Instrucciones para Añadir Nuevas Traducciones

1. **Crear el Archivo de Traducción:**
   - Crea un archivo similar a `SystemDemo.ts` para cada nuevo idioma en la carpeta `src/shared/langs/your-lang/`. Nombralo `SystemLang.ts`, reemplazando `your-lang` con el código del idioma.

2. **Añadir Traducciones:**
   - Traduce los textos de la interfaz al idioma correspondiente, manteniendo la estructura del archivo y añadiendo las traducciones necesarias.

3. **Actualizar Configuración:**
   - Registra el nuevo archivo de traducción en `SystemData.ts` con la clave del idioma y el valor correspondiente a las traducciones importadas.

4. **Ejemplo:**
   - Para añadir un idioma "es", crea `SystemEs.ts` en `src/shared/langs/Es/` y añade las traducciones en español. Luego, actualiza `SystemData.ts` para incluir `"es": SystemEs`.


## Configuración del Archivo `DataDemo.ts`

El archivo DataDemo.ts se encuentra en src/shared/langs/Demo/ y se utiliza para definir el contenido de las secciones relacionadas con los datos del usuario, como nombre, experiencia, certificados, proyectos secundarios, enlaces y CV. Debes crear un archivo similar para cada idioma definido en el archivo de idiomas disponibles (src/shared/config/LangsAvailables.ts), colocándolo en src/shared/langs/your-lang/DataLang.ts.

### Detalles de Configuración
- **Ubicación**: src/shared/langs/Demo/DataDemo.ts
- **Descripción**: Este archivo especifica qué contenido debe llevar cada sección de datos del usuario en el idioma "Demo". Debes traducir y ajustar estos datos de acuerdo con el idioma que estás agregando.

### Ejemplo de archivo
```typescript
import { Info } from "../../interfaces/LangInterface";

export const DataDemo: Info = {
  name: "John",
  lastname: "Doe",
  role: "Web Developer",
  aka: "JD",
  image: "/path/to/image.jpg",
  location: {
    state: "California",
    country: "USA",
  },
  sections: {
    about: "About me section content",
    experiences: [
      {
        company: "Tech Corp",
        role: "Senior Developer",
        description: "Developed web applications.",
        duration: { start: "2020-01", end: "2023-06" },
        location: { state: "California", country: "USA" },
        mode: "remote",
        skills: ["JavaScript", "React", "Node.js"],
        uri: "https://techcorp.com",
      },
    ],
    certificates: [
      {
        badge: "/path/to/badge.jpg",
        title: "Certified Web Developer",
        date: { month: "June", year: 2023 },
        issuer: "Tech Institute",
        skills: ["Web Development", "JavaScript"],
        uri: "https://techinstitute.com/certificates/web-developer",
      },
    ],
    side_project: [
      {
        title: "Portfolio Website",
        year: 2022,
        description: "A personal portfolio website.",
        image: "/path/to/project.jpg",
        uri: "https://portfolio.com",
      },
    ],
    links: [
      {
        text: "LinkedIn",
        uri: "https://linkedin.com/in/johndoe",
        icon: IconElement,
      },
    ],
  },
  cvs: {
    main: {
      lang: "en",
      uri: "/path/to/cv.pdf",
    },
  },
};

```

### Atributos del Objeto `DataDemo`

- **`name`**: 
  - **Tipo:** `string`
  - **Descripción:** Nombre del usuario. **Requerido.**

- **`lastname`**: 
  - **Tipo:** `string`
  - **Descripción:** Apellido del usuario. **Requerido.**

- **`role`**: 
  - **Tipo:** `string`
  - **Descripción:** Rol o título profesional del usuario. **Requerido.**

- **`aka`**: 
  - **Tipo:** `string`
  - **Descripción:** Nombre alternativo o apodo del usuario. **Opcional.**

- **`image`**: 
  - **Tipo:** `string`
  - **Descripción:** URL de la imagen del usuario. **Opcional.**

- **`location`**: 
  - **Tipo:** `Location`
  - **Descripción:** Ubicación del usuario. Incluye:
    - `state` (Estado): **Opcional.**
    - `country` (País): **Opcional.**

- **`sections`**: 
  - **Tipo:** `object` con propiedades:
    - **`about`**: 
      - **Tipo:** `AboutData` (`string`)
      - **Descripción:** Información sobre el usuario. **Requerido.**
    - **`experiences`**: 
      - **Tipo:** `ExperienceData` (`Array<Experience>`)
      - **Descripción:** Experiencias laborales del usuario. **Requerido.**
    - **`certificates`**: 
      - **Tipo:** `CertificateData` (`Array<Certificate>`)
      - **Descripción:** Certificados del usuario. **Requerido.**
    - **`side_project`**: 
      - **Tipo:** `SideProjectData` (`Array<SideProject>`)
      - **Descripción:** Proyectos paralelos del usuario. **Requerido.**
    - **`links`**: 
      - **Tipo:** `LinksData` (`Array<LinkButton>`)
      - **Descripción:** Enlaces a redes sociales u otros recursos del usuario. **Requerido.**

- **`cvs`**: 
  - **Tipo:** `CVSData`
  - **Descripción:** Datos sobre los CVs del usuario. Incluye:
    - `main`: **Requerido.** CV principal del usuario.
    - `secondary`: **Opcional.** CV secundario del usuario.



### Interfaces de Datos de Usuario

#### **`AboutData`**

- **Tipo:** `string`
- **Descripción:** Contiene la información sobre el usuario que se mostrará en la sección "Acerca de". Es una cadena de texto que puede incluir una biografía o descripción personal.

#### **`ExperienceData`**

- **Tipo:** `Array<Experience>`
- **Descripción:** Es una lista de experiencias laborales del usuario. Cada experiencia se define con la interfaz `Experience`.

  **Interfaz `Experience`:**
  - **`company`**: 
    - **Tipo:** `string`
    - **Descripción:** Nombre de la empresa donde trabajó el usuario. **Requerido.**
  - **`role`**: 
    - **Tipo:** `string`
    - **Descripción:** Rol o título del usuario en la empresa. **Requerido.**
  - **`description`**: 
    - **Tipo:** `string`
    - **Descripción:** Descripción de las responsabilidades y logros del usuario en el rol. **Requerido.**
  - **`duration`**: 
    - **Tipo:** `DateRange`
    - **Descripción:** Periodo durante el cual el usuario trabajó en la empresa. Incluye fechas de inicio y fin. **Requerido.**
  - **`location`**: 
    - **Tipo:** `Location`
    - **Descripción:** Ubicación de la empresa. Incluye:
      - `state` (Estado): **Opcional.**
      - `country` (País): **Opcional.**
  - **`mode`**: 
    - **Tipo:** `modesAvailables` (`"remote" | "on_site" | "hybrid"`)
    - **Descripción:** Tipo de trabajo realizado (remoto, en sitio, híbrido). **Opcional.**
  - **`skills`**: 
    - **Tipo:** `Array<string>`
    - **Descripción:** Habilidades adquiridas o utilizadas durante el empleo. **Opcional.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL a un recurso adicional relacionado con la experiencia, como un proyecto o empresa. **Opcional.**

#### **`CertificateData`**

- **Tipo:** `Array<Certificate>`
- **Descripción:** Es una lista de certificados obtenidos por el usuario. Cada certificado se define con la interfaz `Certificate`.

  **Interfaz `Certificate`:**
  - **`badge`**: 
    - **Tipo:** `string`
    - **Descripción:** URL de una imagen del distintivo o insignia del certificado. **Opcional.**
  - **`title`**: 
    - **Tipo:** `string`
    - **Descripción:** Título del certificado. **Requerido.**
  - **`date`**: 
    - **Tipo:** `MonthYear`
    - **Descripción:** Fecha en la que se obtuvo el certificado. Incluye mes y año. **Requerido.**
  - **`issuer`**: 
    - **Tipo:** `string`
    - **Descripción:** Entidad que otorgó el certificado. **Requerido.**
  - **`skills`**: 
    - **Tipo:** `Array<string>`
    - **Descripción:** Habilidades adquiridas o validadas por el certificado. **Opcional.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL a un recurso adicional relacionado con el certificado, como una página de verificación. **Requerido.**

#### **`SideProjectData`**

- **Tipo:** `Array<SideProject>`
- **Descripción:** Es una lista de proyectos paralelos del usuario. Cada proyecto se define con la interfaz `SideProject`.

  **Interfaz `SideProject`:**
  - **`title`**: 
    - **Tipo:** `string`
    - **Descripción:** Título del proyecto paralelo. **Requerido.**
  - **`year`**: 
    - **Tipo:** `number`
    - **Descripción:** Año en el que se realizó el proyecto. **Requerido.**
  - **`description`**: 
    - **Tipo:** `string`
    - **Descripción:** Descripción del proyecto paralelo. **Requerido.**
  - **`image`**: 
    - **Tipo:** `string`
    - **Descripción:** URL de una imagen representativa del proyecto. **Opcional.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL a un recurso adicional relacionado con el proyecto, como una demostración o repositorio. **Opcional.**

#### **`LinksData`**

- **Tipo:** `Array<LinkButton>`
- **Descripción:** Es una lista de enlaces a redes sociales u otros recursos del usuario. Cada enlace se define con la interfaz `LinkButton`.

  **Interfaz `LinkButton`:**
  - **`text`**: 
    - **Tipo:** `string`
    - **Descripción:** Texto del enlace. **Requerido.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL del enlace. **Requerido.**
  - **`icon`**: 
    - **Tipo:** `Function`
    - **Descripción:** Icono asociado al enlace. **Opcional.**

#### **`CVSData`**

- **Tipo:** `CVSData`
- **Descripción:** Datos sobre los CVs del usuario. Incluye:

  **Interfaz `CVSData`:**
  - **`main`**: 
    - **Tipo:** `CVS`
    - **Descripción:** CV principal del usuario. **Requerido.**
  - **`secondary`**: 
    - **Tipo:** `CVS`
    - **Descripción:** CV secundario del usuario. **Opcional.**

  **Interfaz `CVS`:**
  - **`lang`**: 
    - **Tipo:** `AvailableLangs`
    - **Descripción:** Idioma del CV. **Requerido.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL para descargar el CV. **Requerido.**

#### **`Info`**

- **Tipo:** `Info`
- **Descripción:** Interfaz principal para definir la información del usuario, combinando todos los datos anteriores.

  **Interfaz `Info`:**
  - **`image`**: 
    - **Tipo:** `string`
    - **Descripción:** URL de la imagen del usuario. **Opcional.**
  - **`name`**: 
    - **Tipo:** `string`
    - **Descripción:** Nombre del usuario. **Requerido.**
  - **`lastname`**: 
    - **Tipo:** `string`
    - **Descripción:** Apellido del usuario. **Requerido.**
  - **`role`**: 
    - **Tipo:** `string`
    - **Descripción:** Rol o título profesional del usuario. **Requerido.**
  - **`aka`**: 
    - **Tipo:** `string`
    - **Descripción:** Nombre alternativo o apodo del usuario. **Opcional.**
  - **`location`**: 
    - **Tipo:** `Location`
    - **Descripción:** Ubicación del usuario. **Opcional.**
  - **`sections`**: 
    - **Tipo:** `object` con propiedades `about`, `experiences`, `certificates`, `side_project`, `links`.
    - **Descripción:** Contenido de cada sección del perfil del usuario. **Requerido.**
  - **`cvs`**: 
    - **Tipo:** `CVSData`
    - **Descripción:** Información sobre los CVs del usuario. **Opcional.**

#### Instrucciones para Añadir Nuevos Datos

1. **Agregar Datos del Usuario:**
   - Rellena los campos con la información correspondiente para el usuario. Asegúrate de cumplir con los requisitos de cada campo y de proporcionar información en las secciones obligatorias.

2. **Opcionalidad:**
   - Añade datos opcionales solo si son relevantes. Campos como `aka`, `image`, y `location` son opcionales y pueden ser omitidos si no se dispone de la información.

3. **Actualizar el Archivo:**
   - Crea o actualiza el archivo `DataDemo.ts` para reflejar los datos del usuario en el idioma "Demo". Utiliza el formato y estructura especificados en el archivo de ejemplo.


<!-- Versión en inglés -->

# Simple Portfolio (English)

> [!IMPORTANT]  
> The content of this section was automatically translated on [deepl.com](https://deepl.com), it may not have a concise structure or the file may not follow the proper markdown syntax, resulting in corrupted rendering..

## Welcome to my portfolio template!
I hope this template can help everyone who needs it to start their web portfolio, or at least be useful to modify and extend it as they wish.
Below, I explain some of the important files and how to modify it to have your own version of this project :D.

## Configuration of `LangsAvailables.ts` File

The `LangsAvailables.ts` file is located in `src/shared/config/` and is responsible for registering the languages that will be supported by the web site.

### Configuration Details

- Location:** `src/shared/config/LangsAvailables.ts`.
- Description:** Here you specify the languages available for the web site. When adding a new language, it is also necessary to provide the corresponding translations in the `src/shared/langs` folder, following the format of the example language “Demo”.


### Configuration Example

```typescript
// Add the list of languages your website will support.
// Use the first two letters of the language.
// for example: “es” for “Español”, “en” for “English”, etc.

export type AvailableLangs = “demo”;
```

### Instructions for Adding New Languages

1. **Add the Language to the File:**
   - Include the code for the new language in the `AvailableLangs` type. Use the two-letter format for the language.

2. **Add Translations:**
   - Create a folder with the name of the new language in `src/shared/langs`.
   - Add the necessary translation files to that folder.

3. **Example:**
   - If you add the language “Spanish”, you should include `“es”` in the `AvailableLangs` type and create the `es` folder in `src/shared/langs` with the appropriate translation files.

## `ThemesAvailables.ts` File Configuration

The `ThemesAvailables.ts` file is located in `src/shared/config/` and is used to register the themes available for the website.

### Configuration Details

- Location:** `src/shared/config/ThemesAvailables.ts`.- Description:** This is where the themes that can be used on the website are registered. To add a new theme, you must add your own definitions and classes in the `src/styles/Themes.styl` file and register its ID in `ThemesAvailables`. Then, in the `Themes` object, use the ID as the key and the class name as the value to apply the theme to the HTML element.

#### Configuration Example

```typescript
export type ThemesAvailables = “dark” | “light” | “debug”;

// For custom themes, add your attributes and classes in the src/styles/Themes.styl file. 
// Add the keyword in the ThemesAvailables type and in the Themes object, 
// use the value of your theme's class.

export const Themes: Record<ThemesAvailables, string> = {
  dark: “dark”,
  light: “light”,
  debug: “debug”,
};
```

#### Instructions for Adding New Topics

1. **Update the Styles File:**.
   - Add the corresponding attributes and classes in `src/styles/Themes.styl`.

2. **Register New Theme:**
   - Include the ID of the new theme in the `ThemesAvailables` type.

3. **Configure the Themes Object:**.
   - In the `Themes` object, assign the name of the theme class as the value corresponding to the theme ID.

4. **Example:**
   - If you add a custom theme named “custom”, you should include `“custom”` in `ThemesAvailables` and add an entry in the `Themes` object with the class value corresponding to your new theme.


## Setting up the `SystemData.ts` File

The `SystemData.ts` file is located in `src/shared/config/` and is used to register the translations corresponding to each UI language.


### Configuration Details

- **Location:** `src/shared/config/SystemData.ts`
- **Description:** Here translations are assigned to each language. The available languages are declared in `src/shared/langs/your-lang`. This file imports the language-specific translations and registers them in the `SystemData` object.

#### Configuration Example

```typescript
import { AppTranslation } from “../interfaces/LangInterface”;
import { SystemDemo } from “../langs/Demo/SystemDemo”;

export const SystemData: AppTranslation = {
  demo: SystemDemo,
};
```

#### Instructions for Adding New Translations.

1. **Add Translations:**.
   - Create or update the corresponding translation file in `src/shared/langs/your-lang`. Be sure to follow the required format and structure.

2. **Register the Language:**.
   - Import the translations into `SystemData.ts` from the correct location.

3. **Update `SystemData`:**.
   - Add an entry in the `SystemData` object for the new language, using a key representing the language and assigning the imported translations as a value.

4. **Example:**
   - If you add a language named “es”, you should import the translations from `src/shared/langs/Es/SystemEs` and add an entry in `SystemData` with the key `“es”` and the value `SystemEs`.


## Configuration of the `UserData.ts` File

The `UserData.ts` file is located in `src/shared/config/` and is used to record user information, such as name, experience, etc., for each available language.

### Configuration Details

- Location:** `src/shared/config/UserData.ts`.
- Description:** User information is assigned here for each language. The user data are declared in `src/shared/langs/your-lang`. This file imports the language-specific data and registers it in the `UserData` object.

#### Configuration Example

```typescript
import { TranslatedInfo } from "../interfaces/LangInterface";
import { DataDemo } from "../langs/Demo/DataDemo";

export const UserData: TranslatedInfo = {
  demo: DataDemo,
};
```


#### Instructions for Adding New User Data

1. **Add User Data:**.
   - Create or update the corresponding user information file in `src/shared/langs/your-lang`. Be sure to follow the required format and structure.

2. **Register Language:**
   - Import the user data into `UserData.ts` from the correct location.

3. **Update `UserData`:**.
   - Add an entry in the `UserData` object for the new language, using a key representing the language and assigning the imported data as the value.

4. **Example:**
   - If you add a language named “es”, you should import the data from `src/shared/langs/Es/DataEs` and add an entry in `UserData` with the key `“es”` and the value `DataEs`.

## Configuration of the `Config.ts` File

The `Config.ts` file is located in `src/shared/config/` and is used to define website settings such as visible components, default themes and other site options.

### Configuration Details

- Location:** `src/shared/config/Config.ts`.
- Description:** Here you can configure various website options. Attributes with a `?` sign indicate that they are optional and you can safely omit them. You do not have to create a new file; it simply overwrites the pre-existing settings for your project.

#### Configuration Example

```typescript
/**************************************************************************
 * 
 * Configuration section
 * 
 * In this section you will be able to configure some things about the website.
 * The attributes with the ? sign indicate that they can be omitted, so there should be no problem if you delete them.
 * Do not create a new file, it overwrites these pre-existing settings for your project.
 * 
 **************************************************************************/

import { Config } from "../interfaces/ConfigInterface";
import { version } from "../../../package.json";

export const defaultConfig: Config = {
  version, // Application version, do not MANUALLY MODIFY
  global: { // General website configuration
    translatable: true, // Show the option to change languages
    allowChangeTheme: true, // Show the option to change themes
    currentTheme: "dark", // Current theme (the one that will be displayed when opening the website for the first time)
    currentLang: "demo", // Current language (The language that will be displayed by default)
    showCredit: true, // Show the year and the creator's nickname in the footer (Giving credits is important)
    showVersion: true, // Show version in footer
    showSource: true, // Show link to source code
    showMinimap: true, // Show navigation map
    inactiveHours: { // - ? Indicate the time when you are not available
      start_hour: "00:00", // Inactivity start time (in 24-hour format)
      end_hour: "12:00", // End of inactivity time (in 24-hour format)
    },
    timeZone: "America/Mexico_City", // Time zone of where you are living, to show visitors from another country what time it is for you.
  },
  head: { // Section where your name appears
    showTimeZone: true, // Show your time zone
    indicateStatus: true, // Show your schedule when you are not available
  },
  experience: {
    abreviate_month: true, // Render the full name of the months or just the first three letters of them
    max_skills_listed: 3 // Maximum number of skills to render
  },
  links: { // Link section to your networks 
    showCV: true, // Generate and allow you to download your CV
  },
};
```
#### Configuration Sections

- `global`:General configuration of the web site.
  - `translatable`: Displays the option to change languages.
  - `allowChangeTheme`: Displays the option to change themes.
  - `currentTheme`: Current theme that will be displayed when opening the website.
  - `currentLang`: Current language that will be displayed by default.
  - `showCredit`: Displays the year and the creator's nickname in the footer.
  - `showVersion`: Displays the version in the footer.
  - `showSource`: Displays a link to the source code.
  - `showMinimap`: Displays a navigation map.
  - `inactiveHours` (Optional): Inactive hours.
  - `timeZone` (Optional): Time zone to show local time to visitors.

- `head`: Configuration of the section where your name appears.
  - `showTimeZone`: Show your time zone.
  - `indicateStatus`: Show your time zone when you are not available.

- `experience`: Experience related settings.
  - `abreviate_month`: Renders the full name of the months or just the first three letters.
  - `max_skills_listed`: Maximum number of skills to render.

- `links`: Configuration of the links section to your networks.
  - `showCV`: Generates and allows you to download your CV.

## `SystemDemo.ts` File Configuration

The `SystemDemo.ts` file is located in `src/shared/langs/Demo/` and is used to define the translations of the user interface texts for the “Demo” language. You must create a similar file for each language defined in the available languages file (`src/shared/config/LangsAvailables.ts`) and place it in `src/shared/langs/<your-lang>/System<Lang>.ts`.

### Configuration Details

- **Location:** `src/shared/langs/Demo/SystemDemo.ts`.
- **Description:** Here are the translations for all UI phrases. It translates the UI texts to the language you are adding. The available languages are configured in the `src/shared/config/Config.ts` file and recorded in `src/shared/config/SystemData.ts`.

#### Configuration Example

```typescript
/**
 * Here you will find the translations to all the interface phrases.
 * Please translate the UI texts to the language you are trying to add.
 *
 * The available languages are changed from the src/shared/config/Config.ts file and recorded in the src/shared/config/SystemData.ts file.
 */

import { LanguageTranslation } from "../../interfaces/LangInterface";

export const SystemDemo: LanguageTranslation = {
  title: "Demo Web Portfolio", // The text that is displayed in the browser tab
  language: "Demo", // How the language should be displayed in the header bar!
  theme: "Theme",
  about: "About Me",
  experiences: "Experience",
  certificates: "Certificates",
  side_project: "Side Projects",
  links: "Links",
  version: "Version",
  source: "Source",
  month: {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  },
  remote: "Remote",
  on_site: "On-Site",
  hybrid: "Hybrid",
  present: "Present",
  dark: "Dark",
  light: "Light",
  debug: "Debug",
  empty_experience: "No experience to show",
  empty_certificates: "No certificate to show",
  empty_side_projects: "No side project to show",
  empty_links: "No links to show",
  skills: "Skills",
  download_cv_in: "Download CV in"
};
```

#### Instructions for Adding New Translations

1. **Create the Translation File:**  Create a file similar to `SystemDemo.ts` for each new language.
   - Create a file similar to `SystemDemo.ts` for each new language in the `src/shared/langs/your-lang/` folder. Name it `SystemLang.ts`, replacing `your-lang` with the language code.

2. **Add Translations:**
   - Translates the interface texts into the corresponding language, keeping the file structure and adding the necessary translations.

3. **Update Configuration:**
   - Registers the new translation file in `SystemData.ts` with the language key and the value corresponding to the imported translations.

4. **Example:**
   - To add an “es” language, create `SystemEs.ts` in `src/shared/langs/Es/` and add the Spanish translations. Then update `SystemData.ts` to include `“es”: SystemEs`.


## Setting up the `DataDemo.ts` File

The DataDemo.ts file is located in src/shared/langs/Demo/ and is used to define the content of the sections related to user data, such as name, experience, certificates, side projects, links and CV. You must create a similar file for each language defined in the available languages file (src/shared/config/LangsAvailables.ts), placing it in src/shared/langs/your-lang/DataLang.ts.

### Configuration Details
- **Location**: src/shared/langs/Demo/DataDemo.ts
- **Description**: This file specifies what content each user data section should contain in the “Demo” language. You must translate and adjust this data according to the language you are adding.

### Example file

```typescript
import { Info } from "../../interfaces/LangInterface";

export const DataDemo: Info = {
  name: "John",
  lastname: "Doe",
  role: "Web Developer",
  aka: "JD",
  image: "/path/to/image.jpg",
  location: {
    state: "California",
    country: "USA",
  },
  sections: {
    about: "About me section content",
    experiences: [
      {
        company: "Tech Corp",
        role: "Senior Developer",
        description: "Developed web applications.",
        duration: { start: "2020-01", end: "2023-06" },
        location: { state: "California", country: "USA" },
        mode: "remote",
        skills: ["JavaScript", "React", "Node.js"],
        uri: "https://techcorp.com",
      },
    ],
    certificates: [
      {
        badge: "/path/to/badge.jpg",
        title: "Certified Web Developer",
        date: { month: "June", year: 2023 },
        issuer: "Tech Institute",
        skills: ["Web Development", "JavaScript"],
        uri: "https://techinstitute.com/certificates/web-developer",
      },
    ],
    side_project: [
      {
        title: "Portfolio Website",
        year: 2022,
        description: "A personal portfolio website.",
        image: "/path/to/project.jpg",
        uri: "https://portfolio.com",
      },
    ],
    links: [
      {
        text: "LinkedIn",
        uri: "https://linkedin.com/in/johndoe",
        icon: IconElement,
      },
    ],
  },
  cvs: {
    main: {
      lang: "en",
      uri: "/path/to/cv.pdf",
    },
  },
};

```

### `DataDemo` Object Attributes

- **`name`**: 
  - **Type:** `string`.
  - **Description:** User name. **Required**

- **`lastname`**: 
  - **Type:** `string`.
  - **Description:** User's last name. **Required**.

- **`role`**: 
  - **Type:** `string`.
  - **Description:** User's role or professional title. **Required**.

- **`aka`**: 
  - **Type:** `string`.
  - **Description:** Alternate name or nickname of the user. **Optional**.

- **`image`**: 
  - **Type:** `string`.
  - **Description:** URL of the user's image. **Optional**.

- **`location`**: 
  - **Type:** `Location`.
  - **Description:** Location of the user. Includes:
    - `state`: **Optional**.
    - ``Country` (Country): **Optional.**

- **`sections`**: 
  - **Type:** `object` with properties:
    - **`about`**: 
      - **Type:** `AboutData` (`string`).
      - **Description:** User information. **Required**.
    - **`experiences`**: 
      - **Type:** `ExperienceData` (`Array<Experience>`).
      - **Description:** User's work experiences. **Required**.
    - **`certificates`**: 
      - **Type:** `CertificateData` (`Array<Certificate>`).
      - **Description:** User's certificates. **Required**.
    - **`side_project`**: 
      - **Type:** `SideProjectData` (`Array<SideProject>`).
      - **Description:** User's side projects. **Required**.
    - **`links`**: 
      - **Type:** `LinksData` (`Array<LinkButton>`).
      - **Description:** Links to social networks or other user resources. **Required**.

- **`cvs`**: 
  - **Type:** `CVSData`.
  - **Description:** Data about the user's CVs. Includes:
    - `main`: **Required.** User's main CV.
    - `secondary`: **Optional.** Secondary CV of the user.

### User Data Interfaces

#### **`AboutData`**

- **Type:** `string`
- **Description:** Contains information about the user that will be displayed in the “About” section. It is a text string that may include a biography or personal description.

#### **`ExperienceData`**
- **Type:** `Array<Experience>`.
- **Description:** This is a list of the user's work experiences. Each experience is defined with the `Experience` interface.

  **Experience` interface:** **company`**: **company`**: **company`**: **company`**: **company
  - **`company`**: 
    - **Type:** `string`.
    - Description:** Name of the company where the user worked. **Required.
  - **`role`**: 
    - **Type:** `string`.
    - Description:** Role or title of the user in the company. **Required.
  - **`description`**: 
    - **Type:** `string`.
    - Description:** Description of the user's responsibilities and accomplishments in the role. **Required.
  - **`duration`**: 
    - **Type:** `DateRange`.
    - Description:** Period during which the user worked in the company. Includes start and end dates. **Required.
  - **`location`**: 
    - **Type:** `Location`.
    - **Description:** Location of the company. Includes:
      - `state`: **Optional.
      - Country` (Country): **Optional.**
  - **`mode`**: 
    - **Type:** `modesAvailables` (``remote` | ``on_site`` | ``hybrid``).
    - **Description:** Type of work performed (remote, on-site, hybrid). **Optional.
  - **`skills`**: 
    - **Type:** `Array<string>`.
    - Description:** Skills acquired or used during employment. **Optional.
  - **`uri`**: 
    - **Type:** `string`.
    - Description:** URL to an additional resource related to the experience such as a project or company. **Optional.

#### **`CertificateData`**

- **Type:** ``Array<Certificate>`.
- **Description:** It is a list of certificates obtained by the user. Each certificate is defined with the `Certificate` interface.

  **Certificate` interface:** **badge`**: **Certificate` interface.
  - **`badge`**: 
    - **Type:** `string`.
    - Description:** URL of an image of the certificate badge. **Optional**: **Type:** `string` **Description:** URL of a certificate badge image.
  - **`title`**: 
    - **Type:** `string`.
    - Description:** Certificate title. **Required.
  - **`date`**: 
    - **Type:** `MonthYear`.
    - Description:** Date the certificate was obtained. Include month and year. **Required.
  - **`issuer`**: 
    - **Type:** `string`.
    - Description:** Entity that granted the certificate. **Required.
  - **`skills`**: 
    - **Type:** `Array<string>`.
    - Description:** Skills acquired or validated by the certificate. **Optional.
  - **`uri`**: 
    - **Type:** `string`.
    - Description:** URL to an additional resource related to the certificate such as a verification page. **Required.
#### **`SideProjectData`**

- **Tipo:** `Array<SideProject>`
- **Descripción:** Es una lista de proyectos paralelos del usuario. Cada proyecto se define con la interfaz `SideProject`.

  **Interfaz `SideProject`:**
  - **`title`**: 
    - **Tipo:** `string`
    - **Descripción:** Título del proyecto paralelo. **Requerido.**
  - **`year`**: 
    - **Tipo:** `number`
    - **Descripción:** Año en el que se realizó el proyecto. **Requerido.**
  - **`description`**: 
    - **Tipo:** `string`
    - **Descripción:** Descripción del proyecto paralelo. **Requerido.**
  - **`image`**: 
    - **Tipo:** `string`
    - **Descripción:** URL de una imagen representativa del proyecto. **Opcional.**
  - **`uri`**: 
    - **Tipo:** `string`
    - **Descripción:** URL a un recurso adicional relacionado con el proyecto, como una demostración o repositorio. **Opcional.**
    
#### **`LinksData`**

- **Type:** ``Array<LinkButton>`.
- **Description:** It is a list of links to social networks or other user resources. Each link is defined with the `LinkButton` interface.

  **LinkButton`:** interface.
  - **`text`**: 
    - **Type:** `string`.
    - Description:** Link text. **Required.
  - **`uri`**: 
    - **Type:** `string`.
    - Description:** Link URL. **Required.
  - **`icon`**: 
    - **Type:** `Function`.
    - Description:** Icon associated to the link. **Optional.

#### **`CVSData`**

- Type:** ``CVSData`** **Type:** ``CVSData`** **Description
- **Description:** Data on user CVs. Includes:

  **`CVSData` **Interface:**
  - **`main`**: 
    - **Type:** `CVS`.
    - Description:** Main user CV. **Required.
  - **`secondary`**: 
    - **Type:** `CVS`** **Description:** Secondary user CV.
    - Description:** Secondary user CV. **Optional.

  CVS`** interface:** **`lang`**: **CVS`** interface:** **lang`**: **lang`**: **lang
  - **`lang`**: 
    - **Type:** `AvailableLangs`.
    - Description:** CV language. **Required.
  - **`uri`**: 
    - **Type:** `string`.
    - Description:** URL to download the CV. **Required.

#### **`Info`**

- Type:** ``Info`** **Type:** ``Info`** **Description
- Description:** Main interface for defining user information, combining all previous data.

  Interface `Info`**:** **`image`**: **`image`**: **image`**: **image`**: **image
  - **`image`**: 
    - **Type:** `string`.
    - Description:** URL of the user's image. **Optional.
  - **`name`**: 
    - **Type:** `string`.
    - Description:** User name. **Required.
  - **`lastname`**: 
    - **Type:** `string`.
    - Description:** User's last name. **Required.
  - **`role`**: 
    - **Type:** `string`.
    - Description:** User's role or professional title. **Required.
  - **`aka`**: 
    - **Type:** `string`.
    - Description:** Alternate name or nickname of the user. **Optional.
  - **`location`**: 
    - **Type:** `Location`.
    - Description:** User location. **Optional.
  - **`sections`**: 
    - **Type:** `object` with properties `about`, `experiences`, `certificates`, `side_project`, `links`.
    - Description:** Content of each section of the user profile. **Required.
  - **`cvs`**: 
    - **Type:** `CVSData`.
    - Description:** Information about the user's CVs. **Optional.

#### Instructions for Adding New Data

1. **Add User Data:** **Fill in the fields with the corresponding information for the user.
   - Fill in the fields with the appropriate information for the user. Make sure you meet the requirements for each field and provide information in the required sections.

2. **Optionality:** Add optional data only if relevant.
   - Add optional data only if relevant. Fields such as `aka`, `image`, and `location` are optional and can be omitted if the information is not available.

3. **Update the File:**.
   - Create or update the `DataDemo.ts` file to reflect the user data in the `Demo` language. Use the format and structure specified in the sample file.
