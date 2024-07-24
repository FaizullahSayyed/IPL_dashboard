import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props

  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="team-card-container">
          <div className="team-card-image-container">
            <img src={teamImageUrl} alt={name} className="team-card-image" />
          </div>
          <div className="team-card-info">
            <p className="team-card-name">{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
