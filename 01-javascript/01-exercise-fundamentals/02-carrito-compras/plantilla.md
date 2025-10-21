# 🎯 PLANTILLA UNIVERSAL: Del Problema al Código

---

## 📌 FASE 0: PREPARACIÓN

```
┌─────────────────────────────────────────┐
│ INFORMACIÓN DEL PROYECTO                │
├─────────────────────────────────────────┤
│ Nombre: SimpleCar                       │
│ Fecha:  21/10/2025                      │
│ Objetivo: Gestionar un carrito de compras
| donde se pueda agregar / eliminar produc|
| tos y calcular el precio total de la    |
| compra.                                 |
│ Plataforma: Consola Javascript (node.js)|
│ Desarrollador: Paul C. Y.               |
| Alcance: CRUD Basico.                   |
└─────────────────────────────────────────┘
¿Por qué? Porque incluye:
- ✓ Qué hace (gestionar carrito)
- ✓ Acciones principales (agregar/eliminar)
- ✓ Resultado esperado (calcular total)
```

---

## 🔍 FASE 1: COMPRENSIÓN DEL PROBLEMA

### 1.1 Lectura Activa
```
□ Leo el enunciado completo sin interrupciones

Gestionar un carrito de compras donde se pueda
agregar/eliminar productos y calcular el precio
total de la compra"

□ Subrayo/marco palabras clave
    - Gestionar > Accion General
    - Carrito Compra
    - Agregar > Core
    - Modificar > Core
    - Leer > Core
    - Eliminar > Core
    - Productos
    - Calcular > Core
    - Precio
    - Total compra

□ Identifico el objetivo principal
□ Detecto restricciones o limitaciones
```

### 1.2 Reformulación con Mis Palabras

```
┌─────────────────────────────────────────┐
│ REFORMULACIÓN DEL PROBLEMA              │
├─────────────────────────────────────────┤
│ El problema es:                         │
│ Gestionar un carrito de compras que     │
│ permita seleccionar productos desde un  │
│ catálogo y calcular el total            │
│                                         │
│ Lo que debo lograr es:                  │
│ 1. Visualizar productos disponibles     │
│ 2. Agregar productos al carrito         │
│ 3. Modificar cantidades en el carrito   │
│ 4. Eliminar productos del carrito       │
│ 5. Calcular precio total del carrito    │
│                                         │
│ Restricciones/Requisitos:               │
│ ☑ Un producto puede tener stock 0       │
│ ☑ No puedo agregar el mismo producto    │
│   dos veces (actualizar cantidad)       │
│ ☑ Producto debe tener: nombre, precio,  │
│   stock (si aplica)                     │
└─────────────────────────────────────────┘
```

### 1.3 Casos de Uso Básicos (3-5 escenarios)
```
Caso 1 example: [Usuario/Sistema hace X]
  → Resultado esperado: _______________

Caso 1: [Usuario quiere ver productos disponibles]
  → Resultado esperado: Sistema muestra lista de productos con precio y stock.

Caso 2: [Usuario agrega producto a carrito]
  → Resultado esperado: Sistema agrega al carrito producto seleccionado,
    disminuye stock en productos.

Caso 3: [Usuario agrega producto que ya esta en carrito]
  → Resultado esperado: Sistema actualiza la cantidad del producto existente.

Caso 4: Usuario elimina producto de carrito.
  → Resultado esperado: Sistema elimina producto de carrito y devuelve el stock
    en producto.

Caso 5: Usuario actualiza producto en carrito.
  → Resultado esperado: Sistema actualiza producto en carrito modificando la cantidad.

Caso 6: Usuario quiere ver productos en carrito.
  → Resultado esperado: Sistema muestra la lista de compras en carrito.

Caso 7: Usuario quier ver el total de la compras en carrito.
  → Resultado esperado: Sistema muestra el precio total de la compra antes de pagar.

Caso 8: Usuario intenta agregar producto sin stock suficiente.
  → Resultado esperado: Sistema muestra error "Stock insuficiente" y no agrega al carrito.

```

---

## 🏗️ FASE 2: IDENTIFICACIÓN DE ENTIDADES

### 2.1 Extracción de Sustantivos
**Técnica:** Busco NOMBRES DE COSAS en el problema
Busca "COSAS" que:

1.Almacenan información

2.Tienen propiedades

3.Pueden existir por sí mismas

```
Lista de sustantivos encontrados:
1. Producto (¿Es entidad?)
2. Carrito (¿Es entidad?)
3. Usuario           (¿Es entidad?)
4. _________________ (¿Es entidad?)
5. _________________ (¿Es entidad?)
```

