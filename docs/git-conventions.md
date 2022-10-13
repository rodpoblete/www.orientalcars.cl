# Convenciones - GIT

## Branches

Siguen la estructura: `<TIPO>/[CODIGO-DE-ISSUE]<DESCRIPCION-DEL-BRANCH>`

El `TIPO` se define según la `Tabla N1`

El `CODIGO-DE-ISSUE` es el ID de Github, en caso de existir. La `DESCRIPCION-DEL-BRANCH` es algo descriptivo, pero no tan largo.

## Commits

_Estas especificaciones estan inspiradas en [AngularJS commit message format](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)._

Tenemos reglas muy precisas sobre cómo se deben formatear nuestros mensajes de confirmación de Git.
Este formato conduce a **un historial de confirmaciones más fácil de leer**.

Cada mensaje del commit tiene un **header**, un **body** (opcional), y un **footer** (opcional).

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

El `header` es obligatorio y debe ajustarse al formato de encabezado de mensaje de compromiso.

El `body` es opcional para todas las confirmaciones.
Cuando el cuerpo está presente, debe tener al menos 20 caracteres.

El `footer` es opcional.

#### Commit Message Header

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve|
  │                          devtools
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

El `<type>` es obligatorio, el `(<scope>)` y `<summary>` son opcionales.

## Tabla N1: Tipos

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |  ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |  🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |  📚   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |  💎   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |  📦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |  🚀   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |  🚨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |  ⚙️   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |  ♻️   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   🗑   |
