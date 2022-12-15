import { useContext } from 'react'
import { UserContext } from '../../../Store/UserContext'

export function ScoreCard() {
  const context = useContext(UserContext)
  return (
    <div>
      <input
        type="number"
        value={context?.user.score}
        onChange={(ev) =>
          context?.updateUser({ score: parseInt(ev.target.value) })
        }
        placeholder="Score"
      />
    </div>
  )
}
