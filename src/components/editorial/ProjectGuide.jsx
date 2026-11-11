import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import TourBookingModal from '../TourBookingModal';
import { guideTopics, guideQuestions, findGuideAnswers } from '../../data/projectGuide';
import { track } from '../../utils/analytics';

const welcome = 'Thinking about a home project? Choose a topic or ask a question below. I can help you explore HBB’s published process and find the right next step.';
export default function ProjectGuide({ standalone = false }) {
  const [topic, setTopic] = useState(null);
  const [browsing, setBrowsing] = useState(true);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const [handoff, setHandoff] = useState('');
  const inputRef = useRef(null);
  const logRef = useRef(null);
  const answerRef = useRef(null);
  const closeContact = useCallback(()=>setContactOpen(false),[]);
  const suggestions = topic ? guideQuestions.filter(question=>question.topic===topic) : ['quote','start','tour'].map(id=>guideQuestions.find(question=>question.id===id));
  const latest = messages[messages.length-1];
  const ask = (text, selected) => {
    const question = selected || findGuideAnswers(text,topic)[0];
    const message = question ? { text, id:question.id, answer:question.answer, source:question.source, follow:question.follow } : {text,answer:'I don’t have a confirmed answer for that in HBB’s project guide. Try one of the topics, or share your question directly with the team for a project-specific answer.',follow:['quote','prepare','start'],unanswered:true};
    setMessages(previous=>[...previous.slice(-19),message]);setInput('');setBrowsing(false);
    if(question)setTopic(question.topic);
    track('project_guide_answer',{question_id:question?.id||'unanswered'});
    requestAnimationFrame(()=>{if(logRef.current)logRef.current.scrollTop=logRef.current.scrollHeight;answerRef.current?.focus({preventScroll:true});});
  };
  const contact = () => {
    setHandoff(latest ? `I was exploring the HBB project guide. My question:\n${latest.text}` : 'I would like to discuss a home project with HBB.');
    setContactOpen(true);track('contact_form_open',{section:'project_guide'});
  };
  return <section id="ask-hbb" className={`hbb-guide ${standalone?'hbb-guide-standalone':'ed-section'}`} data-section="project_guide">
    {!standalone && <header className="hbb-guide-intro"><div><span className="ed-eyebrow">A little clarity, before you build</span><h2>Good projects start<br />with good questions.</h2></div><p>Start with a topic. Follow your curiosity.<br />Let’s make the next step a little clearer.</p></header>}
    <div className="hbb-guide-layout"><aside className="hbb-guide-topics"><span className="ed-eyebrow">What’s on your mind?</span><div role="group" aria-label="Question topics">{guideTopics.map(item=><button type="button" key={item.id} aria-pressed={topic===item.id} onClick={()=>{setTopic(item.id);setBrowsing(true);track('project_guide_topic',{topic:item.id});}}><span>{item.icon}</span><div><strong>{item.label}</strong><small>{item.hint}</small></div><span aria-hidden="true">↗</span></button>)}</div><button className="hbb-guide-human" type="button" onClick={contact}>Prefer a conversation? Talk to HBB →</button></aside>
      <div className="hbb-guide-conversation"><div className="hbb-guide-topline"><div><strong>HBB Project Guide</strong><span>Practical answers. A clearer next step.</span></div>{messages.length>0&&<button type="button" onClick={()=>{setMessages([]);setTopic(null);setBrowsing(true);setInput('');inputRef.current?.focus();}}>Start over</button>}</div>
        <div className="hbb-guide-log" ref={logRef} role="log" aria-label="Your project questions" aria-live="polite" aria-relevant="additions"><div className="hbb-guide-welcome"><span className="hbb-guide-avatar" aria-hidden="true">HBB</span><p>{welcome}</p></div>{messages.map((message,index)=><div key={`${index}-${message.id||'unanswered'}`} className="hbb-guide-exchange"><div className="hbb-guide-question"><span>You asked</span><p>{message.text}</p></div><div className="hbb-guide-answer" ref={index===messages.length-1?answerRef:undefined} tabIndex={-1}><span className="ed-eyebrow">HBB project guide</span><p>{message.answer}</p>{message.source&&<Link href={message.source.href} className="hbb-guide-source">Explore {message.source.label} ↗</Link>}{message.unanswered&&<button type="button" onClick={contact} className="hbb-guide-inline-contact">Ask the team →</button>}</div></div>)}</div>
        <div className="hbb-guide-prompts"><span>{latest&&!browsing?'You might also ask':topic?`Explore ${guideTopics.find(item=>item.id===topic).label.toLowerCase()}`:'A few good places to start'}</span><div>{(latest&&!browsing?latest.follow.map(id=>guideQuestions.find(question=>question.id===id)):suggestions).map(question=><button type="button" key={question.id} onClick={()=>ask(question.question,question)}>{question.question} <span aria-hidden="true">↗</span></button>)}</div>{latest&&topic&&<button className="hbb-guide-browse" type="button" onClick={()=>{setBrowsing(true);inputRef.current?.focus();}}>Browse this topic’s questions</button>}</div>
        <form className="hbb-guide-form" onSubmit={event=>{event.preventDefault();if(input.trim())ask(input.trim());}}><label className="hbb-visually-hidden" htmlFor={standalone?'guide-question-page':'guide-question-home'}>Your question about an HBB project</label><input ref={inputRef} id={standalone?'guide-question-page':'guide-question-home'} value={input} onChange={event=>setInput(event.target.value)} placeholder="Or ask your own question…" maxLength={500} autoComplete="off" /><button type="submit" disabled={!input.trim()} aria-label="Ask your question">↑</button></form><p className="hbb-guide-footnote">Answers from HBB’s project guide. Your quote, schedule and project details are confirmed by the team.</p>
      </div>
    </div>{!standalone&&<Link href="/ask-hbb" className="hbb-guide-page-link">Open the project guide ↗</Link>}
    <TourBookingModal mode="contact" isOpen={contactOpen} onClose={closeContact} initialMessage={handoff} />
  </section>;
}
