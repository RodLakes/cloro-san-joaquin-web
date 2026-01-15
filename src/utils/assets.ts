/**
 * Resuelve la ruta de un asset estático teniendo en cuenta el BASE_URL de Vite.
 * Útil para despliegues en subcarpetas como GitHub Pages.
 */
export const resolveAsset = (path: string): string => {
    if (!path) return '';

    // Si la ruta ya es absoluta (http/https) o ya tiene el base_url, no hacer nada
    if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
        return path;
    }

    const baseUrl = import.meta.env.BASE_URL || '/';

    // Limpiar el path de barras iniciales para evitar duplicación
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;

    // Asegurar que baseUrl termine en /
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

    return `${normalizedBase}${cleanPath}`;
};
