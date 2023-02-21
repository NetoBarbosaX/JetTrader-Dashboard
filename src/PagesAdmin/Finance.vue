<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card">
                <DataTable :value="Finance" responsiveLayout="scroll">
                    <template #header> Finance </template>
                    <Column field="code" header="Plans "></Column>
                    <Column field="id" header="Account ID"></Column>
                    <Column field="value" header="Value"></Column>
                    <Column field="date" header="Data"></Column>
                    <Column field="action" header="Action" style="width: 1px">
                        <template #body="id">
                            <div v-if="id.data.action === 'Confirmed'">
                                <i class="pi pi-check" style="color: rgb(11, 209, 138); font-size: 20px"></i>
                            </div>
                            <div v-else-if="id.data.action === 'Denied'">
                                <i class="pi pi-times" style="color: #fc6161; font-size: 20px"></i>
                            </div>
                            <div v-else class="flex">
                                <Button label="Confirm" @click="confirmPayment(id)" style="background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; margin-right: 5px" />
                                <Button label="Denied" @click="rejectPayment(id)" style="background-color: #fc6161; box-shadow: 0px 6px 20px rgb(252 97 97 / 30%); border-radius: 8px" />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            disabled: true,
            info: [],
            id: null,
            user: {
                name: 'Jet Trader',
                email: 'exemplo@exemplo.com',
                phone: '99 99999-9999',
                password: 'adsadadasd',
                confirmPassword: 'adsadadasd',
            },
            userDataMT4: {
                name: '',
                tradeId: '',
                tradePassword: '',
                server: '',
            },
        };
    },
    methods: {
        confirmPayment(id) {
            this.info[0] = id.data.id;
            this.info[1] = 'Confirmed';
            console.log(this.info);
            axios
                .post('/api/submit', this.info)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        rejectPayment(id) {
            this.info[0] = id.data.id;
            this.info[1] = 'Denied';
            console.log(this.info);
            axios
                .post('/api/submit', this.info)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleSubmit() {
            console.log(this.userDataMT4);
            axios
                .post('/api/submit', this.userDataMT4)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        toggleDisabled() {
            this.disabled = !this.disabled;
        },
        handleChange() {
            this.user.name = this.userEdit.name;
            this.user.email = this.userEdit.email;
            this.user.phone = this.userEdit.phone;
            this.user.password = this.userEdit.password;
            this.user.confirmPassword = this.userEdit.confirmPassword;
            console.log(this.user);
        },
    },
    created() {
        this.Finance = [
            { code: 'f230fh0g3', id: '1', value: '1000', inventoryStatus: 'Approved', date: '20/03/2023', action: '' },
            { code: 'zz21cz3c1', id: '4', value: '230', inventoryStatus: 'Denied', date: '20/03/2023', action: 'Confirmed' },
            { code: '244wgerg2', id: '67', value: '70', inventoryStatus: 'Approved', date: '20/03/2023', action: '' },
            { code: 'av2231fwg', id: '1', value: '90', inventoryStatus: 'Pending', date: '20/03/2023', action: '' },
            { code: 'bib36pfvm', id: '1', value: '10', inventoryStatus: 'Denied', date: '20/03/2023', action: 'Confirmed' },
        ];
    },
};
</script>

<style>
.product-badge.status-denied {
    background: #ffcdd2;
    color: #c63737;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 22px;
}

.product-badge.status-approved {
    background: #c8e6c9;
    color: #256029;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
}

.product-badge.status-pending {
    background: #feedaf;
    color: #8a5340;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 16px;
}
</style>
