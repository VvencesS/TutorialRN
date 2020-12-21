import AddComponent from '../components/38_AddComponent';
import { addNewTask } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToPro = (dispatch) => {
    return {
        onClickAdd: (inputTaskName) => {
            dispatch(addNewTask(inputTaskName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPro)(AddComponent);