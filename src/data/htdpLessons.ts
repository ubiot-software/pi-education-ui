export interface LessonSection {
  title: string
  content: string
  codeSnippet?: string
  codeLanguage?: string
  tips?: string[]
}

export interface Exercise {
  title: string
  problemStatement: string
  hint?: string
  solutionCode: string
}

export interface LessonLevel {
  id: string
  levelNumber: number
  title: string
  subtitle: string
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'
  estimatedHours: string
  image: string
  overview: string
  prerequisites: string[]
  objectives: string[]
  recipeSteps?: string[]
  sections: LessonSection[]
  exercises: Exercise[]
}

export const HTDP_LEVELS: LessonLevel[] = [
  {
    id: 'nivel-1',
    levelNumber: 1,
    title: 'Nivel I: Datos Sencillos',
    subtitle: 'Valores primitivos, expresiones, imágenes y la Receta de Diseño de Funciones.',
    difficulty: 'Principiante',
    estimatedHours: '3 - 4 horas',
    image: '/imagenes/htdp1.png',
    overview: 'En este primer nivel aprenderás a pensar computacionalmente. Descubrirás cómo Racket maneja datos atómicos como números, cadenas de texto, valores booleanos e imágenes. Aplicaremos la Receta de Diseño de Funciones para escribir programas claros, probados y mantenibles.',
    prerequisites: ['No se requieren conocimientos previos de programación', 'Tener instalado DrRacket o usar el entorno interactivo Racket'],
    objectives: [
      'Entender la sintaxis en notación prefija de Racket: (+ 2 3)',
      'Dominar la Receta de Diseño de Funciones en 6 pasos',
      'Crear y manipular imágenes con la librería 2htdp/image',
      'Escribir pruebas unitarias explícitas con check-expect'
    ],
    recipeSteps: [
      '1. Signatura y Propósito: Especificar el tipo de entrada/salida y qué realiza la función.',
      '2. Encabezado de función: Crear un borrador inicial con parámetros.',
      '3. Ejemplos y Pruebas: Escribir casos de prueba usando check-expect antes del código final.',
      '4. Plantilla: Identificar la estructura de los datos de entrada.',
      '5. Cuerpo del Código: Implementar la lógica que transforma la entrada en la salida.',
      '6. Ejecución de Pruebas: Correr los test y corregir si es necesario.'
    ],
    sections: [
      {
        title: '1. Introducción a Racket y Notación Prefija',
        content: 'En Racket, todos los operadores van antes de sus argumentos (notación prefija) dentro de paréntesis. Esto elimina cualquier ambigüedad en la prioridad de operaciones.',
        codeSnippet: `;; Operaciones numéricas simples
(+ 10 20)          ; Evaluado como 30
(* 5 (+ 3 2))      ; Evaluado como 25
(string-append "Hola " "Educación Pi") ; Evaluado como "Hola Educación Pi"
(string-length "Racket")              ; Evaluado como 6`,
        codeLanguage: 'racket',
        tips: [
          'Recuerda: El paréntesis que abre siempre inicia con una función u operador.',
          'Usa comentario con ;; para documentar tus ideas.'
        ]
      },
      {
        title: '2. Trabajando con Imágenes (2htdp/image)',
        content: 'Racket permite tratar imágenes como valores de primera clase. Puedes crear círculos, rectángulos, texto y combinar imágenes mediante superposición y alineación.',
        codeSnippet: `(require 2htdp/image)

;; Crear figuras geométricas sencillas
(circle 30 "solid" "blue")
(rectangle 60 40 "outline" "darkblue")

;; Superponer formas para construir gráficos complejas
(overlay (circle 15 "solid" "yellow")
         (rectangle 80 50 "solid" "blue"))`,
        codeLanguage: 'racket',
        tips: [
          'Modos disponibles: "solid" para relleno completo y "outline" para bordes.',
          'Combina overlay, above y beside para armar interfaces visuales.'
        ]
      },
      {
        title: '3. Aplicando la Receta de Diseño paso a paso',
        content: 'No comiences escribiendo código directamente. Aplica la Receta de Diseño para asegurarte de que tu función esté libre de errores y completamente probada.',
        codeSnippet: `(require test-engine/racket-tests)

;; Signatura: Number -> Number
;; Propósito: Calcula el área de un cuadrado dado la longitud de su lado.

;; Ejemplos y Pruebas
(check-expect (area-cuadrado 4) 16)
(check-expect (area-cuadrado 0) 0)
(check-expect (area-cuadrado 10) 100)

;; Código definitivo
(define (area-cuadrado lado)
  (* lado lado))

;; Correr las pruebas
(test)`,
        codeLanguage: 'racket',
        tips: [
          'Escribir pruebas ANTES de programar aclara exactamente lo que debe hacer la función.',
          'check-expect valida automáticamente que el resultado coincida.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Reto 1: Convertidor de Temperatura (Celsius a Fahrenheit)',
        problemStatement: 'Escribe una función llamada celsius->fahrenheit que reciba una temperatura en grados Celsius y la convierta a Fahrenheit utilizando la fórmula: F = C * 1.8 + 32. Incluye signatura, propósito y al menos 2 pruebas check-expect.',
        hint: 'Usa (+ (* c 1.8) 32)',
        solutionCode: `;; Number -> Number
;; Convierte grados Celsius a Fahrenheit
(check-expect (celsius->fahrenheit 0) 32)
(check-expect (celsius->fahrenheit 100) 212)

(define (celsius->fahrenheit c)
  (+ (* c 1.8) 32))`
      },
      {
        title: 'Reto 2: Creador de Banderas Simples',
        problemStatement: 'Diseña una función bandera-tri-color que reciba 3 nombres de colores (cadenas de texto) y cree una bandera compuesta por 3 rectángulos verticales del mismo tamaño (50x100) colocados uno al lado del otro.',
        hint: 'Utiliza la función (beside img1 img2 img3)',
        solutionCode: `(require 2htdp/image)

;; String String String -> Image
;; Genera una bandera de 3 franjas verticales con los colores dados
(define (franja color-nombre)
  (rectangle 40 100 "solid" color-nombre))

(define (bandera-tri-color c1 c2 c3)
  (beside (franja c1)
          (franja c2)
          (franja c3)))

;; Prueba visual
(bandera-tri-color "blue" "white" "red")`
      }
    ]
  },
  {
    id: 'nivel-2',
    levelNumber: 2,
    title: 'Nivel II: Datos que Crecen',
    subtitle: 'Estructuras compuestas (define-struct), listas homogéneas y recursividad estructural.',
    difficulty: 'Intermedio',
    estimatedHours: '4 - 5 horas',
    image: '/imagenes/htdp2.png',
    overview: 'Cuando la información se vuelve compleja, necesitamos representarla mediante estructuras de datos personalizadas y listas. En este nivel aprenderás a definir tus propios tipos de datos con define-struct y a procesar colecciones de tamaño variable usando recursividad estructural.',
    prerequisites: ['Haber completado el Nivel 1 o dominar la Receta de Diseño de Funciones con datos sencillos'],
    objectives: [
      'Crear nuevos tipos de datos personalizados usando (define-struct ...)',
      'Construir y manipular listas usando cons, list, first y rest',
      'Entender la definición autoreferencial/recursiva de las listas',
      'Diseñar funciones recursivas que recorren listas de principio a fin'
    ],
    sections: [
      {
        title: '1. Estructuras Compuestas (define-struct)',
        content: 'Las estructuras nos permiten agrupar múltiples datos relacionados en un solo paquete, similar a los objetos o structs de otros lenguajes.',
        codeSnippet: `;; Definición de la estructura Posicion con coordenadas X e Y
(define-struct pos (x y))

;; Crear instancias de Posicion
(define p1 (make-pos 10 20))
(define p2 (make-pos 0 100))

;; Acceder a sus campos
(pos-x p1) ; Retorna 10
(pos-y p1) ; Retorna 20
(pos? p1)  ; Predicado: Retorna #true`,
        codeLanguage: 'racket',
        tips: [
          'Racket genera automáticamente el constructor make-pos, los selectores pos-x, pos-y y el predicado pos?.'
        ]
      },
      {
        title: '2. Listas y Construcción de Colecciones',
        content: 'Una lista es un conjunto ordenado de elementos. Se puede definir como la lista vacía (empty) o como la adición de un elemento a otra lista mediante cons.',
        codeSnippet: `;; Crear listas directamente
(define lista-nombres (list "Ana" "Carlos" "Beatriz"))
(define lista-numeros (cons 10 (cons 20 (cons 30 empty))))

;; Consultar elementos
(first lista-nombres) ; "Ana"
(rest lista-nombres)  ; (list "Carlos" "Beatriz")
(empty? empty)        ; #true`,
        codeLanguage: 'racket',
        tips: [
          'first obtiene el primer elemento de la lista.',
          'rest obtiene la sublista remanente sin el primer elemento.'
        ]
      },
      {
        title: '3. Recursividad Estructural sobre Listas',
        content: 'Para procesar cada elemento de una lista, la función se llama a sí misma sobre el (rest de la lista) hasta alcanzar el caso base (empty?).',
        codeSnippet: `;; Sumar todos los números en una lista de números
;; ListOfNumber -> Number
(check-expect (sumar-lista empty) 0)
(check-expect (sumar-lista (list 5 10 15)) 30)

(define (sumar-lista lon)
  (cond
    [(empty? lon) 0]
    [else (+ (first lon)
             (sumar-lista (rest lon)))]))`,
        codeLanguage: 'racket',
        tips: [
          'La estructura condional cond evalúa el caso base (empty? lon) primero.',
          'En el paso recursivo se combina el primer valor con el resultado de procesar el resto.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Reto: Contador de Elementos',
        problemStatement: 'Diseña una función contar-elementos que reciba una lista de cadenas de texto (ListOfString) y devuelva el total de elementos en la lista.',
        hint: 'El caso base debe devolver 0 y el paso recursivo (+ 1 (contar-elementos (rest lista)))',
        solutionCode: `;; ListOfString -> Number
(check-expect (contar-elementos empty) 0)
(check-expect (contar-elementos (list "Microbit" "Racket" "Python")) 3)

(define (contar-elementos los)
  (cond
    [(empty? los) 0]
    [else (+ 1 (contar-elementos (rest los)))]))`
      }
    ]
  },
  {
    id: 'nivel-3',
    levelNumber: 3,
    title: 'Nivel III: Abstracción',
    subtitle: 'Funciones de orden superior (map, filter, foldr), lambdas y reutilización de código.',
    difficulty: 'Avanzado',
    estimatedHours: '4 - 5 horas',
    image: '/imagenes/htdp3.png',
    overview: 'La abstracción es el arte de identificar patrones repetitivos en el código y encapsularlos. En este nivel avanzado descubrirás cómo las funciones pueden recibir o retornar otras funciones, eliminando la necesidad de escribir bucles recursivos manuales.',
    prerequisites: ['Dominio del Nivel 2: Listas y Recursividad estructural'],
    objectives: [
      'Entender las Funciones de Orden Superior (Higher-Order Functions)',
      'Transformar colecciones completas usando (map f lista)',
      'Filtrar elementos según condiciones usando (filter pred lista)',
      'Acumular resultados con (foldr f base lista)',
      'Escribir funciones anónimas concisas con (lambda (x) ...)'
    ],
    sections: [
      {
        title: '1. Transformación con map',
        content: 'La función map aplica una función a cada uno de los elementos de una lista y devuelve una nueva lista con los resultados transformados.',
        codeSnippet: `;; Duplicar cada número en una lista
(define (doble n) (* n 2))

(map doble (list 1 2 3 4 5))
;; Resultado: (list 2 4 6 8 10)

;; Elevar al cuadrado usando lambda anónimo
(map (lambda (x) (* x x)) (list 2 3 4))
;; Resultado: (list 4 9 16)`,
        codeLanguage: 'racket',
        tips: [
          'map mantiene exactamente la misma longitud de la lista original.'
        ]
      },
      {
        title: '2. Filtrado con filter',
        content: 'La función filter conserva solo aquellos elementos de la lista que satisfacen un predicado (una función que devuelve #true o #false).',
        codeSnippet: `;; Filtrar números pares
(filter even? (list 1 2 3 4 5 6 7 8))
;; Resultado: (list 2 4 6 8)

;; Filtrar palabras largas (más de 5 letras)
(filter (lambda (palabra) (> (string-length palabra) 5))
        (list "pi" "educacion" "microbit" "racket" "sol"))
;; Resultado: (list "educacion" "microbit" "racket")`,
        codeLanguage: 'racket',
        tips: [
          'filter evalúa cada elemento con el predicado booleano.'
        ]
      },
      {
        title: '3. Reducción y Acumulación con foldr',
        content: 'foldr (fold right) combina todos los elementos de una lista mediante una función binaria hasta obtener un único resultado final.',
        codeSnippet: `;; Sumar todos los números de una lista
(foldr + 0 (list 10 20 30))
;; Resultado: 60

;; Multiplicar todos los valores
(foldr * 1 (list 2 3 4))
;; Resultado: 24`,
        codeLanguage: 'racket',
        tips: [
          'El segundo argumento de foldr es el valor base inicial cuando la lista está vacía.'
        ]
      }
    ],
    exercises: [
      {
        title: 'Reto: Calificaciones Aprobadas',
        problemStatement: 'Dada una lista de notas (números entre 0 y 20), escribe una expresión utilizando filter y map que tome únicamente las notas aprobadas (>= 10) y las incremente en 1 punto de bonificación.',
        hint: 'Combina (map (lambda (n) (+ n 1)) (filter (lambda (n) (>= n 10)) notas))',
        solutionCode: `(define notas (list 8 12 15 9 18 10))

;; Filtrar aprobados y sumar 1 punto
(define notas-finales
  (map (lambda (n) (+ n 1))
       (filter (lambda (n) (>= n 10)) notas)))

;; Resultado esperado: (list 13 16 19 11)`
      }
    ]
  }
]
