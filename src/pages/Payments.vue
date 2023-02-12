<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card">
                <DataTable :value="products" responsiveLayout="scroll">
                    <template #header>
                        <div
                            class="flex"
                            style="justify-content: space-between;
}"
                        >
                            <h4>Payments Info</h4>
                            <Button style="padding: 20px; height: 10px" icon="pi pi-refresh" />
                        </div>
                    </template>
                    <Column field="code" header="Account ID"></Column>
                    <Column field="profit" header="Profit">
                        <template #body="slotProps">
                            {{ slotProps.data.profit }}
                        </template>
                    </Column>
                    <Column field="profit" header="Data">
                        <template #body="slotProps">
                            {{ slotProps.data.date }}
                        </template>
                    </Column>
                    <Column field="profit" header="Payment Type">
                        <template #body="slotProps">
                            {{ slotProps.data.type }}
                        </template>
                    </Column>
                    <Column header="Status" style="width: 1px">
                        <template #body="slotProps">
                            <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                        </template>
                    </Column>
                    <template #footer> In total there are {{ products ? products.length : 0 }} info. </template>
                </DataTable>
            </div>
        </div>
    </div>
</template>
<script>
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
            userEdit: {
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
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
            { id: '1000', code: 'f230fh0g3', date: '12/02/2023', type: 'Crypto', profit: 65, quantity: 24, inventoryStatus: 'Approved', rating: 5 },
            { id: '1001', code: 'nvklal433', date: '12/02/2023', type: 'Pix', profit: 72, quantity: 61, inventoryStatus: 'Approved', rating: 4 },
            { id: '1002', code: 'zz21cz3c1', date: '12/02/2023', type: 'Pix', profit: 79, quantity: 2, inventoryStatus: 'Denied', rating: 3 },
            { id: '1003', code: '244wgerg2', date: '12/02/2023', type: 'Pix', profit: 29, category: 'Clothing', quantity: 25, inventoryStatus: 'Approved', rating: 5 },
            { id: '1004', code: 'h456wer53', date: '12/02/2023', type: 'Pix', profit: 15, quantity: 73, inventoryStatus: 'Approved', rating: 4 },
            { id: '1005', code: 'av2231fwg', date: '12/02/2023', type: 'Pix', profit: 120, quantity: 0, inventoryStatus: 'Pending', rating: 4 },
            { id: '1006', code: 'bib36pfvm', date: '12/02/2023', type: 'Pix', profit: 32, quantity: 5, inventoryStatus: 'Denied', rating: 3 },
            { id: '1007', code: 'mbvjkgip5', date: '12/02/2023', type: 'Crypto', profit: 34, quantity: 23, inventoryStatus: 'Approved    ', rating: 5 },
            { id: '1008', code: 'vbb124btr', date: '12/02/2023', type: 'Crypto', profit: 99, quantity: 2, inventoryStatus: 'Denied', rating: 4 },
            { code: 'cm230f032', id: '1009', date: '12/02/2023', type: 'Crypto', profit: 299, quantity: 63, inventoryStatus: 'Approved', rating: 3 },
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
