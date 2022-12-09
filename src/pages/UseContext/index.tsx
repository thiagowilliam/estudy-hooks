import { Profile } from '../../components/Context/Profile'
import { ScoreCard } from '../../components/Context/ScoreCard'

export default function UseContextHook() {
  return (
    <div>
      <h1>Context Api</h1>
      <Profile />
      <ScoreCard />
    </div>
  )
}
