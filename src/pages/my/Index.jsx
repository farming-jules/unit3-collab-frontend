import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  getRecommendations, resetRecommendations,
  destroyRecommendation
} from '@/actions/my/recommendation'

import {
  updateRecommendation
} from '@/actions/my/PutLike'

import Loading from '@/components/Loading'
import ViewCard from '@/layouts/ViewCard'

class PagesMyIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handlePutLikeSubmit = this.handlePutLikeSubmit.bind(this)
    this.handlePutCrossSubmit = this.handlePutCrossSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getRecommendations()
  }

  componentWillUnmount() {
    this.props.resetRecommendations()
  }

  handlePutLikeSubmit(id, like) {
    console.log(id)
    this.props.updateRecommendation(id)
  }

  handlePutCrossSubmit(id) {
    console.log(id)
    this.props.destroyRecommendation(id)
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
          putLike={this.handlePutLikeSubmit}
          putCross={this.handlePutCrossSubmit}
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
  destroyRecommendation: PropTypes.func.isRequired,
  updateRecommendation: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  stateRecommendations: state.recommendations
})

const mapDispatchToProps = {
  getRecommendations,
  resetRecommendations,
  destroyRecommendation,
  updateRecommendation
}

export default connect(mapStateToProps, mapDispatchToProps)(PagesMyIndex)
