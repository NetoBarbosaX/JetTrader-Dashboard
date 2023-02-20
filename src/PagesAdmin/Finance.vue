<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header> Finance </template>
                    <Column field="code" header="Plans "></Column>
                    <Column field="name" header="Account ID"></Column>
                    <Column field="category" header="Value"></Column>
                    <Column field="category" header="Data"></Column>
                    <Column field="inventoryStatus" header="Action" style="width: 1px">
                        <template #body="">
                            <div class="flex">
                                <Button label="Confirm" style="background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; margin-right: 5px" />
                                <Button label="Denied" style="background-color: #fc6161; box-shadow: 0px 6px 20px rgb(252 97 97 / 30%); border-radius: 8px" />
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
            data: null,
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
            dropdownItems: [
                { name: 'Option 1', code: 'Option 1' },
                { name: 'Option 2', code: 'Option 2' },
                { name: 'Option 3', code: 'Option 3' },
            ],
            dropdownItem: null,
        };
    },
    methods: {
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
        this.products = [
            { code: 'f230fh0g3', name: 'Marco', category: 'Conservative', inventoryStatus: 'Approved' },
            { code: 'zz21cz3c1', name: 'Elias', category: 'Conservative', inventoryStatus: 'Denied' },
            { code: '244wgerg2', name: 'Juka', category: 'Moderate', inventoryStatus: 'Approved' },
            { code: 'av2231fwg', name: 'Elias Sales', category: 'Audacious', inventoryStatus: 'Pending' },
            { code: 'bib36pfvm', name: 'Uzias', category: 'Audacious', inventoryStatus: 'Denied' },
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
