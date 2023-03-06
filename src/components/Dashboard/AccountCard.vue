<template>
    <div :class="{ 'widget-overview-box-2': valueStatus === 1, 'widget-overview-box-3': valueStatus === 0, 'widget-overview-box-1': valueStatus === -1 }" class="card widget-overview-box">
        <span class="overview-title">Account {{ accountBot._id }}</span>
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
                    <span>{{ accountBot.percent }}%</span>
                </div>
                <div class="overview-text">${{ accountBot.initialAmount }}</div>
            </div>
        </div>
        <img :src="`layout/images/dashboard/${imgIndex[valueStatus]}.svg`" />
    </div>
</template>

<script>
export default {
    data: () => ({
        imgIndex: {
            1: 'value',
            0: 'quantity',
            '-1': 'rate',
        },
    }),
    computed: {
        valueStatus() {
            var n = parseFloat(this.accountBot.initialAmount);
            return n > 0 ? 1 : n < 0 ? -1 : 0;
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
