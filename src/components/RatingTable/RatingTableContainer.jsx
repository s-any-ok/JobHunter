import React from "react";
import { connect } from "react-redux";
import RatingTable from "./RatingTable";
import { getRatingItems } from "../../redux/ratingReducer.js";
class RatingTableContainer extends React.Component {
  componentDidMount() {
    this.props.getRatingItems();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const vacancies = +e.target.vacancies.value;
    const responds = +e.target.responds.value;
    e.target.vacancies.value === "" && e.target.responds.value === ""
      ? this.props.getRatingItems()
      : this.props.getRatingItems(vacancies, responds);
  };
  render() {
    return (
      <RatingTable
        ratingItems={this.props.ratingItems}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ratingItems: state.ratingPage.ratingItems,
  };
};

const mapDispathToProps = {
  getRatingItems,
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(RatingTableContainer);
