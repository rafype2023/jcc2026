export interface SportEvent {
  date: string;
  time: string;
  durationMinutes: number;
  type: 'competencia' | 'medalla';
}

export interface Sport {
  id: string;
  name: string;
  prAthletes: string[];
  events: SportEvent[];
}

// Función para generar fechas consecutivas de prueba
const generateEvents = (startDate: string, daysCount: number, medalDaysIndices: number[]): SportEvent[] => {
  const events: SportEvent[] = [];
  const start = new Date(startDate + 'T12:00:00Z');
  
  for (let i = 0; i < daysCount; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    
    events.push({
      date: dateStr,
      time: '14:00', // Mock time
      durationMinutes: 120,
      type: medalDaysIndices.includes(i) ? 'medalla' : 'competencia'
    });
  }
  return events;
};

export const sports: Sport[] = [
  { id: '1', name: 'Aguas Abiertas', prAthletes: [], events: generateEvents('2026-07-24', 2, [0, 1]) },
  { id: '2', name: 'Natación', prAthletes: [], events: generateEvents('2026-07-24', 5, [0, 1, 2, 3, 4]) },
  { id: '3', name: 'Natación Artística', prAthletes: [], events: generateEvents('2026-07-25', 3, [2]) },
  { id: '4', name: 'Clavados', prAthletes: [], events: generateEvents('2026-07-26', 4, [2, 3]) },
  { id: '5', name: 'Polo Acuático', prAthletes: [], events: generateEvents('2026-07-27', 6, [5]) },
  { id: '6', name: 'Ajedrez', prAthletes: [], events: generateEvents('2026-07-28', 4, [3]) },
  { id: '7', name: 'Atletismo Pista', prAthletes: [], events: generateEvents('2026-08-01', 5, [2, 3, 4]) },
  { id: '8', name: 'Atletismo Maratón', prAthletes: [], events: generateEvents('2026-08-04', 1, [0]) },
  { id: '9', name: 'Atletismo Marcha', prAthletes: [], events: generateEvents('2026-08-02', 2, [1]) },
  { id: '10', name: 'Bádminton', prAthletes: [], events: generateEvents('2026-07-25', 4, [3]) },
  { id: '11', name: 'Baloncesto Femenino', prAthletes: [], events: generateEvents('2026-07-26', 5, [4]) },
  { id: '12', name: 'Baloncesto Masculino', prAthletes: ['José Alvarado'], events: generateEvents('2026-07-26', 6, [5]) },
  { id: '13', name: 'Baloncesto 3x3', prAthletes: [], events: generateEvents('2026-07-28', 3, [2]) },
  { id: '14', name: 'Balonmano Femenino', prAthletes: [], events: generateEvents('2026-07-29', 5, [4]) },
  { id: '15', name: 'Balonmano Masculino', prAthletes: [], events: generateEvents('2026-07-30', 5, [4]) },
  { id: '16', name: 'Béisbol', prAthletes: [], events: generateEvents('2026-07-24', 8, [7]) },
  { id: '17', name: 'Boliche', prAthletes: [], events: generateEvents('2026-07-25', 5, [3, 4]) },
  { id: '18', name: 'Boxeo', prAthletes: [], events: generateEvents('2026-07-25', 6, [4, 5]) },
  { id: '19', name: 'Canotaje Velocidad', prAthletes: [], events: generateEvents('2026-07-27', 3, [2]) },
  { id: '20', name: 'Ciclismo BMX Racing', prAthletes: [], events: generateEvents('2026-07-28', 1, [0]) },
  { id: '21', name: 'Ciclismo MTB', prAthletes: [], events: generateEvents('2026-07-29', 1, [0]) },
  { id: '22', name: 'Ciclismo Pista', prAthletes: [], events: generateEvents('2026-07-30', 4, [2, 3]) },
  { id: '23', name: 'Ciclismo Ruta', prAthletes: [], events: generateEvents('2026-08-01', 3, [2]) },
  { id: '24', name: 'Ecuestre Adiestramiento', prAthletes: [], events: generateEvents('2026-07-24', 3, [2]) },
  { id: '25', name: 'Ecuestre Eventos', prAthletes: [], events: generateEvents('2026-07-25', 3, [2]) },
  { id: '26', name: 'Ecuestre Salto', prAthletes: [], events: generateEvents('2026-07-26', 3, [2]) },
  { id: '27', name: 'Esgrima', prAthletes: [], events: generateEvents('2026-07-27', 6, [4, 5]) },
  { id: '28', name: 'E-Sports', prAthletes: [], events: generateEvents('2026-07-28', 2, [1]) },
  { id: '29', name: 'Esquí Náutico', prAthletes: [], events: generateEvents('2026-07-29', 3, [2]) },
  { id: '30', name: 'Fútbol Femenino', prAthletes: [], events: generateEvents('2026-07-30', 5, [4]) },
  { id: '31', name: 'Fútbol Masculino', prAthletes: [], events: generateEvents('2026-07-31', 5, [4]) },
  { id: '32', name: 'Gimnasia Artística', prAthletes: [], events: generateEvents('2026-07-25', 5, [2, 3, 4]) },
  { id: '33', name: 'Gimnasia Rítmica', prAthletes: [], events: generateEvents('2026-07-26', 3, [2]) },
  { id: '34', name: 'Gimnasia Trampolín', prAthletes: [], events: generateEvents('2026-07-27', 2, [1]) },
  { id: '35', name: 'Golf', prAthletes: [], events: generateEvents('2026-07-28', 4, [3]) },
  { id: '36', name: 'Halterofilia', prAthletes: [], events: generateEvents('2026-07-29', 4, [2, 3]) },
  { id: '37', name: 'Hockey Femenino', prAthletes: [], events: generateEvents('2026-07-30', 5, [4]) },
  { id: '38', name: 'Hockey Masculino', prAthletes: [], events: generateEvents('2026-07-31', 5, [4]) },
  { id: '39', name: 'Judo', prAthletes: [], events: generateEvents('2026-08-01', 4, [2, 3]) },
  { id: '40', name: 'Karate', prAthletes: [], events: generateEvents('2026-08-02', 3, [2]) },
  { id: '41', name: 'Luchas', prAthletes: [], events: generateEvents('2026-08-03', 3, [2]) },
  { id: '42', name: 'Netball', prAthletes: [], events: generateEvents('2026-07-25', 5, [4]) },
  { id: '43', name: 'Patinaje Artístico Libre', prAthletes: [], events: generateEvents('2026-07-26', 2, [1]) },
  { id: '44', name: 'Patinaje Artístico Danza', prAthletes: [], events: generateEvents('2026-07-27', 2, [1]) },
  { id: '45', name: 'Patinaje Velocidad Pista', prAthletes: [], events: generateEvents('2026-07-28', 3, [2]) },
  { id: '46', name: 'Patinaje Velocidad Ruta', prAthletes: [], events: generateEvents('2026-07-29', 2, [1]) },
  { id: '47', name: 'Skateboarding Street', prAthletes: [], events: generateEvents('2026-07-30', 2, [1]) },
  { id: '48', name: 'Pentatlón Moderno', prAthletes: [], events: generateEvents('2026-07-31', 4, [3]) },
  { id: '49', name: 'Racquetbol', prAthletes: [], events: generateEvents('2026-08-01', 8, [6, 7]) },
  { id: '50', name: 'Remo', prAthletes: [], events: generateEvents('2026-08-02', 5, [4]) },
  { id: '51', name: 'Rugby 7', prAthletes: [], events: generateEvents('2026-08-03', 3, [2]) },
  { id: '52', name: 'Softbol Femenino', prAthletes: [], events: generateEvents('2026-07-25', 6, [5]) },
  { id: '53', name: 'Softbol Masculino', prAthletes: [], events: generateEvents('2026-07-26', 6, [5]) },
  { id: '54', name: 'Squash', prAthletes: [], events: generateEvents('2026-07-27', 6, [5]) },
  { id: '55', name: 'Surf', prAthletes: [], events: generateEvents('2026-07-28', 5, [4]) },
  { id: '56', name: 'Taekwondo', prAthletes: [], events: generateEvents('2026-07-29', 4, [3]) },
  { id: '57', name: 'Tenis', prAthletes: [], events: generateEvents('2026-07-30', 7, [5, 6]) },
  { id: '58', name: 'Tenis de Mesa', prAthletes: ['Adriana Díaz'], events: generateEvents('2026-07-26', 7, [2, 6]) },
  { id: '59', name: 'Tiro', prAthletes: [], events: generateEvents('2026-08-01', 5, [4]) },
  { id: '60', name: 'Tiro Escopeta', prAthletes: [], events: generateEvents('2026-08-02', 5, [4]) },
  { id: '61', name: 'Tiro con Arco', prAthletes: [], events: generateEvents('2026-08-03', 6, [5]) },
  { id: '62', name: 'Triatlón', prAthletes: [], events: generateEvents('2026-08-04', 2, [1]) },
  { id: '63', name: 'Vela', prAthletes: [], events: generateEvents('2026-08-05', 6, [5]) },
  { id: '64', name: 'Voleibol Sala Femenino', prAthletes: [], events: generateEvents('2026-07-26', 6, [5]) },
  { id: '65', name: 'Voleibol Sala Masculino', prAthletes: [], events: generateEvents('2026-07-27', 6, [5]) },
  { id: '66', name: 'Voleibol Playa', prAthletes: [], events: generateEvents('2026-07-28', 7, [6]) }
];
