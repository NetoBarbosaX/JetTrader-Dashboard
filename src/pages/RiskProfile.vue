<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-12">
            <h2>Risk Profile</h2>
            <div class="card grid" style="justify-content: space-between">
                <div class="card col-12 md:col-4" style="border-radius: 0px">
                    <div style="justify-content: space-between">
                        <div style="text-align-last: center; margin-left: 20px; margin-bottom: 11px; margin-right: 12px; background-color: rgb(11, 209, 138); box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
                            <h3 style="text-align-last: center">{{ profile[0].name }}</h3>
                            <i class="pi pi-moon" style="font-size: 20px"></i>
                        </div>
                        <h2 style="color: #cbcbcb; text-align: center; font-size: 20px">{{ profile[0].info }}</h2>
                    </div>
                </div>
                <div class="card col-12 md:col-4" style="border-radius: 0px">
                    <div style="justify-content: space-between">
                        <div style="justify-content: space-between">
                            <div style="text-align-last: center; margin-left: 20px; margin-bottom: 11px; margin-right: 12px; background-color: #00d0de; box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
                                <h3 style="text-align-last: center">{{ profile[1].name }}</h3>
                                <i class="pi pi-arrows-h" style="font-size: 20px"></i>
                            </div>
                            <h2 style="color: #cbcbcb; text-align: center; font-size: 20px">{{ profile[1].info }}</h2>
                        </div>
                    </div>
                </div>
                <div class="card col-12 md:col-4" style="border-radius: 0px">
                    <div style="justify-content: space-between">
                        <div style="justify-content: space-between">
                            <div style="text-align-last: center; margin-left: 20px; margin-bottom: 11px; margin-right: 12px; background-color: #ff8700; box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px; border-radius: 8px; padding: 11px; align-self: center">
                                <h3 style="text-align-last: center">{{ profile[2].name }}</h3>
                                <i class="pi pi-bolt" style="font-size: 20px"></i>
                            </div>
                            <h2 style="color: #cbcbcb; text-align: center; font-size: 20px">{{ profile[2].info }}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />
        </div>
    </div>
</template>
<script>
import CountryService from '../service/CountryService';
import NodeService from '../service/NodeService';
export default {
    data() {
        return {
            selectButtonValue1: 'Conservative',
            selectButtonValues1: [{ name: 'Conservative' }, { name: 'Moderate' }, { name: 'Audacious' }],
            profile: [
                {
                    name: 'Conservative',
                    code: 'O1',
                    info: 'The conservative profile represents those investors who have a greater aversion to risk. In general, this profile tends to invest in fixed income assets, savings accounts, and capitalization bonds, even in the face of the low returns of these assets. What the conservative profile values most is the security of their finances. They prefer investments with more predictable returns.',
                },
                {
                    name: 'Moderate',
                    code: 'O2',
                    info: 'The moderate profile is considered an intermediate level in terms of risk. These people take higher risks than the conservative, but in the face of signs of market vulnerability, they return to safer investments, which represent their comfort zone. Investors with this profile have a preference for balanced investments in fixed and variable income, that is, they invest 50% in fixed income and 50% in variable income, seeking the highest possible return. They strive for higher returns without having to take very high risks. Thus, they make up a well-diversified portfolio, investing in CDBs, Treasury Direct, Private Pension and, occasionally, in shares of some companies.',
                },
                {
                    name: 'Audacious',
                    code: 'O3',
                    info: 'Investors known as daring or aggressive prefer to invest in variable income (stocks, foreign currencies, real estate funds), seeking the highest rate of return. They accept negative returns thinking of having a higher return in the long term. Despite dealing well with risk, the daring have knowledge and control of their assets, that is, they incur higher, but calculated risks. This type of investor usually has a lot of knowledge in the capital market area, and also has more time than the other types to keep up with the market dynamics and adjust their portfolio.',
                },
            ],
        };
    },
    countryService: null,
    nodeService: null,
    created() {
        this.countryService = new CountryService();
        this.nodeService = new NodeService();
    },
    mounted() {
        this.countryService.getCountries().then((data) => (this.autoValue = data));
        this.nodeService.getTreeNodes().then((data) => (this.treeSelectNodes = data));
    },
    methods: {
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.autoFilteredValue = [...this.autoValue];
                } else {
                    this.autoFilteredValue = this.autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
    },
};
</script>

<style scoped lang="scss">
::v-deep(.p-multiselect) {
    min-width: 15rem;
}
::v-deep(.multiselect-custom-virtual-scroll .p-multiselect) {
    min-width: 20rem;
}
::v-deep(.multiselect-custom .p-multiselect-label) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
::v-deep(.multiselect-custom .country-item.country-item-value) {
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: 0.5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
}
::v-deep(.multiselect-custom .country-item.country-item-value img.flag) {
    width: 17px;
}
.country-item {
    display: flex;
    align-items: center;
}
.country-item img.flag {
    width: 18px;
    margin-right: 0.5rem;
}
::v-deep(.multiselect-custom .country-placeholder) {
    padding: 0.25rem;
}
::v-deep(.p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token) {
    margin: 0.1rem 0.5rem 0.1rem 0;
}
</style>
