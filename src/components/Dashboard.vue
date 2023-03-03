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
                        <div
                            v-show="user.profile != ''"
                            class=""
                            :class="{
                                conservative: user.profile === 'conservative',
                                moderate: user.profile === 'moderate',
                                aggressive: user.profile === 'aggressive',
                            }"
                        >
                            <h3>{{ user.profile }}</h3>
                        </div>
                    </div>
                    <div class="grid" style="padding-bottom: 17px">
                        <div class="col-12 md:col-5">
                            <img style="width: 180px; border-radius: 7px" src="layout/images/hotForex.svg" />
                        </div>
                        <div style="padding-left: 25px" class="col-12 md:col-7">
                            <div class="">
                                <InputText style="height: 50px" disabled v-on:focus="$event.target.select()" ref="myinput" :value="this.link" type="text" :placeholder="this.link" />
                                <router-link to="/https://www.hfm.com/?refid=364649">
                                    <Button style="border-color: gray; height: 50px" label="Go" />
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 md:col-4 card" style="margin-right: 15px" v-if="!info">
                <span>No information about AMOUNT CONTRIBUTED, create your MT4 account for more information.</span>
            </div>
            <div v-else class="col-12 md:col-4">
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
            <div class="col-12 md:col-3 card" style="margin-right: 15px" v-if="!info">
                <span>No information about REALIZED PROFIT, create your MT4 account for more information.</span>
            </div>
            <div v-else class="col-12 md:col-4">
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
            <div class="col-12 md:col-4 card" style="margin-right: 15px" v-if="!info">
                <span>No information about TOTAL OUTSTANDING AMOUNT, create your MT4 account for more information.</span>
            </div>
            <div v-else class="col-12 md:col-4">
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
            <div v-for="accountBot in accountBots" :key="accountBot.value" class="col-12 md:col-4">
                <account-card :accountBot="accountBot"></account-card>
            </div>
            <div class="col-12 md:col-12">
                <h3>Outstanding Payments - MT4</h3>
            </div>
            <div class="col-12 md:col-12">
                <div v-for="accountBot in accountBots" :key="accountBot.bot">
                    <account-card-full :accountBot="accountBot"></account-card-full>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-toastify/dist/index.css';
import DASHBOARD from '@/service/dashboard';
import { mapGetters } from 'vuex';
import AccountCard from './Dashboard/AccountCard.vue';
import AccountCardFull from './Dashboard/AccountCardFull.vue';

export default {
    components: { AccountCard, AccountCardFull },
    data() {
        return {
            index: 0,
            wallet: '0x89566A6aa1943a6FDb178367229E132B51F6B343',
            userPlans: [],
            uuid: [],
            info: false,
            paymentInfo: {
                id: '',
                hash: '',
            },

            accountBots: [],
            link: 'https://www.hfm.com/?refid=364649',
        };
    },
    created() {
        this.getAccountBot();
    },
    mounted() {},
    computed: {
        ...mapGetters('auth', ['user']),
    },
    methods: {
        async getAccountBot() {
            try {
                const response = await DASHBOARD.getData(this.$store.state.auth.user._id);
                this.accountBots = response;
                if (this.accountBots.length > 0) {
                    this.info = true;
                } else {
                    this.info = false;
                }
                console.log(this.accountBots);
            } catch (error) {
                alert(error);
            }
        },
    },
};
</script>

<style lang="scss">
.aggressive {
    background-color: rgb(255, 135, 0);
    box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
    border-radius: 8px;
    padding: 11px;
    margin-left: 15px;
}

.conservative {
    background-color: rgb(11, 209, 138);
    box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
    border-radius: 8px;
    padding: 11px;
    margin-left: 15px;
}

.moderate {
    background-color: rgb(0, 208, 222);
    box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
    border-radius: 8px;
    padding: 11px;
    margin-left: 15px;
}
::v-deep(.p-progressbar) {
    height: 0.5rem;
    background-color: #d8dadc;

    .p-progressbar-value {
        background-color: #607d8b;
    }
}
</style>
