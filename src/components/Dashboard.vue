<template>
    <div class="layout-dashboard">
        <ConfirmPopup></ConfirmPopup>
        <ConfirmPopup group="demo">
            <template #message="slotProps">
                <div class="flex p-4">
                    <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                    <p class="pl-2">{{ slotProps.message.message }}</p>
                </div>
            </template>
        </ConfirmPopup>
        <Toast />
        <div class="grid">
            <div class="col-12 md:col-12">
                <div class="flex" style="justify-content: space-between">
                    <div class="flex" style="align-items: center">
                        <h3 style="font-weight: 500">Account status</h3>
                        <div style="margin-left: 20px; margin-bottom: 11px; margin-right: 12px; background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
                            Conservador
                        </div>
                    </div>
                    <div class="grid" style="padding-bottom: 17px">
                        <div class="col-12 md:col-5">
                            <img style="width: 180px; border-radius: 7px" src="layout/images/hotForex.svg" />
                        </div>
                        <div style="padding-left: 25px" class="col-12 md:col-7">
                            <div class="">
                                <InputText style="height: 50px" disabled v-on:focus="$event.target.select()" ref="myinput" :value="this.link" type="text" :placeholder="this.link" />
                                <Button @click="copyMessage(), showToast()" style="background: gray; border-color: gray; height: 50px" label="Copy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title"> AMOUNT CONTRIBUTED </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>0.6%</span>
                            </div>
                            <div class="overview-text">0.81%</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/rate.svg" />
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title"> REALIZED PROFIT </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>4,2%</span>
                            </div>
                            <div class="overview-text">$306.2</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/value.svg" />
                </div>
            </div>
            <div class="col-12 md:col-4">
                <div class="card widget-overview-box widget-overview-box-3">
                    <span class="overview-title"> TOTAL OUTSTANDING AMOUNT </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-minus"></i>
                                <span>2,1%</span>
                            </div>
                            <div class="overview-text">1,620</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/quantity.svg" />
                </div>
            </div>
            <div class="col-12 md:col-12">
                <h3>Active Accounts - MT4</h3>
            </div>
            <div v-for="(accountBots, index) in accountBot" :key="accountBots.id" class="col-12 md:col-4">
                <div v-if="accountBot[index].value.substr(0, 1) != '-'" class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title">Account {{ accountBot[index].id }}</span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>{{ accountBot[index].percent }}%</span>
                            </div>
                            <div class="overview-text">${{ accountBot[index].value }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/value.svg" />
                </div>

                <div v-else-if="accountBot[index].value.substr(0, 1) == '0'" class="card widget-overview-box widget-overview-box-3">
                    <span class="overview-title"> Account {{ accountBot[index].id }}</span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-minus"></i>
                                <span>{{ accountBot[index].percent }}%</span>
                            </div>
                            <div class="overview-text">${{ accountBot[index].value }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/quantity.svg" />
                </div>

                <div v-else class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title">Account {{ accountBot[index].id }}</span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>{{ accountBot[index].percent }}%</span>
                            </div>
                            <div class="overview-text">${{ accountBot[index].value }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/rate.svg" />
                </div>
            </div>
            <div class="col-12 md:col-12">
                <h3>Outstanding Payments - MT4</h3>
            </div>
            <div v-for="(accountBots, index) in accountBot" :key="accountBots.bot" class="col-12 md:col-4">
                <div style="margin-bottom: 11px; background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
                    {{ accountBot[index].bot.id }}
                </div>
                <div v-if="accountBot[index].bot.amount.substr(0, 1) == '-'" class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title"> Amount </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>0.6%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.amount }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/rate.svg" />
                </div>
                <div v-else class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title"> Amount </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>4,2%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.amount }}</div>
                        </div>

                        <img src="layout/images/dashboard/value.svg" />
                    </div>
                </div>
                <div v-if="accountBot[index].bot.weeklyProfit.substr(0, 1) == '-'" class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title"> Weekly Profit </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>0.6%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.weeklyProfit }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/rate.svg" />
                </div>
                <div v-else class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title"> Weekly Profit </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>4,2%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.weeklyProfit }}</div>
                        </div>

                        <img src="layout/images/dashboard/value.svg" />
                    </div>
                </div>

                <div v-if="accountBot[index].bot.accumulatedGain.substr(0, 1) == '-'" class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title"> Accumulated Gain </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>0.6%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.accumulatedGain }}</div>
                        </div>
                    </div>
                    <img src="layout/images/dashboard/rate.svg" />
                </div>

                <div v-else class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title"> Weekly Profit </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>4,2%</span>
                            </div>
                            <div class="overview-text">{{ accountBot[index].bot.accumulatedGain }}</div>
                        </div>

                        <img src="layout/images/dashboard/value.svg" />
                    </div>
                </div>

                <div v-if="accountBot[index].bot.accumulatedEarnings.substr(0, 1) == '-'" class="card widget-overview-box widget-overview-box-1">
                    <span class="overview-title"> Accumulated Earnings (Jet Trader) </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-down"></i>
                                <span>0.6%</span>
                            </div>
                            <div class="overview-text">${{ accountBot[index].bot.accumulatedEarnings }}</div>
                        </div>
                        <Button style="background: rgb(11, 209, 138); border: none; width: 90px" @click="confirm1($event)" icon="pi pi-check" label="Pay $" class="mr-2"></Button>
                    </div>
                </div>
                <div v-else class="card widget-overview-box widget-overview-box-2">
                    <span class="overview-title"> Accumulated Earnings (Jet Trader) </span>
                    <div class="flex justify-content-between">
                        <div class="overview-detail flex justify-content-between">
                            <div class="overview-badge flex justify-content-center align-items-center">
                                <i class="pi pi-arrow-up"></i>
                                <span>4,2%</span>
                            </div>
                            <div class="overview-text">${{ accountBot[index].bot.accumulatedEarnings }}</div>
                        </div>
                        <Button style="background: rgb(11, 209, 138); border: none; width: 90px" @click="confirm1($event)" icon="pi pi-check" label="Pay $" class="mr-2"></Button>
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
                        amount: '-308.2',
                        weeklyProfit: '-0.6',
                        accumulatedGain: '12',
                        accumulatedEarnings: '-120',
                        percent: '4.2',
                    },
                },
                {
                    id: '#4222',
                    value: '-102',
                    percent: '7.2',
                    bot: {
                        id: '#1242',
                        amount: '308.2',
                        weeklyProfit: '0.6',
                        accumulatedGain: '-12',
                        accumulatedEarnings: '-120',
                        percent: '4.2',
                    },
                },
                {
                    id: '#1242',
                    value: '0.7',
                    percent: '1.2',
                    bot: {
                        id: '#0012',
                        amount: '-308.2',
                        weeklyProfit: '0.6',
                        accumulatedGain: '-12',
                        accumulatedEarnings: '120',
                        percent: '4.2',
                    },
                },
                {
                    id: '#1242',
                    value: '0.7',
                    percent: '1.2',
                    bot: {
                        id: '#0012',
                        amount: '308.2',
                        weeklyProfit: '-0.6',
                        accumulatedGain: '12',
                        accumulatedEarnings: '120',
                        percent: '4.2',
                    },
                },
            ],
            link: 'www.elias.com.br',
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
