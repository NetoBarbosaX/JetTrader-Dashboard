<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card p-fluid">
                <div class="flex">
                    <h5>MT4 Register</h5>
                </div>
                <h5>New Account</h5>
                <div class="field">
                    <label for="name1"> Account Name</label>
                    <InputText placeholder="Name" id="name1" type="text" v-model="userDataMT4.profile" />
                </div>
                <div class="field">
                    <label for="name1">Trading Account Number (ID)</label>
                    <InputText placeholder="User ID" id="name1" type="text" v-model="userDataMT4.accountId" />
                </div>
                <div class="field">
                    <label for="email1">Trading password</label>
                    <InputText placeholder="Password" id="email1" type="text" v-model="userDataMT4.accountPassword" />
                </div>
                <div class="field">
                    <label for="email1">Server</label>
                    <InputText placeholder="Server" id="Chain" type="text" v-model="userDataMT4.accountAddress" />
                </div>
                <div class="field">
                    <label for="email1">Amount</label>
                    <InputText placeholder="Server" id="Chain" type="text" v-model="userDataMT4.amount" />
                </div>
                <div style="text-align: center">
                    <Button :disabled="validFields" @click="handleSubmit" style="width: 25%" label="Create"></Button>
                </div>
            </div>
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header> Historic </template>
                    <Column field="code" header="Trading Account Number"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Risk Profile"></Column>
                    <Column field="inventoryStatus" header="Status" style="width: 1px">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
import MT4 from '@/service/mt4.js';

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
                profile: '',
                amount: '',
                accountId: '',
                accountPassword: '',
                accountAddress: '',
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
        async handleSubmit() {
            console.log(this.userDataMT4);
            if (!this.validFields) {
                console.log(this.userDataMT4);
                try {
                    await MT4.create(this.userDataMT4);
                } catch (error) {
                    alert(error.menssage);
                }
            } else {
                console.log('Please fill all the fields');
            }
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
    computed: {
        validFields() {
            return this.userDataMT4.profile.trim() === '' || this.userDataMT4.accountId.trim() === '' || this.userDataMT4.accountPassword.trim() === '' || this.userDataMT4.accountAddress.trim() === '';
        },
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