### 2.2 Filtro de Entidades (TEST DE VALIDACIÓN)

**Para cada sustantivo pregunto:**

#### ENTIDAD 1:
```
┌─────────────────────────────────────────┐
│ NOMBRE: Producto                        │
├─────────────────────────────────────────┤
│ ¿Tiene información propia?    x SÍ □ NO│
│ ¿Necesita existir independiente? x SÍ □ NO│
│ ¿Sufre cambios de estado?     x SÍ □ NO│
│ ¿Puede tener múltiples instancias? x SÍ □ NO│
├─────────────────────────────────────────┤
│ DECISIÓN: x ENTIDAD  □ NO ENTIDAD      │
└─────────────────────────────────────────┘

Si es ENTIDAD:
  Tipo: □ Activa (hace cosas) x Pasiva (solo datos)
  Características Entidad Activa.

  - Tiene métodos que realizan operaciones

  - Orquesta cambios en otras entidades

  - Contiene lógica de negocio

 Características Entidad Pasiva:

 - Solo almacena información

 - Es manipulada por entidades activas

 - No tiene comportamiento propio

 💡 REGLA PRÁCTICA:
Pregunta: ¿Esta entidad tiene VERBOS (métodos)?

Carrito → ✅ agregar(), eliminar(), calcular() → ACTIVA

Producto → ❌ Solo tiene sustantivos (nombre, precio) → PASIVA

Razón de la decisión:
Existe independiente del carrito, tiene atributos propios.
```

#### ENTIDAD 2:
```
┌─────────────────────────────────────────┐
│ NOMBRE: Carrito                         │
├─────────────────────────────────────────┤
│ ¿Tiene información propia?    X SÍ □ NO│
│ ¿Necesita existir independiente? X SÍ □ NO│
│ ¿Sufre cambios de estado?     X SÍ □ NO│
│ ¿Puede tener múltiples instancias? X SÍ □ NO│
├─────────────────────────────────────────┤
│ DECISIÓN: x ENTIDAD  □ NO ENTIDAD      │
└─────────────────────────────────────────┘

Si es ENTIDAD:
  Tipo: x Activa (hace cosas) □ Pasiva (solo datos)
```

#### ENTIDAD 3:
```
┌─────────────────────────────────────────┐
│ NOMBRE: ItemCarrito                     |
├─────────────────────────────────────────┤
│ ¿Tiene información propia?    x SÍ □ NO│
│ ¿Necesita existir independiente? □ SÍ x NO│
│ ¿Sufre cambios de estado?     x SÍ □ NO│
│ ¿Puede tener múltiples instancias? x SÍ □ NO│
├─────────────────────────────────────────┤
│ DECISIÓN: x ENTIDAD  □ NO ENTIDAD      │
└─────────────────────────────────────────┘

Si es ENTIDAD:
  Tipo: □ Activa (hace cosas) x Pasiva (solo datos) relacion entre carrito y producto.
```

### 2.3 Definición de Atributos por Entidad

#### ENTIDAD: Producto
```
Atributos (información que contiene):
├─ id (tipo: int) [requerido/opcional]
├─ nombre (tipo: string) [requerido/opcional]
├─ descripción (tipo: string) [requerido/opcional]
├─ precio (tipo: stock) [requerido/opcional]
└─ stock (tipo: int) [calculado/derivado]

Ejemplo de instancia:
{
  id: 1,
  nombre: Aceite Primor,
  descripción: "Aceite 100% vegetal,
  precio: 23.45,
  stock: 100
}
```

#### ENTIDAD: Carrito
```
Atributos (información que contiene):
├─ items (tipo: array de itemCarrito) [requerido/opcional]
├─ total (tipo: int) [requerido/opcional]
├─ cantidadItems (tipo: int) [requerido/opcional]

Ejemplo de instancia:
{
    items: [
        {productoId: 1, cantidad: 2},
        {productoId: 2, cantidad: 5}
    ]

    total: 79.99,
    cantidadItems: 7
}
```

#### ENTIDAD: ItemCarrito
```
Atributos (información que contiene):
├─ productoId (tipo: int) [requerido/opcional]
├─ cantidad (tipo: int) [requerido/opcional]
├─ ______________ (tipo: _______) [requerido/opcional]
└─ ______________ (tipo: _______) [calculado/derivado]

Ejemplo de instancia:
{
    productoId: 1,
    cantidad: 5
}
```

