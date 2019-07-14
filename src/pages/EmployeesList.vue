<template>
    <div class="page employees-list">
        <Form @submit="onSubmit" :user="employee" v-show="isEditing" />
        <h1 class="employees-list__header">Employees</h1>
        <div v-if="loading" class="employees-list__loading">Loading...</div>
        <table v-else class="employees-list__list">
            <tr class="employees-list__list-header">
                <th>id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Edit</th>
            </tr>
            <tr v-for="employee in employees" :key="employee.id" class="employees-list__list-row">
                <td>{{employee.id}}</td>
                <td>{{employee.name}}</td>
                <td>{{employee.address.street}} {{employee.address.suite}} {{employee.address.city}}</td>
                <td>{{employee.phone}}</td>
                <td><a :href="`mailto:${ employee.email }`">{{employee.email}}</a></td>
                <td><EditButton @edit="onEdit(employee)"/></td>
            </tr>
        </table>
    </div>
</template>
<script>
    import axios from 'axios';
    import Form from '@components/Form';
    import EditButton from '@components/EditButton';

    export default {
        data() {
            return {
                loading: false,
                employees: [],
                employee: {
                    id: null,
                    name: '',
                    address: {},
                    phone: '',
                    email: ''
                },
                isEditing: false,
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData () {
                this.loading = true;

                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(({data}) => {
                        this.employees = data;
                    })
                    .finally(() => {
                        this.loading = false;
                    })
            },
            onEdit (user) {
                this.employee = user;
                this.isEditing = true;
            },
            onSubmit () {
                const id = this.employee.id;
                const employeeData = {
                    name: this.employee.name,
                    email: this.employee.email,
                    address: {
                        street: this.employee.address.street,
                        suite: this.employee.address.suite,
                        city: this.employee.address.city
                    },
                    phone: this.employee.phone
                }
                axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    body : JSON.stringify(employeeData),
                    headers: {
                        "Content-Type" : "application/json"
                    }
                    })
                    .then(res => {
                        this.isEditing = false;
                    })
                    .catch(err => console.log(err))
            }
        },
        components: {
            Form,
            EditButton,
        }
    };

</script>
<style lang="scss" scoped>
    .employees-list {
        &__header {
            font-size: 20px;
            padding: 0 0 10px;
        }

        &__loading {
            color: #999d9d;
            text-align: center;
        }

        &__list {
            font-size: 14px;
            width: 100%;
            border-collapse: collapse;
        }

        &__list-header {
            background: #f7f8f9;
            border-bottom: 1px solid #999d9d;

            th {
                padding: 8px;
            }
        }

        &__list-row {
            background: #fff;

            td {
                padding: 8px;
            }
        }
    }
</style>