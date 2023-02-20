<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card">
                <h3>Tickets</h3>
                <div class="pb-3">
                    <span class="textHeader">Subject</span>
                </div>
                <div class="pb-3">
                    <InputText style="width: 90%" type="text" v-model="dataTickets.subject" />
                </div>
                <span class="textHeader">Text</span>
                <div class="pb-6">
                    <Textarea style="width: 90%" v-model="dataTickets.text" rows="5" cols="30" />
                </div>
                <div style="text-align: center">
                    <Button style="padding: 10px" @click="handleSubmit(), showToast()" label="Submit" />
                </div>
            </div>
            <!-- <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>Ticket Historic </template>
                    <Column field="code" header="Trading Account Number"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Risk Profile"></Column>
                    <Column field="inventoryStatus" header="Status" style="width: 1px">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + (slotProps.data.inventoryStatus ? slotProps.data.inventoryStatus.toLowerCase() : '')">{{ slotProps.data.inventoryStatus }}</span>
                        </template>
                    </Column>
                </DataTable>
            </div> -->
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    data() {
        return {
            disabled: true,
            dataTickets: {
                subject: '',
                text: '',
            },
        };
    },
    methods: {
        showToast() {
            toast.success('Ticket sent successfully', {
                icon: '🚀',
                autoClose: 500,
            });
        },
        toggleDisabled() {
            this.disabled = !this.disabled;
        },
        handleSubmit() {
            console.log(this.dataTickets);
            axios
                .post('/api/submit', this.dataTickets)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        // this.products = [
        //     { code: 'f230fh0g3', name: 'Marco', category: 'Conservative', inventoryStatus: 'Approved' },
        //     { code: 'zz21cz3c1', name: 'Elias', category: 'Conservative', inventoryStatus: 'Denied' },
        //     { code: '244wgerg2', name: 'Juka', category: 'Moderate', inventoryStatus: 'Approved' },
        //     { code: 'av2231fwg', name: 'Elias Sales', category: 'Audacious', inventoryStatus: 'Pending' },
        //     { code: 'bib36pfvm', name: 'Uzias', category: 'Audacious', inventoryStatus: 'Denied' },
        // ];
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

.textHeader {
    font-weight: 500;
    font-size: 18px;
    line-height: 14px;
}
</style>