---

## 🔗 FASE 3: RELACIONES ENTRE ENTIDADES

### 3.1 Matriz de Relaciones

```
      │ Producto  │  Carrito  │ItemCarrito│
──────┼───────────┼───────────┼───────────┤
Prod  │     -     │   1: N    │   1:1     │
Car   │     N:1   │     -     │   1:N     │
Item  │   1:1     │   N:1     │     -     │

Tipos de relación: 1:1 / 1:N / N:M / Ninguna

2. REGLA MNEMOTÉCNICA:
Si es "TIENE MUCHOS" → lado N

Si es "PERTENECE A UNO" → lado 1
```

### 3.2 Descripción de Relaciones

```
[Entidad A] ──── ¿qué relación? ───→ [Entidad B]

Ejemplo:
"Un USUARIO posee muchos PEDIDOS" (1:N)

Mis relaciones:
1. Producto (1:1) → ItemCarrito
   Descripción: Un producto puede estar en un solo ItemCarrito

2. Producto (1:N) → Carrito
   Descripción: Un producto puede estar en varios Carritos

3. Carrito (1:N) → ItemCarrito
   Descripción: Un Carrito puede tener muchos ItemCarrito
```

### 3.3 Entidades Intermedias (si hay N:M)

```
¿Encontré relaciones muchos-a-muchos?
□ NO → Continuar a la siguiente fase
□ SÍ → Crear entidad puente

Entidad Puente: ___________________
  - Conecta: ________ y ________
  - Atributos propios: ___________
  - Razón: _______________________
```

---

## ⚙️ FASE 4: FUNCIONALIDADES (Verbos/Acciones)

### 4.1 Extracción de Acciones
**Técnica:** Busco VERBOS en el problema

```
Acciones que el sistema debe permitir:
1. [Verbo] Agregar → Actor: Usuario
2. [Verbo] Eliminar → Actor: Usuario
3. [Verbo] Modificar → Actor: Usuario
4. [Verbo] Leer → Actor: Usuario
5. [Verbo] Calcular → Actor: Sistema
```

### 4.2 Asignación de Responsabilidades

#### FUNCIONALIDAD CORE:
```
┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: MOSTRAR PRODUCTOS       │
├─────────────────────────────────────────┤
│ Responsable: ☑ Sistema                 │
│ Input: Ninguno                         │
│ Output: Lista productos con stock      │
│ Validaciones: Stock > 0                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: AGREGAR PRODUCTO        │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: productoId, cantidad            │
│ Output: Item agregado/actualizado      │
│ Validaciones: Existe, stock suficiente │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: ELIMINAR PRODUCTO       │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: productoId                      │
│ Output: Item eliminado                 │
│ Validaciones: Existe en carrito        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: ACTUALIZAR CANTIDAD     │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: productoId, nuevaCantidad       │
│ Output: Cantidad actualizada           │
│ Validaciones: Existe, stock, > 0       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: CALCULAR TOTAL          │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: Items carrito + precios actuales│
│ Output: Total numérico                 │
│ Validaciones: Precios actualizados     │
└─────────────────────────────────────────┘


```

### FUNCIONES AUXILIARES
```
┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: VER CARRITO ACTUAL      │
├─────────────────────────────────────────┤
│ Responsable: ☑ Sistema                 │
│ Input: Carrito                         │
│ Output: Lista items con detalles       │
│ Validaciones: Carrito no vacío         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: VACIAR CARRITO          │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: Ninguno                         │
│ Output: Carrito vacío                  │
│ Validaciones: Confirmación usuario     │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: VERIFICAR STOCK         │
├─────────────────────────────────────────┤
│ Responsable: ☑ Sistema                 │
│ Input: productoId, cantidad            │
│ Output: Boolean (suficiente/no)        │
│ Validaciones: producto existe          │
└─────────────────────────────────────────┘
```

### FUNCIONES EXTRA
```
┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: BUSCAR PRODUCTO         │
├─────────────────────────────────────────┤
│ Responsable: ☑ Sistema                 │
│ Input: término búsqueda                │
│ Output: Productos filtrados            │
│ Validaciones: Término no vacío         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FUNCIONALIDAD: APLICAR DESCUENTO       │
├─────────────────────────────────────────┤
│ Responsable: ☑ Carrito                 │
│ Input: código descuento                │
│ Output: Total con descuento            │
│ Validaciones: Código válido            │
└─────────────────────────────────────────┘
```

### 4.3 Listado de Funciones

