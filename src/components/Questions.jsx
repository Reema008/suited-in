const faqs = [
  {
    q: 'What is the purpose of the channel?',
    a: [
      'The restoration of dignity to work itself.',
      'Suited In exists because work deserves seriousness regardless of whether it is seen, recognized, or rewarded.',
      'No profession is elevated above another here. No particular kind of work is given greater importance than another.',
      'What matters is the act of sitting down, protecting the time, and giving the work before you the full attention it deserves.',
      'The work comes first.',
    ],
  },
  {
    q: 'Who is this channel for?',
    a: [
      'Anyone who sits down to do work that deserves more than the conditions the world typically offers it.',
      'The work may be anything — studying, writing, building, designing, researching, planning, solving. It may never be seen beyond the person doing it. It may receive no recognition and leave no visible mark.',
      'It is still worthy of protected time, undivided attention, and silence.',
      'Only one thing is asked: that you bring the work before you and give it your full attention for the duration of the session.',
      'If you believe your work deserves that, this channel is for you.',
    ],
  },
  {
    q: 'Why does the practitioner remain silent throughout every session?',
    a: [
      'The practitioner is not the subject of this room. The work is.',
      'Silence is not a stylistic choice. It is the operating condition of this place. The moment the person at the desk begins explaining, demonstrating, or performing, the work is no longer at the centre. The person is.',
      'The screen remains private for the same reason. The work itself is left undefined for the same reason.',
      'The practitioner’s work may be different from yours. Neither needs to be explained, compared, or made visible. Both deserve the same conditions — protected time, undivided attention, and silence.',
      "Speaking would make this about one person's work.",
      'Silence makes it about the work itself.',
      'That is why.',
    ],
  },
  {
    q: 'Why the suit?',
    a: [
      'The suit does not signify profession, rank, or status.',
      'The work does not acquire dignity from what the practitioner wears.',
      'The suit signifies something simpler: the seriousness with which the work is approached.',
      'It is part of the ritual of showing up and giving the work its due attention.',
      'Nothing more.',
    ],
  },
]

export default function Questions() {
  return (
    <section id="questions">
      <div className="section-label">03 / QUESTIONS</div>
      <h2>Questions</h2>
      <p>A few things worth explaining.</p>
      <div className="faq">
        {faqs.map((f, i) => (
          <details key={f.q} open={i === 0}>
            <summary>{f.q}</summary>
            <div className="answer">
              {f.a.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
