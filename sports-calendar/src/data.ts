export interface SportEvent {
  id?: string;
  name?: string;
  date: string;
  time: string;
  durationMinutes: number;
  type: 'competencia' | 'medalla';
  gender?: 'M' | 'F' | 'Mixto' | 'Open';
  phase?: string;
}

export interface Sport {
  id: string;
  name: string;
  prAthletes: string[];
  hasIndividualEvents?: boolean;
  events: SportEvent[];
}

export const sports: Sport[] = [
  {
    id: '1',
    name: 'Aguas Abiertas',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-1-1', name: '10 km Masculino Final', date: '2026-07-25', time: '09:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-1-2', name: '10 km Femenino Final', date: '2026-07-25', time: '09:10', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-1-3', name: '3km Sprint Knock-Out Masculino Final', date: '2026-07-26', time: '09:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-1-4', name: '3km Sprint Knock-Out Femenino Final', date: '2026-07-26', time: '09:10', durationMinutes: 120, type: 'medalla', gender: 'F' }
  ]
  },
  {
    id: '2',
    name: 'Natación',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-2-1', name: '50 m Libre Femenino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-2', name: '50 m Libre Masculino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-3', name: '100 m Pecho Femenino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-4', name: '100 m Pecho Masculino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-5', name: '200 m Combinado Individual Femenino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-6', name: '200 m Combinado Individual Masculino Series', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-7', name: '4x200 m Relevo Libre  Femenino Serie', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-8', name: '4x200 m Relevo Libre  Masculino Serie', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-9', name: '800 m Libre Femenino Series lentas', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-10', name: '1500 m Libre Masculino Series lentas', date: '2026-07-28', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-11', name: '50 m Libre Femenino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-12', name: '50 m Libre Masculino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-13', name: '100 m Pecho Femenino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-14', name: '100 m Pecho Masculino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-15', name: '200 m Combinado Individual Femenino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-16', name: '200 m Combinado Individual Masculino Finales B y A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-17', name: '800 m Libre Femenino Serie rápida', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-18', name: '1500 m Libre Masculino Serie rápida', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-19', name: '4x200 m Relevo Libre Femenino Final A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-20', name: '4x200 m Relevo Libre Masculino Final A', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-21', name: '50 m Pecho Femenino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-22', name: '50 m Pecho Masculino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-23', name: '100 m Libre Femenino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-24', name: '100 m Libre Masculino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-25', name: '200 m Mariposa Femenino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-26', name: '200 m Mariposa Masculino Series', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-27', name: '400 m Combinado Individual Femenino Serie', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-28', name: '400 m Combinado Individual Masculino Serie', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-29', name: '4x100 m Relevo Libre  Femenino Serie', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-30', name: '4x100 m Relevo Libre  Masculino Serie', date: '2026-07-29', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-31', name: '50 m Pecho Femenino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-32', name: '50 m Pecho Masculino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-33', name: '100 m Libre Femenino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-34', name: '100 m Libre Masculino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-35', name: '200 m Mariposa Femenino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-36', name: '200 m Mariposa Masculino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-37', name: '400 m Combinado Individual Femenino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-38', name: '400 m Combinado Individual Masculino Finales B y A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-39', name: '4x100 m Relevo Libre Femenino Final A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-40', name: '4x100 m Relevo Libre Masculino Final A', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-41', name: '50 m Espalda Femenino Series', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-42', name: '50 m Espalda Masculino Series', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-43', name: '100 m Mariposa Femenino Series', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-44', name: '100 m Mariposa Masculino Series', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-45', name: '4x100 m Relevo Combinado  Mixto Series', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-2-46', name: '1500 m Libre Femenino  Series lentas', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-47', name: '800 m Libre Masculino Series lentas', date: '2026-07-30', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-48', name: '50 m Espalda Femenino Finales B y A', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-49', name: '50 m Espalda Masculino Finales B y A', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-50', name: '100 m Mariposa Femenino Finales B y A', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-51', name: '100 m Mariposa Masculino Finales B y A', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-52', name: '1500 m Libre Femenino Serie rápida', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-53', name: '800 m Libre Masculino Serie rápida', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-54', name: '4x100 m Relevo Combinado Mixto Final A', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-2-55', name: '100 m Espalda Masculino Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-56', name: '200 m Pecho Femenino Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-57', name: '200 m Pecho Masculino Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-58', name: '400 m Libre Femenino Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-59', name: '400 m Libre Masculino Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-60', name: '4x100 m Relevo Libre  Mixto Series', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-2-61', name: '100 m Espalda Femenino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-62', name: '100 m Espalda Masculino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-63', name: '200 m Pecho Femenino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-64', name: '200 m Pecho Masculino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-65', name: '400 m Libre Femenino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-66', name: '400 m Libre Masculino Finales B y A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-67', name: '4x100 m Relevo Libre Mixto Final A', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-2-68', name: '50 m Mariposa  Femenino Serie', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-69', name: '50 m Mariposa  Masculino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-70', name: '200 m Espalda Femenino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-71', name: '200 m Espalda Masculino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-72', name: '200 m Libre Femenino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-73', name: '200 m Libre Masculino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-74', name: '4x100 m Relevo Combinado  Femenino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-2-75', name: '4x100 m Relevo Combinado  Masculino Series', date: '2026-08-01', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-2-76', name: '50 m Mariposa  Femenino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-77', name: '50 m Mariposa  Masculino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-78', name: '200 m Espalda Femenino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-79', name: '200 m Espalda Masculino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-80', name: '200 m Libre Femenino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-81', name: '200 m Libre Masculino Finales B y A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-2-82', name: '4x100 m Relevo Combinado Femenino Final A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-2-83', name: '4x100 m Relevo Combinado Masculino Final A', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '3',
    name: 'Natación Artística',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-3-1', name: 'Solo Técnico Femenino Final', date: '2026-08-05', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-3-2', name: 'Solo Técnico Masculino Final', date: '2026-08-05', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-3-3', name: 'Equipos Técnico Mixto Final', date: '2026-08-05', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-3-4', name: 'Dueto Técnico Femenino Final', date: '2026-08-06', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-3-5', name: 'Dueto Mixto Técnico Mixto Final', date: '2026-08-06', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-3-6', name: 'Solo Libre Femenino Final', date: '2026-08-06', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-3-7', name: 'Solo Libre Masculino Final', date: '2026-08-06', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-3-8', name: 'Dueto Libre Femenino Final', date: '2026-08-07', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-3-9', name: 'Dueto Mixto Libre Mixto Final', date: '2026-08-07', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-3-10', name: 'Equipos Libre Mixto Final', date: '2026-08-07', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-3-11', name: 'Rutina Acrobática Mixto Final', date: '2026-08-08', time: '11:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' }
  ]
  },
  {
    id: '4',
    name: 'Clavados',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-4-1', name: 'Plataforma 10m Femenino Preliminar', date: '2026-07-29', time: '12:00', durationMinutes: 180, type: 'competencia', gender: 'F' },
    { id: 'evt-4-2', name: 'Trampolín 1m Masculino Preliminar', date: '2026-07-29', time: '12:00', durationMinutes: 180, type: 'competencia', gender: 'M' },
    { id: 'evt-4-3', name: 'Trampolín 3m Femenino Preliminar', date: '2026-07-29', time: '12:00', durationMinutes: 180, type: 'competencia', gender: 'F' },
    { id: 'evt-4-4', name: 'Plataforma 10m Masculino Preliminar', date: '2026-07-29', time: '12:00', durationMinutes: 180, type: 'competencia', gender: 'M' },
    { id: 'evt-4-5', name: 'Trampolín 3m Sincronizado Femenino Final', date: '2026-07-30', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-4-6', name: 'Trampolín 1m Masculino Final', date: '2026-07-30', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-4-7', name: 'Plataforma 10m Femenino Final', date: '2026-07-30', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-4-8', name: 'Trampolín 1m Femenino Final', date: '2026-07-31', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-4-9', name: 'Trampolín 3m Sincronizado Masculino Final', date: '2026-07-31', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-4-10', name: 'Plataforma 10m Sincronizado Mixto Final', date: '2026-07-31', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-4-11', name: 'Trampolín 3m Masculino Final', date: '2026-08-01', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-4-12', name: 'Plataforma 10m Sincronizado Femenino Final', date: '2026-08-01', time: '12:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-4-13', name: 'Trampolín 3m Sincronizado Mixto Final', date: '2026-08-02', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-4-14', name: 'Plataforma 10m Sincronizado Masculino Final', date: '2026-08-02', time: '10:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-4-15', name: 'Trampolín 3m Femenino Final', date: '2026-08-02', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-4-16', name: 'Plataforma 10m Masculino Final', date: '2026-08-02', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '5',
    name: 'Polo Acuático',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-20',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-21',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-22',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-23',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '6',
    name: 'Ajedrez',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '7',
    name: 'Atletismo Pista',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-7-4', name: '100 metros Hombres Decatlón', date: '2026-08-03', time: '08:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-5', name: 'Salto de Longitud Hombres Decatlón', date: '2026-08-03', time: '08:40', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-6', name: 'Impulso de la Bala Hombres Decatlón', date: '2026-08-03', time: '10:05', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-7', name: 'Lanzamiento de Martillo Mujeres Final', date: '2026-08-03', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-8', name: 'Salto de Altura Hombres Decatlón', date: '2026-08-03', time: '16:10', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-9', name: '100 metros Hombres Semi-Final', date: '2026-08-03', time: '17:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-10', name: '100 metros Hombres Semi-Final', date: '2026-08-03', time: '17:10', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-11', name: '100 metros Hombres Semi-Final', date: '2026-08-03', time: '17:20', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-12', name: 'Impulso de la Bala Hombres Final', date: '2026-08-03', time: '17:25', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-13', name: '100 metros Mujeres Semi-Final', date: '2026-08-03', time: '17:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-14', name: '100 metros Mujeres Semi-Final', date: '2026-08-03', time: '17:40', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-15', name: '100 metros Mujeres Semi-Final', date: '2026-08-03', time: '17:50', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-16', name: '400 metros con vallas Hombres Semi-Final', date: '2026-08-03', time: '18:10', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-17', name: '400 metros con vallas Hombres Semi-Final', date: '2026-08-03', time: '18:15', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-18', name: 'Salto de Altura Hombres Final', date: '2026-08-03', time: '18:20', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-19', name: '400 metros con vallas Mujeres Semi-Final', date: '2026-08-03', time: '18:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-20', name: '400 metros con vallas Mujeres Semi-Final', date: '2026-08-03', time: '18:35', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-21', name: 'Salto Triple Mujeres Final', date: '2026-08-03', time: '18:40', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-22', name: '5,000 metros Mujeres Final', date: '2026-08-03', time: '18:45', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-23', name: '400 metros Hombres Decatlón', date: '2026-08-03', time: '19:10', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-24', name: '4x400 metros mixto Mixto Final', date: '2026-08-03', time: '20:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-7-25', name: '100 metros Hombres Final', date: '2026-08-03', time: '20:15', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-26', name: '100 metros Mujeres Final', date: '2026-08-03', time: '20:25', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-27', name: '110 metros con vallas Hombres Decatlón', date: '2026-08-04', time: '08:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-28', name: 'Lanzamiento del Disco Hombres Decatlón', date: '2026-08-04', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-29', name: 'Salto con Pértiga Hombres Decatlón', date: '2026-08-04', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-30', name: 'Lanzamiento de Jabalina Mujeres Final', date: '2026-08-04', time: '16:15', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-31', name: '110 metros con vallas Hombres Semi-Final', date: '2026-08-04', time: '16:45', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-32', name: '110 metros con vallas Hombres Semi-Final', date: '2026-08-04', time: '16:55', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-33', name: '100 metros con vallas Mujeres Semi-Final', date: '2026-08-04', time: '17:15', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-34', name: '100 metros con vallas Mujeres Semi-Final', date: '2026-08-04', time: '17:25', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-35', name: 'Salto de Longitud Hombres Final', date: '2026-08-04', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-36', name: '5,000 metros Hombres Final', date: '2026-08-04', time: '18:05', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-37', name: '400 metros Hombres Semi-Final', date: '2026-08-04', time: '18:15', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-38', name: '400 metros Hombres Semi-Final', date: '2026-08-04', time: '18:25', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-39', name: 'Lanzamiento de la Jabalina Hombres Decatlón', date: '2026-08-04', time: '18:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-40', name: '400 metros Mujeres Semi-Final', date: '2026-08-04', time: '18:45', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-41', name: '400 metros Mujeres Semi-Final', date: '2026-08-04', time: '18:55', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-42', name: '400 metros con vallas Hombres Final', date: '2026-08-04', time: '19:15', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-43', name: '400 metros con vallas Mujeres Final', date: '2026-08-04', time: '19:30', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-44', name: '1,500 metros Hombres Decatlón', date: '2026-08-04', time: '19:50', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-45', name: 'Relevo 4x100 metros mixto Mixto Final', date: '2026-08-04', time: '20:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-7-46', name: 'Lanzamiento del Martillo Hombres Final', date: '2026-08-05', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-47', name: '100 metros con vallas Mujeres Heptatlón', date: '2026-08-05', time: '16:20', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-48', name: 'Salto de Altura Mujeres Heptatlón', date: '2026-08-05', time: '16:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-49', name: '200 metros Hombres Semi-Final', date: '2026-08-05', time: '17:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-50', name: '200 metros Hombres Semi-Final', date: '2026-08-05', time: '17:10', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-51', name: 'Salto de Longitud Mujeres Final', date: '2026-08-05', time: '17:15', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-52', name: '200 metros Hombres Semi-Final', date: '2026-08-05', time: '17:20', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-53', name: '200 metros Mujeres Semi-Final', date: '2026-08-05', time: '17:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-54', name: '200 metros Mujeres Semi-Final', date: '2026-08-05', time: '17:40', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-55', name: '200 metros Mujeres Semi-Final', date: '2026-08-05', time: '17:50', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-56', name: '1500 metros Hombres Final', date: '2026-08-05', time: '18:05', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-57', name: '1500 metros Mujeres Final', date: '2026-08-05', time: '18:15', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-58', name: '110 metros con vallas Hombres Final', date: '2026-08-05', time: '18:35', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-59', name: 'Lanzamiento del Disco Hombres Final', date: '2026-08-05', time: '18:40', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-60', name: '100 metros con vallas Mujeres Final', date: '2026-08-05', time: '18:50', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-61', name: 'Impulso de la Bala Mujeres Heptatlón', date: '2026-08-05', time: '19:25', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-62', name: '400 metros Hombres Final', date: '2026-08-06', time: '19:30', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-63', name: '400 metros Mujeres Final', date: '2026-08-06', time: '19:40', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-64', name: '200 metros Mujeres Heptatlón', date: '2026-08-06', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-65', name: 'Salto de Longitud Mujeres Heptatlón', date: '2026-08-06', time: '15:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-66', name: 'Lanzamiento de la Jabalina Hombres Final', date: '2026-08-06', time: '15:45', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-67', name: 'Salto con Pértiga Hombres Final', date: '2026-08-06', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-68', name: '800 metros Hombres Semi-Final', date: '2026-08-06', time: '16:15', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-69', name: '800 metros Hombres Semi-Final', date: '2026-08-06', time: '16:25', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-7-70', name: '800 metros Mujeres Semi-Final', date: '2026-08-06', time: '16:35', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-71', name: '800 metros Mujeres Semi-Final', date: '2026-08-06', time: '16:45', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-72', name: 'Impulso de la Bala Mujeres Final', date: '2026-08-06', time: '17:05', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-73', name: '200 metros Hombres Final', date: '2026-08-06', time: '17:10', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-74', name: '200 metros Mujeres Final', date: '2026-08-06', time: '17:20', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-75', name: 'Lanzamiento de la Jabalina Mujeres Heptatlón', date: '2026-08-06', time: '17:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-76', name: '10,000 metros Mujeres Final', date: '2026-08-06', time: '17:45', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-77', name: '800 metros Mujeres Heptatlón', date: '2026-08-06', time: '18:40', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-7-78', name: '4x100 metros Hombres Final', date: '2026-08-06', time: '18:50', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-79', name: '4x100 metros Mujeres Final', date: '2026-08-06', time: '19:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-80', name: 'Salto con Pértiga Mujeres Final', date: '2026-08-07', time: '17:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-81', name: 'Salto de Altura Mujeres Final', date: '2026-08-07', time: '17:05', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-82', name: 'Lanzamiento del Disco Mujeres Final', date: '2026-08-07', time: '17:15', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-83', name: '800 metros Hombres Final', date: '2026-08-07', time: '17:35', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-84', name: '800 metros Mujeres Final', date: '2026-08-07', time: '17:45', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-85', name: '3,000 metros con obstáculos Hombres Final', date: '2026-08-07', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-86', name: '3,000 metros con obstáculos Mujeres Final', date: '2026-08-07', time: '18:20', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-7-87', name: 'Salto Triple Hombres Final', date: '2026-08-07', time: '18:30', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-88', name: '10,000 metros Hombres Final', date: '2026-08-07', time: '19:05', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-89', name: '4x400 metros Hombres Final', date: '2026-08-07', time: '20:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-7-90', name: '4x400 metros Mujeres Final', date: '2026-08-07', time: '20:15', durationMinutes: 120, type: 'medalla', gender: 'F' }
  ]
  },
  {
    id: '8',
    name: 'Atletismo Maratón',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-8-1', name: 'Media Maratón Hombres Final', date: '2026-08-02', time: '06:00', durationMinutes: 120, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '9',
    name: 'Atletismo Marcha',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-9-2', name: '21.098kms Marcha Mujeres Final', date: '2026-08-02', time: '08:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-9-3', name: '21.098kms Marcha Hombres Final', date: '2026-08-03', time: '08:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-9-91', name: '42.195km Marcha Mujeres Final', date: '2026-08-08', time: '06:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-9-92', name: '42.195km Marcha Mujeres Final', date: '2026-08-08', time: '06:00', durationMinutes: 120, type: 'medalla', gender: 'F' }
  ]
  },
  {
    id: '10',
    name: 'Bádminton',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-23',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '11',
    name: 'Baloncesto Femenino',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-11-1', name: 'Juego 03 - Preliminar Femenino', date: '2026-07-25', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-2', name: 'Juego 04 - Preliminar Femenino', date: '2026-07-25', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-3', name: 'Juego 05 - Preliminar Femenino', date: '2026-07-27', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-4', name: 'Juego 06 - Preliminar Femenino', date: '2026-07-27', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-5', name: 'Juego 07 - Preliminar Femenino', date: '2026-07-27', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-6', name: 'Juego 08 - Preliminar Femenino', date: '2026-07-27', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-7', name: 'Juego 09 - Preliminar Femenino', date: '2026-07-29', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-8', name: 'Juego 10 - Preliminar Femenino', date: '2026-07-29', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-9', name: 'Juego 11 - Preliminar Femenino', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-10', name: 'Juego 12 - Preliminar Femenino', date: '2026-07-29', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-11', name: 'Juego 13 - Clasificación 5°-8° Femenino', date: '2026-07-30', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-12', name: 'Juego 14 - Clasificación 5°-8° Femenino', date: '2026-07-30', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-13', name: 'Juego 15 - Semifinal Femenino', date: '2026-07-30', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-14', name: 'Juego 16 - Semifinal Femenino', date: '2026-07-30', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-15', name: 'Juego 17 - Definición 7°-8° Lugar Femenino', date: '2026-08-01', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-16', name: 'Juego 18 - Definición 5°-6° Lugar Femenino', date: '2026-08-01', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-11-17', name: 'Juego 19 - Final Medalla de Bronce Femenino', date: '2026-08-01', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-11-18', name: 'Juego 20 - Final Medalla de Oro Femenino', date: '2026-08-01', time: '20:30', durationMinutes: 120, type: 'medalla', gender: 'F' }
  ]
  },
  {
    id: '12',
    name: 'Baloncesto Masculino',
    prAthletes: ["Jos\u00e9 Alvarado"],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-12-1', name: 'Juego 01 - Preliminar Masculino', date: '2026-07-26', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-2', name: 'Juego 02 - Preliminar Masculino', date: '2026-07-26', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-3', name: 'Juego 03 - Preliminar Masculino', date: '2026-07-26', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-4', name: 'Juego 04 - Preliminar Masculino', date: '2026-07-26', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-5', name: 'Juego 05 - Preliminar Masculino', date: '2026-07-28', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-6', name: 'Juego 06 - Preliminar Masculino', date: '2026-07-28', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-7', name: 'Juego 07 - Preliminar Masculino', date: '2026-07-28', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-8', name: 'Juego 08 - Preliminar Masculino', date: '2026-07-28', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-9', name: 'Juego 09 - Preliminar Masculino', date: '2026-07-29', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-10', name: 'Juego 10 - Preliminar Masculino', date: '2026-07-29', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-11', name: 'Juego 11 - Preliminar Masculino', date: '2026-07-29', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-12', name: 'Juego 12 - Preliminar Masculino', date: '2026-07-30', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-13', name: 'Juego 13 - Clasificación 5°-8° Masculino', date: '2026-07-31', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-14', name: 'Juego 14 - Clasificación 5°-8° Masculino', date: '2026-07-31', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-15', name: 'Juego 15 - Semifinal Masculino', date: '2026-07-31', time: '18:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-16', name: 'Juego 16 - Semifinal Masculino', date: '2026-07-31', time: '20:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-17', name: 'Juego 17 - Definición 7°-8° Lugar Masculino', date: '2026-08-02', time: '12:30', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-18', name: 'Juego 18 - Definición 5°-6° Lugar Masculino', date: '2026-08-02', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-12-19', name: 'Juego 19 - Final Medalla de Bronce Masculino', date: '2026-08-02', time: '18:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-12-20', name: 'Juego 20 - Final Medalla de Oro Masculino', date: '2026-08-02', time: '20:30', durationMinutes: 120, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '13',
    name: 'Baloncesto 3x3',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-13-1', name: 'Juegos 1-8: Ronda de Grupos (Femenino y Masculino) - Sesión 1', date: '2026-07-31', time: '09:00', durationMinutes: 240, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-2', name: 'Juegos 9-16: Ronda de Grupos (Femenino y Masculino) - Sesión 2', date: '2026-07-31', time: '18:00', durationMinutes: 240, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-3', name: 'Juegos 17-26: Ronda de Grupos (Femenino y Masculino) - Sesión 1', date: '2026-08-01', time: '09:00', durationMinutes: 300, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-4', name: 'Juegos 27-36: Ronda de Grupos (Femenino y Masculino) - Sesión 2', date: '2026-08-01', time: '17:00', durationMinutes: 300, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-5', name: 'Juegos 37-44: Cuartos de Final (Femenino y Masculino)', date: '2026-08-02', time: '09:00', durationMinutes: 240, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-6', name: 'Juegos 45-48: Reclasificación 5°-8° Puesto', date: '2026-08-02', time: '15:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-7', name: 'Juegos 49-50: Clasificación 7° Puesto', date: '2026-08-02', time: '19:00', durationMinutes: 60, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-8', name: 'Juegos 51-54: Semifinales (Femenino y Masculino)', date: '2026-08-02', time: '20:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-9', name: 'Juegos 55-56: Clasificación 5° Puesto', date: '2026-08-03', time: '08:00', durationMinutes: 60, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-10', name: 'Prueba Individual de Tiro (Shoot-out) - Semis y Final', date: '2026-08-03', time: '09:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-13-11', name: 'Final Medalla de Bronce Femenino', date: '2026-08-03', time: '11:00', durationMinutes: 30, type: 'medalla', gender: 'F' },
    { id: 'evt-13-12', name: 'Final Medalla de Bronce Masculino', date: '2026-08-03', time: '11:30', durationMinutes: 30, type: 'medalla', gender: 'M' },
    { id: 'evt-13-13', name: 'Final Medalla de Oro Femenino', date: '2026-08-03', time: '12:00', durationMinutes: 30, type: 'medalla', gender: 'F' },
    { id: 'evt-13-14', name: 'Final Medalla de Oro Masculino', date: '2026-08-03', time: '12:30', durationMinutes: 30, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '14',
    name: 'Balonmano Femenino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '15',
    name: 'Balonmano Masculino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '16',
    name: 'Béisbol',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '17',
    name: 'Boliche',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '18',
    name: 'Boxeo',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-18-1', name: 'Ronda Preliminar - Día 1', date: '2026-08-01', time: '14:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-18-2', name: 'Ronda Preliminar - Día 2', date: '2026-08-02', time: '14:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-18-3', name: 'Ronda Preliminar - Día 3', date: '2026-08-03', time: '14:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-18-4', name: 'Cuartos de Final - Día 4', date: '2026-08-04', time: '14:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-18-5', name: 'Cuartos de Final - Día 5', date: '2026-08-05', time: '14:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-18-6', name: 'Semifinales (Medallas de Bronce) - Día 6', date: '2026-08-06', time: '14:00', durationMinutes: 180, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-18-7', name: 'Finales (Medallas de Oro y Plata) - Día 7', date: '2026-08-07', time: '14:00', durationMinutes: 180, type: 'medalla', gender: 'Mixto' }
  ]
  },
  {
    id: '19',
    name: 'Canotaje Velocidad',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '20',
    name: 'Ciclismo BMX Racing',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '21',
    name: 'Ciclismo MTB',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '22',
    name: 'Ciclismo Pista',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '23',
    name: 'Ciclismo Ruta',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '24',
    name: 'Ecuestre Adiestramiento',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '25',
    name: 'Ecuestre Eventos',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '26',
    name: 'Ecuestre Salto',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '27',
    name: 'Esgrima',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '28',
    name: 'E-Sports',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '29',
    name: 'Esquí Náutico',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '30',
    name: 'Fútbol Femenino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '31',
    name: 'Fútbol Masculino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '32',
    name: 'Gimnasia Artística',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '33',
    name: 'Gimnasia Rítmica',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '34',
    name: 'Gimnasia Trampolín',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '35',
    name: 'Golf',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '36',
    name: 'Halterofilia',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '37',
    name: 'Hockey Femenino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '38',
    name: 'Hockey Masculino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '39',
    name: 'Judo',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-39-1', name: 'Preliminares - Femenino -48 kg, -52 kg, -57 kg; Masculino -60 kg, -66 kg', date: '2026-07-25', time: '10:30', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-39-2', name: 'Disputa de Bronces y Finales - Femenino -48 kg, -52 kg, -57 kg; Masculino -60 kg, -66 kg', date: '2026-07-25', time: '15:00', durationMinutes: 150, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-39-3', name: 'Preliminares - Femenino -63 kg, -70 kg; Masculino -73 kg, -81 kg', date: '2026-07-26', time: '10:30', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-39-4', name: 'Disputa de Bronces y Finales - Femenino -63 kg, -70 kg; Masculino -73 kg, -81 kg', date: '2026-07-26', time: '15:00', durationMinutes: 150, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-39-5', name: 'Preliminares - Femenino -78 kg, +78 kg; Masculino -90 kg, -100 kg, +100 kg', date: '2026-07-27', time: '10:30', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-39-6', name: 'Disputa de Bronces y Finales - Femenino -78 kg, +78 kg; Masculino -90 kg, -100 kg, +100 kg', date: '2026-07-27', time: '15:00', durationMinutes: 150, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-39-7', name: 'Preliminares - Equipos Mixtos', date: '2026-07-28', time: '10:30', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-39-8', name: 'Disputa de Bronces y Finales - Equipos Mixtos', date: '2026-07-28', time: '15:00', durationMinutes: 150, type: 'medalla', gender: 'Mixto' }
  ]
  },
  {
    id: '40',
    name: 'Karate',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-40-1', name: 'Kata Individual Femenino - Round Robin', date: '2026-08-05', time: '10:00', durationMinutes: 40, type: 'competencia', gender: 'F' },
    { id: 'evt-40-2', name: 'Kata Individual Masculino - Round Robin', date: '2026-08-05', time: '10:45', durationMinutes: 40, type: 'competencia', gender: 'M' },
    { id: 'evt-40-3', name: 'Kumite -60 kg Masculino - Round Robin', date: '2026-08-05', time: '11:30', durationMinutes: 30, type: 'competencia', gender: 'M' },
    { id: 'evt-40-4', name: 'Kumite +84 kg Masculino - Round Robin', date: '2026-08-05', time: '14:00', durationMinutes: 75, type: 'competencia', gender: 'M' },
    { id: 'evt-40-5', name: 'Kumite -50 kg Femenino - Round Robin', date: '2026-08-05', time: '15:20', durationMinutes: 15, type: 'competencia', gender: 'F' },
    { id: 'evt-40-6', name: 'Kata Individual Femenino y Masculino - Finales', date: '2026-08-05', time: '15:20', durationMinutes: 15, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-40-7', name: 'Kumite -60 kg M, +84 kg M, -50 kg F - Finales', date: '2026-08-05', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-40-8', name: 'Kata Equipos Femenino - Round Robin', date: '2026-08-06', time: '09:00', durationMinutes: 45, type: 'competencia', gender: 'F' },
    { id: 'evt-40-9', name: 'Kata Equipos Masculino - Round Robin', date: '2026-08-06', time: '09:50', durationMinutes: 45, type: 'competencia', gender: 'M' },
    { id: 'evt-40-10', name: 'Kumite -55 kg Femenino - Round Robin', date: '2026-08-06', time: '10:40', durationMinutes: 45, type: 'competencia', gender: 'F' },
    { id: 'evt-40-11', name: 'Kumite -84 kg Masculino - Round Robin', date: '2026-08-06', time: '11:30', durationMinutes: 45, type: 'competencia', gender: 'M' },
    { id: 'evt-40-12', name: 'Kumite -68 kg Femenino - Round Robin', date: '2026-08-06', time: '14:00', durationMinutes: 45, type: 'competencia', gender: 'F' },
    { id: 'evt-40-13', name: 'Kata Equipos Femenino y Masculino - Finales', date: '2026-08-06', time: '15:00', durationMinutes: 75, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-40-14', name: 'Kumite -55 kg F, -84 kg M, -68 kg F - Finales', date: '2026-08-06', time: '16:30', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-40-15', name: 'Kumite -67 kg Masculino - Round Robin', date: '2026-08-07', time: '09:00', durationMinutes: 45, type: 'competencia', gender: 'M' },
    { id: 'evt-40-16', name: 'Kumite -61 kg Femenino - Round Robin', date: '2026-08-07', time: '09:50', durationMinutes: 45, type: 'competencia', gender: 'F' },
    { id: 'evt-40-17', name: 'Kumite -75 kg Masculino - Round Robin', date: '2026-08-07', time: '10:40', durationMinutes: 45, type: 'competencia', gender: 'M' },
    { id: 'evt-40-18', name: 'Kumite +68 kg Femenino - Round Robin', date: '2026-08-07', time: '11:30', durationMinutes: 45, type: 'competencia', gender: 'F' },
    { id: 'evt-40-19', name: 'Kumite -67 kg M, -61 kg F, -75 kg M, +68 kg F - Finales', date: '2026-08-07', time: '14:00', durationMinutes: 210, type: 'medalla', gender: 'Mixto' }
  ]
  },
  {
    id: '41',
    name: 'Luchas',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '42',
    name: 'Netball',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '43',
    name: 'Patinaje Artístico Libre',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '44',
    name: 'Patinaje Artístico Danza',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '45',
    name: 'Patinaje Velocidad Pista',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '46',
    name: 'Patinaje Velocidad Ruta',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '47',
    name: 'Skateboarding Street',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '48',
    name: 'Pentatlón Moderno',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-08',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '49',
    name: 'Racquetbol',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '50',
    name: 'Remo',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '51',
    name: 'Rugby 7',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '52',
    name: 'Softbol Femenino',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-52-1', name: 'Partido 1 - Preliminar Grupo A', date: '2026-07-26', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-2', name: 'Partido 2 - Preliminar Grupo B', date: '2026-07-26', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-3', name: 'Partido 3 - Preliminar Grupo B', date: '2026-07-26', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-4', name: 'Partido 4 - Preliminar Grupo A', date: '2026-07-26', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-5', name: 'Partido 5 - Preliminar Grupo A', date: '2026-07-27', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-6', name: 'Partido 6 - Preliminar Grupo B', date: '2026-07-27', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-7', name: 'Partido 7 - Preliminar Grupo B', date: '2026-07-27', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-8', name: 'Partido 8 - Preliminar Grupo A', date: '2026-07-27', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-9', name: 'Partido 9 - Preliminar Grupo A', date: '2026-07-28', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-10', name: 'Partido 10 - Preliminar Grupo B', date: '2026-07-28', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-11', name: 'Partido 11 - Preliminar Grupo B', date: '2026-07-28', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-12', name: 'Partido 12 - Preliminar Grupo A', date: '2026-07-28', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-13', name: 'Super Ronda - Partido SR1 (AB4 vs AB4)', date: '2026-07-29', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-14', name: 'Super Ronda - Partido SR2 (AB3 vs AB3)', date: '2026-07-29', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-15', name: 'Super Ronda - Partido SR3 (AB2 vs AB2)', date: '2026-07-29', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-16', name: 'Super Ronda - Partido SR4 (AB1 vs AB1)', date: '2026-07-29', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-17', name: 'Super Ronda - Partido SR5 (B4 vs A3)', date: '2026-07-30', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-18', name: 'Super Ronda - Partido SR6 (A4 vs B3)', date: '2026-07-30', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-19', name: 'Super Ronda - Partido SR7 (B2 vs A1)', date: '2026-07-30', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-20', name: 'Super Ronda - Partido SR8 (A2 vs B1)', date: '2026-07-30', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-21', name: 'Ronda Final - Partido por el 7° Lugar (RF1)', date: '2026-07-31', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-22', name: 'Ronda Final - Partido por el 5° Lugar (RF2)', date: '2026-07-31', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'F' },
    { id: 'evt-52-23', name: 'Ronda Final - Partido por Medalla de Bronce (RF3)', date: '2026-07-31', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'F' },
    { id: 'evt-52-24', name: 'Ronda Final - Partido por Medalla de Oro (RF4)', date: '2026-07-31', time: '19:00', durationMinutes: 120, type: 'medalla', gender: 'F' }
  ]
  },
  {
    id: '53',
    name: 'Softbol Masculino',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-53-1', name: 'Partido 1 - Preliminar Grupo A', date: '2026-08-03', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-2', name: 'Partido 2 - Preliminar Grupo B', date: '2026-08-03', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-3', name: 'Partido 3 - Preliminar Grupo B', date: '2026-08-03', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-4', name: 'Partido 4 - Preliminar Grupo A', date: '2026-08-03', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-5', name: 'Partido 5 - Preliminar Grupo A', date: '2026-08-04', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-6', name: 'Partido 6 - Preliminar Grupo B', date: '2026-08-04', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-7', name: 'Partido 7 - Preliminar Grupo B', date: '2026-08-04', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-8', name: 'Partido 8 - Preliminar Grupo A', date: '2026-08-04', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-9', name: 'Partido 9 - Preliminar Grupo A', date: '2026-08-05', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-10', name: 'Partido 10 - Preliminar Grupo B', date: '2026-08-05', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-11', name: 'Partido 11 - Preliminar Grupo B', date: '2026-08-05', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-12', name: 'Partido 12 - Preliminar Grupo A', date: '2026-08-05', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-13', name: 'Super Ronda - Partido SR1 (AB4 vs AB4)', date: '2026-08-06', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-14', name: 'Super Ronda - Partido SR2 (AB3 vs AB3)', date: '2026-08-06', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-15', name: 'Super Ronda - Partido SR3 (AB2 vs AB2)', date: '2026-08-06', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-16', name: 'Super Ronda - Partido SR4 (AB1 vs AB1)', date: '2026-08-06', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-17', name: 'Super Ronda - Partido SR5 (B4 vs A3)', date: '2026-08-07', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-18', name: 'Super Ronda - Partido SR6 (A4 vs B3)', date: '2026-08-07', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-19', name: 'Super Ronda - Partido SR7 (B2 vs A1)', date: '2026-08-07', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-20', name: 'Super Ronda - Partido SR8 (A2 vs B1)', date: '2026-08-07', time: '19:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-21', name: 'Ronda Final - Partido por el 7° Lugar (RF1)', date: '2026-08-08', time: '10:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-22', name: 'Ronda Final - Partido por el 5° Lugar (RF2)', date: '2026-08-08', time: '13:00', durationMinutes: 120, type: 'competencia', gender: 'M' },
    { id: 'evt-53-23', name: 'Ronda Final - Partido por Medalla de Bronce (RF3)', date: '2026-08-08', time: '16:00', durationMinutes: 120, type: 'medalla', gender: 'M' },
    { id: 'evt-53-24', name: 'Ronda Final - Partido por Medalla de Oro (RF4)', date: '2026-08-08', time: '19:00', durationMinutes: 120, type: 'medalla', gender: 'M' }
  ]
  },
  {
    id: '54',
    name: 'Squash',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '55',
    name: 'Surf',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '56',
    name: 'Taekwondo',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '57',
    name: 'Tenis',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-31',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '58',
    name: 'Tenis de Mesa',
    prAthletes: ["Adriana D\u00edaz"],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-58-1', name: 'Equipos Femenino - Grupos Ronda 1', date: '2026-08-01', time: '10:00', durationMinutes: 150, type: 'competencia', gender: 'F' },
    { id: 'evt-58-2', name: 'Equipos Masculino - Grupos Ronda 1', date: '2026-08-01', time: '12:30', durationMinutes: 150, type: 'competencia', gender: 'M' },
    { id: 'evt-58-3', name: 'Equipos Femenino - Grupos Ronda 2', date: '2026-08-01', time: '15:00', durationMinutes: 150, type: 'competencia', gender: 'F' },
    { id: 'evt-58-4', name: 'Equipos Masculino - Grupos Ronda 2', date: '2026-08-01', time: '17:30', durationMinutes: 150, type: 'competencia', gender: 'M' },
    { id: 'evt-58-5', name: 'Equipos Femenino - Grupos Ronda 3', date: '2026-08-02', time: '10:00', durationMinutes: 150, type: 'competencia', gender: 'F' },
    { id: 'evt-58-6', name: 'Equipos Masculino - Grupos Ronda 3', date: '2026-08-02', time: '12:30', durationMinutes: 150, type: 'competencia', gender: 'M' },
    { id: 'evt-58-7', name: 'Equipos Femenino - Cuartos de Final', date: '2026-08-02', time: '15:00', durationMinutes: 150, type: 'competencia', gender: 'F' },
    { id: 'evt-58-8', name: 'Equipos Masculino - Cuartos de Final', date: '2026-08-02', time: '17:30', durationMinutes: 150, type: 'competencia', gender: 'M' },
    { id: 'evt-58-9', name: 'Equipos Femenino y Masculino - Semifinales', date: '2026-08-03', time: '10:00', durationMinutes: 150, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-10', name: 'Equipos Femenino - Final', date: '2026-08-03', time: '14:00', durationMinutes: 150, type: 'medalla', gender: 'F' },
    { id: 'evt-58-11', name: 'Equipos Masculino - Final', date: '2026-08-03', time: '16:30', durationMinutes: 150, type: 'medalla', gender: 'M' },
    { id: 'evt-58-12', name: 'Individual Femenino - Ronda 64', date: '2026-08-04', time: '10:00', durationMinutes: 225, type: 'competencia', gender: 'F' },
    { id: 'evt-58-13', name: 'Individual Masculino - Ronda 64', date: '2026-08-04', time: '13:45', durationMinutes: 225, type: 'competencia', gender: 'M' },
    { id: 'evt-58-14', name: 'Individual Femenino - Ronda 32', date: '2026-08-04', time: '17:30', durationMinutes: 180, type: 'competencia', gender: 'F' },
    { id: 'evt-58-15', name: 'Individual Masculino - Ronda 32', date: '2026-08-05', time: '10:00', durationMinutes: 180, type: 'competencia', gender: 'M' },
    { id: 'evt-58-16', name: 'Dobles Mixtos - Ronda 32', date: '2026-08-05', time: '14:30', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-17', name: 'Dobles Mixtos - R16, QF y Semifinales', date: '2026-08-05', time: '16:45', durationMinutes: 150, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-18', name: 'Dobles Femenino y Masculino - R16, QF y Semifinales', date: '2026-08-06', time: '10:00', durationMinutes: 180, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-19', name: 'Individual Femenino - Ronda 16', date: '2026-08-06', time: '13:15', durationMinutes: 90, type: 'competencia', gender: 'F' },
    { id: 'evt-58-20', name: 'Individual Masculino - Ronda 16', date: '2026-08-06', time: '14:45', durationMinutes: 90, type: 'competencia', gender: 'M' },
    { id: 'evt-58-21', name: 'Individual Femenino y Masculino - Cuartos de Final', date: '2026-08-06', time: '16:15', durationMinutes: 90, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-22', name: 'Individual Femenino y Masculino - Semifinales', date: '2026-08-07', time: '10:00', durationMinutes: 90, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-58-23', name: 'Dobles Mixtos, Dobles, e Individual F/M - Finales', date: '2026-08-07', time: '15:00', durationMinutes: 195, type: 'medalla', gender: 'Mixto' }
  ]
  },
  {
    id: '59',
    name: 'Tiro',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '60',
    name: 'Tiro Escopeta',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '61',
    name: 'Tiro con Arco',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-24',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '62',
    name: 'Triatlón',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '63',
    name: 'Vela',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-01',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '64',
    name: 'Voleibol Sala Femenino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-08-02',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-03',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-04',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-05',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-06',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-08-07',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '65',
    name: 'Voleibol Sala Masculino',
    prAthletes: [],
    hasIndividualEvents: false,
    events: [{ date:  '2026-07-25',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-26',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-27',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-28',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-29',  time:  '14:00',  durationMinutes:  120,  type:  'competencia' },  { date:  '2026-07-30',  time:  '14:00',  durationMinutes:  120,  type:  'medalla' }]
  },
  {
    id: '66',
    name: 'Voleibol Playa',
    prAthletes: [],
    hasIndividualEvents: true,
    events: [
    { id: 'evt-66-1', name: 'Ronda de Grupos (Juegos 1-6) - Sesión Mañana', date: '2026-07-25', time: '08:00', durationMinutes: 300, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-2', name: 'Ronda de Grupos (Juegos 7-12) - Sesión Tarde', date: '2026-07-25', time: '14:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-3', name: 'Ronda de Grupos (Juegos 13-18) - Sesión Mañana', date: '2026-07-26', time: '08:00', durationMinutes: 300, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-4', name: 'Ronda de Grupos (Juegos 19-24) - Sesión Tarde', date: '2026-07-26', time: '14:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-5', name: 'Ronda de Grupos (Juegos 25-30) - Sesión Mañana', date: '2026-07-27', time: '08:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-6', name: 'Ronda de Grupos (Juegos 31-36) - Sesión Tarde', date: '2026-07-27', time: '14:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-7', name: 'Ronda de Grupos (Juegos 37-42) - Sesión Mañana', date: '2026-07-28', time: '08:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-8', name: 'Ronda de Grupos (Juegos 43-48) - Sesión Tarde', date: '2026-07-28', time: '14:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-9', name: 'Ronda de Grupos (Juegos 49-54) - Sesión Mañana', date: '2026-07-29', time: '08:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-10', name: 'Ronda de Grupos (Juegos 55-60) - Sesión Tarde', date: '2026-07-29', time: '14:00', durationMinutes: 360, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-11', name: 'Ronda de Clasificación 9°-12° Puesto', date: '2026-07-30', time: '08:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-12', name: 'Cuartos de Final (Juegos 63-66)', date: '2026-07-30', time: '10:00', durationMinutes: 240, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-13', name: 'Definición 9°-11° Puesto', date: '2026-07-30', time: '14:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-14', name: 'Reclasificación del 5°-8° Puesto', date: '2026-07-30', time: '16:00', durationMinutes: 120, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-15', name: 'Semifinales y Definición del 5° y 7° Lugar', date: '2026-07-31', time: '08:00', durationMinutes: 240, type: 'competencia', gender: 'Mixto' },
    { id: 'evt-66-16', name: 'Finales por Medalla de Bronce (Femenino y Masculino)', date: '2026-07-31', time: '15:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' },
    { id: 'evt-66-17', name: 'Finales por Medalla de Oro (Femenino y Masculino)', date: '2026-07-31', time: '17:00', durationMinutes: 120, type: 'medalla', gender: 'Mixto' }
  ]
  }
];
