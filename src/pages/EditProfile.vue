<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card p-fluid">
                <div class="flex" style="justify-content: space-between">
                    <h5>User Edit</h5>
                    <Button @click="toggleDisabled()" style="width: 5%" label="Edit"></Button>
                </div>
                <div class="field">
                    <label for="name1">Name</label>
                    <InputText v-model="userEdit.name" :placeholder="user.name" :disabled="disabled" id="name1" type="text" />
                </div>
                <div class="field">
                    <label for="email1">Email</label>
                    <InputText v-model="userEdit.email" :placeholder="user.email" :disabled="disabled" id="email1" type="text" />
                </div>
                <div class="field">
                    <label for="phone1">Phone</label>
                    <InputText v-model="userEdit.phone" :placeholder="user.phone" :disabled="disabled" id="phone1" type="text" />
                </div>
                <div class="field">
                    <label for="age1">Password</label>
                    <InputText v-model="userEdit.password" :placeholder="user.password" :disabled="disabled" id="age1" type="password" />
                </div>
                <div class="field">
                    <label for="age1">Confirm Password</label>
                    <InputText v-model="userEdit.password" :placeholder="user.name" :disabled="disabled" id="age1" type="password" />
                </div>
                <div style="text-align: center">
                    <Button @click="toggleDisabled(), handleChange()" :disabled="disabled" style="width: 25%" label="Submit"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            disabled: true,
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
};
</script>
