import { connect } from 'react-redux';

// actions
import { people } from '../Redux/actions';

function mapStateToProps(state) {
  const { allPeople } = state.peopleReducer;
  return {
    allPeople
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeoPle: () => dispatch(people.getPeoPle()),
  }
}

export default function PeopleContainer(Conponent) {
  return connect(mapStateToProps, mapDispatchToProps)(Conponent);
}