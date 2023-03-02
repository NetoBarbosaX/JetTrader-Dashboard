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
                    <InputText placeholder="Amount" id="Chain" type="number" v-model="userDataMT4.amount" />
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
import { toast } from 'vue3-toastify';

export default {
    data() {
        return {
            disabled: true,
            data: null,
            userDataMT4: {
                profile: '',
                amount: '',
                accountId: '',
                accountPassword: '',
                accountAddress: '',
            },
            dropdownItem: null,
        };
    },
    methods: {
        async handleSubmit() {
            if (!this.validFields) {
                console.log(this.userDataMT4);
                try {
                    await MT4.create(this.userDataMT4);
                    this.showToast();
                } catch (error) {
                    alert(error.menssage);
                    this.showToastError();
                }
            } else {
                console.log('Please fill all the fields');
            }
        },
        showToastError() {
            toast.error('Error', {
                icon: '🚀',
                autoClose: 5000,
            });
        },
        showToast() {
            toast.success('MT4 Register sent successfully', {
                icon: '🚀',
                autoClose: 5000,
            });
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
            return this.userDataMT4.profile.trim() === '' || this.userDataMT4.accountId.trim() === '' || this.userDataMT4.accountPassword.trim() === '' || this.userDataMT4.accountAddress.trim() === '' || this.userDataMT4.amount.trim() === '';
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
