import { ListData } from '../../../constants/list-data'
import Item from './Item'

export default () => {
  return (
    <ul className="card__list">
      {ListData.map((e, i) => (
        <Item key={i} {...e} />
      ))}
    </ul>
  )
}
