import ContinueButton from './ContinueButton'
import List from './List'

export default () => {
  return (
    <div className="card__column second">
      <div className="card__content">
        <h1 className="card__title second__title">Summary </h1>
        <List />
        <ContinueButton />
      </div>
    </div>
  )
}