```
📦 FUNCIONES CORE (Mínimo Viable):
□ Agregar Producto al Carrito (Prioridad: Alta)
□ Eliminar Producto del Carrito (Prioridad: Alta)
□ Actualizar Cantidad del Carrito (Prioridad: Alta)
□ Mostrar Productos Disponibles (Prioridad: Alta)

🔧 FUNCIONES AUXILIARES:
□ Ver Carrito Actual (Prioridad: Media)
□ Vaciar Carrito Completo (Prioridad: Media)
□ Verificar Stock Disponible (Prioridad: Media)

✨ FUNCIONES EXTRA (Fase 2):
□ Buscar Producto (Prioridad: Baja)
□ __________________ (Prioridad: Baja)
```

---

## 🎨 FASE 5: DISEÑO DE FLUJOS

### 5.1 Flujo Principal

```
INICIO
  ↓
[Acción/Pantalla principal]
  ↓
[Decisión/Validación?]
  ├─ SÍ → [Acción A] ──┐
  └─ NO → [Acción B] ──┤
                        ↓
[Siguiente paso]
  ↓
¿Continuar?
  ├─ SÍ → Volver a ____
  └─ NO → FIN
```

### 5.2 Pseudocódigo de Lógica Crítica

```
FUNCIÓN: nombre_función(parámetros)
  1. Validar entrada
     SI [condición] ENTONCES
       retornar error

  2. Procesar datos
     variable = obtener_algo()
     PARA CADA elemento EN colección
       hacer_algo(elemento)

  3. Aplicar lógica de negocio
     SI [condición_compleja] ENTONCES
       hacer_X()
     SINO
       hacer_Y()

  4. Retornar resultado
     retornar éxito/fallo
FIN FUNCIÓN
```

---

## 🗂️ FASE 6: ESTRUCTURA DE DATOS

### 6.1 Diseño de Objetos/Estructuras

```javascript
// ENTIDAD: _______________

const ejemplo = {
  atributo1: tipo_valor,      // descripción
  atributo2: tipo_valor,      // descripción
  atributo3: [tipo_array],    // descripción
  atributo4: {                // objeto anidado
    subAtributo: valor
  }
};
```

```javascript
// ENTIDAD: _______________

const ejemplo2 = {
  atributo1: tipo_valor,      // descripción
  atributo2: tipo_valor,      // descripción
  atributo3: tipo_valor       // descripción
};
```

### 6.2 Estados del Sistema

```
┌─────────────────────────────────────────┐
│ ESTADO INICIAL                          │
├─────────────────────────────────────────┤
│ entidad1 = ____________________        │
│ entidad2 = ____________________        │
│ variable_global = ______________        │
└─────────────────────────────────────────┘

Después de [Acción X]:
  → entidad1 cambia a: ___________
  → se crea: ___________
  → Estado resultante: ___________

Después de [Acción Y]:
  → entidad2 se elimina
  → variable_global = ___________
  → Estado resultante: ___________
```

---

## ✅ FASE 7: VALIDACIÓN DEL DISEÑO

### 7.1 Test Mental de Casos de Uso

#### CASO 1:
```
CASO: _______________________________

Paso 1: Usuario/Sistema hace ________
  → Estado actual: _________________
  → ¿Qué entidad se afecta? ________
  → ¿Qué función se ejecuta? _______

Paso 2: Sistema valida ______________
  → ¿Pasa validación? □ SÍ □ NO
  → Si NO: ________________________

Paso 3: Sistema ejecuta _____________
  → Nuevo estado: __________________
  → Output: ________________________

¿FUNCIONA CON MI DISEÑO? □ SÍ □ NO
Si NO: ¿Qué falta? ___________________
```

#### CASO 2:
```
CASO: _______________________________

Paso 1: Usuario/Sistema hace ________
  → Estado actual: _________________
  → ¿Qué entidad se afecta? ________
  → ¿Qué función se ejecuta? _______

Paso 2: Sistema valida ______________
  → ¿Pasa validación? □ SÍ □ NO

Paso 3: Sistema ejecuta _____________
  → Nuevo estado: __________________
  → Output: ________________________

¿FUNCIONA CON MI DISEÑO? □ SÍ □ NO
Si NO: ¿Qué falta? ___________________
### 7.2 Checklist de Cobertura
```
□ Todos los casos de uso funcionan
□ Todas las entidades están usadas
□ Todas las funciones están asignadas
□ Las validaciones están identificadas
□ Los flujos no tienen puntos muertos
□ Los datos pueden persistir/recuperarse
□ Manejo de errores contemplado
```

---

## 📊 FASE 8: PLAN DE IMPLEMENTACIÓN

### 8.1 División en Fases/Sprints
```
🎯 FASE 1 - MVP (Mínimo Producto Viable)
Objetivo: ________________________________
Duración estimada: ______ (horas/días)

