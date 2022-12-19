import { Component } from 'react';
import './employers-add-form.scss';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        };
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
      e.preventDefault();
      if (this.state.name.length < 3 || !this.state.salary) return;
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState({
          name: '',
          salary: ''
      })
  }

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit} className="add-form d-flex">
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        name="salary"
                        className="form-control new-post-label"
                        placeholder="З/П в $"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-light"
                    >
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

/*const EmployersAddForm = props => {

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex">
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут"
                    onChange={text => setName(text.target.value)}
                />
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="З/П в $"
                    onChange={text => setSalary(text.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={() => {
                        props.onPress(name, salary);
                    }}
                >
                    Добавить
                </button>
            </form>
        </div>
    );
};*/

export default EmployersAddForm;
