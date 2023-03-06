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
                    <InputText placeholder="Name" id="name1" type="text" v-model="userDataMT4.name" />
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
                <DataTable :value="dataTable" responsiveLayout="scroll">
                    <template #header> Historic </template>
                    <Column field="accountAddress" header="Trading Account Number"></Column>
                    <Column field="amount" header="Amount"></Column>
                    <Column field="profile" header="Risk Profile"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="status" header="Status"> </Column>
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
                name: '',
                amount: '',
                accountId: '',
                accountPassword: '',
                accountAddress: '',
                profile: '',
            },
            dataTable: [],
            dropdownItem: null,
            valuesToRemove: ['pending approval', 'blocked', 'pending removal', 'payment to be confirmed'],
            filteredItems: [],
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

        async getProcessData() {
            try {
                const response = await MT4.getData();
                this.dataTable = response;
                console.log(this.dataTable);
            } catch (error) {
                alert(error);
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
        this.userDataMT4.profile = this.$store.state.auth.user.profile;
        this.getProcessData();
    },
    computed: {
        validFields() {
            return this.userDataMT4.name.trim() === '' || this.userDataMT4.accountId.trim() === '' || this.userDataMT4.accountPassword.trim() === '' || this.userDataMT4.accountAddress.trim() === '' || this.userDataMT4.amount.trim() === '';
        },
    },
    mounted() {
        // this.dataTable = this.items.filter((item) => {
        //     return !this.valuesToRemove.includes(item.name);
        // });
        // this.items = this.dataTable;
        // console.log(this.items);
    },
};
</script>

<style>
.active {
    background: #ffcdd2;
    color: #c63737;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 22px;
}

.pending-payment {
    background: #c8e6c9;
    color: #256029;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
}

.blocked {
    background: #feedaf;
    color: #8a5340;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 16px;
}

.pending-removal {
    background: #ffcdd2;
    color: #c63737;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 22px;
}

.payment-to-be-confirmed {
    background: #c8e6c9;
    color: #256029;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
}

.rejected {
    background: #feedaf;
    color: #8a5340;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 16px;
}

.pending-approval {
    background: #feedaf;
    color: #8a5340;
    padding: 5px;
    border-radius: 4px;
    font-weight: 700;
    padding-right: 16px;
}
</style>
