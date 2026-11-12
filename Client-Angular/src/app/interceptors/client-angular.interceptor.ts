import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category } from '../interfaces/categories.interface';
import { Order } from '../interfaces/order.interface';
import { Product } from '../interfaces/products.interface';
import { Review } from '../interfaces/reviews.interface';
import { User } from '../interfaces/users.interface';

export const FALLBACK_USERS: User[] = [
  { id: 1, name: 'Carlos', lastName: 'Ramírez', age: 22, email: 'carlos.ramirez@uceva.edu.co', engineering: 'Sistemas' },
  { id: 2, name: 'Ana', lastName: 'Gómez', age: 21, email: 'ana.gomez@uceva.edu.co', engineering: 'Industrial' },
  { id: 3, name: 'Luis', lastName: 'Martínez', age: 23, email: 'luis.martinez@uceva.edu.co', engineering: 'Electronica' },
  { id: 4, name: 'María', lastName: 'López', age: 20, email: 'maria.lopez@uceva.edu.co', engineering: 'Ambiental' },
  { id: 5, name: 'Javier', lastName: 'Morán', age: 22, email: 'javier.moran@uceva.edu.co', engineering: 'Sistemas' },
  { id: 6, name: 'Paola', lastName: 'Ríos', age: 19, email: 'paola.rios@uceva.edu.co', engineering: 'Biomedica' },
  { id: 7, name: 'Andrés', lastName: 'Guevara', age: 22, email: 'andres.guevara@uceva.edu.co', engineering: 'Sistemas' },
  { id: 8, name: 'Lucía', lastName: 'Mendoza', age: 24, email: 'lucia.mendoza@uceva.edu.co', engineering: 'Industrial' },
  { id: 9, name: 'Sofía', lastName: 'Pérez', age: 21, email: 'sofia.perez@uceva.edu.co', engineering: 'Biomedica' },
  { id: 10, name: 'Miguel', lastName: 'Castro', age: 25, email: 'miguel.castro@uceva.edu.co', engineering: 'Electronica' },
];

export const FALLBACK_PRODUCTS: Product[] = [
  { id: 1, name: 'Leche entera Alpina 1L', category: 'Lacteos', price: 4500 },
  { id: 2, name: 'Queso campesino fresco 500g', category: 'Lacteos', price: 9800 },
  { id: 3, name: 'Pechuga de pollo fileteada', category: 'Carnes', price: 16500 },
  { id: 4, name: 'Carne de res premium 500g', category: 'Carnes', price: 18900 },
  { id: 5, name: 'Manzana roja importada (kg)', category: 'Frutas', price: 6200 },
  { id: 6, name: 'Banano Urabá seleccionado (kg)', category: 'Frutas', price: 3400 },
  { id: 7, name: 'Tomate chonto orgánico (kg)', category: 'Verduras', price: 4100 },
  { id: 8, name: 'Cebolla cabezona blanca (kg)', category: 'Verduras', price: 3800 },
  { id: 9, name: 'Yogurt griego natural', category: 'Lacteos', price: 7200 },
  { id: 10, name: 'Lomo de cerdo magro 500g', category: 'Carnes', price: 15400 },
];

export const FALLBACK_CATEGORIES: Category[] = [
  { id: 1, name: 'Lácteos y Derivados', description: 'Leche, quesos, kumis, mantequilla y yogures refrigerados', icon: 'bi-cup-straw', status: 'Activa', productCount: 18 },
  { id: 2, name: 'Carnes y Aves', description: 'Cortes seleccionados de res, cerdo, pollo y pescado fresco', icon: 'bi-egg-fried', status: 'Activa', productCount: 24 },
  { id: 3, name: 'Frutas Frescas', description: 'Frutas nacionales e importadas de temporada', icon: 'bi-apple', status: 'Activa', productCount: 15 },
  { id: 4, name: 'Verduras y Hortalizas', description: 'Vegetales frescos cultivados en el Valle del Cauca', icon: 'bi-flower1', status: 'Activa', productCount: 20 },
  { id: 5, name: 'Panadería Artesanal', description: 'Pan fresco, repostería y amasijos tradicionales', icon: 'bi-cake', status: 'Activa', productCount: 12 },
  { id: 6, name: 'Bebidas y Jugos', description: 'Aguas minerales, jugos naturales y bebidas hidratantes', icon: 'bi-cup-hot', status: 'Activa', productCount: 30 },
  { id: 7, name: 'Granos y Despensa', description: 'Arroz, frijol, lentejas, pastas y aceites vegetales', icon: 'bi-box-seam', status: 'Activa', productCount: 27 },
  { id: 8, name: 'Snacks y Confitería', description: 'Pasabocas, frutos secos y chocolatería nacional', icon: 'bi-bag-heart', status: 'Inactiva', productCount: 9 },
  { id: 9, name: 'Aseo del Hogar', description: 'Detergentes biodegradables y desinfectantes multiusos', icon: 'bi-bucket', status: 'Activa', productCount: 14 },
  { id: 10, name: 'Productos Orgánicos', description: 'Línea saludable libre de conservantes artificiales', icon: 'bi-heart-pulse', status: 'Inactiva', productCount: 7 },
];

