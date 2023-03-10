import Circle from './Circle'

export default () => {
  return (
    <div className="card__column first">
      <div className="card__content">
        <h1 className="card__title first__title">Your Result</h1>
        <Circle />
        <h2 className="card__sub-title">Great</h2>
        <p className="card__text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}
