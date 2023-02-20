<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card">
                <h5>Row Editing</h5>
                <DataTable :value="editTable.data" editMode="row" dataKey="id" v-model:editingRows="editingRows" @row-edit-save="onRowEditSave" responsiveLayout="scroll">
                    <Column field="username" header="Name" style="width: 20%"> </Column>
                    <Column field="plan" header="Plan" style="width: 20%"> </Column>
                    <Column field="amount" header="Amount" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="dailyProfit" header="Daily Profit" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="accumulatedGain" header="Accumulated Gain" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="accumulatedEarnings" header="Accumulated Earnings (Jet Trader)" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
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
            editingRows: [],
            editTable: null,
            disabled: true,
        };
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;
            debugger;
            this.editTable.data[index] = newData;
            console.log(this.editTable.data);
            axios
                .post('/api/submit', this.editTable.data)
                .then((response) => {
                    debugger;
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.editTable = {
            data: [
                {
                    id: '1',
                    username: 'Jet Trader',
                    plan: 'Jet-Trader',
                    accountId: '1',
                    amount: '0',
                    dailyProfit: '0',
                    accumulatedGain: '0',
                    accumulatedEarnings: '0',
                },
                {
                    id: '1',
                    username: 'Jet Trader',
                    plan: 'Jet-Trader',
                    accountId: '1',
                    amount: '0',
                    dailyProfit: '0',
                    accumulatedGain: '0',
                    accumulatedEarnings: '0',
                },
            ],
        };
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
