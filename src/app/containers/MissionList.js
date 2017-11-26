import { connect } from 'react-redux';
import MissionList from '../components/MissionList';
import {
  editMission,
  completeMission,
  removeMission,
} from '../actions/mission';

function selectMissions(state) {
  return Object.keys(state.missions).map(key => state.missions[key]);
}

function mapStateToProps(state) {
  return { missions: selectMissions(state) };
}

export default connect(mapStateToProps, {
  onEdit: editMission,
  onComplete: completeMission,
  onRemove: removeMission,
})(MissionList);
