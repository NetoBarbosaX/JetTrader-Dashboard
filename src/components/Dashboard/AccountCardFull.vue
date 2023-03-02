<template>
    <div class="grid">
        <div class="col-12" style="width: 100%; margin-bottom: 11px; background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
            {{ accountBot.bot.id }}
        </div>
        <div
            :class="{
                'widget-overview-box-2': valueStatus === 1,
                'widget-overview-box-3': valueStatus === 0,
                'widget-overview-box-1': valueStatus === -1,
            }"
            style="border-radius: 0px"
            class="col-12 sm:col-3 card widget-overview-box"
        >
            <span class="overview-title"> Amount </span>
            <div class="flex justify-content-between">
                <div class="overview-detail flex justify-content-between">
                    <div class="overview-badge flex justify-content-center align-items-center">
                        <i
                            class="pi"
                            :class="{
                                'pi-arrow-up': valueStatus === 1,
                                'pi-arrow-down': valueStatus === -1,
                                'pi-minus': valueStatus === 0,
                            }"
                        />
                        <span>0.6%</span>
                    </div>
                    <div class="overview-text">${{ accountBot.bot.amount }}</div>
                </div>
            </div>
            <img :src="`layout/images/dashboard/${imgIndex[valueStatus]}.svg`" />
        </div>
        <div
            :class="{
                'widget-overview-box-2': dailyStatus === 1,
                'widget-overview-box-3': dailyStatus === 0,
                'widget-overview-box-1': dailyStatus === -1,
            }"
            style="border-radius: 0px"
            class="col-12 sm:col-3 card widget-overview-box"
        >
            <span class="overview-title"> Daily Result </span>
            <div class="flex justify-content-between">
                <div class="overview-detail flex justify-content-between">
                    <div class="overview-badge flex justify-content-center align-items-center">
                        <i
                            class="pi"
                            :class="{
                                'pi-arrow-up': dailyStatus === 1,
                                'pi-arrow-down': dailyStatus === -1,
                                'pi-minus': dailyStatus === 0,
                            }"
                        />
                        <span>0.6%</span>
                    </div>
                    <div class="overview-text">${{ accountBot.bot.daily }}</div>
                </div>
            </div>
            <img :src="`layout/images/dashboard/${imgIndex[dailyStatus]}.svg`" />
        </div>
        <div
            :class="{
                'widget-overview-box-2': resultsStatus === 1,
                'widget-overview-box-3': resultsStatus === 0,
                'widget-overview-box-1': resultsStatus === -1,
            }"
            style="border-radius: 0px"
            class="col-12 sm:col-3 card widget-overview-box"
        >
            <span class="overview-title"> Accumulated Result </span>
            <div class="flex justify-content-between">
                <div class="overview-detail flex justify-content-between">
                    <div class="overview-badge flex justify-content-center align-items-center">
                        <i
                            class="pi"
                            :class="{
                                'pi-arrow-up': resultsStatus === 1,
                                'pi-arrow-down': resultsStatus === -1,
                                'pi-minus': resultsStatus === 0,
                            }"
                        />
                        <span>0.6%</span>
                    </div>
                    <div class="overview-text">${{ accountBot.bot.accumulatedResult }}</div>
                </div>
            </div>
            <img :src="`layout/images/dashboard/${imgIndex[resultsStatus]}.svg`" />
        </div>
        <div
            :class="{
                'widget-overview-box-2': earnStatus === 1,
                'widget-overview-box-3': earnStatus === 0,
                'widget-overview-box-1': earnStatus === -1,
            }"
            style="border-radius: 0px"
            class="col-12 sm:col-3 card widget-overview-box"
        >
            <div class="flex align-items-center">
                <span class="overview-title"> Accumulated Earnings (Jet Trader) </span>
                <Button @click="copyMessage(), showToast()" class="p-button-rounded p-button-text" type="button" icon="pi pi-copy" v-tooltip="'Click to copy sending wallet address'" />
            </div>
            <div class="flex justify-content-between align-items-center gap-3">
                <div class="overview-detail flex justify-content-between">
                    <div class="overview-badge flex justify-content-center align-items-center">
                        <i
                            class="pi"
                            :class="{
                                'pi-arrow-up': earnStatus === 1,
                                'pi-arrow-down': earnStatus === -1,
                                'pi-minus': earnStatus === 0,
                            }"
                        />
                        <span>0.6%</span>
                    </div>
                    <div class="overview-text">${{ accountBot.bot.accumulatedEarnings }}</div>
                </div>
                <InputText class="flex-grow-1 flex-shrink-1 flex" style="width: 100px" type="text" placeholder="Payment Hash" v-model="hash" />
                <Button :disabled="!this.hash" style="background: rgb(11, 209, 138); border: none" @click="confirm($event, accountBot.bot.id)" icon="pi pi-check" label="" class="p-button-rounded p-button-small flex-shrink-0"></Button>
            </div>
        </div>
    </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import axios from 'axios';

export default {
    data: () => ({
        imgIndex: {
            1: 'value',
            0: 'quantity',
            '-1': 'rate',
        },
        hash: '',
    }),
    computed: {
        valueStatus() {
            var n = parseFloat(this.accountBot.bot.amount);
            return n > 0 ? 1 : n < 0 ? -1 : 0;
        },

        dailyStatus() {
            var n = parseFloat(this.accountBot.bot.daily);
            return n > 0 ? 1 : n < 0 ? -1 : 0;
        },
        resultsStatus() {
            var n = parseFloat(this.accountBot.bot.accumulatedResult);
            return n > 0 ? 1 : n < 0 ? -1 : 0;
        },
        earnStatus() {
            var n = parseFloat(this.accountBot.bot.accumulatedEarnings);
            return n > 0 ? 1 : n < 0 ? -1 : 0;
        },
    },
    methods: {
        confirm(event) {
            var obj = {
                id: this.accountBot.bot.id,
                hash: this.hash,
            };
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to report the payment?',
                icon: 'pi pi-shield',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Payment reported successfully', life: 3000 });
                    axios
                        .post('/api/submit', obj)
                        .then((response) => {
                            console.log(response.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'Uninformed payment', life: 3000 });
                },
            });
        },
        showToast() {
            toast.success('Copied successfully, please send the amount indicated on the Accumulated Earnings panel to the address.', {
                icon: '🚀',
                autoClose: 5000,
            });
        },
        copyMessage() {
            navigator.clipboard.writeText(this.wallet).then(
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
    props: {
        accountBot: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style></style>
