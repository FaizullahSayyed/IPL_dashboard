import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const result = await response.json()
    const {teams} = result

    this.setState({
      teamsList: teams.map(item => ({
        name: item.name,
        id: item.id,
        teamImageUrl: item.team_image_url,
      })),
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">
            <div className="main-heading-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="main-heading-image"
              />
            </div>
            <span className="heading-text">IPL Dashboard</span>
          </h1>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="teams-card-list-container">
              {teamsList.map(team => (
                <TeamCard key={team.id} teamDetails={team} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
