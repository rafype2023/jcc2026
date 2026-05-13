import { useState, useMemo } from 'react';
import { sports, type Sport, type SportEvent } from './data';
import { Calendar, AlertTriangle, Medal, CheckCircle2, Star, Trophy } from 'lucide-react';
import './App.css';

function App() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSport = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
    );
  };

  const selectedSports = useMemo(() => {
    return sports.filter(s => selectedIds.includes(s.id));
  }, [selectedIds]);

  // Expand all selected sports into individual timeline events
  const timelineEvents = useMemo(() => {
    const list: { sport: Sport; event: SportEvent }[] = [];
    selectedSports.forEach(sport => {
      sport.events.forEach(event => {
        list.push({ sport, event });
      });
    });
    // Sort by date, then time
    return list.sort((a, b) => {
      if (a.event.date !== b.event.date) return a.event.date.localeCompare(b.event.date);
      return a.event.time.localeCompare(b.event.time);
    });
  }, [selectedSports]);

  // Group events by date for timeline rendering and conflict detection
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, { sport: Sport; event: SportEvent }[]> = {};
    timelineEvents.forEach(item => {
      if (!grouped[item.event.date]) grouped[item.event.date] = [];
      grouped[item.event.date].push(item);
    });
    return grouped;
  }, [timelineEvents]);

  // Identify conflicts (more than 1 different sport on the same day)
  const conflicts = useMemo(() => {
    const foundConflicts: { date: string; sports: string[] }[] = [];
    Object.entries(eventsByDate).forEach(([date, items]) => {
      // Find unique sports on this date
      const uniqueSports = Array.from(new Set(items.map(item => item.sport.name)));
      if (uniqueSports.length > 1) {
        foundConflicts.push({ date, sports: uniqueSports });
      }
    });
    return foundConflicts;
  }, [eventsByDate]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(dateString + 'T12:00:00Z');
    return d.toLocaleDateString('es-PR', options);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-glow"></div>
        <h1>Mi Calendario Deportivo</h1>
        <p>Selecciona los deportes que deseas ver y organizaremos tu itinerario incluyendo los días de medalla.</p>
      </header>

      <main className="main-content">
        <section className="selection-section">
          <h2 className="section-title">
            <Medal className="icon" /> Deportes Disponibles
          </h2>
          <div className="sports-grid">
            {sports.map(sport => {
              const isSelected = selectedIds.includes(sport.id);
              const totalDays = sport.events.length;
              const medalDays = sport.events.filter(e => e.type === 'medalla').length;
              const datesList = sport.events.map(e => {
                const [year, month, day] = e.date.split('-');
                return `${month}/${day}/${year.slice(2)}`;
              }).join(', ');

              return (
                <div 
                  key={sport.id} 
                  className={`sport-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSport(sport.id)}
                >
                  <div className="sport-card-header">
                    <span className="sport-name">{sport.name}</span>
                    {isSelected && <CheckCircle2 className="icon" size={20} color="var(--secondary)" />}
                  </div>
                  
                  <div className="sport-meta">
                    <Calendar size={14} /> Se juega en {totalDays} {totalDays === 1 ? 'día' : 'días'}
                  </div>
                  <div className="sport-meta" style={{ alignItems: 'flex-start' }}>
                    <Calendar size={14} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{datesList}</span>
                  </div>
                  {medalDays > 0 && (
                    <div className="sport-meta" style={{ color: 'var(--warning)', fontWeight: 600, marginTop: '0.25rem' }}>
                      <Trophy size={14} /> {medalDays} {medalDays === 1 ? 'día' : 'días'} de medalla
                    </div>
                  )}

                  {sport.prAthletes.length > 0 && (
                    <div className="pr-badge">
                      <Star className="pr-star" size={12} fill="currentColor" />
                      PR: {sport.prAthletes.join(', ')}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="calendar-section">
          <div className="calendar-view">
            <h2 className="section-title">
              <Calendar className="icon" /> Tu Itinerario
            </h2>

            {conflicts.length > 0 && (
              <div className="conflict-alert">
                <AlertTriangle className="conflict-icon" size={24} />
                <div className="conflict-content">
                  <h4>¡Atención! Posibles conflictos de horario</h4>
                  {conflicts.map(c => (
                    <p key={c.date}>
                      El <strong>{formatDate(c.date)}</strong> coinciden: {c.sports.join(' y ')}.
                    </p>
                  ))}
                </div>
              </div>
            )}

            {selectedSports.length === 0 ? (
              <div className="empty-state">
                <Calendar className="empty-state-icon" />
                <h3>No has seleccionado ningún deporte</h3>
                <p>Haz clic en los deportes de la izquierda para ver todas sus fechas.</p>
              </div>
            ) : (
              <div className="timeline">
                {Object.entries(eventsByDate).map(([date, items]) => (
                  <div key={date} className="timeline-day">
                    <h3 className="timeline-date">{formatDate(date)}</h3>
                    {items.map((item, idx) => (
                      <div 
                        key={`${item.sport.id}-${idx}`} 
                        className={`timeline-event ${item.event.type === 'medalla' ? 'medal-event' : ''}`}
                      >
                        <div className="event-time">{item.event.time}</div>
                        <div className="event-details">
                          <div className="event-title">
                            {item.sport.name}
                            {item.event.type === 'medalla' && (
                              <span className="medal-badge">
                                <Trophy size={14} /> Día de Medallas
                              </span>
                            )}
                          </div>
                          {item.sport.prAthletes.length > 0 && (
                            <div className="pr-badge" style={{ marginTop: '0.25rem', marginBottom: '0.25rem' }}>
                              <Star size={12} fill="currentColor" />
                              Atleta boricua: {item.sport.prAthletes.join(', ')}
                            </div>
                          )}
                          <div className="sport-meta" style={{ fontSize: '0.8rem' }}>
                            Duración estimada: {item.event.durationMinutes} minutos
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
