---
description: Cómo publicar y actualizar el sitio web en GitHub
---

Para publicar o actualizar el sitio web en tu repositorio de GitHub, sigue estos pasos:

### 1. Verificar el estado actual
Asegúrate de que no haya cambios pendientes sin guardar:
```bash
git status
```

### 2. Agregar cambios
Si has realizado cambios nuevos, agrégalos al área de preparación:
```bash
git add .
```

### 3. Crear un commit
Guarda tus cambios con un mensaje descriptivo:
```bash
git commit -m "Descripción de los cambios realizados"
```

### 4. Subir a GitHub
Envía los cambios a la rama principal (main):
```bash
git push origin main
```

---

### Configuración Inicial (Solo si es un repositorio nuevo)
Si el repositorio está vacío o es la primera vez que lo vinculas:

1. **Inicializar Git:**
   ```bash
   git init
   ```

2. **Vincular el repositorio remoto:**
   ```bash
   git remote add origin https://github.com/RodLakes/cloro-san-joaquin-web.git
   ```

3. **Subir por primera vez:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

### Despliegue Automático (Opcional)
Para que el sitio sea visible públicamente en internet, te recomendamos:

- **Vercel / Netlify:** Simplemente conecta tu repositorio de GitHub a estas plataformas y se desplegará automáticamente en cada `git push`.
- **GitHub Pages:** Puedes configurar una GitHub Action para que compile y publique la carpeta `dist` automáticamente.
