import { cn } from '../../../utils/cn'

interface IProps {
  iconUrl: string
  label: string
  progress: number
  variant: string
}

export default ({ iconUrl, label, progress, variant }: IProps) => {
  return (
    <li className={cn('card__item', variant)}>
      <img className="card__item__icon" src={iconUrl} alt="icon" />
      <div className="card__item__text">{label}</div>
      <div className="card__item__progress">
        {progress} / <span>100</span>
      </div>
    </li>
  )
}
