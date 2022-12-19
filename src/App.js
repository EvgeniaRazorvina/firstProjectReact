import { Component } from 'react';

import AppFilter from './components/app-filter/app-filter';
import AppInfo from './components/app-info/app-info';
import EmployersAddForm from './components/employers-add-form/employers-add-form';
import EmployersList from './components/employers-list/employers-list';
import SearchPanel from './components/search-panel/search-panel';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Razorvina',
                    salary: '500',
                    increase: false,
                    rise: true,
                    id: 1,
                },
                {
                    name: 'Vigolov',
                    salary: '2000',
                    increase: false,
                    rise: false,
                    id: 2,
                },
                {
                    name: 'Iohin',
                    salary: '5000',
                    increase: true,
                    rise: false,
                    id: 3,
                },
            ],
            term: '',
            filter: 'all',
        };
        this.maxId = 4;
    }

    deleteItem = id => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            }),
        }));
    };

    onUpdateSalary = (id, value) => {
        this.setState(({data}) =>({
            data:data.map(item => {
                if(item.id === id) {
                    return {...item, salary : value};
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterPost = (items, filter) => {
        switch(filter) {
            case 'rise': 
                return items.filter(item => {
                    return item.rise;
                })
            case 'more1000$':
                return items.filter(item => {
                    return item.salary > 1000;
                })
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const { data, term, filter } = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visiableData = this.onFilterPost(this.searchEmp(data,term), filter);

        return (
            <div>
                <AppInfo employees={employees} increased={increased} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter= {filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList
                    data={visiableData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeValue={this.onUpdateSalary}
                />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
