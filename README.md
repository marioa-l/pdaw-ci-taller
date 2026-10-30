# Clase 12 · Integración continua y revisión entre pares

Proyecto mínimo con **GitHub Actions** (`.github/workflows/ci.yml`), ESLint y Jest, más dos
documentos para el equipo: una lista de control de revisión y una plantilla de retrospectiva.

```bash
npm install          # genera package-lock.json (necesario para npm ci en la CI)
npm run verificar    # lo mismo que ejecuta la CI: lint + pruebas
```

## Demostración

1. Subir esta carpeta a un repositorio nuevo de GitHub (con `package-lock.json`).
2. Ver la ejecución en la pestaña **Actions**.
3. Crear una rama, descomentar la prueba "demostración de falla" en `tests/dueDate.test.js`,
   hacer push y abrir un pull request: la verificación aparece en rojo.
4. En **Settings → Rules → Rulesets** (o **Branches**) exigir que el check "Lint y pruebas"
   pase antes de integrar.

## Documentos

- [`docs/checklist-de-revision.md`](docs/checklist-de-revision.md)
- [`docs/retrospectiva.md`](docs/retrospectiva.md)
