<template>
    <div class="layout-dashboard">
        <div class="grid">
            <div class="col-12 md:col-12">
                <div class="flex" style="justify-content: space-between">
                    <div class="flex" style="align-items: center">
                        <h3 style="font-weight: 500">Dashboard Admin</h3>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-3">
                    <span class="overview-title"> ACTIVE PLANS </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">1,620</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/quantity.svg" />
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-3">
                    <span class="overview-title"> PENDING PLANS </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">1,620</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/quantity.svg" />
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-3">
                    <span class="overview-title"> SUSPENDED PLANS </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">1,620</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/quantity.svg" />
                </div>
            </div>
        </div>
        <div class="grid card" style="justify-content: center">
            <div class="col-3 md:col-3">
                <Chart type="pie" :data="chartData" :options="lightOptions" />
            </div>
        </div>
        <div class="grid card widget-overview-box widget-overview-box-3" style="justify-content: center">
            <div class="col-12 md:col-12">
                <div class="flex" style="justify-content: space-between">
                    <div class="flex" style="align-items: center">
                        <h4 style="font-weight: 500">Total profit received</h4>
                    </div>
                    <div class="overview-detail flex justify-content-between">
                        <div class="overview-badge flex justify-content-center align-items-center">1,620</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    data() {
        return {
            index: 0,
            accountBot: [
                {
                    id: '#4542',
                    value: '308.2',
                    percent: '4.2',
                    bot: {
                        id: '#4542',
                        amount: '308.2',
                        daily: '-0.6',
                        accumulatedGain: '12',
                        accumulatedEarnings: '120',
                        percent: '4.2',
                    },
                },
            ],
            link: 'https://www.hfm.com/?refid=364649',
            chartData: {
                labels: ['ACTIVE PLANS', 'PENDING PLANS', 'SUSPENDED PLANS'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
                        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
                    },
                ],
            },
        };
    },
    created() {},
    mounted() {
        console.log(this.accountBot[0].bot);
    },
    methods: {
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Send the amount informed in the Accumulated Earnings panel to the wallet "0x89566A6aa1943a6FDb178367229E132B51F6B343" in USDT!',
                icon: 'pi pi-shield',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Payment reported successfully', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Uninformed payment', life: 3000 });
                },
            });
        },
        showToast() {
            toast.success('Copy', {
                icon: '🚀',
                autoClose: 500,
            });
        },
        copyMessage() {
            navigator.clipboard.writeText(this.link).then(
                function () {
                    console.log('Copied to clipboard successfully!');
                    this.showToast();
                },
                function (err) {
                    console.error('Failed to copy: ', err);
                }
            );
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep(.p-progressbar) {
    height: 0.5rem;
    background-color: #d8dadc;

    .p-progressbar-value {
        background-color: #607d8b;
    }
}
</style>
