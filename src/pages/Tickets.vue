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
                    <Button :disabled="!dataTickets.text || !dataTickets.subject" style="padding: 10px" @click="processTickets()" label="Submit" />
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import TICKETS from '@/service/tickets.js';

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
        async processTickets() {
            try {
                await TICKETS.sendTickets(this.dataTickets);
                this.showToast();
            } catch (error) {
                this.showToastError();
            }
        },
        showToastError() {
            toast.error('Error', {
                icon: '🚀',
                autoClose: 5000,
            });
        },
        showToast() {
            toast.success('Ticket sent successfully', {
                icon: '🚀',
                autoClose: 5000,
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
