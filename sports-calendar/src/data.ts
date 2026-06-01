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

export const sports: Sport[] = [
  {
    id: '1',
    name: 'Aguas Abiertas',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '2',
    name: 'Natación',
    prAthletes: [],
    events: [{ date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '3',
    name: 'Natación Artística',
    prAthletes: [],
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '4',
    name: 'Clavados',
    prAthletes: [],
    events: [{ date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '5',
    name: 'Polo Acuático',
    prAthletes: [],
    events: [{ date:  '2026-07-20',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-21',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-22',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-23',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '6',
    name: 'Ajedrez',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '7',
    name: 'Atletismo Pista',
    prAthletes: [],
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '8',
    name: 'Atletismo Maratón',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '9',
    name: 'Atletismo Marcha',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '10',
    name: 'Bádminton',
    prAthletes: [],
    events: [{ date:  '2026-07-23',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '11',
    name: 'Baloncesto Femenino',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '12',
    name: 'Baloncesto Masculino',
    prAthletes: ['José Alvarado'],
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '13',
    name: 'Baloncesto 3x3',
    prAthletes: [],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '14',
    name: 'Balonmano Femenino',
    prAthletes: [],
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '15',
    name: 'Balonmano Masculino',
    prAthletes: [],
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '16',
    name: 'Béisbol',
    prAthletes: [],
    events: [{ date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '17',
    name: 'Boliche',
    prAthletes: [],
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '18',
    name: 'Boxeo',
    prAthletes: [],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '19',
    name: 'Canotaje Velocidad',
    prAthletes: [],
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '20',
    name: 'Ciclismo BMX Racing',
    prAthletes: [],
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '21',
    name: 'Ciclismo MTB',
    prAthletes: [],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '22',
    name: 'Ciclismo Pista',
    prAthletes: [],
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '23',
    name: 'Ciclismo Ruta',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '24',
    name: 'Ecuestre Adiestramiento',
    prAthletes: [],
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '25',
    name: 'Ecuestre Eventos',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '26',
    name: 'Ecuestre Salto',
    prAthletes: [],
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '27',
    name: 'Esgrima',
    prAthletes: [],
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '28',
    name: 'E-Sports',
    prAthletes: [],
    events: [{ date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '29',
    name: 'Esquí Náutico',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '30',
    name: 'Fútbol Femenino',
    prAthletes: [],
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '31',
    name: 'Fútbol Masculino',
    prAthletes: [],
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '32',
    name: 'Gimnasia Artística',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '33',
    name: 'Gimnasia Rítmica',
    prAthletes: [],
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '34',
    name: 'Gimnasia Trampolín',
    prAthletes: [],
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '35',
    name: 'Golf',
    prAthletes: [],
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '36',
    name: 'Halterofilia',
    prAthletes: [],
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '37',
    name: 'Hockey Femenino',
    prAthletes: [],
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '38',
    name: 'Hockey Masculino',
    prAthletes: [],
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '39',
    name: 'Judo',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '40',
    name: 'Karate',
    prAthletes: [],
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '41',
    name: 'Luchas',
    prAthletes: [],
    events: [{ date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '42',
    name: 'Netball',
    prAthletes: [],
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '43',
    name: 'Patinaje Artístico Libre',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '44',
    name: 'Patinaje Artístico Danza',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '45',
    name: 'Patinaje Velocidad Pista',
    prAthletes: [],
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '46',
    name: 'Patinaje Velocidad Ruta',
    prAthletes: [],
    events: [{ date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '47',
    name: 'Skateboarding Street',
    prAthletes: [],
    events: [{ date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '48',
    name: 'Pentatlón Moderno',
    prAthletes: [],
    events: [{ date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '49',
    name: 'Racquetbol',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '50',
    name: 'Remo',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '51',
    name: 'Rugby 7',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '52',
    name: 'Softbol Femenino',
    prAthletes: [],
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '53',
    name: 'Softbol Masculino',
    prAthletes: [],
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '54',
    name: 'Squash',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '55',
    name: 'Surf',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '56',
    name: 'Taekwondo',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '57',
    name: 'Tenis',
    prAthletes: [],
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '58',
    name: 'Tenis de Mesa',
    prAthletes: ['Adriana Díaz'],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '59',
    name: 'Tiro',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '60',
    name: 'Tiro Escopeta',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '61',
    name: 'Tiro con Arco',
    prAthletes: [],
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '62',
    name: 'Triatlón',
    prAthletes: [],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '63',
    name: 'Vela',
    prAthletes: [],
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '64',
    name: 'Voleibol Sala Femenino',
    prAthletes: [],
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '65',
    name: 'Voleibol Sala Masculino',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '66',
    name: 'Voleibol Playa',
    prAthletes: [],
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  }
];
