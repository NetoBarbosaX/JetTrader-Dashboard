<template>
    <div v-if="riskprofile == false" class="grid p-fluid">
        <div class="col-12 md:col-12">
            <h2>Risk Profile Question</h2>
            <h5>What is your long-term goal regarding the use of Jet Trader's services?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="r1" name="city" value="1" v-model="dataQuestion[0]" />
                    <label for="city1">My long-term goal is to preserve my heritage and earn a modest return without taking too much risk.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="r2" name="city" value="2" v-model="dataQuestion[0]" />
                    <label for="city2">My long-term goal is to balance risk and return, seeking a healthy combination of growth and security.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="r3" name="city" value="3" v-model="dataQuestion[0]" />
                    <label for="city3">My long-term goal is to maximize my return, even if it means taking more risks. I'm willing to assume greater exposure to risk to obtain a higher return high.</label>
                </div>
            </div>
            <h5>What is your level of knowledge about the Forex and Crypto market?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[1]" />
                    <label for="city1">I have basic knowledge about the Forex market and Crypto. I usually carry out traditional investments, for this reason I prefer to minimize my risks in lesser known markets and volatile.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[1]" />
                    <label for="city2">I am willing to learn more about these markets and invest in opportunities that I believe are profitable but still want to minimize the risk.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[1]" />
                    <label for="city3">I am willing to invest in risky opportunities and continually learn about these markets, with the aim of maximize my profits.</label>
                </div>
            </div>
            <h5>What is your risk tolerance level?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[2]" />
                    <label for="city1">I have a low tolerance for risk and prefer investments with low volatility and less potential for capital loss.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[2]" />
                    <label for="city2">My tolerance is acceptable for small losses and risks in search of significant returns.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[2]" />
                    <label for="city3">I have a high tolerance and am willing to take big risks. in search of higher returns, understanding that there are potential for exponential losses.</label>
                </div>
            </div>
            <h5>What is your availability to monitor trades and make decisions?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[3]" />
                    <label for="city1"
                        >Due to my professional occupation, I do not have ample Availability of time to monitor negotiations financial statements constantly and make informed decisions. For this reason, I prefer to opt for an automated approach to
                        investments that offer low risk and long-term prospects, without the need for constant supervision</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[3]" />
                    <label for="city2"
                        >Although I have some free time to follow the financial negotiations, I do not intend to dedicate all my free time to this task. So I try to find a approach that allows a healthy balance between the necessary follow-up and the
                        time available for other activities</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[3]" />
                    <label for="city3"
                        >I am willing to invest a great deal of time to monitor financial negotiations and make decisions strategies, looking for short-term opportunities that offer high profitability potential. The fascination with risk present in
                        the financial market is an incentive for me in the search for new investment opportunities</label
                    >
                </div>
            </div>
            <h5>Do you have sufficient financial resources to withstand potential losses?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[4]" />
                    <label for="city1"
                        >Due to my limited financial resources, I try to avoid financial losses at all costs. Therefore, I prefer to adopt a investment approach, which prioritizes the safety of my assets above possible short-term gains.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[4]" />
                    <label for="city2"
                        >Although I have some financial resources, I don't I am willing to take unnecessary risks. I seek to find the ideal balance between the return potential and the security of my assets, opting for investment strategies that are
                        risk conscious</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[4]" />
                    <label for="city3"
                        >I have adequate financial resources to support losses potential and I am willing to take certain risks in search of more significant financial returns. I am looking for opportunities to investment that have potential for high
                        profitability, always carefully assessing the risk involved.</label
                    >
                </div>
            </div>
            <h5>What is your opinion on the volatility of the Forex and Crypto markets?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[5]" />
                    <label for="city1"
                        >I am cautious about the volatility present in the markets of Forex and Crypto. I am looking for investment options that are more stable and predictable, prioritizing the security of my resources financials above possible
                        short-term gains</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[5]" />
                    <label for="city2"
                        >I am aware of the degree of volatility inherent in markets financial and I am willing to accept it to some extent. At the However, I seek to balance my investments, diversifying between more stable options and options with
                        higher return potential, but which may be accompanied by greater volatility. That me allows you to deal with risk in a balanced and strategic way</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[5]" />
                    <label for="city3"
                        >I am attracted by the dynamics and return potential of Forex and Crypto markets, even with their volatility. I believe that these markets present more profitable opportunities 6 high in the long term, and I am willing to take
                        calculated risks to take advantage of them. I seek to understand the trends and factors that affect those markets, to make informed decisions and optimize my investments.</label
                    >
                </div>
            </div>
            <h5>What is your level of financial education?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[6]" />
                    <label for="city1">I have initial knowledge about investments and finance, but I seek to broaden my understanding before making decisions significant financial.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[6]" />
                    <label for="city2"
                        >I have a fundamental knowledge of investments and finances, but I am determined to delve deeper and develop my skills in the area of Forex and Crypto market. I am committed to dedicating time and effort to acquire knowledge
                        specific information and relevant information in order to make decisions informed and optimize my investments.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[6]" />
                    <label for="city3"
                        >I have deep knowledge and understanding of the markets financial instruments, including Forex and Crypto. I'm familiar with the trends and market dynamics, and I feel confident in dealing with the inherent volatility of these
                        markets. I'm prepared for seize opportunities and make informed investments and strategic</label
                    >
                </div>
            </div>
            <h5>Are you willing to make adjustments to your trading strategy as the market evolves?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[7]" />
                    <label for="city1"
                        >I'm a cautious investor and prefer a stable approach and consistent rather than making frequent adjustments to my trading strategy. I'm looking for a balanced combination of security and return potential, without taking
                        unnecessary risks. I maintain a methodical and cautious approach to investing.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[7]" />
                    <label for="city2"
                        >I am flexible to changes in trading strategy, provided there is a solid foundation of analysis and understanding of the market changes. I try to balance the stability of the strategy with the opportunity to earn higher
                        returns.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[7]" />
                    <label for="city3">I'm ready to implement quick and aggressive adjustments in my trading strategy, always being aware of market changes and seeking to maximize my profits in the short term</label>
                </div>
            </div>
            <h5>What is your ability to accept losses and move on?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[8]" />
                    <label for="city1"
                        >I am aware of the risks associated with trading financial issues and prefer to take a cautious approach to minimize the potential losses. However, I recognize that losses are inevitable in the financial market and I am
                        willing to work on my ability to deal objectively with these situations.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[8]" />
                    <label for="city2"
                        >I am aware of the challenges and uncertainties that accompany any investment. For this reason, I maintain an approach careful and well-planned risk management. although i am prepared to face losses as part of the journey, I
                        seek always reduce them to a minimum within the limits of my plan of risk management</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city4" name="city" value="3" v-model="dataQuestion[8]" />
                    <label for="city4"
                        >I have a positive outlook on the possibilities of growth of my investments and I'm not afraid to run considerable risks. I am willing to accept possible losses as part of the process, as I am confident in my ability to
                        identify profitable opportunities and my long-term strategy. I believe that by taking adequate risks, I can earn returns significant in the future</label
                    >
                </div>
            </div>
            <h5>Are you willing to make quick decisions and act swiftly during moments of market volatility?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[9]" />
                    <label for="city1"
                        >I am cautious about risks and try to keep a conservative approach in my investment decisions. No I am prone to making hasty decisions in times of crisis. volatility in the market and prefer to maintain a stable
                        posture.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[9]" />
                    <label for="city2">I am willing to carefully evaluate the options for investment before making informed decisions, but also I recognize that market volatility may affect my choices in times of uncertainty.</label>
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[9]" />
                    <label for="city3">I am proactive about risk and willing to take agile decisions during moments of volatility in the market to take advantage of high profit opportunities</label>
                </div>
            </div>
            <h5>What is your financial availability to invest?</h5>
            <div class="card" style="justify-content: space-between">
                <div class="field-radiobutton">
                    <RadioButton inputId="city1" name="city" value="1" v-model="dataQuestion[10]" />
                    <label for="city1"
                        >I am aware that it is important to keep a reserve solid financial position, and for that reason I decided to allocate a considerable part of the my resources for that purpose. In addition, I chose to invest 8 a portion of my
                        resources in a moderate and safe way, seeking to balance the potential return with the level of risk acceptable.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city2" name="city" value="2" v-model="dataQuestion[10]" />
                    <label for="city2"
                        >I have financial resources that are available to be invested and I am willing to consider investment options. investments that have a high degree of risk, with the aim of to achieve more significant profitability. However, I
                        I will always keep a careful strategy and evaluate Carefully consider all options before making a decision.</label
                    >
                </div>
                <div class="field-radiobutton">
                    <RadioButton inputId="city3" name="city" value="3" v-model="dataQuestion[10]" />
                    <label for="city3"
                        >I have a considerable financial reserve and I am willing to invest in opportunities that present risks high, with the expectation of obtaining a profitability superior to long term. I understand that this approach may involve
                        losses in the short term, but I believe that the profit potential is more relevant to long term</label
                    >
                </div>
            </div>
        </div>
        <Button :disabled="validFields" @click="handleSubmit" label="Submit" />
    </div>
    <div v-else class="grid p-fluid">
        <div class="col-12 md:col-12">
            <h2>Risk Profile</h2>
            <div class="card grid" style="justify-content: space-between">
                <div class="card col-12 md:col-4" style="border-radius: 0px">
                    <div style="justify-content: space-between">
                        <div
                            style="
                                text-align-last: center;
                                margin-left: 20px;
                                margin-bottom: 11px;
                                margin-right: 12px;
                                background-color: rgb(11, 209, 138);
                                box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
                                border-radius: 8px;
                                padding: 11px;
                                align-self: center;
                            "
                        >
                            <h3 style="text-align-last: center">{{ profile[0].name }}</h3>
                            <i class="pi pi-moon" style="font-size: 20px"></i>
                        </div>
                        <h2 style="color: #cbcbcb; text-align: center; font-size: 20px">{{ profile[0].info }}</h2>
                    </div>
                </div>
                <div class="card col-12 md:col-4" style="border-radius: 0px">
                    <div style="justify-content: space-between">
                        <div style="justify-content: space-between">
                            <div
                                style="
                                    text-align-last: center;
                                    margin-left: 20px;
                                    margin-bottom: 11px;
                                    margin-right: 12px;
                                    background-color: #00d0de;
                                    box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
                                    border-radius: 8px;
                                    padding: 11px;
                                    align-self: center;
                                "
                            >
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
                            <div
                                style="
                                    text-align-last: center;
                                    margin-left: 20px;
                                    margin-bottom: 11px;
                                    margin-right: 12px;
                                    background-color: #ff8700;
                                    box-shadow: rgb(11 209 138 / 30%) 0px 6px 20px;
                                    border-radius: 8px;
                                    padding: 11px;
                                    align-self: center;
                                "
                            >
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
    <div style="text-align-last: end">
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <ConfirmDialog group="templating">
            <template #message="slotProps">
                <div class="flex p-4">
                    <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                    <p class="pl-2">{{ slotProps.message.message }}</p>
                </div>
            </template>
        </ConfirmDialog>
        <ConfirmDialog group="positionDialog"></ConfirmDialog>
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm" style="padding: 10px; padding-right: 40px; padding-left: 40px" class="mr-2"></Button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            dataQuestion: [],
            riskprofile: false,
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

        handleSubmit() {
            console.log(this.dataQuestion);
            (this.riskprofile = true),
                axios
                    .post('/api/submit', this.dataQuestion)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        },
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                },
            });
        },
    },
    computed: {
        validFields() {
            return this.dataQuestion.length <= 10;
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
