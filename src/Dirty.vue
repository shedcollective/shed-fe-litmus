<!-- eslint-disable -->
<template>
    <!-- Error 1: Single line for >1 attribute https://eslint.vuejs.org/rules/max-attributes-per-line.html-->
    <!-- Error 2: Using short vue directive syntax https://eslint.vuejs.org/rules/v-bind-style.html -->
    <!-- Error 3: Vue directive order https://eslint.vuejs.org/rules/attributes-order.html -->
    <div
        ref="foo"
        class="foo" :foo="`bar`" @click="foo = 'bar'">
        Foo
    </div>
</template>

<!-- eslint-disable -->
<script>

export default {
    name: 'Dirty',

    data() {
        return {
            foo: 'buzz'
        };
    },

    props: {
        fooProp: {
            type: String // Error 4: Props missing required attribute
        },
        barProp: {
            type: String,
            required: false // Error 5: Non-required props require a default return
        }
    },

    beforeDestroy() {
        console.log('bai');
    },

    mounted() {
        console.log('hai');
    },

    watch: {
        foo: function(newVal) {
            console.log(`WAT: ${newVal}`);
        }
    }

    // Error 6: Ordering of Vue component methods

};
</script>
