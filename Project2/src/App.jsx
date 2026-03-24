export default function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="content">
          <p className="tag">Best Dog Choice</p>
          <h1>Golden Retriever: The Best Dog a Person Can Have</h1>
          <p className="lead">
            If one dog breed stands out as the best companion for most people, it is the
            Golden Retriever. Golden Retrievers are friendly, intelligent, loyal, and easy
            to love. They are known for being patient with families, playful with children,
            and gentle with new people.
          </p>
          <div className="highlights">
            <div className="panel">
              <h2>Why Golden Retrievers Are Great</h2>
              <ul>
                <li>Friendly and social personality</li>
                <li>Easy to train because they are intelligent</li>
                <li>Excellent family companions</li>
                <li>Energetic enough for walks, play, and outdoor fun</li>
              </ul>
            </div>
            <div className="panel image-panel">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80"
                alt="Golden Retriever"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid content bottom-section">
        <article className="panel">
          <h2>Temperament</h2>
          <p>
            Golden Retrievers are affectionate and dependable. They like being around people
            and usually do very well in homes where they receive regular attention,
            exercise, and care.
          </p>
        </article>

        <article className="panel">
          <h2>Trainability</h2>
          <p>
            Because they are smart and eager to please, Golden Retrievers are often one of
            the easiest breeds to train. This makes them a great choice for both first-time
            and experienced dog owners.
          </p>
        </article>

        <article className="panel full-width">
          <h2>Video</h2>
          <p>
            Learn more about Golden Retrievers through this short video:
            <a href="https://www.youtube.com/watch?v=Rj0G_a0pC9w" target="_blank" rel="noreferrer">
              {' '}Watch on YouTube
            </a>
          </p>
        </article>
      </section>
    </div>
  )
}