Tareas:
□ [Tarea 1] _________________ (Tiempo: ___)
□ [Tarea 2] _________________ (Tiempo: ___)
□ [Tarea 3] _________________ (Tiempo: ___)

Criterio de éxito: _______________________

─────────────────────────────────────────

🚀 FASE 2 - Mejoras
Objetivo: ________________________________

Tareas:
□ [Tarea 4] _________________ (Tiempo: ___)
□ [Tarea 5] _________________ (Tiempo: ___)

─────────────────────────────────────────

✨ FASE 3 - Funcionalidades Avanzadas
(Dejar para después del MVP)
```

### 8.2 Orden de Implementación
```
Prioridad 1 (Hacer primero):
1. ESTRUCTURA BÁSICA DE ARCHIVOS
   - package.json, módulos, imports/exports

2. CLASE PRODUCTO Y DATOS INICIALES
   - Array de productos de abarrotes
   - Estructura de datos básica

3. CLASE CARRITO CON MÉTODOS BÁSICOS
   - agregarProducto()
   - eliminarProducto()
   - calcularTotal()

Prioridad 2 (Hacer después):
4. SISTEMA DE MENÚS Y NAVEGACIÓN
   - Menú principal en consola
   - Flujo de interacción con usuario

5. VALIDACIONES Y MANEJO DE ERRORES
   - Verificar stock
   - Validar entradas de usuario

Prioridad 3 (Si hay tiempo):
6. FUNCIONALIDADES EXTRA
   - Vaciar carrito completo
   - Buscar productos
   - Persistencia en localStorage
```

---

## 🎬 FASE 9: PREPARACIÓN PARA CODEAR

### 9.1 Estructura de Archivos/Módulos
```
proyecto/
├─ entidades/
│  ├─ entidad1.js
│  └─ entidad2.js
├─ funciones/
│  ├─ core.js
│  └─ helpers.js
├─ datos/
│  └─ inicial.js
└─ main.js
```

### 9.2 Convenciones y Estándares
```
Nombrado:
- Variables: __________________ (camelCase, snake_case)
- Funciones: __________________ (verbos)
- Constantes: _________________ (UPPER_CASE)

Comentarios:
- Usar // para líneas
- Usar /* */ para bloques
- Documentar funciones con: ___________
```

### 9.3 Checklist Final PRE-CÓDIGO
```
□ Entiendo completamente el problema
□ Identifiqué todas las entidades necesarias
□ Definí atributos de cada entidad
□ Establecí relaciones claras
□ Listé todas las funciones necesarias
□ Diseñé los flujos principales
□ Validé con casos de uso
□ Tengo plan de implementación
□ Definí estructura de proyecto
□ Sé por dónde empezar

✅ ¡LISTO PARA CODEAR!
```

---

## 📝 PLANTILLA DE SESIÓN DE DISEÑO
```
═══════════════════════════════════════════
         SESIÓN DE DISEÑO
═══════════════════════════════════════════

PROYECTO: ________________________________
FECHA: ___________________________________

1. PROBLEMA EN UNA FRASE:
_________________________________________

2. ENTIDADES IDENTIFICADAS:
□ _____________ → Atributos: __________
□ _____________ → Atributos: __________
□ _____________ → Atributos: __________

3. FUNCIONES PRINCIPALES:
□ _______________________________________
□ _______________________________________
□ _______________________________________

4. FLUJO BÁSICO:
_________________________________________
_________________________________________
_________________________________________

5. PRIMER PASO A CODEAR:
_________________________________________

═══════════════════════════════════════════
```

---

## 🎯 MÉTODO RÁPIDO (5 MINUTOS)

Para problemas simples, usa esta versión condensada:
```
1. ¿QUÉ? (Objetivo)
   _______________________________________

2. ¿QUIÉN/QUÉ? (Entidades - sustantivos)
   □ ____________  □ ____________

3. ¿QUÉ HACE? (Acciones - verbos)
   □ ____________  □ ____________

4. ¿CÓMO? (Flujo básico)
   Inicio → _____ → _____ → Fin

5. ¿PRIMERO? (Qué codear primero)
   _______________________________________

→ CODEAR
