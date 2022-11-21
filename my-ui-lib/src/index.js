import Input from './packages/Input.vue';

export const InputPlugin = {
    install(app) {
        app.component('my-ui-input', Input);
    },
};

export {
    Input,
};

export default Input;