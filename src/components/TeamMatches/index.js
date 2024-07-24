import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const result = await response.json()

    const teamBannerUrl = result.team_banner_url

    const latestMatchDetails = {
      competingTeam: result.latest_match_details.competing_team,
      competingTeamLogo: result.latest_match_details.competing_team_logo,
      date: result.latest_match_details.date,
      firstInnings: result.latest_match_details.first_innings,
      id: result.latest_match_details.id,
      manOfTheMatch: result.latest_match_details.man_of_the_match,
      matchStatus: result.latest_match_details.match_status,
      result: result.latest_match_details.result,
      secondInnings: result.latest_match_details.second_innings,
      umpires: result.latest_match_details.umpires,
      venue: result.latest_match_details.venue,
    }

    const recentMatches = result.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state

    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-matches-bg-container">
        <div className="banner-container">
          <img src={teamBannerUrl} alt="team banner" className="banner" />
        </div>
        <div className="latest-match-container">
          <h1 className="latest-match-hading">Latest Matches</h1>
          <LatestMatch matchDetails={latestMatchDetails} />
        </div>
        <div className="recent-matches-container">
          <ul className="recent-matches-list-container">
            {recentMatches.map(eachMatch => (
              <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