export const FALLBACK_REVIEWS: Review[] = [
  { id: 1, productId: 1, userId: 1, rating: 5, comment: 'Excelente calidad y frescura, llegó a tiempo.', date: new Date('2026-10-01T14:30:00.000Z') },
  { id: 2, productId: 2, userId: 2, rating: 4.5, comment: 'El queso campesino tiene un sabor auténtico y muy buena textura.', date: new Date('2026-10-03T10:15:00.000Z') },
  { id: 3, productId: 3, userId: 3, rating: 5, comment: 'Empaque al vacío impecable y corte limpio.', date: new Date('2026-10-05T16:45:00.000Z') },
  { id: 4, productId: 4, userId: 4, rating: 4, comment: 'Muy buena relación calidad-precio en los cortes de res.', date: new Date('2026-10-07T09:20:00.000Z') },
  { id: 5, productId: 5, userId: 5, rating: 4.5, comment: 'Manzanas dulces y crujientes, volveré a comprar.', date: new Date('2026-10-10T11:00:00.000Z') },
  { id: 6, productId: 6, userId: 6, rating: 5, comment: 'Producto fresco directo del campo en excelente estado.', date: new Date('2026-10-12T18:10:00.000Z') },
  { id: 7, productId: 7, userId: 7, rating: 3.5, comment: 'Buen producto aunque el despacho tardó unos minutos más.', date: new Date('2026-10-15T13:25:00.000Z') },
  { id: 8, productId: 8, userId: 8, rating: 4.5, comment: 'Verduras limpias, seleccionadas y de gran tamaño.', date: new Date('2026-10-18T15:40:00.000Z') },
  { id: 9, productId: 9, userId: 9, rating: 5, comment: 'El mejor yogurt griego artesanal que he probado.', date: new Date('2026-10-20T08:50:00.000Z') },
  { id: 10, productId: 10, userId: 10, rating: 4, comment: 'Muy recomendado para compras semanales de mercado.', date: new Date('2026-10-22T19:05:00.000Z') },
];

export const FALLBACK_ORDERS: Order[] = [
  { id: 101, customerName: 'Javier Eduardo Morán', date: '2026-11-01T10:30:00.000Z', total: 245000, status: 'Entregado', itemCount: 6 },
  { id: 102, customerName: 'Carlos Andrés Ramírez', date: '2026-11-02T14:15:00.000Z', total: 180000, status: 'Enviado', itemCount: 4 },
  { id: 103, customerName: 'María Fernanda Gómez', date: '2026-11-03T09:45:00.000Z', total: 320000, status: 'Procesando', itemCount: 8 },
  { id: 104, customerName: 'Ana Sofía Martínez', date: '2026-11-04T16:20:00.000Z', total: 95000, status: 'Pendiente', itemCount: 2 },
  { id: 105, customerName: 'Luis Fernando Torres', date: '2026-11-05T11:10:00.000Z', total: 410000, status: 'Entregado', itemCount: 9 },
  { id: 106, customerName: 'Paula Andrea Ríos', date: '2026-11-06T17:05:00.000Z', total: 78000, status: 'Cancelado', itemCount: 1 },
  { id: 107, customerName: 'Jorge Eliécer Castro', date: '2026-11-07T13:50:00.000Z', total: 154000, status: 'Enviado', itemCount: 5 },
  { id: 108, customerName: 'Valeria Mendoza', date: '2026-11-08T08:30:00.000Z', total: 289000, status: 'Procesando', itemCount: 7 },
  { id: 109, customerName: 'Camilo Restrepo', date: '2026-11-09T15:00:00.000Z', total: 132000, status: 'Entregado', itemCount: 3 },
  { id: 110, customerName: 'Diana Carolina López', date: '2026-11-10T18:40:00.000Z', total: 215000, status: 'Pendiente', itemCount: 5 },
];

export function resolveFallbackBody(url: string): unknown {
  if (url.includes('api/users')) return FALLBACK_USERS;
  if (url.includes('api/products')) return FALLBACK_PRODUCTS;
  if (url.includes('api/categories')) return FALLBACK_CATEGORIES;
  if (url.includes('api/reviews')) return FALLBACK_REVIEWS;
  if (url.includes('api/orders')) return FALLBACK_ORDERS;
  return [];
}

/**
 * Interceptor HTTP que concatena la URL base a todas las peticiones salientes
 * y provee respaldo automático (fallback) en entornos estáticos como GitHub Pages
 * cuando el servidor local Node.js no está accesible.
 */
export const clientAngularInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `${environment.baseUrl}/${req.url}` });
  return next(apiReq).pipe(
    catchError(() =>
      of(
        new HttpResponse({
          status: 200,
          body: resolveFallbackBody(req.url),
        })
      )
    )
  );
};
