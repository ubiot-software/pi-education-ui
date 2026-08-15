export interface MicrobitSection {
  title: string
  content: string
  blockImage?: string
  codeSnippet?: string
  codeLanguage?: string
  hardwareItems?: string[]
}

export interface MicrobitExercise {
  title: string
  problemStatement: string
  hint?: string
  makecodePythonCode: string
}

export interface MicrobitLevel {
  id: string
  levelNumber: number
  title: string
  subtitle: string
  difficulty: 'Principiante' | 'Intermedio'
  estimatedHours: string
  image: string
  overview: string
  prerequisites: string[]
  objectives: string[]
  sections: MicrobitSection[]
  exercises: MicrobitExercise[]
}

export const MICROBIT_LEVELS: MicrobitLevel[] = [
  {
    id: 'basico',
    levelNumber: 1,
    title: 'Nivel Básico: Primeros Pasos con Micro:bit',
    subtitle: 'Matriz LED 5x5, botones A/B, sonido y programación por bloques con MakeCode.',
    difficulty: 'Principiante',
    estimatedHours: '2 - 3 horas',
    image: '/imagenes/microbit1.svg',
    overview: 'Micro:bit es una pequeña tarjeta electrónica programable llena de posibilidades. En este nivel básico explorarás cómo encender sus luces LED, responder cuando se presionan los botones físicos y crear animaciones sencillas utilizando el editor visual MakeCode de Microsoft.',
    prerequisites: ['Computadora, tablet o laptop con navegador web', 'Placa Micro:bit V1 o V2 (opcional, se puede usar el simulador integrado)'],
    objectives: [
      'Identificar los elementos de hardware de la Micro:bit (Matriz LED, Botones A y B, Conector USB)',
      'Aprender a usar el entorno de desarrollo visual Microsoft MakeCode',
      'Crear secuencias de código con bloques de entrada y salida',
      'Cargar el programa compilado (.hex) a la tarjeta Micro:bit'
    ],
    sections: [
      {
        title: '1. ¿Qué es la Micro:bit y cómo se compone?',
        content: 'La tarjeta Micro:bit cuenta con una pantalla de 25 LEDs rojos ordenados en una cuadrícula de 5x5, 2 botones programables (A y B), sensores internos de luz, temperatura y movimiento, y conector para batería.',
        hardwareItems: [
          'Matriz LED 5x5: Muestra texto, números e íconos.',
          'Botones A y B: Permiten interactuar con los programas.',
          'Pines de conexión: Para conectar sensores o zumbadores externos.',
          'Micro-USB y Botón Reset: Para alimentar y flashear código.'
        ]
      },
      {
        title: '2. Tu Primer Programa: Carita Feliz y Texto',
        content: 'En MakeCode arrastramos bloques al lienzo dentro del bloque "al iniciar" o "para siempre". Probemos mostrar una carita feliz y luego el nombre "Pi".',
        codeSnippet: `# Código equivalente en MakeCode Python
from microbit import *

display.show(Image.HAPPY)
sleep(1000)
display.scroll("Hola Pi!")`,
        codeLanguage: 'python'
      },
      {
        title: '3. Respondiendo a los Botones (Eventos)',
        content: 'Los botones A y B son eventos de entrada. Cuando el usuario presiona el botón A, ejecutamos una acción; al presionar B, ejecutamos otra.',
        codeSnippet: `# MakeCode Python: Control por botones
def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)

def on_button_pressed_b():
    basic.clear_screen()

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)`,
        codeLanguage: 'python'
      }
    ],
    exercises: [
      {
        title: 'Proyecto 1: Dado Electrónico',
        problemStatement: 'Crea un programa que al agitar la Micro:bit (evento "al agitar" / shake) elija al azar un número entre 1 y 6 y lo muestre en la pantalla LED.',
        hint: 'En MakeCode usa el bloque input.on_gesture(Gesture.SHAKE, ...) y randint(1, 6)',
        makecodePythonCode: `def on_gesture_shake():
    numero = randint(1, 6)
    basic.show_number(numero)

input.on_gesture(Gesture.SHAKE, on_gesture_shake)`
      }
    ]
  },
  {
    id: 'medio',
    levelNumber: 2,
    title: 'Nivel Medio: Sensores y Comunicación Radio',
    subtitle: 'Acelerómetro, sensor de luz/temperatura, entradas analógicas y radio inalámbrica.',
    difficulty: 'Intermedio',
    estimatedHours: '3 - 4 horas',
    image: '/imagenes/sensor.png',
    overview: 'Aprovecha al máximo los sensores integrados en la Micro:bit. Aprenderás a medir temperatura ambiente, nivel de luz en la habitación y a enviar mensajes inalámbricos entre dos o más Micro:bits usando la antena de radio integrada.',
    prerequisites: ['Haber completado el Nivel Básico de Micro:bit'],
    objectives: [
      'Leer valores analógicos de temperatura y nivel de luz ambiental',
      'Configurar grupos de radio inalámbricos entre dos tarjetas',
      'Crear un sistema interactivo de alerta o monitoreo'
    ],
    sections: [
      {
        title: '1. Monitoreo de Temperatura y Luz',
        content: 'La Micro:bit detecta la temperatura del procesador (aproximada a la del ambiente) y usa la pantalla LED en modo fotosensible para medir el nivel de luz de 0 a 255.',
        codeSnippet: `# MakeCode Python: Termómetro Digital
def on_forever():
    temp = input.temperature()
    basic.show_number(temp)
    if temp > 30:
        basic.show_icon(IconNames.ANGRY)
    else:
        basic.show_icon(IconNames.HAPPY)
    basic.pause(2000)

basic.forever(on_forever)`,
        codeLanguage: 'python'
      },
      {
        title: '2. Comunicación Inalámbrica por Radio',
        content: 'Con el bloque "radio" podemos enviar cadenas o números por el aire a cualquier otra Micro:bit sintonizada en el mismo canal (radio set group).',
        codeSnippet: `# Emisor: Enviar mensaje al presionar botón A
radio.set_group(1)

def on_button_pressed_a():
    radio.send_string("ALERTA")

input.on_button_pressed(Button.A, on_button_pressed_a)

# Receptor: Escuchar mensajes recibidos
def on_received_string(receivedString):
    basic.show_string(receivedString)

radio.on_received_string(on_received_string)`,
        codeLanguage: 'python'
      }
    ],
    exercises: [
      {
        title: 'Proyecto 2: Telégrafo Inalámbrico (Walkie-Talkie)',
        problemStatement: 'Diseña un sistema con 2 Micro:bits. Al presionar el Botón A envía el ícono de un corazón; al presionar el Botón B envía una carita feliz. La Micro:bit receptora debe mostrar el ícono recibido.',
        hint: 'Usa radio.send_number(1) para corazón y radio.send_number(2) para carita feliz.',
        makecodePythonCode: `radio.set_group(7)

def on_button_pressed_a():
    radio.send_number(1)

def on_button_pressed_b():
    radio.send_number(2)

input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_number(num):
    if num == 1:
        basic.show_icon(IconNames.HEART)
    elif num == 2:
        basic.show_icon(IconNames.HAPPY)

radio.on_received_number(on_received_number)`
      }
    ]
  }
]
