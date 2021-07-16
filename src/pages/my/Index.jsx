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
} from '@/actions/my/likesd'

import {
  createLike
} from '@/actions/my/createLike'

import Loading from '@/components/Loading'
import ViewCard from '@/layouts/ViewCard'

class PagesMyIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleCreateLikeSubmit = this.handleCreateLikeSubmit.bind(this)
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

  handleCreateLikeSubmit(id, like, cb) {
    this.props.createLike(id, like).then((resp) => {
      if (cb) cb()

      if (resp.data.matched) {
        console.log('do animation')
      }
    })
  }

  renderIndex() {
    const { stateRecommendations: { recommendations, isGetRecommendationsLoading } } = this.props

    if (isGetRecommendationsLoading) return <Loading />
    if (recommendations.length === 0) return <h2>No Recommendations</h2>

    const recommendation = recommendations[0]
    return (
      <div className="d-flex justify-content-center">
        <ViewCard
          information={recommendation}
          createLike={this.handleCreateLikeSubmit}
          isRecommendation
        />
      </div>
    )
  }

  render() {
    return (
      <div id="pages-my-index" className="d-flex align-items-center container text-center my-3">
        <div
          className="d-flex flex-column flex-grow-1 h-100"
          style={{ position: 'relative', top: '10%' }}
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
