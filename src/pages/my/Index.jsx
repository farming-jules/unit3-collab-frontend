import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  getRecommendations, resetRecommendations
} from '@/actions/my/recommendation'

import {
  getMatches, resetMatches
} from '@/actions/my/matches'

import {
  getLikes, resetLikes
} from '@/actions/my/Likes'

import {
  createLike
} from '@/actions/my/createLike'

import Loading from '@/components/Loading'
import ViewCard from '@/layouts/ViewCard'

class PagesMyIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handlecreateLikeSubmit = this.handlecreateLikeSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getRecommendations()
    this.props.getMatches()
    this.props.getLikes()
  }

  componentWillUnmount() {
    this.props.resetRecommendations()
    this.props.resetMatches()
    this.props.resetLikes()
  }

  handlecreateLikeSubmit(id, like) {
    this.props.createLike(id, like)
  }

  renderIndex() {
    const { stateRecommendations: { recommendations, isGetRecommendationsLoading } } = this.props

    if (isGetRecommendationsLoading) return <Loading />
    if (recommendations.length === 0) return <h2>No Recommendations</h2>

    const recommendation = recommendations[0]
    return (
      <div key={recommendation.id} className="d-flex justify-content-center">
        <ViewCard
          information={recommendation}
          createLike={this.handlecreateLikeSubmit}
          isRecommendation
        />
      </div>
    )
  }

  render() {
    return (
      <div id="pages-recommendations-index" className="container text-center my-3">
        <h1 className="mb-3">Index/Main Page</h1>
        <div
          className="d-flex flex-column flex-grow-1 h-100"
          style={{ position: 'relative', top: '5%' }}
        >
          {this.renderIndex()}
        </div>
      </div>
    )
  }
}

PagesMyIndex.propTypes = {
  stateRecommendations: PropTypes.shape().isRequired,
  getRecommendations: PropTypes.func.isRequired,
  resetRecommendations: PropTypes.func.isRequired,
  getMatches: PropTypes.func.isRequired,
  resetMatches: PropTypes.func.isRequired,
  getLikes: PropTypes.func.isRequired,
  resetLikes: PropTypes.func.isRequired,
  createLike: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateRecommendations: state.recommendations
})

const mapDispatchToProps = {
  getRecommendations,
  resetRecommendations,
  getMatches,
  resetMatches,
  getLikes,
  resetLikes,
  createLike
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyIndex)
