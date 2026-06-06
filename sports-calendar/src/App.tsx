import { useState, useMemo } from 'react';
import { sports, type Sport, type SportEvent } from './data';
import { 
  Calendar, 
  AlertTriangle, 
  Medal, 
  CheckCircle2, 
  Star, 
  Trophy, 
  Download, 
  Printer,
  ChevronDown,
  ChevronUp,
  Search,
  Check,
  X,
  SlidersHorizontal,
  MinusSquare,
  Square
} from 'lucide-react';
import './App.css';

function App() {
  // State for selections
  const [selectedSportIds, setSelectedSportIds] = useState<string[]>([]);
  const [selectedEventIds, setSelectedEventIds] = useState<string[]>([]);
  
  // Accordion open/close state
  const [expandedSportIds, setExpandedSportIds] = useState<string[]>([]);
  
  // Search text
  const [searchTerm, setSearchTerm] = useState('');
  
  // Card-specific filters: Record<sportId, { gender: string, medalOnly: boolean }>
  const [sportFilters, setSportFilters] = useState<Record<string, { gender: string; medalOnly: boolean }>>({});


  // Helper: check selection status of a sport
  const getSportSelectionStatus = (sport: Sport): 'all' | 'partial' | 'none' => {
    if (!sport.hasIndividualEvents) {
      return selectedSportIds.includes(sport.id) ? 'all' : 'none';
    }
    const eventIds = sport.events.map(e => e.id || '');
    const selectedCount = eventIds.filter(eId => selectedEventIds.includes(eId)).length;
    if (selectedCount === 0) return 'none';
    if (selectedCount === eventIds.length) return 'all';
    return 'partial';
  };

  // Toggle selection for a sport card (mass selection/deselection)
  const toggleSport = (sport: Sport) => {
    const id = sport.id;
    if (sport.hasIndividualEvents) {
      const eventIds = sport.events.map(e => e.id || '');
      const allSelected = eventIds.every(eId => selectedEventIds.includes(eId));
      if (allSelected) {
        // Deselect all events of this sport
        setSelectedEventIds(prev => prev.filter(eId => !eventIds.includes(eId)));
      } else {
        // Select all events of this sport
        setSelectedEventIds(prev => [...new Set([...prev, ...eventIds])]);
      }
    } else {
      // Toggle simple sport
      setSelectedSportIds(prev => 
        prev.includes(id) ? prev.filter(sId => sId !== id) : [...prev, id]
      );
    }
  };

  // Toggle individual event selection
  const toggleEvent = (eventId: string) => {
    setSelectedEventIds(prev => 
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  // Toggle accordion expansion
  const toggleExpand = (sportId: string) => {
    setExpandedSportIds(prev =>
      prev.includes(sportId) ? prev.filter(id => id !== sportId) : [...prev, sportId]
    );
  };

  // Set filters for a specific sport card
  const setFilterValue = (sportId: string, key: 'gender' | 'medalOnly', value: any) => {
    setSportFilters(prev => {
      const current = prev[sportId] || { gender: 'ALL', medalOnly: false };
      return {
        ...prev,
        [sportId]: {
          ...current,
          [key]: value
        }
      };
    });
  };

  // Bulk actions for filtered events in a sport
  const bulkActionFiltered = (sport: Sport, action: 'select' | 'deselect') => {
    const filter = sportFilters[sport.id] || { gender: 'ALL', medalOnly: false };
    const filteredEventIds = sport.events
      .filter(e => {
        if (filter.gender !== 'ALL' && e.gender !== filter.gender) return false;
        if (filter.medalOnly && e.type !== 'medalla') return false;
        return true;
      })
      .map(e => e.id || '');

    if (action === 'select') {
      setSelectedEventIds(prev => [...new Set([...prev, ...filteredEventIds])]);
    } else {
      setSelectedEventIds(prev => prev.filter(id => !filteredEventIds.includes(id)));
    }
  };

  // Search logic
  const filteredSports = useMemo(() => {
    if (!searchTerm) return sports;
    const term = searchTerm.toLowerCase();
    return sports.filter(sport => {
      if (sport.name.toLowerCase().includes(term)) return true;
      if (sport.prAthletes.some(a => a.toLowerCase().includes(term))) return true;
      if (sport.hasIndividualEvents) {
        return sport.events.some(e => e.name && e.name.toLowerCase().includes(term));
      }
      return false;
    });
  }, [searchTerm]);

  // Auto-expand sports matching search term in their events
  const autoExpandedSportIds = useMemo(() => {
    if (!searchTerm) return [];
    const term = searchTerm.toLowerCase();
    return sports
      .filter(sport => sport.hasIndividualEvents && sport.events.some(e => e.name && e.name.toLowerCase().includes(term)))
      .map(sport => sport.id);
  }, [searchTerm]);

  // Get active list of selected sports (containing at least one selected event)
  const selectedSports = useMemo(() => {
    return sports.filter(s => {
      if (s.hasIndividualEvents) {
        return s.events.some(e => selectedEventIds.includes(e.id || ''));
      }
      return selectedSportIds.includes(s.id);
    });
  }, [selectedSportIds, selectedEventIds]);

  // Expand all selected events into a single sorted timeline
  const timelineEvents = useMemo(() => {
    const list: { sport: Sport; event: SportEvent }[] = [];
    sports.forEach(sport => {
      sport.events.forEach(event => {
        if (sport.hasIndividualEvents) {
          if (selectedEventIds.includes(event.id || '')) {
            list.push({ sport, event });
          }
        } else {
          if (selectedSportIds.includes(sport.id)) {
            list.push({ sport, event });
          }
        }
      });
    });
    // Sort by date, then time
    return list.sort((a, b) => {
      if (a.event.date !== b.event.date) return a.event.date.localeCompare(b.event.date);
      return a.event.time.localeCompare(b.event.time);
    });
  }, [selectedSportIds, selectedEventIds]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, { sport: Sport; event: SportEvent }[]> = {};
    timelineEvents.forEach(item => {
      if (!grouped[item.event.date]) grouped[item.event.date] = [];
      grouped[item.event.date].push(item);
    });
    return grouped;
  }, [timelineEvents]);

  // Identify conflicts (multiple different sports on same day)
  const conflicts = useMemo(() => {
    const foundConflicts: { date: string; sports: string[] }[] = [];
    Object.entries(eventsByDate).forEach(([date, items]) => {
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

  // Clear all selections
  const clearAllSelections = () => {
    setSelectedSportIds([]);
    setSelectedEventIds([]);
  };

  // Generate and download an iCalendar (.ics) file
  const exportToICS = () => {
    if (timelineEvents.length === 0) return;

    const now = new Date();
    const dtstamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const icsEvents: string[] = [];

    timelineEvents.forEach(({ sport, event }) => {
      const dateFormatted = event.date.replace(/-/g, '');
      const timeFormatted = event.time.replace(/:/g, '');
      
      const [year, month, day] = event.date.split('-').map(Number);
      const [hour, min] = event.time.split(':').map(Number);
      const startDt = new Date(year, month - 1, day, hour, min);
      const endDt = new Date(startDt.getTime() + event.durationMinutes * 60 * 1000);

      const formatICSDate = (d: Date) => {
        const pad = (n: number) => n.toString().padStart(2, '0');
        return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
      };

      const dtstart = formatICSDate(startDt);
      const dtend = formatICSDate(endDt);

      const prefix = event.type === 'medalla' ? '🏆' : '🏃';
      const typeLabel = event.type === 'medalla' ? 'Día de Medallas' : 'Competencia';
      const eventName = event.name || `${sport.name} - ${typeLabel}`;
      const summary = `${prefix} ${sport.name}: ${eventName}`;

      const descriptionLines = [
        `Deporte: ${sport.name}`,
        `Evento: ${eventName}`,
        `Tipo de Evento: ${typeLabel}`,
        `Duración estimada: ${event.durationMinutes} minutos`
      ];
      if (sport.prAthletes.length > 0) {
        descriptionLines.push(`Atletas de Puerto Rico: ${sport.prAthletes.join(', ')}`);
      }
      const description = descriptionLines.join('\\n');

      const uid = `jcc2026-sport-${sport.id}-${event.id || 'gen'}-${dateFormatted}T${timeFormatted}00@jcc2026.com`;

      const vevent = [
        'BEGIN:VEVENT',
        `UID:${uid}`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART:${dtstart}`,
        `DTEND:${dtend}`,
        `SUMMARY:${summary}`,
        `DESCRIPTION:${description}`,
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'END:VEVENT'
      ].join('\r\n');

      icsEvents.push(vevent);
    });

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Antigravity//JCC2026 Sports Calendar//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:JCC 2026 - ${selectedSports.length} Deportes`,
      icsEvents.join('\r\n'),
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `calendario_jcc2026_seleccionados.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-glow"></div>
        <h1>Mi Calendario Deportivo</h1>
        <p>Selecciona los deportes y eventos específicos que deseas ver para organizar tu itinerario y evitar conflictos.</p>
      </header>

      <main className="main-content">
        <section className="selection-section">
          <div className="selection-header">
            <h2 className="section-title">
              <Medal className="icon" /> Deportes Disponibles
            </h2>
            
            {/* Search and Reset bar */}
            <div className="search-bar-container">
              <div className="search-input-wrapper">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Buscar deporte, atleta o evento..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                    <X size={16} />
                  </button>
                )}
              </div>
              
              {(selectedSportIds.length > 0 || selectedEventIds.length > 0) && (
                <button onClick={clearAllSelections} className="btn-clear-all" title="Limpiar todas las selecciones">
                  Limpiar Selecciones
                </button>
              )}
            </div>
          </div>

          <div className="sports-grid">
            {filteredSports.map(sport => {
              const selectionStatus = getSportSelectionStatus(sport);
              const isExpanded = expandedSportIds.includes(sport.id) || autoExpandedSportIds.includes(sport.id);
              const totalEvents = sport.events.length;
              const medalEvents = sport.events.filter(e => e.type === 'medalla').length;
              
              // Get unique dates to display
              const uniqueDates = Array.from(new Set(sport.events.map(e => e.date)));
              const totalDays = uniqueDates.length;
              const datesList = uniqueDates.map(d => {
                const [year, month, day] = d.split('-');
                return `${month}/${day}/${year.slice(2)}`;
              }).join(', ');

              // Filtered events inside the card
              const filter = sportFilters[sport.id] || { gender: 'ALL', medalOnly: false };
              const filteredEvents = sport.events.filter(e => {
                if (filter.gender !== 'ALL' && e.gender !== filter.gender) return false;
                if (filter.medalOnly && e.type !== 'medalla') return false;
                return true;
              });

              const selectedCount = sport.hasIndividualEvents
                ? sport.events.filter(e => selectedEventIds.includes(e.id || '')).length
                : (selectedSportIds.includes(sport.id) ? totalEvents : 0);

              return (
                <div 
                  key={sport.id} 
                  className={`sport-card ${selectionStatus !== 'none' ? 'selected' : ''} ${sport.hasIndividualEvents ? 'has-events' : ''} ${isExpanded ? 'expanded' : ''}`}
                >
                  <div className="sport-card-main-content" onClick={() => sport.hasIndividualEvents ? toggleExpand(sport.id) : toggleSport(sport)}>
                    <div className="sport-card-header">
                      <span className="sport-name">{sport.name}</span>
                      
                      {/* Selection indicators */}
                      <div className="selection-action" onClick={(e) => {
                        e.stopPropagation();
                        toggleSport(sport);
                      }}>
                        {selectionStatus === 'all' && (
                          <div className="checkbox-indicator checked" title="Deseleccionar todo">
                            <CheckCircle2 size={22} color="var(--secondary)" />
                          </div>
                        )}
                        {selectionStatus === 'partial' && (
                          <div className="checkbox-indicator partial" title="Deseleccionar todo / Seleccionar todo">
                            <MinusSquare size={22} color="var(--secondary)" />
                          </div>
                        )}
                        {selectionStatus === 'none' && (
                          <div className="checkbox-indicator unchecked" title="Seleccionar todo">
                            <Square size={22} color="var(--border)" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="sport-meta">
                      <Calendar size={14} /> Se juega en {totalDays} {totalDays === 1 ? 'día' : 'días'}
                    </div>
                    <div className="sport-meta" style={{ alignItems: 'flex-start' }}>
                      <Calendar size={14} style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span className="dates-text">{datesList}</span>
                    </div>
                    
                    {medalEvents > 0 && (
                      <div className="sport-meta medal-meta">
                        <Trophy size={14} /> {medalEvents} {medalEvents === 1 ? 'evento' : 'eventos'} de medallas
                      </div>
                    )}

                    {sport.prAthletes.length > 0 && (
                      <div className="pr-badge">
                        <Star className="pr-star" size={12} fill="currentColor" />
                        PR: {sport.prAthletes.join(', ')}
                      </div>
                    )}

                    {/* Expand/Collapse Chevron for Individual Sports */}
                    {sport.hasIndividualEvents && (
                      <button 
                        className="expand-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(sport.id);
                        }}
                      >
                        <span className="selected-count">
                          {selectedCount} de {totalEvents} eventos
                        </span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    )}
                  </div>

                  {/* Expanded events drawer */}
                  {sport.hasIndividualEvents && isExpanded && (
                    <div className="events-drawer">
                      <div className="drawer-filters">
                        <div className="filter-group">
                          <SlidersHorizontal size={14} className="filter-icon" />
                          <button 
                            className={`filter-btn ${filter.gender === 'ALL' ? 'active' : ''}`}
                            onClick={() => setFilterValue(sport.id, 'gender', 'ALL')}
                          >
                            Todos
                          </button>
                          <button 
                            className={`filter-btn ${filter.gender === 'M' ? 'active' : ''}`}
                            onClick={() => setFilterValue(sport.id, 'gender', 'M')}
                          >
                            M ♂️
                          </button>
                          <button 
                            className={`filter-btn ${filter.gender === 'F' ? 'active' : ''}`}
                            onClick={() => setFilterValue(sport.id, 'gender', 'F')}
                          >
                            F ♀️
                          </button>
                          <button 
                            className={`filter-btn ${filter.gender === 'Mixto' ? 'active' : ''}`}
                            onClick={() => setFilterValue(sport.id, 'gender', 'Mixto')}
                          >
                            Mix 👥
                          </button>
                        </div>

                        <button 
                          className={`filter-btn medal-filter ${filter.medalOnly ? 'active' : ''}`}
                          onClick={() => setFilterValue(sport.id, 'medalOnly', !filter.medalOnly)}
                        >
                          🏆 Solo Medallas
                        </button>
                      </div>

                      <div className="bulk-drawer-actions">
                        <button onClick={() => bulkActionFiltered(sport, 'select')} className="btn-bulk btn-bulk-select">
                          Marcar Filtrados
                        </button>
                        <button onClick={() => bulkActionFiltered(sport, 'deselect')} className="btn-bulk btn-bulk-deselect">
                          Desmarcar Filtrados
                        </button>
                      </div>

                      <div className="events-list">
                        {filteredEvents.length === 0 ? (
                          <div className="no-events-placeholder">Ningún evento coincide con los filtros.</div>
                        ) : (
                          filteredEvents.map(event => {
                            const isEvSelected = selectedEventIds.includes(event.id || '');
                            const [, month, day] = event.date.split('-');
                            return (
                              <div 
                                key={event.id} 
                                className={`event-row ${isEvSelected ? 'active' : ''} ${event.type === 'medalla' ? 'medal-row' : ''}`}
                                onClick={() => toggleEvent(event.id || '')}
                              >
                                <div className="event-row-checkbox">
                                  {isEvSelected ? (
                                    <Check className="check-icon" size={14} color="var(--secondary)" />
                                  ) : (
                                    <div className="empty-check"></div>
                                  )}
                                </div>
                                <div className="event-row-details">
                                  <div className="event-row-header">
                                    <span className="event-row-name">{event.name}</span>
                                    <div className="badge-row">
                                      {event.gender && event.gender !== 'Mixto' && (
                                        <span className={`badge-gender ${event.gender.toLowerCase()}`}>
                                          {event.gender}
                                        </span>
                                      )}
                                      {event.gender === 'Mixto' && (
                                        <span className="badge-gender mixto">Mix</span>
                                      )}
                                      {event.type === 'medalla' && (
                                        <span className="badge-medal">🏆 Final</span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="event-row-time">
                                    <span>📅 {month}/{day}</span>
                                    <span style={{ marginLeft: '8px' }}>⏰ {event.time}</span>
                                    <span className="duration-text">({event.durationMinutes} min)</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="calendar-section">
          <div className="calendar-view">
            <div className="print-header">
              <h1>Mi Itinerario Deportivo - JCC 2026</h1>
              <p>Eventos seleccionados: {timelineEvents.length}</p>
            </div>

            <h2 className="section-title">
              <Calendar className="icon" /> Tu Itinerario
            </h2>

            <div className="calendar-actions">
              <div className="actions-header">
                <h3>Sincronizar Itinerario Personalizado</h3>
                <p>Descarga tus pruebas y eventos favoritos en formato iCalendar (.ics) o exporta tu itinerario sin conflictos a un archivo PDF.</p>
              </div>
              <div className="actions-buttons">
                <button 
                  onClick={exportToICS} 
                  disabled={timelineEvents.length === 0}
                  className="btn btn-primary"
                  title={timelineEvents.length === 0 ? "Selecciona eventos para exportar tu itinerario" : "Exportar eventos seleccionados"}
                >
                  <Download size={16} /> Exportar Selección ({timelineEvents.length})
                </button>
                <button
                  onClick={() => window.print()}
                  disabled={timelineEvents.length === 0}
                  className="btn btn-accent"
                  title={timelineEvents.length === 0 ? "Selecciona eventos para imprimir o guardar en PDF" : "Imprimir itinerario"}
                >
                  <Printer size={16} /> Guardar en PDF
                </button>
                <a 
                  href="/calendario_jcc2026_completo.ics" 
                  download="calendario_jcc2026_completo.ics"
                  className="btn btn-secondary"
                >
                  <Download size={16} /> Descargar Completo (66 Deportes)
                </a>
              </div>
            </div>

            {conflicts.length > 0 && (
              <div className="conflict-alert">
                <AlertTriangle className="conflict-icon" size={24} />
                <div className="conflict-content">
                  <h4>¡Atención! Posibles conflictos de fecha</h4>
                  {conflicts.map(c => (
                    <p key={c.date}>
                      El <strong>{formatDate(c.date)}</strong> coinciden: {c.sports.join(', ')}.
                    </p>
                  ))}
                </div>
              </div>
            )}

            {timelineEvents.length === 0 ? (
              <div className="empty-state">
                <Calendar className="empty-state-icon" />
                <h3>No has seleccionado ningún evento</h3>
                <p>Haz clic en los deportes o eventos a la izquierda para ver todas sus fechas y agregarlos a tu agenda.</p>
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
                            <span className="timeline-sport-name">{item.sport.name}:</span>{' '}
                            {item.event.name || (item.event.type === 'medalla' ? 'Día de Medallas' : 'Competencia')}
                            {item.event.type === 'medalla' && (
                              <span className="medal-badge">
                                <Trophy size={14} /> Medalla
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
