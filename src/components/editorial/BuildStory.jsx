import { useEffect, useRef, useState } from 'react';

const stages = [
  { label:'Design', title:'Resolve the home before the first pour.', text:'Design, engineering and site layout establish the footprint, openings and roof geometry that carry through the build.' },
  { label:'Foundation', title:'Begin with the support below.', text:'Site preparation, footings, reinforcement and the foundation establish the base. Inspections and anchor placement come before the structure above.' },
  { label:'Framing', title:'Give every opening a place in the structure.', text:'Wall studs, headers and top plates support the roof framing. Window and door openings follow the coordinated plan, with loads carried down to the foundation.' },
  { label:'Dry-in', title:'Protect the structure from the weather.', text:'Wall and roof sheathing, weather barriers, flashing, windows and exterior doors bring the shell together before sensitive interior work.' },
  { label:'Rough-ins', title:'Put the hidden systems in place.', text:'Plumbing, electrical and HVAC rough-ins are coordinated and inspected before insulation and wall finishes close them in.' },
  { label:'Completion', title:'Bring the same home into everyday life.', text:'Cladding, roofing, interior finishes and site work complete the home, followed by final inspections, a punch list and handover.' },
];

export default function BuildStory() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef(null);
  const manuallySelected = useRef(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => { setReduced(query.matches); if(query.matches)setPlaying(false); };
    update(); query.addEventListener('change',update);
    if(!('IntersectionObserver' in window))return()=>query.removeEventListener('change',update);
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting&&!query.matches&&!manuallySelected.current){setPlaying(true);observer.disconnect();}
    },{threshold:0.4});
    observer.observe(root.current);
    return()=>{observer.disconnect();query.removeEventListener('change',update);};
  },[]);
  useEffect(()=>{
    if(!playing)return;
    const timer=setTimeout(()=>{if(stage===stages.length-1)setPlaying(false);else setStage(stage+1);},2800);
    return()=>clearTimeout(timer);
  },[playing,stage,reduced]);
  const select=index=>{manuallySelected.current=true;setPlaying(false);setStage(index);};
  return <section ref={root} className="hbb-build-sequence ed-section" data-section="building_story">
    <div className="hbb-sequence-heading"><div><span className="ed-eyebrow">Behind the finished home</span><h2>One home.<br />Every stage considered.</h2></div><p>Follow the work from a coordinated design to the details that make a home ready to live in.</p></div>
    <div className="hbb-sequence-layout"><div className="hbb-render-panel"><div className="hbb-render-window" aria-label={`${stages[stage].label}: illustrative construction visualization`} role="img">{stages.map((item,index)=><div key={item.label} className={`hbb-render-layer ${stage===index?'is-current':''}`} aria-hidden="true"><img src="/img/construction-sequence.png" alt="" loading="lazy" width="1536" height="1024" style={{left:`-${(index%3)*100}%`,top:`-${Math.floor(index/3)*100}%`}} /></div>)}</div><div className="hbb-render-caption"><span>Concept visualization · Same home, same view</span><button type="button" onClick={()=>{manuallySelected.current=true;if(stage===stages.length-1)setStage(0);setPlaying(!playing);}} aria-label={playing?'Pause construction sequence':'Play construction sequence'}>{playing?'Pause':'Play sequence'} {playing?'Ⅱ':'→'}</button></div></div>
      <div className="hbb-sequence-info"><div className="hbb-sequence-steps" role="group" aria-label="Explore construction stages">{stages.map((item,index)=><button key={item.label} type="button" aria-pressed={stage===index} onClick={()=>select(index)}><span>{String(index+1).padStart(2,'0')}</span>{item.label}<span className="hbb-sequence-dot" aria-hidden="true" /></button>)}</div><div className="hbb-stage-explanation" aria-live={playing?'off':'polite'}><span className="ed-eyebrow">{String(stage+1).padStart(2,'0')} / {stages[stage].label}</span><h3>{stages[stage].title}</h3><p>{stages[stage].text}</p></div><p className="hbb-sequence-note">Each project is different. Stages may overlap to suit the design, site and inspection requirements.</p></div>
    </div>
  </section>;
}
