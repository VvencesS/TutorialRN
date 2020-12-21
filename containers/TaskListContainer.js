import { connect } from 'react-redux';
import { toggleTask } from '../actions';
import TaskItemComponent from '../components/38_TaskItemComponent';

const mapStateToProps = state => {
    alert(`state send to task item: ${JSON.stringify(state)}`);
    return {}
};

const TaskItemContainer = connect(mapStateToProps)(TaskItemComponent);
export default TaskItemContainer;